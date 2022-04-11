import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import { useParams} from "react-router-dom";
import {fetchOneAppeal} from "../http/AppealApi";

const AppealItem = observer(() => {

    const {id} = useParams();
    const [oneAppeal, setOneAppeal] = useState()

    useEffect(()=> {
        fetchOneAppeal(id).then(data => setOneAppeal(data))
        },[])

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
                        {oneAppeal?.info[0]?.nameLegal?
                            <div style={{background:'lightgray'}} className='d-flex mt-3'> Юридический адрес: {oneAppeal?.info[0]?.nameLegal}</div>
                            :
                            null
                        }
                    </Col>
                    <Col md={4}>
                        <Image style={{width: 300, height: 300}} src={'http://localhost:5000/' + oneAppeal?.img}/>
                    </Col>
                    <Col md={4} >
                        <div className='d-flex flex-column justify-content-between mt-5 mb-3'>
                            <span className='mt-5'>Ниже можно скачать прикрепленный файл</span>
                            <Button className='mt-5' variant={"outline-success"} href={'http://localhost:5000/' + oneAppeal?.file}>Скачать файл</Button></div>
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