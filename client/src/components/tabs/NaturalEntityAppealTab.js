import React, {useContext, useEffect, useState} from 'react';
import {Container, Dropdown, Row, Table} from "react-bootstrap";
import DropdownMenus from "../DropdownMenus";
import {deleteAppeal, fetchAppeals, fetchDepartments, fetchOrganizations} from "../../http/AppealApi";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {APPEAL_ITEM_ROUTE} from "../../utils/Consts";
import {RiDeleteBin6Line} from "react-icons/ri";
import {useHistory} from "react-router-dom";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import Pages from "../Pages";

const NaturalEntityAppealTab = observer(() => {
    const [historyAppeal, setHistoryAppeal] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState(null)
    const [selectedStatusData, setSelectedStatusData] = useState(null)
    const {appeal} = useContext(Context)
    const {user} = useContext(Context)
    const history = useHistory()

    useEffect(() => {
        fetchDepartments().then(department => appeal.setDepartment(department))
        fetchOrganizations().then(organization => appeal.setOrganizations(organization))
        fetchAppeals('false',null, null, null,
            9,1).then(data => {
                appeal.setAppeals(data.rows)
                appeal.setTotalCount(data.count)
            }
        )
    },[])
    console.log(appeal.appeals)

    useEffect(() => {
        fetchAppeals('false',appeal.selectedOrganization.id, appeal.selectedDepartment.id, selectedStatusData,
            9,appeal.page).then(data => {
                appeal.setAppeals(data.rows)
                appeal.setTotalCount(data.count)
            }
        )
    },[appeal.selectedOrganization, appeal.selectedDepartment, appeal.page, selectedStatusData])


    console.log(appeal.appeals)

    const delAppeal = async (id) => {
        deleteAppeal(id).then()
        setHistoryAppeal(historyAppeal.filter(appeals => appeals.id !== id))
    }

    function getDateWithoutTime(date) {
        return require('moment')(date).format('YYYY-MM-DD');
    }

    return (
        <Container>
            <Row className='d-flex flex-row'>
                <div className='d-flex justify-content-center align-items-center'>
                    <DropdownMenus/>
                    <Dropdown className='ml-4'>
                        <DropdownToggle>{selectedStatus || 'Выберите статус обращения'}</DropdownToggle>
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
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </Row>
            <Table className='mt-2'>
                <thead>
                <tr>
                    <th>Дата обращения</th>
                    <th>ФИО</th>
                    <th>Организация</th>
                    <th>Статус</th>
                </tr>
                </thead>
                <tbody>
                {appeal.appeals.map(appeal => (
                    <tr style={{cursor: "pointer"}} onDoubleClick={() => history.push(APPEAL_ITEM_ROUTE+ '/' + appeal.id)} key={appeal.id} >
                        <td>{getDateWithoutTime(appeal.createdAt)}</td>
                        <td>{appeal.organization_address?.organization_name}</td>
                        <td>{appeal.department_appeal?.department}</td>
                        <td>{appeal.status == 'notreviewed'? 'Не рассмотрен' : appeal.status == 'viewed'? 'В процессе рассмотрении' : appeal.status == 'reviewed'? 'Рассмотрен' : null}</td>
                        <td><button className="btn btn-danger" onClick={() => delAppeal(appeal.id)}><RiDeleteBin6Line /></button></td>
                    </tr>
                ))}
                </tbody>

            </Table>
            <Pages />
        </Container>
    );
});

export default NaturalEntityAppealTab;