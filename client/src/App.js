import React, {useContext, useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/UserApi";
import {Spinner} from "react-bootstrap";
require('dotenv').config()


const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
             user.setUser(true)
            user.setIsAuth(true)
            user.setRole(data.role)
            console.log(data)
        }).finally(() => setLoading(false))
    }, [])

    if(loading) {
        return <Spinner animation={"grow"}/>
    }

  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
