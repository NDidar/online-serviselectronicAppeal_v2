import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Container, Form} from "react-bootstrap";
import {Context} from "../index";
import {creatAnonAppeal} from "../http/AppealApi";
import InformationalWarning from "./modals/InformationalWarning";
import {useHistory} from "react-router-dom";
import {MAIN_ROUTE} from "../utils/Consts";

const AnonAppeal = observer(() => {
    const {appeal} = useContext(Context)

    const [essence, setEssence] = useState('')
    const [img, setImg] = useState(null)
    const [file, setFile] = useState(null)

    const [show, setShow] = useState(false);
    const history = useHistory();

    const selectImg = e =>{
        setImg(e.target.files[0])
    }

    const selectFile = e =>{
        setFile(e.target.files[0])
    }

    const addAppeal = () => {
        const formData = new FormData()
        formData.append('content', essence)
        formData.append('img', img)
        formData.append('file', file)
        formData.append('organizationAddressId', appeal.selectedOrganization.id)
        formData.append('departmentAppealId', appeal.selectedDepartment.id)
        creatAnonAppeal(formData).then(() => setShow(true))
    }

    return (
       <Container>
           <Form className='d-flex flex-column'>
               <Form.Control
                   placeholder='Суть обращения'
                   className='mt-3'
                   as="textarea"
                   rows={3}
                   value={essence? essence : ''}
                   onChange={e => setEssence(e.target.value)}
               />
               <br/>
               <h4>Прикрепите фото</h4>
               <Form.Control
                   className='mt-3'
                   type = 'file'
                   onChange={selectImg}
               />
               <br/>
               <h4>Прикрепите файл</h4>
               <Form.Control
                   className='mt-3'
                   type = 'file'
                   onChange={selectFile}
               />
               <Button onClick={addAppeal} className='mt-2 mb-3' variant={"outline-success"}>Отправить</Button>
               <InformationalWarning show={show} onHide={() => setShow(false)}/>
           </Form>
       </Container>
    );
});

export default AnonAppeal;