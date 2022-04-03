import React, {Fragment, useEffect, useState} from 'react';

import {RiDeleteBin6Line} from "react-icons/ri";
import {deleteOrganization, fetchOrganizations} from "../../../http/AppealApi";
import {observer} from "mobx-react-lite";
import EditOrganization from "./EditOrganiztion";

const OrganizationList = observer(() => {
    const [organization, setOrganization] = useState([])

    const delOrganization = async (id) => {
        try{
            deleteOrganization(id).then()
            setOrganization(organization.filter(organizations => organizations.id !== id))
        }catch (e) {
            console.error(e.message)
        }
    }

    useEffect(() => {
        fetchOrganizations().then(data => setOrganization(data))
    }, [])


    return (
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                <tr>
                    <th>Название организации</th>
                    <th>Редактировать</th>
                    <th>Удалить</th>
                </tr>
                </thead>
                <tbody>
                {organization.map(organizations => (
                    <tr key={organizations.id}>
                        <td>{organizations.organization_name}</td>
                        <td><EditOrganization organization={organizations}/></td>
                        <td><button className="btn btn-danger" onClick={() => delOrganization(organizations.id)}><RiDeleteBin6Line /></button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Fragment>
    );
});

export default OrganizationList;