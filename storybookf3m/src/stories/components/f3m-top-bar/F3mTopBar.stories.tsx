import F3MTopBar  from './F3mTopBar';

import React from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

//ICONS
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import EditIcon from '@mui/icons-material/Edit';

export default {
    component: F3MTopBar,
    title: 'F3M Top Bar'
};

const Template = (args) => <F3MTopBar {...args} />;


export const Default = Template.bind({});
Default.args = {
    barPosition: 'absolute',
    headerContainerClasses: 'w-100',
    isHealthiPatientSummaryActive : false,
    healthiBadgePatientPhoto: (<span className={`badge rounded-pill bg-danger`} style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', zIndex: 1, bottom: -2, fontSize: '7px', textTransform: 'capitalize', width: '42px', maxHeight: '13px'}}>
        Inativo
    </span> ),
    healthiPatientPhoto: 'https://www.looper.com/img/gallery/why-did-the-old-man-play-in-squid-game/l-intro-1633465995.jpg',
    healthiHandleErrorImg: () => {},
    healthiPatientName: 'José Pereira Andrade',
    healthiPatientAge: '92 anos',
    healthiPatientSNS: '001',
    healthiPatientEntity : ' Por definir',
    healthiReportIcon: (<ReportProblemIcon
        id={'popoverbutton'}
        aria-owns={'mouse-over-popover'}
        aria-haspopup="true"
        className={`ms-4`}
        style={{color: "#FF9800"}}></ReportProblemIcon>),
    detailsContentOne: (<> 
    <div className="w-100" style={{display: 'grid', color: '#444444', gridGap: 5, fontSize: 14, whiteSpace: 'nowrap', gridTemplateColumns: 'min-content auto min-content auto'}}>
        <div className={`fw-bold`}>Nacionalidade</div>
        <div className={`ps-2`}>Portuguesa</div>
        <div className={`fw-bold`}>Nº de Beneficiário</div>
        <div className={`ps-2`}>001 | 20/08/2025</div>
        <div className={`fw-bold`}>Contatos</div>
        <div className={`ps-2`}>918804958 | squidOldMan@nflx.pt</div>
        <div className={`fw-bold`}>CESD</div>
        <div className={`ps-2`}>00000000012345678914</div>
    </div>
    </>),
    detailsContentSecond:(  <>
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
    </>),
    detailsContentThird: (<>
        <Typography variant="h6" style={{fontSize: '1rem', color: '#444444'}} className={`fw-bold d-inline`}>
            Alergias
        </Typography>
        <IconButton size='small' disableFocusRipple disableRipple style={{right: 25, zIndex: 1, position: 'absolute'}} color="primary" aria-label="save">
        <EditIcon />
        </IconButton>
        <div style={{fontSize: 14, color: '#444444'}}>
            <span style={{fontStyle: 'italic'}}>Sem alergias.</span>
        </div>
        </>),
    isDashedBoardSecondContentInserted: true,
    isDashedBoardThirdContentInserted: true
};