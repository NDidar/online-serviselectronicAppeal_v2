import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Context} from "../index";
import {NavLink, useHistory} from "react-router-dom";
import {ADMIN_ROUTE, EMPLOYEE_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, PROFILE_ROUTE} from "../utils/Consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.setItem('token', '')
        history.push(MAIN_ROUTE)
    }

    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink style={{color: 'white'}} to={MAIN_ROUTE}>ФЗСН</NavLink>
                    {user.isAuth ?
                        user.role == "ADMIN"?
                            <Nav className='ml-auto' style={{color: 'white'}}>
                                <Button variant={"outline-light"} onClick={()=> history.push(ADMIN_ROUTE)}>Админ панель </Button>
                                <Button className='ml-2' variant={"outline-light"} onClick={()=> logOut()}>Выйти</Button>
                            </Nav>
                            :
                            user.role == "USER"?
                                <Nav className='ml-auto' style={{color: 'white'}}>
                                    <Button variant={"outline-light"} onClick={()=> history.push(PROFILE_ROUTE)}>Профиль </Button>
                                    <Button className='ml-2' variant={"outline-light"} onClick={()=> logOut()}>Выйти</Button>
                                </Nav>
                                :
                                user.role == "EMPLOYEE"?
                                    <Nav className='ml-auto' style={{color: 'white'}}>

                                        <Button variant={"outline-light"} onClick={()=> history.push(EMPLOYEE_ROUTE)}>Панель работника</Button>
                                        <Button className='ml-2' variant={"outline-light"} onClick={()=> logOut()}>Выйти</Button>
                                    </Nav>
                                    :
                                    null
                    :
                        <Nav className='ml-auto'>
                            <Button  variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                        </Nav>
                    }
                </Container>
            </Navbar>

    );
});

export default NavBar;