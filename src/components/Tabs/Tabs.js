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

                    <Card style={{ width: '100%', padding:'0' }} className="section-tab">
                    <Card.Body>
                            <Col>               
                                <h3 className="title">Los tabs son <span className="tabs-span">{tabs}</span></h3>
                                <h4 className="title-change">{tabs}</h4>
                                <Button onClick={()=>setTabs("Posts")} className="tabs-button">Posts</Button>{' '}
                                <Button onClick={()=>setTabs("Users")} className="tabs-button">Users</Button>{' '}
                                <Button onClick={()=>setTabs("Comments")} className="tabs-button">Comments</Button>{' '}
                            </Col> 
                        </Card.Body>

                    </Card>
              
        </>
    )
}

export default Tabs;

