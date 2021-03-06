import React, {useContext} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import bgImageMainPage from '../../../../online-service-for-electronic-appeal_v2/client/src/Assets/maxresdefault.jpg'
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import {
    ANON_APPEAL_ROUTE,
    CREATE_APPEAL_ROUTE,
    NOT_ACTIVE_APPEAL_USER_ROUTE
} from "../utils/Consts";

const MainPage = observer( () => {
    const {user} = useContext(Context)
    const history = useHistory()

    return (
        <Container>
            <Row style={{background: `url(${bgImageMainPage}) no-repeat center center`, width:1142, height: 640, backgroundSize: 'cover'}}>
                <Col className='d-flex flex-column justify-content-center align-items-end'>
                    {user.role === 'USER'?
                        <Row className='d-flex flex-column '>
                            <Button
                                style={{fontSize: 20}}
                                variant={"outline-danger"}
                                onClick={() => history.push(CREATE_APPEAL_ROUTE)}
                            >
                                Создать электронное обращение
                            </Button>
                            <Button
                                style={{fontSize: 20, marginTop: 20}}
                                variant={"outline-danger"}
                                onClick={() => history.push(NOT_ACTIVE_APPEAL_USER_ROUTE)}
                            >
                                Просмотр обращений
                            </Button>
                        </Row>
                        :
                        user.role === ''?
                            <Row className='d-flex flex-column '>
                                <Button

                                    style={{fontSize: 20, marginTop: 20}}
                                    variant={"outline-danger"}
                                    onClick={() => history.push(ANON_APPEAL_ROUTE)}
                                >
                                    Оставить анонимное обращения
                                </Button>
                            </Row>
                            :
                            null
                    }
                </Col>
            </Row>
        </Container>
    );
});

export default MainPage;