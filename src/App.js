import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
// import { Container, Row } from "react-bootstrap";
// pasar el prop

function App() {

  const mensajeBienvenida = <h2>bienvenido al repaso</h2>
  const nombre = "Agustina";
// lo que paso por nombre en el first name tiene q llamarse igual q la variable
// al nombde de la propiedad (fistname le puedo poner cualquier nombre pero es una buena practica  q la prop tenga el mismo nombre al que le voya  asignar)
  return (
    <>      
    {mensajeBienvenida}
  
    <Counter firstName={nombre}/>
    </>
  );
}

export default App;
