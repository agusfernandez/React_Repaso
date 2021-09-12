import './App.css';
import Counter from './components/Counter'
import {useState} from 'react';
import Tabs  from './components/Tabs';
import {Container, Row, Col, Button} from 'react-bootstrap';
import SlowComponent  from './components/SlowComponent';
import NameInput from './components/NameInput';
// pasar el prop

//hook useState

function App() {

  const mensajeBienvenida = <h2>Bienvenido al repaso</h2>
  //const nombre = "Agustina";

  // lo que paso por nombre en el first name tiene q llamarse igual q la variable
  // al nombde de la propiedad (fistname le puedo poner cualquier nombre pero es una buena practica  q la prop tenga el mismo nombre al que le voya  asignar)
  
  // si quiero cambiar el estado de un nombre cuando haga algo en un componente hijo entonce....
  const [nombre, setNombre] = useState("Agustina");

return (

  // le tengo q pasar el setNombre para que cambie el estado en el counter.js
    <>      
    <Container>
      <Row>
        {mensajeBienvenida}
        <h4> Otra forma de setear el estado del nombre: {nombre}</h4>
        <Counter nombre={nombre} setNombre={setNombre}/>
      </Row>
      <Row>
          <Col lg={4} style={{padding:'0'}}><Tabs/></Col>
          <Col lg={8} style={{padding:'0'}}><SlowComponent/></Col>

      </Row>
      <Row>
        <NameInput/>
      </Row>
    </Container>
    </>
  );
}

export default App;
