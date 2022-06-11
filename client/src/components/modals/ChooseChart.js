import React, {useContext, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {Box, Modal, Typography} from "@mui/material";
import {Button} from "react-bootstrap";
import {
    CRUD_EMPLOYEE_ROUTE,
    DIAGRAM_ROUTE,
    DIAGRAM_SECOND_ROUTE,
    REGISTRATION_EMPLOYEE_ROUTE
} from "../../utils/Consts";
import {fetchAppeals} from "../../http/AppealApi";
import {Context} from "../../index";

const ChooseChart = ({show, onHide}) => {
    const {appeal} = useContext(Context)

    const handleDiagramFirst = async () => {

        await fetchAppeals('false', null, null, null,
            9, 1).then(data => {
                appeal.setAppeals(data.rows)
                appeal.setTotalCount(data.count)
            }
        )
        history.push(DIAGRAM_ROUTE)

        appeal.setIsHide(false)
    }

    const handleDiagramSecond = async () => {
        show=false
        await fetchAppeals('true', null, null, null,
            9, 1).then(data => {
                appeal.setAppeals(data.rows)
                appeal.setTotalCount(data.count)
            }
        )
        history.push(DIAGRAM_SECOND_ROUTE)
        appeal.setIsHide(false)
    }

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
                        <Button className='mt-2 p-2' variant={"outline-dark"} onClick={handleDiagramFirst}>Статистика по областям физических лиц</Button>
                        <Button className='mt-2 p-2' variant={"outline-dark"} onClick={handleDiagramSecond}>Статистика по областям юридических лиц</Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default ChooseChart;