import React, {Fragment, useContext, useEffect, useState} from 'react';
import {Button, Col, Container, Form, FormControl, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {deleteUser, fetchUser, updateUser} from "../../../http/UserApi";
import {useHistory, useParams} from "react-router-dom";
import {deleteDepartment} from "../../../http/AppealApi";
import {CRUD_EMPLOYEE_ROUTE} from "../../../utils/Consts";


const EmployeeProfile = observer( () => {
    const [email, setEmail] = useState( '')
    const [name, setName] = useState( '')
    const [surname, setSurname] = useState('')
    const [home_address, setHome_address] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const {id} = useParams()
    const history= useHistory()

    useEffect(() => {
        fetchUser(id).then(data => {
            setEmail(data[0].email)
            setName(data[0].name)
            setSurname(data[0].surname)
            setHome_address(data[0].home_address)
            setPhone_number(data[0].phone_number)
        })
    }, [])



    const updName = async () => {
        const formData = new FormData()
        formData.append('id', id)
        formData.append('name', name)
        updateUser(formData).then()
        window.location.reload()
    }

    const updSurname = async () => {
        const formData = new FormData()
        formData.append('id', id)
        formData.append('surname', surname)
        updateUser(formData).then()
        window.location.reload()
    }

    const updPhone_number = async () => {
        const formData = new FormData()
        formData.append('id', id)
        formData.append('phone_number', phone_number)
        updateUser(formData).then()
        window.location.reload()
    }

    const updHome_address = async () => {
        const formData = new FormData()
        formData.append('id', id)
        formData.append('delivery_address', home_address)
        updateUser(formData).then()
        window.location.reload()
    }

    const delEmployee = async () => {
        try{
            deleteUser(id).then()
            history.push(CRUD_EMPLOYEE_ROUTE)
        }catch (e) {
            console.error(e.message)
        }
    }

    return (
        <Container className="rounded bg-white mt-5 mb-5">
            <Fragment>
                <Row>
                    <Col md={4} className="border-right">
                        <Col className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
                            <span className="font-weight-bold">{name? name : null}</span>
                            <span className="text-black-50"></span>{email}<span> </span>
                        </Col>
                    </Col>
                    <Col md={8} className="border-right">
                        <Col className="p-3 py-5">
                            <Col className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Настройка профиля оператора</h4>
                            </Col>
                            <Row className="mt-2">
                                <Col md={4}>
                                    <label className="labels">Имя</label>
                                    <Form>
                                        <FormControl
                                            type="text"
                                            value={name? name : ''}
                                            placeholder="Введите имя"
                                            onChange={e=> setName(e.target.value)}
                                        />
                                    </Form>
                                </Col>
                                <Col className='d-flex align-items-end '>
                                    <button onClick={updName}><i className="material-icons">edit</i></button>
                                </Col>
                                <Col md={4}><label className="labels">Фамилия</label>
                                    <FormControl
                                        type="text"
                                        value={surname? surname : ''}
                                        placeholder="Введите фамилию"
                                        onChange={e=> setSurname(e.target.value)}
                                    />
                                </Col>
                                <Col className='d-flex align-items-end '>
                                    <button onClick={updSurname}><i className="material-icons">edit</i></button>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col md={10}><label className="labels">Мобильный номер</label>
                                    <FormControl
                                        type="text"
                                        placeholder="Введите мобильный номер"
                                        value={phone_number? phone_number : ''}
                                        onChange={e=> setPhone_number(e.target.value)}
                                    />
                                </Col>
                                <Col className='d-flex align-items-end '>
                                    <button onClick={updPhone_number}><i className="material-icons">edit</i></button>
                                </Col>
                                <Col md={10}><label className="labels">Адрес проживание</label>
                                    <FormControl
                                        type="text"
                                        placeholder="Введите место проживание"
                                        value={home_address? home_address : ''}
                                        onChange={e=> setHome_address(e.target.value)}
                                    />
                                </Col>
                                <Col className='d-flex align-items-end '>
                                    <button onClick={updHome_address}><i className="material-icons">edit</i></button>
                                </Col>
                                <Col  className='d-flex align-items-end'>
                                    <Button className='d-flex mt-3' variant={"outline-danger"} onClick={delEmployee}>Удалить оператора из базы данных</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Col>
                </Row>
            </Fragment>
        </Container>
    );
});

export default EmployeeProfile;