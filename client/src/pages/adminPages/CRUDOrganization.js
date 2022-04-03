import React from 'react';
import {observer} from "mobx-react-lite";
import {Container} from "react-bootstrap";
import CreatOrganization from "../../components/CRUD/organizationCRUD/CreatOrganization";
import OrganizationList from "../../components/CRUD/organizationCRUD/OrganizationList";

const CRUDOrganization = observer(() => {
    return (
        <Container>
            <CreatOrganization />
            <OrganizationList />
        </Container>
    );
});

export default CRUDOrganization;