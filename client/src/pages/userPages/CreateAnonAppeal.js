import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Container} from "react-bootstrap";
import DropdownMenus from "../../components/DropdownMenus";
import {Context} from "../../index";
import {fetchDepartments, fetchOrganizations} from "../../http/AppealApi";
import AnonAppeal from "../../components/AnonAppeal";

const CreateAnonAppeal = observer(() => {
    const {appeal} = useContext(Context)

    useEffect(() => {
        fetchOrganizations().then(data => appeal.setOrganizations(data))
        fetchDepartments().then(data => appeal.setDepartment(data))
    },[])


    return (
        <Container>
            <DropdownMenus />
            <AnonAppeal />
        </Container>
    );
});

export default CreateAnonAppeal;