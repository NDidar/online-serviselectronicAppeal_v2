import React from 'react';
import {observer} from "mobx-react-lite";
import {Container, Tab, Tabs} from "react-bootstrap";

const EmployeePage = observer(() => {
    return (
        <Container>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Home">

                </Tab>
                <Tab eventKey="profile" title="Profile">

                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>

                </Tab>
            </Tabs>
        </Container>
    );
});

export default EmployeePage;