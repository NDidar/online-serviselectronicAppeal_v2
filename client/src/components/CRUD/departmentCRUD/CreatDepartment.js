import React, {Fragment, useState} from 'react';
import {TextField} from "@mui/material";
import {creatDepartment} from "../../../http/AppealApi";

const CreatDepartment = () => {

    const [name, setName] = useState("")

    const addDepartment = () => {
        creatDepartment({department:name}).then()
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Настройки деятельности</h1>
            <form className="d-flex mt-5">
                <TextField size="small" label='Введите название' type="text" className="form-control" value={name} onChange={e => setName(e.target.value)}/>
                <button className="btn btn-success" onClick={addDepartment}>Добавить</button>
            </form>
        </Fragment>
    );
};

export default CreatDepartment;