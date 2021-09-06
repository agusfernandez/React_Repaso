import { useEffect, useState } from "react";
import {Container, Row, Col, Button, Card} from 'react-bootstrap'


const Tabs = ()=>{
    const [tabs, setTabs]=useState("posts");

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${tabs}`)
        .then(response => response.json())
        .then(json => console.log(json))
        console.log("se renderiza");

        return(()=>{
            //esta funcion solo se va a ejecutar cuando el componente se desmonte.. lo que signific que para q el componente se vuelva a renderizar se debe desmontar
        }
        )
      
    }, [tabs])

    //ponemos al array para indicar q parametro se modifica
    return(
        <>
        <Container>
            <Row>
                <Col>               
                    <h3>{tabs}</h3>
                    <Button onClick={()=>setTabs("Posts")}>Posts</Button>
                    <Button onClick={()=>setTabs("Users")}>Users</Button>
                    <Button onClick={()=>setTabs("Comments")}>Comments</Button>
                    <h4>{tabs}</h4>
                </Col>

            </Row>
        </Container>
        </>
    )
}

export default Tabs;

