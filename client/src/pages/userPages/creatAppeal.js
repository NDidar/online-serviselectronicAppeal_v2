// import React from 'react';
// import {AppBar, Box, Tab, Tabs, Typography, useTheme} from "@mui/material";
// import PropTypes from 'prop-types';
// import SwipeableViews from "react-swipeable-views";
// import {Container, Form, Row} from "react-bootstrap";
// import individualAppeal from "./individualAppeal";
// import legalEntityAppeal from "./legalEntityAppeal";
// import {observer} from "mobx-react-lite";
// import DropdownMenu from "../../components/DropdownMenu";
// import TabLegalEntityAppeal from "../../components/TabLegalEntityAppeal";
// import TabNaturalAppeal from "../../components/TabNaturalAppeal";
// function TabPanel(props) {
//     const { children, value, index, ...other } = props;
//
//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`full-width-tabpanel-${index}`}
//             aria-labelledby={`full-width-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ p: 2 }}>
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
//         id: `full-width-tab-${index}`,
//         'aria-controls': `full-width-tabpanel-${index}`,
//     };
// }
//
// const CreatAppeal = observer(() => {
//
//     const theme = useTheme();
//     const [value, setValue] = React.useState(0);
//
//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };
//
//     const handleChangeIndex = (index) => {
//         setValue(index);
//     };
//
//     return (
//        <Container className='d-flex justify-content-between'>
//            <Box  sx={{ bgcolor: 'background.dark', width: 1810 }}>
//                <AppBar position="static">
//                    <Tabs
//                        value={value}
//                        onChange={handleChange}
//                        indicatorColor="secondary"
//                        textColor="inherit"
//                        variant="fullWidth"
//                        aria-label="full width tabs example"
//                    >
//                        <Tab label="Электронные обращения для граждан, в том числе индивидуальных предпринимателей" {...a11yProps(0)} />
//                        <Tab label="Электронные обращения для юридических лиц" {...a11yProps(1)} />
//
//                    </Tabs>
//                </AppBar>
//                <SwipeableViews
//                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//                    index={value}
//                    onChangeIndex={handleChangeIndex}
//                >
//                    <TabPanel value={value} index={0} dir={theme.direction}>
//                        <Container>
//                            <DropdownMenu />
//                             <TabNaturalAppeal />
//                        </Container>
//                    </TabPanel>
//                    <TabPanel value={value} index={1} dir={theme.direction}>
//                        <Container>
//                            <DropdownMenu />
//                            <TabLegalEntityAppeal />
//                        </Container>
//                    </TabPanel>
//
//                </SwipeableViews>
//            </Box>
//        </Container>
//     );
// });
//
//
// export default CreatAppeal;

import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Container, Tab, Tabs} from "react-bootstrap";
import DropdownMenu from "../../components/DropdownMenu";
import TabNaturalAppeal from "../../components/TabNaturalAppeal";
import TabLegalEntityAppeal from "../../components/TabLegalEntityAppeal";
import {Context} from "../../index";
import {fetchDepartments, fetchOrganizations} from "../../http/AppealApi";

const CreatAppeal = observer(() => {
    const {appeal} = useContext(Context)

    useEffect(() => {
        fetchOrganizations().then(data => appeal.setOrganizations(data))
        fetchDepartments().then(data => appeal.setDepartment(data))
    },[])

    return (
        <Container>
            <Tabs className='mt-2' variant={'pills'} defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Электронные обращения для граждан, в том числе индивидуальных предпринимателей">
                    <DropdownMenu />
                    <TabNaturalAppeal />
                </Tab>
                <Tab eventKey="profile" title="Электронные обращения для юридических лиц">
                    <DropdownMenu />
                    <TabLegalEntityAppeal />
                </Tab>
            </Tabs>
        </Container>
    );
});

export default CreatAppeal;