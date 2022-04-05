import React from 'react';
import {observer} from "mobx-react-lite";
import {Container, Tab, Tabs} from "react-bootstrap";
import NaturalEntityAppealTab from "../../components/tabs/NaturalEntityAppealTab";
import LegalEntityAppealTab from "../../components/tabs/LegalEntityAppealTab";
import AnonAppealTab from "../../components/tabs/AnonAppealTab";
import ArchiveAppealTab from "../../components/tabs/ArchiveAppealTab";

const EmployeePage = observer(() => {
    return (
        <Container>
            <Tabs className='mt-2' defaultActiveKey="natural" id="uncontrolled-tab-example">
                <Tab className='mt-2' eventKey="natural" title="Обращение физических лиц">
                    <NaturalEntityAppealTab />
                </Tab>
                <Tab className='mt-2' eventKey="legal" title="Обращение юридических лиц">
                    <LegalEntityAppealTab />
                </Tab>
                <Tab className='mt-2'  eventKey="anon" title="Анонимные обращение" >
                    <AnonAppealTab />
                </Tab>
                <Tab className='mt-2' eventKey="archive" title="Архив обращений" >
                    <ArchiveAppealTab />
                </Tab>
            </Tabs>
        </Container>
    );
});

export default EmployeePage;

// import React from 'react';
// import {observer} from "mobx-react-lite";
// import {Container} from "react-bootstrap";
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import NaturalEntityAppealTab from "../../components/tabs/NaturalEntityAppealTab";
//
// function TabPanel(props) {
//     const { children, value, index, ...other } = props;
//
//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ p: 3 }}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }
//
// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
// };
//
// function a11yProps(index) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`,
//     };
// }
//
//
// const EmployeePage = observer(() => {
//
//     const [value, setValue] = React.useState(0);
//
//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };
//
//     return (
//         <Container>
//             <Box sx={{ width: '100%' }}>
//                 <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: 2 }}>
//                     <Tabs sx={{marginTop: 2}} value={value} onChange={handleChange} aria-label="basic tabs example" centered>
//                         <Tab label="Обращение физических лиц"{...a11yProps(0)} />
//                         <Tab label="Обращение юридических лиц" {...a11yProps(1)} />
//                         <Tab label="Анонимные обращение" {...a11yProps(2)} />
//                         <Tab label="Архив обращений" {...a11yProps(3)} />
//                     </Tabs>
//                 </Box>
//                 <TabPanel value={value} index={0}>
//                     <NaturalEntityAppealTab />
//                 </TabPanel>
//                 <TabPanel value={value} index={1}>
//                     Item Two
//                 </TabPanel>
//                 <TabPanel value={value} index={2}>
//                     Item Three
//                 </TabPanel>
//                 <TabPanel value={value} index={3}>
//                     Item four
//                 </TabPanel>
//             </Box>
//         </Container>
//     );
// });
//
// export default EmployeePage;