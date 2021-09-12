//useref te permiten persistir valores aunq se rerendirixen el componenet
import { useEffect, useState, useRef } from "react";
import {Container, Row, Col, Button} from 'react-bootstrap';


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
                    <Col>
                        <input name={nombre} onChange={(e)=>setNombre(e.target.value)}></input>
                    </Col>
                    <Col>
                        <span>Bienvenido {nombre}</span>
                    </Col>
                    <Col>
                        <span>El componente se renderizo  {renderName.current} veces</span>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default NameInput;