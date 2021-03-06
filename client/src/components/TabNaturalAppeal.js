import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Form, Row} from "react-bootstrap";
import {creatElectronicAppeal} from "../http/AppealApi";
import {Context} from "../index";
import {fetchUser} from "../http/UserApi";

const TabNaturalAppeal = observer(() => {
    const {appeal} = useContext(Context)
    const {user} = useContext(Context)


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [surname, setSurname] = useState('')
    const [home_address, setHome_address] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const [essence, setEssence] = useState('')
    const [img, setImg] = useState(null)
    const [file, setFile] = useState(null)


    useEffect(()=>{
        fetchUser(user.userId).then(data =>{

            setName(data[0].name)
            setSurname(data[0].surname)
            setHome_address(data[0].home_address)
            setPhone_number(data[0].phone_number)
            setEmail(data[0].email)
        })
    },[])

    const selectImg = e =>{
        setImg(e.target.files[0])
    }

    const selectFile = e =>{
        setFile(e.target.files[0])
    }

    useEffect(()=>{

    },[])

    const addAppeal = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('surname', surname)
        formData.append('home_address', home_address)
        formData.append('phone_number', phone_number)
        formData.append('content', essence)
        formData.append('img', img)
        formData.append('file', file)
        formData.append('userId', user.userId)
        formData.append('organizationAddressId', appeal.selectedOrganization.id)
        formData.append('departmentAppealId', appeal.selectedDepartment.id)
        creatElectronicAppeal(formData).then()
    }

    return (
        <Form className='d-flex flex-column'>
            <Row className='d-flex mt-3 pl-3 pr-3'>
                <Form.Control
                    placeholder='?????????????? ???????? ??????'
                    className='mt-3'
                    style={{width: 300}}
                    value={name? name : ''}
                    onChange={e => setName(e.target.value)}
                />
                <Form.Control
                    placeholder='?????????????? ???????? ??????????????'
                    className='mt-3 ml-2'
                    style={{width: 300}}
                    value={surname? surname:''}
                    onChange={e => setSurname(e.target.value)}
                />
            </Row>
            <Form.Control
                placeholder='?????????? (?????????? ?????????? ???????????????????? (?????????? ????????????????????))'
                className='mt-3'
                value={home_address? home_address : ''}
                onChange={e => setHome_address(e.target.value)}
            />
            <Form.Control
                placeholder='E-mail (?????????? ?????????????????????? ?????????? ??????????????????)'
                className='mt-3'
                value={email? email : ''}
                onChange={e => setEmail(e.target.value)}
            />
            <Form.Control
                placeholder='???????? ??????????????????'
                className='mt-3'
                as="textarea"
                rows={3}
                value={essence? essence : ''}
                onChange={e => setEssence(e.target.value)}
            />
            <br/>
            <h4>???????????????????? ????????</h4>
            <Form.Control
                className='mt-3'
                type = 'file'
                onChange={selectImg}
            />
            <br/>
            <h4>???????????????????? ????????</h4>
            <Form.Control
                className='mt-3'
                type = 'file'
                onChange={selectFile}
            />
            <Button onClick={addAppeal} className='mt-2 mb-3' variant={"outline-success"}>??????????????????</Button>
        </Form>

    );
});

export default TabNaturalAppeal;