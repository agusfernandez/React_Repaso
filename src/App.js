import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import {useState} from 'react';

// import { Container, Row } from "react-bootstrap";
// pasar el prop

//hook useState

function App() {

  const mensajeBienvenida = <h2>bienvenido al repaso</h2>
  //const nombre = "Agustina";

  // lo que paso por nombre en el first name tiene q llamarse igual q la variable
  // al nombde de la propiedad (fistname le puedo poner cualquier nombre pero es una buena practica  q la prop tenga el mismo nombre al que le voya  asignar)
  
  // si quiero cambiar el estado de un nombre cuando haga algo en un componente hijo entonce....
  const [nombre, setNombre] = useState("Agustina");

return (

  // le tengo q pasar el setNombre para que cambie el estado en el counter.js
    <>      
    {mensajeBienvenida}
    <h2> Otra forma de setear el estado del nombre: {nombre}</h2>
    <Counter nombre={nombre} setNombre={setNombre}/>
    </>
  );
}

export default App;
