import React from 'react';
import {Button, Container, Modal} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {MAIN_ROUTE} from "../../utils/Consts";

const InformationalWarning = ({show, onHide}) => {
    const history = useHistory();

    return (
        <Container>
            <>
                <Modal
                    show={show}
                    onHide={onHide}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header>
                        <Modal.Title>Внимание</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Анонимные обращения, то есть обращения заявителей, в которых не указаны фамилия, собственное
                        имя, отчество либо инициалы гражданина или адрес его места жительства либо наименование
                        юридического лица (полное или сокращенное) или его место
                        нахождения либо указанные данные не соответствуют действительности, не подлежат рассмотрению,
                        если они не содержат сведений о готовящемся, совершаемом или совершенном преступлении.
                    </Modal.Body>
                    <Modal.Footer className='d-flex align-item-center justify-content-center'>
                        <Button variant="secondary" onClick={()=>history.push(MAIN_ROUTE)}>
                            Понятно
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </Container>
    );
};

export default InformationalWarning;