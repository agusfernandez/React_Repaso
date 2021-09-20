import React from 'react'
import { ACTIONS } from '../../actions/toDoAction'

export default function ToDo({ toDo, dispatch }) {
    return (

        // este Todo es cada tarea q develve nueva
        // al boton hay q pasarle el dispatch como una prop
        <>
            <span style={{color: toDo.complete? "#AAA" : "#000"}}>{toDo.name}</span>

            
            <button onClick={()=>dispatch({
                type: ACTIONS.CHANGE_TASK,
                payload: {id:toDo.id}
            })}>Change Task</button>

            <button onClick={()=>dispatch({
                type: ACTIONS.DELETE_TASK,
                payload: {id:toDo.id}
            })}>Delete Task</button>

        </>
    )
}
