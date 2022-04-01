import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Context} from "../index";
import {NavLink, useHistory} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE} from "../utils/Consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.setItem('token', '')
    }

    return (

            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink to={MAIN_ROUTE}>ФЗСН</NavLink>
                    {user.isAuth ?
                        <Nav className='ml-auto' style={{color: 'white'}}>

                            <Button variant={"outline-light"} onClick={()=> history.push(ADMIN_ROUTE)}>Админ панель </Button>
                            <Button variant={"outline-light"} onClick={()=> logOut()}>Выйти</Button>
                        </Nav>
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