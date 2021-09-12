import {useState, useMemo} from 'react';
import {Container, Row, Col, Button, InputGroup, FormControl, Card} from 'react-bootstrap';


//componente q va hacer lento en renderizar
const SlowComponent = ()=>{
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = useMemo(()=>{
        return slowFunction(number); 
    }, [number]);

    const themeStyle ={
        backgroundColor: dark ? "blue": "white",
        color: dark ? "white": "blue"
    }
    
    return (
        <>
         
                  <Card style={{ width: '100%' }} className="section-tab">
                        <Card.Body>
                            <Row>
                                <Col lg={4} sm={12}>
                                    <FormControl type="number" value={number} onChange= {(e)=> setNumber (parseInt(e.target.value))}/>
                                </Col>
                                <Col lg={2} sm={12}>
                                    <Button onClick={()=>setDark((prevDark) => !prevDark)}>Cambiar Tema</Button>
                                </Col>
                                <Col lg={6} sm={12}>
                                    <div style={themeStyle}>{doubleNumber}</div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
        </>
    );
}

const slowFunction = (numero)=>{
    for(let i =0; i<=100; i++ ){}
    return numero * 2;
}

export default SlowComponent; 