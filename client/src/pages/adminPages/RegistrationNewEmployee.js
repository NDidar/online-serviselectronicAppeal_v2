import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Card, Container, Form} from "react-bootstrap";
import {Alert, IconButton, Snackbar, TextField} from "@mui/material";
import * as PropTypes from "prop-types";
import {Context} from "../../index";
import {useHistory, useLocation} from "react-router-dom";
import {CRUD_EMPLOYEE_ROUTE, LOGIN_ROUTE} from "../../utils/Consts";
import {registration} from "../../http/UserApi";

function CloseIcon(props) {
    return null;
}

CloseIcon.propTypes = {fontSize: PropTypes.string};
const RegistrationNewEmployee = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation();
    const history = useHistory();
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email не может быть пустым')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
    const [formValid, setFormValid] = useState(false)
    const [errorStatus, setErrorStatus] = useState('')

    useEffect(()=>{
        if (emailError || passwordError){
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    },[emailError, passwordError])

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())){
            setEmailError('Некорректный mail')
            if(!e.target.value){
                setEmailError('mail не может быть пустым')
            }
        } else{
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 8){
            setPasswordError('Пароль должен быть длинее 3 и меньше 8')
            if(!e.target.value){
                setPasswordError('Пароль не может быть пустым')
            }
        } else {
            setPasswordError("")
        }
    }

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>

            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    const click = async () => {
        try {
            let data = await registration(email, password, 'EMPLOYEE')
            if(data){
                history.push(CRUD_EMPLOYEE_ROUTE)
            }
        } catch (e) {
            setErrorStatus(e.response.data.message)
            console.log(e.response.data.message)
            handleClick()
        }
    }

    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 54}}
        >
            <Card className='p-5' style={{width: 600}}>
                <h2 className='m-auto'>Регистрация оператора</h2>
                {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
                <Form className='d-flex flex-column'>
                    <TextField
                        size='small'
                        label='Введите email оператора...'
                        variant="outlined"
                        id="outlined-basic"
                        onBlur={e => blurHandler(e)}
                        name='email'
                        className="mt-3"
                        value={email}
                        onChange={e => emailHandler(e)}
                    />
                    {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{[passwordError]}</div>}
                    <TextField
                        size='small'
                        label='Введите пароль для оператора...'
                        id="outlined-basic"
                        variant="outlined"
                        onBlur={e => blurHandler(e)}
                        name='password'
                        className="mt-3"
                        value={password}
                        onChange={e => passwordHandler(e)}
                        type="password"
                    />
                    <Button
                        className='mt-3'
                        variant={"outline-success"}
                        onClick={click}
                    >
                        Регистрация сотрудника
                    </Button>
                </Form>
            </Card>
            <Snackbar
                anchorOrigin={{horizontal: 'center', vertical: 'top'}}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                action={action}
            >
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {errorStatus}
                </Alert>
            </Snackbar>
        </Container>
    );
});

export default RegistrationNewEmployee;