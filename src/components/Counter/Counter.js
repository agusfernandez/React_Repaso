// le podemos pasar datos de otro lado y a ello se le llama props ( a los datos)
import { useState } from "react";

//{nombre} > le paso la propiedad nombre desestructurada ya que es un objeto
const Counter =({nombre, setNombre})=>{

    const [count, setCount] = useState(8);
    const increment=()=>{
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
