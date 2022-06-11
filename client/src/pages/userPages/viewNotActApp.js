import React, {Fragment, useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Container, Dropdown, Row} from "react-bootstrap";
import {RiDeleteBin6Line} from "react-icons/ri";
import Pages from "../../components/Pages";
import {deleteAppeal, fetchAppeals, fetchDepartments, fetchOrganizations} from "../../http/AppealApi";
import {Context} from "../../index";
import {useHistory} from "react-router-dom";
import {APPEAL_ITEM_ROUTE} from "../../utils/Consts";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownMenus from "../../components/DropdownMenus";

const viewNotActApp = observer(() => {
    const [viewNotActApp, setViewNotActApp] = useState([]);
    const {user} = useContext(Context)
    const {appeal} = useContext(Context)
    const [selectedStatus, setSelectedStatus] = useState(null)
    const [selectedStatusData, setSelectedStatusData] = useState(null)

    const history = useHistory()

    useEffect(() => {
        fetchDepartments().then(department => appeal.setDepartment(department))
        fetchOrganizations().then(organization => appeal.setOrganizations(organization))
        fetchAppeals(null, null, null, null,
            9,1, user.userId).then(data => {
            appeal.setAppeals(data.rows)
            appeal.setTotalCount(data.count)
        })
    }, [])


    useEffect(() => {
        fetchAppeals(null, appeal.selectedOrganization.id,appeal.selectedDepartment.id, selectedStatusData,
            9,appeal.page, user.userId).then(data => {
            appeal.setAppeals(data.rows)
            appeal.setTotalCount(data.count)
        })
    }, [appeal.selectedOrganization, appeal.selectedDepartment, appeal.page, selectedStatusData])


    const delAppeal = async (id) => {
        deleteAppeal(id).then()
        setViewNotActApp(viewNotActApp.filter(appeals => appeals.id !== id))
    }

    function getDateWithoutTime(date) {
        return require('moment')(date).format('YYYY-MM-DD');
    }


    return (
        <Container>

                <Container>
                    <Fragment>
                        <Row className='d-flex flex-row justify-content-center mt-3'>
                            <div className='d-flex  align-items-center justify-content-center'>
                                <DropdownMenus />
                                <Dropdown className='ml-4' >
                                    <DropdownToggle variant={"outline-dark"}>{selectedStatus || 'Выберите статус обращения'}</DropdownToggle>
                                    <DropdownMenu >
                                        <Dropdown.Item onClick={() => {
                                            setSelectedStatus('Не рассмотрено')
                                            setSelectedStatusData('notreviewed')
                                        }}>Не рассмотрено</Dropdown.Item>
                                        <Dropdown.Item onClick={() => {
                                            setSelectedStatus('В процессе рассмотрении')
                                            setSelectedStatusData('viewed')
                                        }}>В процессе рассмотрении</Dropdown.Item>
                                        <Dropdown.Item onClick={() => {
                                            setSelectedStatus('Рассмотрен')
                                            setSelectedStatusData('reviewed')
                                        }}>Рассмотрен</Dropdown.Item>
                                        <Dropdown.Item onClick={() => {
                                            setSelectedStatus('Все обращений')
                                            setSelectedStatusData(null)
                                        }}

                                        >Все обращений</Dropdown.Item>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </Row>
                        <table className="table mt-4 text-center">
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
                                    <td>{appeal.status === 'notreviewed'? 'Не рассмотрен' : appeal.status === 'viewed'? 'В процессе рассмотрений' : appeal.status === 'reviewed'? 'Рассмотрен' : null}</td>
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

export default viewNotActApp;