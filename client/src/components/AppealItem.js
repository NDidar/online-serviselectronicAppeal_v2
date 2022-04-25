import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Card, Col, Container, Dropdown, Image, Row} from "react-bootstrap";
import {useHistory, useParams} from "react-router-dom";
import {fetchOneAppeal, updateStatus} from "../http/AppealApi";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import {Context} from "../index";
import {SEND_EMAIL_ROUTE} from "../utils/Consts";
import Mailer from "./Mailer";

const AppealItem = observer(() => {
    const {user} = useContext(Context)
    const {id} = useParams();
    const [oneAppeal, setOneAppeal] = useState({})
    const [chooseVisible, setChooseVisible] = useState(false)

    const history = useHistory()

    useEffect(()=> {
        fetchOneAppeal(id).then(data => {
            setOneAppeal(data)
            setOneAppeal(data)
        })
        },[])
    console.log(oneAppeal)

    const updStatus = async (status) => {
        try {
            console.log(status)
            updateStatus({status: status},id).then()
            window.location.reload()
        }catch (e) {
            console.error(e.message)
        }
    }


    return (
        <Container className='d-flex flex-column'>
            <Card
                style={{width: 1130, height: 350, border: '5px solid lightgray'}}
                className='mt-3 p-2'
            >
                <Row className='d-flex flex-row align-items-start justify-content-center mt-3'>
                    <Col md={4}>
                        <div style={{background:'lightgray'}} className='d-flex mt-3'> Статус обращения: {oneAppeal?.status == 'notreviewed'? "Не рассмотрено" : null}</div>
                        <div style={{background:'transparent'}} className='d-flex mt-3'> Фио: {oneAppeal?.name} {oneAppeal?.surname}</div>
                        <div style={{background:'lightgray'}} className='d-flex mt-3'> Адрес проживания: {oneAppeal?.home_address} </div>
                        <div style={{background:'transparent'}} className='d-flex mt-3'> Email почта: {oneAppeal?.user?.email}</div>
                        {oneAppeal?.nameLegal?
                            <div style={{background:'lightgray'}} className='d-flex mt-3'> Название Юридического лица: {oneAppeal?.nameLegal? oneAppeal?.nameLegal : null}</div>
                            :
                            null
                        }
                    </Col>
                    <Col md={4}>
                        <Image style={{width: 300, height: 300}} src={'http://localhost:5000/' + oneAppeal?.img}/>
                    </Col>
                    <Col md={4} >
                        <div className='d-flex flex-column justify-content-between mt-3 mb-3'>
                            <span >Ниже можно скачать прикрепленный файл</span>
                            <Button className='mt-5' variant={"outline-success"} href={'http://localhost:5000/' + oneAppeal?.file}>Скачать файл</Button>
                            {
                                user.role == 'EMPLOYEE'?
                                    <div>
                                        <Dropdown className='mt-3'>
                                            <DropdownToggle>{oneAppeal?.status == 'notreviewed'? 'Не рассмотрен' : oneAppeal?.status == 'viewed'? 'В процессе рассмотрений' : oneAppeal?.status == 'reviewed'? 'Рассмотрен' : 'Статус обращений'}</DropdownToggle>
                                            <DropdownMenu>
                                                <Dropdown.Item onClick={() => updStatus('notreviewed')} >Не рассмотрен</Dropdown.Item>
                                                <Dropdown.Item onClick={() => updStatus('viewed')}>В процессе рассмотрений</Dropdown.Item>
                                                <Dropdown.Item onClick={() => updStatus('reviewed')}>Рассмотрен</Dropdown.Item>
                                            </DropdownMenu>
                                        </Dropdown>
                                        <Button variant={"outline-dark"} className='mt-3 p-2' onClick={() => setChooseVisible(true)}>Ответ на электронную почту</Button>
                                        <Mailer oneAppeal={oneAppeal} show={chooseVisible} onHide={() => setChooseVisible(false)} />
                                    </div>
                                    :
                                    null
                            }
                        </div>
                    </Col>
                </Row>
            </Card>
            <br/>
            <Row>
                <div className='d-flex'> Суть обращения: {oneAppeal?.content}</div>
            </Row>
        </Container>
    );
});

export default AppealItem;