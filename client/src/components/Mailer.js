import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import emailjs from 'emailjs-com'
import {Context} from "../index";
import {Box, Modal, Typography} from "@mui/material";


const Mailer = observer(({show, onHide, oneAppeal}) => {

    const {appeal} = useContext(Context)


    console.log(appeal.oneAppeal)

    function getDateWithoutTime(date) {
        return require('moment')(date).format('YYYY-MM-DD');
    }

    function sendEmail(e){
        e.preventDefault()
        emailjs.sendForm('service_xyt2vtn','t' +
            'emplate_9nyoeit', e.target, 'OdNl7gdZKkEzQnOwt'
        ).then(res => {
            console.log(res)

        }).catch(err => console.log(err))
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
            <Modal
                open={show}
                onClose={onHide}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                        <div
                            className='container border'
                            style={{marginTop: '10px', width: '100%'}}
                        >
                            <h1 style={{marginTop: '25px'}}>Форма отправки ответа</h1>
                            <form
                                className='row'
                                style={{margin: '25px 85px 75px 100px'}}
                                onSubmit={sendEmail}
                            >
                                <label>ФИО</label>
                                <input type='text' name='name' className='form-control'/>

                                <label>Email</label>
                                <input type='email' name='user_email' className='form-control'/>

                                <label>Сообщение</label>
                                <input name='message' rows='4'className='form-control'/>

                                <label>Организация</label>
                                <input className='form-control' type='text' name='organization' defaultValue={oneAppeal?.organization_address?.organization_name}/>

                                <label>Деятельность</label>
                                <input className='form-control' type='text' name='department' defaultValue={oneAppeal?.department_appeal?.department}/>

                                <label>Дата обращении</label>
                                <input className='form-control' type='date' name='dateAppeal' defaultValue={getDateWithoutTime(oneAppeal?.createdAt)}/>

                                <input type='submit' value='Send' className='form-control btn btn-primary mt-3' onSubmit={sendEmail} onClick={onHide}/>
                            </form>
                        </div>
                </Box>
            </Modal>
        </div>
    );
});

export default Mailer;