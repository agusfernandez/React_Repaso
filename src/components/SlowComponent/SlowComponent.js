import {useState, useMemo} from 'react';

//componente q va hacer lento en renderizar
const SlowComponent = ()=>{
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = useMemo(()=>{
        return slowFunction(number); 
    }, [number]);

    const themeStyle ={
        backgroundColor: dark ? "black": "white",
        color: dark ? "white": "black"
    }
    
    return (
        <>
            <input type="number" value={number} onChange= {(e)=> setNumber (parseInt(e.target.value))}></input>
            <button onClick={()=>setDark((prevDark) => !prevDark)}>Cambiar Tema</button>
            <div style={themeStyle}>{doubleNumber}</div>
        </>
    );
}

const slowFunction = (numero)=>{
    for(let i =0; i<=100; i++ ){}
    return numero * 2;
}

export default SlowComponent; 