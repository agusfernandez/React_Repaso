// le podemos pasar datos de otro lado y a ello se le llama props ( a los datos)
import { useState } from "react";

const Counter =(props)=>{

    const [count, setCount] = useState();
    const increment=()=>{
        setCount((prevCount)=>prevCount+1);
    }
    return(
        <>
            <h3>El nombre del desarrollador es {props.firstName}</h3>
        
        
        </>
    );
}

export default Counter;
