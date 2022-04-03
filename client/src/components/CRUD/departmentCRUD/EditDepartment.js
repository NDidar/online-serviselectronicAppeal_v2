import React, {Fragment, useState} from 'react';
import {AiTwotoneEdit} from "react-icons/ai";
import {updateDepartment} from "../../../http/AppealApi";

const EditDepartment = ({department}) => {

    const [valueT, setValueT] =useState(department.department)

    const updDepartment = async e => {
        e.preventDefault()
        try {
            updateDepartment({department: valueT},department.id).then()
            window.location.reload()
        }catch (e) {
            console.error(e.message)
        }
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-warning"
                data-toggle="modal"
                data-target={`#id${department.id}`}
            >
                <AiTwotoneEdit/>
            </button>

            <div
                className="modal"
                id={`id${department.id}`}
                onClick={() => setValueT(department.department)}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Редактирование деятельности</h4>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                onClick={() => setValueT(department.department)}
                            >
                                &times;
                            </button>
                        </div>

                        <div className="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                value={valueT}
                                onChange={e=> setValueT(e.target.value)}
                            />
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-warning"
                                data-dismiss="modal"
                                onClick={e => updDepartment(e)}
                            >
                                Сохранить изменение
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                                onClick={() => setValueT(department.department)}
                            >
                                Выйти
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </Fragment>
    );
};

export default EditDepartment;