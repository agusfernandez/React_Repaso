//useref te permiten persistir valores aunq se rerendirixen el componenet
import { useEffect, useState, useRef } from "react";
import {Container, Row, Col, Button, Card, FormControl} from 'react-bootstrap';


const NameInput =()=>{
    const [nombre, setNombre] = useState("");
    const renderName = useRef(1);

    useEffect (()=>{
        renderName.current = renderName.current +1;
    }, [nombre]);

    return(
        <>
            <Container>
                <Row>
                    <Card style={{ width: '100%' }} className="section-tab">
                        <Card.Body>
                            <Row>
                                <Col lg={4}>
                                    <FormControl name={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                                </Col>
                                <Col lg={4}>
                                    <span>Bienvenido {nombre}</span>
                                </Col>
                                <Col lg={4}>
                                    <span>El componente se renderizo  {renderName.current} veces</span>
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