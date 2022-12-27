import React, { FunctionComponent, useEffect, useState } from 'react';
import timelineData from '../timeline/assets/data';
import './timeline.css';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CogWheelsIcon from '../timeline/assets/cogWheels';
import IconButton from '@mui/material/IconButton';
import { Button, Checkbox, FormControlLabel, Menu, MenuItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { min, max, NumberValue} from "d3";
import Box from '@mui/material/Box';
import { DateTime } from "luxon";
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import * as d3 from 'd3';

interface VerticalNavProps {
    /**
     * Values.
     */
    data?: any;
}
  

export const Timeline: FunctionComponent<VerticalNavProps>= ({
    data = timelineData,
  }) => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const MenuItemTimeline = styled(MenuItem)(({ theme }) => ({
        '&.MuiButtonBase-root.MuiMenuItem-root': {
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 10,
            paddingRight: 4,
            '& .MuiTouchRipple-root':{
                background: 'transparent',
                visibility: 'hidden',
                '&:hover, &:focus':{
                    background: 'transparent',
                },
            },
            '&:hover, &:focus':{
                background: 'transparent'
            },
            '& .MuiTypography-root':{
                fontSize: 14,
                color: '#444444',
            },
            '& +.MuiDivider-root' :{
                marginTop: 6,
                marginBottom: 6
            },
            '& .MuiCheckbox-root' :{
                padding: 4,
                '& .MuiTouchRipple-root':{
                    visibility: 'visible',
                },
            },
            '& .MuiRadio-root':{
                marginLeft: 25,
                padding: 4,
                '& .MuiTouchRipple-root':{
                    visibility: 'visible',
                },
            },
        },
    }));

    const MenuItemTypeCircle = styled(Box)(() => ({
        width: 10,
        height: 10,
        borderRadius: '50%',
        marginLeft: 'auto',
        marginRight: 5
    }));

    const ButtonApply = styled(Button)(() => ({
        width: 130,
        height: 31,
        borderRadius: 4,
        fontSize: 13,
        color: '#04a0aa',
        textTransform: 'uppercase'
    }));

    const getDate = (dateString : string ) => {
        const date = dateString.split("-");
        return new Date(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2]));
    }
    
    const [minDate, setMinDate] = useState(min(data, (registo : any) => getDate(registo.date)));
    const [maxDate, setMaxDate] = useState(() => {
        const date = min(data, (registo : any) => getDate(registo.date))
        return DateTime.fromJSDate(date!).plus({weeks: 2}).toJSDate()
    });

    const allPanLeft = () => {
        setMinDate(min(data, (registo : any) => getDate(registo.date)));
        setMaxDate(() => {
            const date = min(data, (registo : any) => getDate(registo.date))
            return DateTime.fromJSDate(date!).plus({weeks: 2}).toJSDate()
        });
    }

    const allPanRight = () => {
        setMaxDate(max(data, (registo : any) => getDate(registo.date!)) as Date);
        setMinDate(() => {
            const date = max(data, (registo : any) => getDate(registo.date))
            return DateTime.fromJSDate(date!).minus({weeks: 2}).toJSDate()
        });
    }

    const panLeft = () => {
        setMinDate(DateTime.fromJSDate(minDate!).minus({weeks: 2}).toJSDate());
        setMaxDate(DateTime.fromJSDate(maxDate!).minus({weeks: 2}).toJSDate());
    }

    const panRight = () => {
        setMinDate(DateTime.fromJSDate(minDate!).plus({weeks: 2}).toJSDate());
        setMaxDate(DateTime.fromJSDate(maxDate!).plus({weeks: 2}).toJSDate());
    }
    
    useEffect(() => {
        let xScale = d3.scaleTime().domain([minDate, maxDate] as Iterable<Date | NumberValue>).range([0, 1200])

        // Generate the x and y Axis based on these scales
        let xAxis = d3.axisBottom(xScale).tickSize(0)

        d3 
            .select('#Timeline')
            .attr('height', '50')
            .append("g")
            .attr("class", "xAxisElement")
            .call(xAxis)
            .select(".domain")
            .attr('stroke', '#999999')

        const tooltip = d3.select("body")
            .data(data)
            .append("div")
            .style("background", "#474747")
            .style("visibility", "hidden")

        d3
            .select('#Timeline')
            .selectAll(".episode")
            .data(data)
            .raise()
            .join("circle")
            .style('stroke', '#ffffff')
            .style('stroke-width', '2px')
            .style('fill', (d : any) => { return d.category.color })
            .attr('cx', (registo : any) => xScale(getDate(registo.date)))
            .attr('cy', 0)
            .attr('r', 5)
            .attr("class", "episode")
            .on('mouseover', (event, datum : any) => {
                for(var index = 0; index < datum.info.length; index++) {
                    tooltip
                        .style("position", "absolute")
                        .style("z-index", "10")
                        .style('visibility', 'visible')
                        .attr('width', '1250px')
                        .style("color", "#ffffff")
                        .style("text-transform", "uppercase")
                        .style("font-weight", "bold")
                        .style("padding", "0")
                        .style("font-size", "10px")
                        .text((d : any) => {return datum.info[index].tag})
                        .append("span")
                        .style("font-weight", "regular")
                        .style("color", "#ffffff")
                        .style("font-size", "10px")
                        .text((d : any) => {return datum.info[index].date})
                        .append("div")
                        .style("font-weight", "regular")
                        .style("color", "#ffffff")
                        .style("font-size", "10px")
                        .text((d : any) => { return datum.info[index].healthProf}
                    );
                }
                    
                })
                .on("mousemove", function(event){
                    return tooltip.style("top", (d3.pointer(event)[1] + 30) + "px").style("left", (d3.pointer(event)[0] + 100) +"px");
                })
                .on("mouseout", function(){
                    return tooltip.style("visibility", "hidden");
                }
            );
       
        d3
            .selectAll(".tick")
            .select("text")
            .style('color', '#000000')
            .style('margin-top', '5px')
            .attr('opacity', '1');

        d3
            .select('#Timeline')
            .selectAll("g")
            .attr("opacity", "1");
            
           return function cleanup() {
                d3.select('.xAxisElement').remove();
            }

    }, [minDate, maxDate])

    return(
        <>
            {timelineData.length > 0 && (
                <>
                    <div style={{display: 'flex', width: '100%'}}>
                        <IconButton 
                            color="primary"
                            aria-label="Filters"
                            id="demo-positioned-button"
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            >
                            <CogWheelsIcon sx={{ color: '#04a0aa'}}></CogWheelsIcon>
                        </IconButton>

                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            sx={{top: 0, left: -5}}>
                            <Stack direction="row" sx={{paddingLeft: 1, paddingRight: 1}}>
                                <div>
                                    <Typography sx={{padding: 1, fontWeight: 'bold', fontSize: 14, fontFamily: 'Open Sans'}}>Registos:</Typography>
                                    <MenuItemTimeline onClick={handleClose}>
                                        <FormControlLabel
                                            value="Prescrição"
                                            control={<Checkbox size="small"/>}
                                            label="Prescrição"
                                            labelPlacement="end"
                                        />
                                        <MenuItemTypeCircle sx={{backgroundColor: '#4199e0'}}></MenuItemTypeCircle>
                                    </MenuItemTimeline>
                                    <MenuItemTimeline onClick={handleClose}>
                                        <FormControlLabel
                                            value="Avaliações"
                                            control={<Checkbox size="small"/>}
                                            label="Avaliações"
                                            labelPlacement="end"
                                        />
                                        <MenuItemTypeCircle sx={{backgroundColor: '#ffd500'}}></MenuItemTypeCircle>
                                    </MenuItemTimeline>
                                    <MenuItemTimeline onClick={handleClose}>
                                        <FormControlLabel
                                            value="Diagnósticos"
                                            control={<Checkbox size="small"/>}
                                            label="Diagnósticos"
                                            labelPlacement="end"
                                        />
                                        <MenuItemTypeCircle sx={{backgroundColor: '#4caf50'}}></MenuItemTypeCircle>
                                    </MenuItemTimeline>
                                    <MenuItemTimeline onClick={handleClose}>
                                        <FormControlLabel
                                            value="Diários"
                                            control={<Checkbox size="small"/>}
                                            label="Diários"
                                            labelPlacement="end"
                                        />
                                        <MenuItemTypeCircle sx={{backgroundColor: '#f15a29'}}></MenuItemTypeCircle>
                                    </MenuItemTimeline>
                                    <MenuItemTimeline onClick={handleClose}>
                                        <FormControlLabel
                                            value="Vários"
                                            control={<Checkbox size="small" sx={{visibility: 'hidden'}}/>}
                                            label="Vários"
                                            labelPlacement="end"
                                        />
                                        <MenuItemTypeCircle sx={{backgroundColor: '#999999'}}></MenuItemTypeCircle>
                                    </MenuItemTimeline>
                                </div>
                                
                                <div>
                                    <Typography sx={{padding: 1, fontWeight: 'bold', fontSize: 14, paddingLeft:3.5, fontFamily: 'open sans'}}>Tempo:</Typography>
                                    <MenuItemTimeline >
                                        <FormControlLabel
                                            value="OneWeek"
                                            control={<Radio sx={{marginRight:1}} onClick={handleClose} size="small"/>}
                                            label="1 Semana"
                                            labelPlacement="end"
                                        />
                                    </MenuItemTimeline>
                                    <MenuItemTimeline onClick={handleClose}>
                                        <FormControlLabel
                                            value="TwoWeeks"
                                            control={<Radio sx={{marginRight:1}} size="small"/>}
                                            label="2 Semanas"
                                            labelPlacement="end"
                                        />
                                    </MenuItemTimeline>
                                    <MenuItemTimeline onClick={handleClose}>
                                        <FormControlLabel
                                            value="OneMonth"
                                            control={<Radio sx={{marginRight:1}} size="small"/>}
                                            label="1 Mes"
                                            labelPlacement="end"
                                        />
                                    </MenuItemTimeline>
                                    <MenuItemTimeline onClick={handleClose}>
                                        <FormControlLabel
                                            value="OneYear"
                                            control={<Radio sx={{marginRight:1}} size="small"/>}
                                            label="1 Ano"
                                            labelPlacement="end"
                                        />
                                    </MenuItemTimeline>
                                </div>
                            </Stack>
                            <Stack 
                                direction="row"
                                justifyContent="center"
                                sx={{marginTop: 1 }}
                                alignItems="center">
                                    <ButtonApply aria-label="Apply filter">Aplicar</ButtonApply>
                            </Stack>
                        </Menu>
                            <IconButton 
                                color="primary"
                                onClick={allPanLeft}
                                aria-label="Drag to the beginning"
                                >
                                <FirstPageIcon sx={{ color: '#04a0aa'}}></FirstPageIcon>
                            </IconButton>
                            <IconButton 
                                color="primary"
                                onClick={panLeft}
                                aria-label="Drag to the previous date"
                                >
                                <ChevronLeftIcon sx={{ color: '#04a0aa'}}></ChevronLeftIcon>
                            </IconButton>
                            <div id="Container" className="svg-container"> 
                                <svg className="svg-content-responsive" preserveAspectRatio="xMinYMin meet" id="Timeline"  viewBox="0 0 1200 45"></svg>
                            </div>
                            <IconButton 
                                color="primary"
                                onClick={panRight}
                                aria-label="Drag to the next date"
                            >
                                <ChevronRightIcon sx={{ color: '#04a0aa'}}></ChevronRightIcon>
                            </IconButton>
                            <IconButton 
                                color="primary"
                                onClick={allPanRight}
                                aria-label="Drag to the end"
                            >
                                <LastPageIcon sx={{ color: '#04a0aa'}}></LastPageIcon>
                            </IconButton>
                    </div> 
                </>
            )}
        </>
    )
}

export default Timeline;