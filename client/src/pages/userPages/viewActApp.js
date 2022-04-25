import React, {Fragment, useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Col, Container, Row} from "react-bootstrap";
import {RiDeleteBin6Line} from "react-icons/ri";
import Pages from "../../components/Pages";
import {deleteAppeal, fetchAppeals} from "../../http/AppealApi";
import {Context} from "../../index";
import {useHistory} from "react-router-dom";
import {APPEAL_ITEM_ROUTE} from "../../utils/Consts";

const ViewActApp = observer(() => {
    const [historyAppeal, setHistoryAppeal] = useState([]);
    const {user} = useContext(Context)
    const {appeal} = useContext(Context)
    const history = useHistory()

    useEffect(() => {
        fetchAppeals(null, null, null,
            'viewed',1,9, user.userId).then(data => {
                appeal.setAppeals(data.rows)
                appeal.setTotalCount(data.count)
            }
        )
    }, [])

    useEffect(() => {
        fetchAppeals(null, null,null, 'viewed',
            2,appeal.page, user.userId).then(data => {
            appeal.setAppeals(data.rows)
            appeal.setTotalCount(data.count)
        })
    }, [appeal.page])


    const delAppeal = async (id) => {
        deleteAppeal(id).then()
        setHistoryAppeal(historyAppeal.filter(appeals => appeals.id !== id))
    }

    function getDateWithoutTime(date) {
        return require('moment')(date).format('YYYY-MM-DD');
    }


    return (
        <Container>
                <Container>
                    <Fragment>
                        <table className="table mt-5 text-center">
                            <thead>
                            <tr>
                                <th>Дата обращения</th>
                                <th>Название организации</th>
                                <th>Вид деятельности</th>
                                <th>Статус обращений</th>
                                <th>Удалить</th>
                            </tr>
                            </thead>
                            <tbody>
                            {appeal.appeals.map(appeal => (
                                <tr style={{cursor: "pointer"}} onDoubleClick={() => history.push(APPEAL_ITEM_ROUTE+ '/' + appeal.id)} key={appeal.id} >
                                    <td>{getDateWithoutTime(appeal.createdAt)}</td>
                                    <td>{appeal.organization_address?.organization_name}</td>
                                    <td>{appeal.department_appeal?.department}</td>
                                    <td>{appeal.status == 'viewed'? 'В процессе рассмотрений' : null}</td>
                                    <td><button className="btn btn-danger" onClick={() => delAppeal(appeal.id)}><RiDeleteBin6Line /></button></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </Fragment>
                    <Pages />
                </Container>
        </Container>
    );
});

export default ViewActApp;