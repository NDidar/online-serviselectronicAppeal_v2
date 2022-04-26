import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Container, Tab, Tabs} from "react-bootstrap";
import DropdownMenus from "../../components/DropdownMenus";
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
            <Tabs className='mt-2' defaultActiveKey='home' variant={'pills'} id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Электронные обращения для граждан, в том числе индивидуальных предпринимателей">
                    <DropdownMenus />
                    <TabNaturalAppeal />
                </Tab>
                <Tab eventKey="profile"  title="Электронные обращения для юридических лиц">
                    <DropdownMenus />
                    <TabLegalEntityAppeal />
                </Tab>
            </Tabs>
        </Container>
    );
});

export default CreatAppeal;