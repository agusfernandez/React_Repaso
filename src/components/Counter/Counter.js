// le podemos pasar datos de otro lado y a ello se le llama props ( a los datos)
import { useState } from "react";
import {Container, Row, Col, Button, Card} from 'react-bootstrap';

//{nombre} > le paso la propiedad nombre desestructurada ya que es un objeto
const Counter =({nombre, setNombre})=>{

    //const [count, setCount] = useState(8);

    // ademas de pasar el estado inicial tmb le podemos pasar un callback, ya que se va a acordar cual es el estado inicial
    const momentoInicial = ()=>{
        console.log ("renderizando una vez");
        return 5;
    }

    const [count, setCount] = useState(()=>momentoInicial()); // le paso el callback
    const [state, setState] = useState({
            inicio:0,
            name: 'Agustina'
    })

    const iniciar= state.inicio;
    const name = state.name;

    // otro tipo de hook
    const [change, setChange] =useState (0);
    const [surname, setSurname] = useState("Fernandez");


    const increment=()=>{
        // el prevCount es una funcion q permite traer el estado viejo +1 y la estruciuracion de abajo indica q es el estado previo
         setCount((prevCount)=>prevCount+1);
         setNombre('Margarita');
     }
     const decrement=()=>{
        setCount((prevCount)=>prevCount-1);
        setNombre('Javier');
    }

    ///////////////////////////////
    const incrementTwo=()=>{
        setState({
            ...state,
            //entras  al prop inicio
           inicio: state.inicio + 1
        })

     }
     const decrementTwo=()=>{
        setState({
            ...state,
           inicio: state.inicio - 1
        })
    }


    ////////////////////////////////
    const incrementThree=()=>{
        setChange(prevCount => prevCount +1)

     }
     const decrementThree=()=>{
        setChange(prevCount => prevCount -1)
    }




    return(
        <>
        <Container>
            <Row>
                <Col lg={4} sm={12} style={{ padding: '0' }}>
                    <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <h5>El nombre del desarrollador es {nombre}</h5>
                        <Button onClick={()=>increment()}>+</Button>{' '}
                        <Button onClick={()=>decrement()}>-</Button>{' '}
                        <span>{count}</span>
                    </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} sm={12} style={{ padding: '0' }}>
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                            <h5>Otro tipo de renderizado</h5>
                            <Button onClick={()=>incrementTwo()}>+</Button>{' '}
                            <Button onClick={()=>decrementTwo()}>-</Button>{' '}
                            <span>{iniciar}</span>
                            <span>{name}</span>
                    </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} sm={12} style={{ padding: '0' }}>
                    <Card style={{ width: '100%' }}>
                    <Card.Body>
                            <h5>Dos hooks</h5>
                            <Button onClick={()=>incrementThree()}>+</Button>{' '}
                            <Button onClick={()=>decrementThree()}>-</Button>{' '}
                            <span>{change}</span>
                            <span>{surname}</span>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

        </>
    );
}

export default Counter;
