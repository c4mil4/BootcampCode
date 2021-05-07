import {useState} from 'react';
import FirstComponent from "./FirstComponent";

export default function counter() {
    //const state = userState(0); //el 0 es el valor inicial
    //const count = state[0];
    //const setCount= state[1];

    const [count, setCount] = useState(0);

    const handleClick = function () {
        if (count < 10) { 
        //setCount(count + 1);
        //setCount(count + 1);// actualiza con el mismo valor
        setCount(currentCount => currentCount + 1);//si funciona
        setCount(currentCount => currentCount + 1);
    };

    return (
        <div>
            <FirstComponent count={count}/>
            <p>Has hecho click {count} veces.</p>
            <button onClick={handleClick}>Subir</button>
            <button onClick={() => count > 0 && setCount(count - 1)}>Bajar</button>
            <button onClick={function () {setCount(count(0))}}> Reset</button>
        </div>
    )
}}