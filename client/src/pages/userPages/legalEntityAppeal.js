import React from 'react';
import {Container, Form} from "react-bootstrap";

const LegalEntityAppeal = () => {
    return (
        <Container>
            <Form className='d-flex flex-column'>
                DropdownOrganization/>
                <Form.Control
                    placeholder='Введите вашу фамилию'
                    className='mt-3'
                />
                <Form.Control
                    placeholder='Введите вашу фамилию'
                    className='mt-3'
                />
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
        </Container>
    );
};

export default LegalEntityAppeal;