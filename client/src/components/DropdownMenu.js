import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Container, Dropdown, Row} from "react-bootstrap";
import {Context} from "../index";

const DropdownMenu = observer(() => {
    const {appeal} = useContext(Context)
    return (
        <Container>
            <Row className='d-flex'>
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>{appeal.selectedOrganization.organization_name || "Выберите адрес организации"}</Dropdown.Toggle>
                    <Dropdown.Menu variant={'outline-dark'}>
                        {appeal.organizations.map(organization =>
                            <Dropdown.Item
                                onClick={() => appeal.setSelectedOrganization(organization)}
                                key={organization.id}
                            >
                                {organization.organization_name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mt-2 mb-2 ml-4">
                    <Dropdown.Toggle>{appeal.selectedDepartment.department || "Выберите вид деятельности"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {appeal.departments.map(department =>
                            <Dropdown.Item
                                onClick={() => appeal.setSelectedDepartment(department)}
                                key={department.id}
                            >
                                {department.department}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </Row>
        </Container>
    );
});

export default DropdownMenu;