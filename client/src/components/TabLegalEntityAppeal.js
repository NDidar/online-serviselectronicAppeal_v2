import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Container, Form, Row} from "react-bootstrap";
import {Context} from "../index";
import {fetchUser} from "../http/UserApi";
import {creatElectronicAppeal} from "../http/AppealApi";

const TabLegalEntityAppeal = observer(() => {
    const {user} = useContext(Context)
    const {appeal} = useContext(Context)

    const [nameLegalEntity, setNameLegalEntity] = useState('')
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [home_address, setHome_address] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [content, setContent] = useState('');
    const [img, setImg] = useState(null);
    const [file, setFile] = useState(null);



    useEffect(() => {
        fetchUser(user.id).then(data => {
            setName(data[0].username)
            setSurname(data[0].surname)
            setHome_address(data[0].home_address)
            setPhone_number(data[0].phone_number)
            setEmail(data[0].email)
        })
    }, [])



    const selectImg = e =>{
        setImg(e.target.files[0])
    }

    const selectFile = e =>{
        setFile(e.target.files[0])
    }

    const addLegalEntityAppeal = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('surname', surname)
        formData.append('home_address', home_address)
        formData.append('phone_number', phone_number)
        formData.append('content', content)
        formData.append('img', img)
        formData.append('file', file)
        formData.append('userId', user.userId)
        formData.append('organizationAddressId', appeal.selectedOrganization.id)
        formData.append('departmentAppealId', appeal.selectedDepartment.id)
        formData.append('nameLegal', nameLegalEntity)
        creatElectronicAppeal(formData).then(data => console.log('all right'))
    }

    return (
        <Container>
            <Form className='d-flex flex-column'>
                <Form.Control
                    className='mt-3'
                    placeholder='Полное наименование юридического лица'
                    value={nameLegalEntity? nameLegalEntity : ''}
                    onChange={e => setNameLegalEntity(e.target.value)}
                />
                <Row className='d-flex mt-3 pl-3 pr-3'>
                    <Form.Control
                        placeholder='Введите ваше имя'
                        className='mt-3'
                        style={{width: 300}}
                        value={name? name : ''}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        placeholder='Введите вашу фамилию'
                        className='mt-3 ml-2'
                        style={{width: 300}}
                        value={surname? surname : ''}
                        onChange={e => setSurname(e.target.value)}
                    />
                </Row>
                <Form.Control
                    placeholder='Адрес (адрес места жительства (места пребывания))'
                    className='mt-3'
                    value={home_address? home_address : ''}
                    onChange={e => setHome_address(e.target.value)}
                />
                <Form.Control
                    placeholder='E-mail (адрес электронной почты заявителя)'
                    className='mt-3'
                    value={email? email : ''}
                    onChange={e => setEmail(e.target.value)}
                />
                <Form.Control
                    placeholder='Суть обращения'
                    className='mt-3'
                    as="textarea"
                    rows={3}
                    onChange={e => setContent(e.target.value)}
                />
                <br/>
                <h4>Прикрепите фото</h4>
                <Form.Control
                    placeholder=''
                    className='mt-3'
                    type = 'file'
                    onChange={selectImg}
                />
                <br/>
                <h4>Прикрепите файл</h4>
                <Form.Control
                    placeholder='Прикрепите файл'
                    className='mt-3'
                    type = 'file'
                    onChange={selectFile}
                />
                <Button onClick={addLegalEntityAppeal} className='mt-2 mb-3' variant={"outline-success"}>Отправить</Button>
            </Form>
        </Container>
    );
});

export default TabLegalEntityAppeal;