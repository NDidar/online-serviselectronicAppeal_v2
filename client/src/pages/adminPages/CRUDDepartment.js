import React from 'react';
import {observer} from "mobx-react-lite";
import {Container} from "react-bootstrap";
import CreatDepartment from "../../components/CRUD/departmentCRUD/CreatDepartment";
import DepartmentList from "../../components/CRUD/departmentCRUD/DepartmentList";

const CrudDepartment = observer(() => {
    return (
        <Container>
            <CreatDepartment />
            <DepartmentList />
        </Container>
    );
});

export default CrudDepartment;