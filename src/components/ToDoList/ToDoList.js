import {Container, Row, Col, Button} from 'react-bootstrap';
import {useState, useReducer} from 'react';
import toDoReducer from '../../reducers/toDoReducer';
import {ACTIONS} from '../../actions/toDoAction';
import ToDo from './ToDo';

const ToDoList = ()=>{
    const [name, setName] = useState("");

    // useReducer para guardar los eventos y pasarles las acciones q quiero q se disparen cuadno ejecuta una accion... le paso como primer parametro el reducer y como segundo e estado que quiero q inicie, y el cual es vacio. importo el toDoReducer q setee anteriormente
    const[toDos, dispatch] =useReducer(toDoReducer, []);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setName("");
        // cuanto se ejecute una action le pasamos algo 1) la action corresponfiente  y 2) el payload )la info q carga el usuario )
        dispatch({type:ACTIONS.ADD_TASK, payload:{name:name}})

    }

    return(
        <>
            <Container>
                <Row>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={name} onChange ={(e)=>setName(e.target.value)}>

                        </input>
                    </form>

                    {toDos.map((toDo)=>{
                        return <ToDo key={toDo.id} toDo={toDo} dispatch={dispatch}/>

                    })}
                </Row>
            </Container>
        </>
    )
}


export default ToDoList;