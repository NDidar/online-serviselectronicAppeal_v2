import React from 'react';
import {observer} from "mobx-react-lite";
import {Button, Container} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {ANON_TAB_ROUTE, LEGAL_TAB_ROUTE, NATURAL_TAB_ROUTE} from "../../utils/Consts";

const EmployeePage = observer(() => {
    const history = useHistory()

    return (
        <Container className='d-flex flex-column justify-content-around'>
            <Button variant={"outline-dark"} className='mt-3' onClick={() => history.push(NATURAL_TAB_ROUTE)}>Обращения физических лиц</Button>
            <Button variant={"outline-dark"} className='mt-3' onClick={() => history.push(LEGAL_TAB_ROUTE)}>Обращения юридических лиц</Button>
            <Button variant={"outline-dark"} className='mt-3' onClick={() => history.push(ANON_TAB_ROUTE)}>Анонимные обращении</Button>
        </Container>
    );
});

export default EmployeePage;