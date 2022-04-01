import React from 'react';
import {AppBar, Box, Tab, Tabs, Typography, useTheme} from "@mui/material";
import PropTypes from 'prop-types';
import SwipeableViews from "react-swipeable-views";
import {Container, Form, Row} from "react-bootstrap";
import individualAppeal from "./individualAppeal";
import legalEntityAppeal from "./legalEntityAppeal";
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 2 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const CreatAppeal = () => {

    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
       <Container className='d-flex justify-content-between'>
           <Box  sx={{ bgcolor: 'background.dark', width: 1810 }}>
               <AppBar position="static">
                   <Tabs
                       value={value}
                       onChange={handleChange}
                       indicatorColor="secondary"
                       textColor="inherit"
                       variant="fullWidth"
                       aria-label="full width tabs example"
                   >
                       <Tab label="Электронные обращения для граждан, в том числе индивидуальных предпринимателей" {...a11yProps(0)} />
                       <Tab label="Электронные обращения для юридических лиц" {...a11yProps(1)} />

                   </Tabs>
               </AppBar>
               <SwipeableViews
                   axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                   index={value}
                   onChangeIndex={handleChangeIndex}
               >
                   <TabPanel value={value} index={0} dir={theme.direction}>
                       <Container>
                           <Form className='d-flex flex-column'>
                               <Row className='d-flex mt-3 pl-3 pr-3'>
                                   <Form.Control
                                       placeholder='Введите ваше имя'
                                       className='mt-3'
                                       style={{width: 300}}
                                   />
                                   <Form.Control
                                       placeholder='Введите вашу фамилию'
                                       className='mt-3 ml-2'
                                       style={{width: 300}}
                                   />
                               </Row>
                               <Form.Control
                                   placeholder='Адрес (адрес места жительства (места пребывания))'
                                   className='mt-3'
                               />
                               <Form.Control
                                   placeholder='E-mail (адрес электронной почты заявителя)'
                                   className='mt-3'
                               />
                               <Form.Control
                                   placeholder='Суть обращения'
                                   className='mt-3'
                                   as="textarea"
                                   rows={3}
                               />
                               <br/>
                               <h4>Прикрепите фото</h4>
                               <Form.Control
                                   placeholder=''
                                   className='mt-3'
                                   type = 'file'
                               />
                               <br/>
                               <h4>Прикрепите файл</h4>
                               <Form.Control
                                   placeholder='Прикрепите файл'
                                   className='mt-3'
                                   type = 'file'
                               />

                           </Form>
                       </Container>
                   </TabPanel>
                   <TabPanel value={value} index={1} dir={theme.direction}>
                       <legalEntityAppeal />
                   </TabPanel>

               </SwipeableViews>
           </Box>
       </Container>
    );
};

export default CreatAppeal;