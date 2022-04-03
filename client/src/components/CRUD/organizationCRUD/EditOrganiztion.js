import React, {Fragment, useState} from 'react';
import {AiTwotoneEdit} from "react-icons/ai";
import {updateOrganization} from "../../../http/AppealApi";

const EditOrganization = ({organization}) => {

    const [valueT, setValueT] =useState(organization.organization_name)

    const updOrganization = async e => {
        e.preventDefault()
        try {
            updateOrganization({organization_name: valueT},organization.id).then()
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
                data-target={`#id${organization.id}`}
            >
                <AiTwotoneEdit/>
            </button>

            <div
                className="modal"
                id={`id${organization.id}`}
                onClick={() => setValueT(organization.organization_name)}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Редактирование организации</h4>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                onClick={() => setValueT(organization.organization_name)}
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
                                onClick={e => updOrganization(e)}
                            >
                                Сохранить изменение
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                                onClick={() => setValueT(organization.organization_name)}
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

export default EditOrganization;