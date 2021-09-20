import React from 'react'
import { ACTIONS } from '../../actions/toDoAction'
import { Button, Row, Col } from 'react-bootstrap';

export default function ToDo({ toDo, dispatch }) {
    return (

        // este Todo es cada tarea q develve nueva
        // al boton hay q pasarle el dispatch como una prop
        <>
        <Row style={{margin:"10px 0px"}}>
        <Col lg={4}>
            <span style={{color: toDo.complete? "#AAA" : "#000", margin:"5px"}}>{toDo.name}</span>
        </Col>
        <Col lg={4} >
            <Button onClick={()=>dispatch({
                type: ACTIONS.CHANGE_TASK,
                payload: {id:toDo.id}
            })}>Change Task</Button>
        </Col>
        <Col lg={4} >
            <Button onClick={()=>dispatch({
                type: ACTIONS.DELETE_TASK,
                payload: {id:toDo.id}
            })}>Delete Task</Button>
        </Col>

        </Row>
        </>
    )
}
