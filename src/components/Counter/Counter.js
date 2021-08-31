// le podemos pasar datos de otro lado y a ello se le llama props ( a los datos)
import { useState } from "react";

//{nombre} > le paso la propiedad nombre desestructurada ya que es un objeto
const Counter =({nombre, setNombre})=>{

    //const [count, setCount] = useState(8);

    // ademas de pasar el estado inicial tmb le podemos pasar un callback, ya que se va a acordar cual es el estado inicial
    const momentoInicial = ()=>{
        console.log ("renderizando una vez");
        return 5;
    }

    const [count, setCount] = useState(()=>momentoInicial());

    const increment=()=>{
        // el prevCount es una funcion q permite traer el estado viejo +1 y la estruciuracion de abajo indica q es el estado previo
         setCount((prevCount)=>prevCount+1);
         setNombre('Margarita');
     }
     const decrement=()=>{
        setCount((prevCount)=>prevCount-1);
        setNombre('Javier');

    }
    return(
        <>
            <h3>El nombre del desarrollador es {nombre}</h3>
            <button onClick={()=>increment()}>+</button>
            <span>{count}</span>
            <button onClick={()=>decrement()}>-</button>

        </>
    );
}

export default Counter;
