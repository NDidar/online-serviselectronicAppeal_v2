import React from 'react';
import {observer} from "mobx-react-lite";
import {Form, Row} from "react-bootstrap";

const TabNaturalAppeal = observer(() => {
    return (
        <Form className='d-flex flex-column'>
            <Row className='d-flex mt-3 pl-3 pr-3'>
                <Form.Control
                    placeholder='Введите ваше имя'
                    className='mt-3'
                    style={{width: 300}}
                />
                <Form.Control
                    placeholder='Введите вашу фамилию'
                    className='mt-3 ml-2'
                    style={{width: 300}}
                />
            </Row>
            <Form.Control
                placeholder='Адрес (адрес места жительства (места пребывания))'
                className='mt-3'
            />
            <Form.Control
                placeholder='E-mail (адрес электронной почты заявителя)'
                className='mt-3'
            />
            <Form.Control
                placeholder='Суть обращения'
                className='mt-3'
                as="textarea"
                rows={3}
            />
            <br/>
            <h4>Прикрепите фото</h4>
            <Form.Control
                placeholder=''
                className='mt-3'
                type = 'file'
            />
            <br/>
            <h4>Прикрепите файл</h4>
            <Form.Control
                placeholder='Прикрепите файл'
                className='mt-3'
                type = 'file'
            />

        </Form>
    );
});

export default TabNaturalAppeal;