import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import { FunctionComponent, useState } from "react";
import { createStyles } from '@mui/styles';

import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

//ICONS
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "@fontsource/open-sans";
import "@fontsource/roboto";

interface StickyTopBarProps {
  /**
    * CSS position of the bar.
    */
  barPosition?: 'absolute' | 'sticky';
  /**
    * Classes of the header container.
    */
  headerContainerClasses?: string;
  /**
    * Insert elements in the Summary.
    */
  summaryContent?: React.ReactNode;
  /**
    * Insert the elements of the Healthi Patient's Summary. (isHealthiPatientSummaryActive value has to be "false").
    */
  isHealthiPatientSummaryActive?: boolean;
  /**
    * Insert badge in the PatientPhoto (isHealthiPatientSummaryActive value has to be "true").
    */
  healthiBadgePatientPhoto?: React.ReactNode;
  /**
    * Insert patient photo (isHealthiPatientSummaryActive value has to be "true").
    */
  healthiPatientPhoto?: string;
  /**
    * Handle error of the patient photo (isHealthiPatientSummaryActive value has to be "true").
    */
  healthiHandleErrorImg?: () => void;
  /**
    * Insert patient name (isHealthiPatientSummaryActive value has to be "true").
    */
  healthiPatientName?: string;
  /**
    * Insert patient age (isHealthiPatientSummaryActive value has to be "true").
    */
  healthiPatientAge?: string;
  /**
    * Insert patient SNS (isHealthiPatientSummaryActive value has to be "true").
    */
  healthiPatientSNS?: string;
  /**
    * Insert patient entity (isHealthiPatientSummaryActive value has to be "true").
    */
  healthiPatientEntity?: string;
  /**
    * Insert report icon (isHealthiPatientSummaryActive value has to be "true").
    */
  healthiReportIcon?: React.ReactNode;
  /**
    * Insert badges of the problems that patient's have.
    */
  patientBadges?: React.ReactNode;
  /**
    * Insert elements in the first section of details.
    */
  detailsContentOne?: React.ReactNode;
  /**
    * Insert elements in the second section of details.
    */
  detailsContentSecond?: React.ReactNode;
  /**
    * Insert elements in the third section of details.
    */
  detailsContentThird?: React.ReactNode;
  /**
    * Insert dashed board between first and second detail section.
    */
  isDashedBoardSecondContentInserted?: boolean;
  /**
    * Insert dashed board between second and third detail section.
    */
  isDashedBoardThirdContentInserted?: boolean;
  /**
    * Insert patient name (isHealthiPatientSummaryActive value has to be "true").
    */
   healthiPatientNickname?: string;
}
  
const episodes = [
  {
    value: '30/01/2021 (Internamento)',
  },
  {
    value: '21/04/2021 (Internamento)',
  }
];


const F3MTopBar: FunctionComponent<StickyTopBarProps>  = ({
    barPosition = 'absolute',
    headerContainerClasses = "w-100",
    isHealthiPatientSummaryActive = false,
    healthiBadgePatientPhoto = <span className={`badge rounded-pill bg-danger`} 
    style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', zIndex: 1, 
    bottom: -2, fontSize: '7px', textTransform: 'capitalize', width: '42px', maxHeight: '13px'}}>
        Inativo
    </span>,
    healthiPatientPhoto = 'https://www.looper.com/img/gallery/why-did-the-old-man-play-in-squid-game/l-intro-1633465995.jpg',
    healthiHandleErrorImg,
    healthiPatientNickname = 'Zé Andrade',
    healthiPatientName = 'José Pereira Andrade',
    healthiPatientAge= '92 anos',
    healthiPatientSNS = '001',
    healthiPatientEntity = ' Por definir',
    healthiReportIcon = <ReportProblemIcon
    id={'popoverbutton'}
    aria-owns={'mouse-over-popover'}
    aria-haspopup="true"
    className={`ms-4`}
    style={{color: "#FF9800"}}></ReportProblemIcon>,
    patientBadges = <>
      <Box component="div" className="text-center" sx={{  width: 20, height: 20, marginRight: '5px', borderRadius: '50%', background: '#FF8882', color: '#fff', fontFamily: 'Open Sans', fontWeight: 600, fontSize: 8, lineHeight: 2.4 }}>1</Box>
      <Box component="div" className="text-center" sx={{  width: 20, height: 20, marginRight: '5px', borderRadius: '50%', background: '#04A0AA', color: '#fff', fontFamily: 'Open Sans', fontWeight: 600, fontSize: 8, lineHeight: 2.4 }}>2</Box>
      <Box component="div" className="text-center" sx={{  width: 20, height: 20, marginRight: '5px', borderRadius: '50%', background: '#FF8882', color: '#fff', fontFamily: 'Open Sans', fontWeight: 600, fontSize: 8, lineHeight: 2.4 }}>3</Box>
      <Box component="div" className="text-center" sx={{  width: 20, height: 20, marginRight: '5px', borderRadius: '50%', background: '#04A0AA', color: '#fff', fontFamily: 'Open Sans', fontWeight: 600, fontSize: 8, lineHeight: 2.4 }}>4</Box>
      <Box component="div" className="text-center" sx={{  width: 20, height: 20, marginRight: '5px', borderRadius: '50%', background: '#04A0AA', color: '#fff', fontFamily: 'Open Sans', fontWeight: 600, fontSize: 8, lineHeight: 2.4 }}>5</Box>
    </>,
    detailsContentOne = <div style={{display: 'grid', color: '#444444', gridGap: 5, fontSize: 14, whiteSpace: 'nowrap', gridTemplateColumns: 'min-content auto min-content auto'}}>
    <div className={`fw-bold`}>Nacionalidade</div>
    <div className={`ps-2`}>Portuguesa</div>
    <div className={`fw-bold`}>Nº de Beneficiário</div>
    <div className={`ps-2`}>001 | 20/08/2025</div>
    <div className={`fw-bold`}>Contatos</div>
    <div className={`ps-2`}>918804958 | squidOldMan@nflx.pt</div>
    <div className={`fw-bold`}>CESD</div>
    <div className={`ps-2`}>00000000012345678914</div>
</div>,
detailsContentSecond = <>
    <Typography variant="h6" style={{fontSize: '1rem', color: '#444444'}} className={`fw-bold`}>
        Benefícios
    </Typography>
    <div className={`row`} style={{fontSize: 14, color: '#444444'}}>
        <div className={`col-6 d-flex`}>
        <Typography variant="h5" style={{color: '#444444'}} className={`fw-bold pe-4`}>R</Typography>
            <div className="d-flex flex-column" style={{color: '#444444'}}>
                <label className="pt-1">
                    Beneficiários do Complemento Solidário para Idosos (BAS)
                </label> 
            </div>
        </div>
        <div className={`col-6 d-flex`}>
            <Typography variant="h5" style={{color: '#444444'}} className={`fw-bold pe-4`}>O</Typography>
            <div style={{color: '#444444'}} className="d-flex flex-column">
                <label className="pt-1" >
                    Doentes crónicos com guia
                </label>
            </div>
        </div>
    </div>
    <Typography variant="h6"  style={{fontSize: '1rem', color: '#444444'}} className={`fw-bold mt-2`}>
        Regimes de Exceção
    </Typography>
    <div className={`pt-2`} style={{display: 'grid', gridGap: 5, color: '#444444', fontSize: 14, whiteSpace: 'nowrap', gridTemplateColumns: 'min-content auto'}}>
        <div className={`fw-bold`}>Vítimas de Incêndio</div>
        <div className={``}>|  <span className={`fst-italic`}>Início</span>: 01/12/2016</div>
    </div>
</>,
detailsContentThird = <>
    <Typography variant="h6" style={{fontSize: '1rem', color: '#444444'}} className={`fw-bold d-inline`}>
        Alergias
    </Typography>
    <IconButton size='small' disableFocusRipple disableRipple style={{right: 10, zIndex: 1, position: 'absolute', marginTop: -10}} color="primary" aria-label="save">
    <EditIcon />
    </IconButton>
    <div style={{fontSize: 14, color: '#444444'}}>
        <span style={{fontStyle: 'italic'}}>Sem alergias.</span>
    </div>
    </>,
    isDashedBoardSecondContentInserted = true,
    isDashedBoardThirdContentInserted = true,
    summaryContent = <>
      <div className="d-flex w-100">
        <div className='position-relative'>
        {healthiBadgePatientPhoto}
          <img
              className={`border rounded my-auto`}
              src={healthiPatientPhoto}
              onError={healthiHandleErrorImg}
              style={{width: 45, height: 45}}
          />
          </div>
          <div className="d-flex flex-column px-3 text-nowrap my-auto" style={{fontFamily: 'Roboto', fontSize: 13}}>
            <div className='d-block' style={{ fontSize: 15}}><b>{healthiPatientNickname}</b> ({healthiPatientAge})</div>
            <div className='d-block'>{healthiPatientName}</div>
          </div>
          <div className="d-flex flex-column w-100 my-auto mx-4  text-nowrap " style={{fontFamily: 'Roboto', fontSize: 13, overflow: 'hidden', textOverflow: 'ellipsis'}}>
            <div className="w-100 text-nowrap" style={{overflow: 'hidden', textOverflow: 'ellipsis'}}><b>SNS:</b> {healthiPatientSNS} {healthiPatientEntity}  |  <b><a>Diagnóstico Principal</a></b>: Ataque Isquêmico Transitó... </div>
            <div className="w-100 text-nowrap" style={{overflow: 'hidden', textOverflow: 'ellipsis'}}><b>Gestor de Caso</b>: Tânia Palma  |  <b>C. Emergência</b>: 933 333 333</div>
          </div>
        <div className=" my-auto">
          <TextField
              id="standard-select-currency"
              className="mx-5"
              select
              label="Episódio"
              value='30/01/2021 (Internamento)'
              /* value={episode}
              onChange={handleChange} */
              variant="standard"
              InputLabelProps={{
                  sx:{fontWeight: 'bold', color: '#444444'}
              }}
              >
              {episodes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                      {option.value}
                  </MenuItem>
              ))}
          </TextField>
        </div>
        <div className="d-flex ms-auto my-auto">
            {patientBadges}
        </div>
      </div>
    </>
}) => {

  //popover
  const [healthiPatientSummary] = useState(isHealthiPatientSummaryActive)
  const [isDashedBoardSecondContentActive] = useState(isDashedBoardSecondContentInserted)
  const [isDashedBoardThirdContentActive] = useState(isDashedBoardThirdContentInserted)
  const [openAccordion, setOpenAccordion] = useState(false)

  const useStyles = () =>
  createStyles({
    root:{
        '&.MuiAccordion-root':{
            backgroundColor: '#f8f8f8',
        },
        '&.MuiFormGroup-root':{
            maxHeight: 132,
            display: "grid",
            overflow: "auto"
        },
        '&.MuiTextField-root':{
            backgroundColor: "#ffffff",
            '& .MuiInputBase-input':{
            backgroundColor: "#ffffff",
            }
        },
        '& .MuiAccordionSummary-content':{
          width: '100%'
        },
       
        '&.MuiAccordionDetails-root':{
            display: 'block',
            '& .MuiFormControl-root':{
            '& .MuiFilledInput-root':{
                '& .MuiSelect-filled.MuiSelect-filled':{
                backgroundColor: "#ffffff",
                }
            }
            }
            
        },
        '&.MuiSelect-root':{
            backgroundColor: "#ffffff",
        }
    },
    large: {
      width: 40,
      height: 40,
      boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.2)',
      objectFit: 'cover'
    },

    rightZero:{
      position: 'absolute',
      right: 0,
    },
    marginIconBigHeaderDetails:{
      //marginLeft: 8,
      marginRight: 8,
    },
    paddingIconBigHeaderDetails:{
      padding: 8,
    },
    fontSize10:{
      fontSize: 11,
    },
    flex:{
      display: 'flex'
    },
    label:{
      marginBottom: 0,
      marginLeft: 0,
      maxHeight: '35px'
    },
    rootSelectForm:{
      "& .MuiFilledInput-inputMarginDense":{
        paddingBottom: 6.6
      },
      "& .MuiInputLabel-filled.MuiInputLabel-marginDense": {
        transform: "translate(12px, 18px) scale(1)"
      },
      "& .MuiInputLabel-filled.MuiInputLabel-shrink.MuiInputLabel-marginDense": {
        transform: "translate(12px, 8px) scale(0.75)"
      },
      "& .MuiSelect-root":{
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4
      }
    },
    rootTextField:{
      "& .MuiFilledInput-root":{
        height: 48
      }
    },
    rootDatePickerForm:{
      "& .MuiFilledInput-root":{
        height: 48
      } 
    },
    firstButton:{
      top: 70,
    },
    thirdButton:{
      top: 335,
    },
    dashedBorder:{
      borderTop: "dashed #999999 1px", 
      strokeWidth: 1
    },
    allergiesContainer:{
      display: 'grid',
      gridGap: 5,
      fontSize: 14,
      whiteSpace: 'nowrap',
      gridTemplateColumns: 'min-content min-content',
    },

    popover: {
      pointerEvents: 'none',
    },
    paper:{
      "&.MuiPopover-paper":{
        paddingTop: 8,
        fontSize: 12
      }
    },
    allergiesList:{
      fontSize: 12,
      paddingTop: 8,
      marginLeft: 10,
      paddingLeft: 10,
      marginRight: 10,
      paddingRight: 10,
    },
    allergiesTitle:{
      paddingLeft: 5,
      paddingTop: 15,
      marginTop: 15,
      marginLeft:5
    },
    sticky:{
      top: 0,
      zIndex: 2,
      position: barPosition,
    },
    bigHeader:{
        marginLeft: '0 !important',
        marginRight: '0 !important',
        alignItems: 'center',
        borderBottom: '1px dashed #d2d2d2'
    },
    photoNameGroup:{
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 15
    },
    photoGroup:{
        position: 'relative',
        marginRight: 12,
        filter: 'drop-shadow(0px 6px 8px rgba(0, 0, 0, 0.22))'
    }
});

  const classes = useStyles(); 

  const handleChangeAccordion = () => {
    if (openAccordion) {
      setOpenAccordion(false)
    } else {
      setOpenAccordion(true)
    }
  }
 
  return (
    <>   
        <div style={{width: 'fit-content !important'}} className={`row ${classes.bigHeader} ${classes.sticky} ${headerContainerClasses}`}>
            <Accordion className={`w-100 ${classes.root}`} expanded={openAccordion} onChange={handleChangeAccordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              className={`${classes.root}`}
              id="panel1a-header">
              {healthiPatientSummary ? 
                  <div className={`col-sm-12 col-md-12 col-lg-9 col-xl-9 ps-0 ${classes.photoNameGroup}`}>
                  <div className={`${classes.photoGroup}`}>
                    {healthiBadgePatientPhoto}
                    <img
                      className={`${classes.large} border rounded`}
                      src={healthiPatientPhoto}
                      onError={healthiHandleErrorImg}
                      alt="Patient photo"
                    />
                  </div>
                  <div className="w-100 d-flex">
                  <Box className="my-auto" fontSize={12}>{healthiPatientName} &nbsp; {healthiPatientAge} &nbsp;&nbsp;|&nbsp;&nbsp;<b> SNS:</b> {healthiPatientSNS} &nbsp;&nbsp;|&nbsp;&nbsp;<b>Entidade:</b>{healthiPatientEntity}</Box> 
                      {healthiReportIcon}
                  </div>
              </div>
                
             :
                summaryContent
            }
        </AccordionSummary>
        <AccordionDetails className={`${classes.root} pt-0`}>
            {detailsContentOne}
            
            {isDashedBoardSecondContentActive ? <hr className={`${classes.dashedBorder}`} /> : ""}
            {detailsContentSecond}
                
            {isDashedBoardThirdContentActive ? <hr className={`${classes.dashedBorder}`} /> : ""}
            {detailsContentThird}
        </AccordionDetails>
            </Accordion>
        </div>
    </> 
);};

export default F3MTopBar;