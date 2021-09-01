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

    const [count, setCount] = useState(()=>momentoInicial()); // le paso el callback
    const [state, setState] = useState({
            inicio:0,
            name: 'Agustina'
    })

    const iniciar= state.inicio;
    const name = state.name;

    // otro tipo de hook
    const [change, setChange] =useState (0);
    const [surname, setSurname] = useState("Fernandez");


    const increment=()=>{
        // el prevCount es una funcion q permite traer el estado viejo +1 y la estruciuracion de abajo indica q es el estado previo
         setCount((prevCount)=>prevCount+1);
         setNombre('Margarita');
     }
     const decrement=()=>{
        setCount((prevCount)=>prevCount-1);
        setNombre('Javier');
    }

    ///////////////////////////////
    const incrementTwo=()=>{
        setState({
            ...state,
            //entras  al prop inicio
           inicio: state.inicio + 1
        })

     }
     const decrementTwo=()=>{
        setState({
            ...state,
           inicio: state.inicio - 1
        })
    }


    ////////////////////////////////
    const incrementThree=()=>{
        setChange(prevCount => prevCount +1)

     }
     const decrementThree=()=>{
        setChange(prevCount => prevCount -1)
    }




    return(
        <>
            <h3>El nombre del desarrollador es {nombre}</h3>
            <button onClick={()=>increment()}>+</button>
            <span>{count}</span>
            <button onClick={()=>decrement()}>-</button>

            <h3>Otro tipo de renderizado</h3>
            <button onClick={()=>incrementTwo()}>+</button>
            <span>{iniciar}</span>
            <span>{name}</span>
            <button onClick={()=>decrementTwo()}>-</button>

            <h3>Dos hooks</h3>
            <button onClick={()=>incrementThree()}>+</button>
            <span>{change}</span>
            <span>{surname}</span>
            <button onClick={()=>decrementThree()}>-</button>


        </>
    );
}

export default Counter;
