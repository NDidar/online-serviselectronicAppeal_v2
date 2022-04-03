import React, {Fragment, useEffect, useState} from 'react';
import {RiDeleteBin6Line} from "react-icons/ri";
import {deleteDepartment, fetchDepartments} from "../../../http/AppealApi";
import {observer} from "mobx-react-lite";
import EditDepartment from "./EditDepartment";

const DepartmentList = observer(() => {
    const [department, setDepartment] = useState([])

    const delDepartment = async (id) => {
        try{
            deleteDepartment(id).then()
            setDepartment(department.filter(departments => departments.id !== id))
        }catch (e) {
            console.error(e.message)
        }
    }

    useEffect(() => {
        fetchDepartments().then(data => setDepartment(data))
    }, [])

    return (
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                <tr>
                    <th>Название деятельности</th>
                    <th>Редактировать</th>
                    <th>Удалить</th>
                </tr>
                </thead>
                <tbody>
                {department.map(departments => (
                    <tr key={departments.id}>
                        <td>{departments.department}</td>
                        <td><EditDepartment department={departments}/></td>
                        <td><button className="btn btn-danger" onClick={() => delDepartment(departments.id)}><RiDeleteBin6Line /></button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Fragment>
    );
});

export default DepartmentList;