import React from 'react';
import {observer} from "mobx-react-lite";
import {Button, Container} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {CRUD_DEPARTMENT_ROUTE, CRUD_ORGANIZATION_ROUTE} from "../utils/Consts";

const Admin = observer(() => {
    const history = useHistory()
    return (
        <Container className='d-flex flex-column'>
            <Button variant={"outline-dark"} className='mt-3 p-2' onClick={() => history.push(CRUD_ORGANIZATION_ROUTE)}>Добавить сотрудника</Button>
            <Button variant={"outline-dark"} className='mt-3 p-2' onClick={() => history.push(CRUD_ORGANIZATION_ROUTE)}>Работа с данными организации</Button>
            <Button variant={"outline-dark"} className='mt-3 p-2' onClick={() => history.push(CRUD_DEPARTMENT_ROUTE)}>Работа с данными деятельности</Button>
        </Container>
    );
});

export default Admin;