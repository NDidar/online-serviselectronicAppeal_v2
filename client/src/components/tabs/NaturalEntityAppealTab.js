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
import DropdownToggle from "react-bootstrap/DropdownToggle";
import Pages from "../Pages";

const NaturalEntityAppealTab = observer(() => {
    const [historyAppeal, setHistoryAppeal] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState(null)
    const [selectedStatusData, setSelectedStatusData] = useState(null)
    const {appeal} = useContext(Context)
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

    useEffect(() => {
        fetchAppeals('false',appeal.selectedOrganization.id, appeal.selectedDepartment.id, selectedStatusData,
            9,appeal.page).then(data => {
                appeal.setAppeals(data.rows)
                appeal.setTotalCount(data.count)
            }
        )
    },[appeal.selectedOrganization, appeal.selectedDepartment, appeal.page, selectedStatusData])


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
                        <DropdownToggle variant={"outline-dark"}>{selectedStatus || '???????????????? ???????????? ??????????????????'}</DropdownToggle>
                        <DropdownMenu >
                            <Dropdown.Item onClick={() => {
                                setSelectedStatus('???? ??????????????????????')
                                setSelectedStatusData('notreviewed')
                            }}>???? ??????????????????????</Dropdown.Item>
                            <Dropdown.Item onClick={() => {
                                setSelectedStatus('?? ???????????????? ????????????????????????')
                                setSelectedStatusData('viewed')
                            }}>?? ???????????????? ????????????????????????</Dropdown.Item>
                            <Dropdown.Item onClick={() => {
                                setSelectedStatus('????????????????????')
                                setSelectedStatusData('reviewed')
                            }}>????????????????????</Dropdown.Item>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </Row>
            <Table className='mt-2'>
                <thead>
                <tr>
                    <th>???????? ??????????????????</th>
                    <th>??????????????????????</th>
                    <th>????????????????????????</th>
                    <th>????????????</th>
                </tr>
                </thead>
                <tbody>
                {appeal.appeals.map(appeal => (
                    <tr style={{cursor: "pointer"}} onDoubleClick={() => history.push(APPEAL_ITEM_ROUTE+ '/' + appeal.id)} key={appeal.id} >
                        <td>{getDateWithoutTime(appeal.createdAt)}</td>
                        <td>{appeal.organization_address?.organization_name}</td>
                        <td>{appeal.department_appeal?.department}</td>
                        <td>{appeal.status === 'notreviewed'? '???? ????????????????????' : appeal.status === 'viewed'? '?? ???????????????? ????????????????????????' : appeal.status === 'reviewed'? '????????????????????' : null}</td>
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