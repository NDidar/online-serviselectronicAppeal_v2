import React, {Fragment, useState} from 'react';
import {TextField} from "@mui/material";
import {createOrganization} from "../../../http/AppealApi";

const CreatOrganization = () => {

    const [name, setName] = useState("")

    const addOrganization = () => {
        createOrganization({organization_name:name}).then()
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Настройки организации</h1>
            <form className="d-flex mt-5">
                <TextField size="small" label='Введите название' type="text" className="form-control" value={name} onChange={e => setName(e.target.value)}/>
                <button className="btn btn-success" onClick={addOrganization}>Добавить</button>
            </form>
        </Fragment>
    );
};

export default CreatOrganization;