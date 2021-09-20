//useref te permiten persistir valores aunq se rerendirixen el componenet
import { useEffect, useState, useRef } from "react";
import {Container, Row, Col, Button, Card, FormControl} from 'react-bootstrap';


const NameInput =()=>{
    const [nombre, setNombre] = useState("");
    const renderName = useRef(1);
    const useFocus = useRef();
// creo una constante del estado anterior //esto con el useRef lo puedo hacer
    const prevName = useRef('');

    useEffect (()=>{
        renderName.current = renderName.current +1;
        prevName.current = nombre;
    }, [nombre]);

    // permito hacer foco a un input a traves del DOM
    function focus(){
         useFocus.current.focus();
    }

    // guardar el estado anterior

    return(
        <>
            <Container>
                <Row>
                    <Card style={{ width: '100%' }} className="section-tab">
                        <Card.Body>
                            <Row>
                                <Col lg={4}>
                                    <FormControl ref ={useFocus} name={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                                    <Button onClick ={focus}>Focus</Button>
                                </Col>
                                <Col lg={4}>
                                    <span>Bienvenido {nombre} y adios a {prevName.current}</span>
                                </Col>
                                <Col lg={4}>
                                    <span className="render-text">El componente se renderizo  {renderName.current} veces</span>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )
}

export default NameInput;