import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Col, Container, Row} from "react-bootstrap";
import EmployeeList from "../../components/CRUD/employeeCRUD/EmployeeList";
import {fetchEmployees} from "../../http/UserApi";
import {Context} from "../../index";

const CrudEmployee = observer(() => {
    const {user} = useContext(Context)
    const [employee, setEmployee] = useState([])

    useEffect(() => {
        fetchEmployees().then(data => setEmployee(data))
        console.log(employee)
    }, [])

    return (
        <Container>
            <Row className='mt-2'>
                <Col md={9}>
                    <Row className='d-flex'>
                        {employee.map(emp =>
                            <EmployeeList key={emp.id} emp={emp}/>
                        )}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
});

export default CrudEmployee;