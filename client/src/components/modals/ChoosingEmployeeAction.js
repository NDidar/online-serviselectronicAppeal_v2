import React from 'react';
import {Box, Modal, Typography} from "@mui/material";
import {useHistory} from "react-router-dom";
import {CRUD_EMPLOYEE_ROUTE, REGISTRATION_EMPLOYEE_ROUTE} from "../../utils/Consts";
import {Button} from "react-bootstrap";

const ChoosingEmployeeAction = ({show, onHide}) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const history = useHistory()

    return (
        <div>
            <Modal
                open={show}
                onClose={onHide}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Выберите действие
                    </Typography>
                    <Typography className='d-flex flex-column' id="modal-modal-description" sx={{ mt: 2 }}>
                        <Button className='mt-2 p-2' variant={"outline-dark"} onClick={() => history.push(REGISTRATION_EMPLOYEE_ROUTE)}>Добавить сотрудника</Button>
                        <Button className='mt-2 p-2' variant={"outline-dark"} onClick={() => history.push(CRUD_EMPLOYEE_ROUTE)}>Редактирование сотрудников</Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default ChoosingEmployeeAction;