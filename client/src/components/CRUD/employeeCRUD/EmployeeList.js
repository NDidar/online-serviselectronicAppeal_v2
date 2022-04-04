import React from 'react';
import avatar from '../../../Assets/avatar.jpg'
import {Card, Col, Image, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import { EMPLOYEE_PROFILE_ROUTE} from "../../../utils/Consts";

const EmployeeList = ({emp}) => {
    const history = useHistory()
    console.log(emp)
    return (
        <Col md={3} className={"mt-3"} onClick={() => history.push(EMPLOYEE_PROFILE_ROUTE + '/' + emp.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={avatar}/>
                {emp.name || emp.surname ?
                    <Row className='mr-2'>
                        Оператор: {emp.name} {emp.surname}
                    </Row>
                    :
                    null

                }


            </Card>
        </Col>
    );
};

export default EmployeeList;