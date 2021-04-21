import {useState} from 'react';

export default function counter() {
    //const state = userState(0); //el 0 es el valor inicial

    //const count =state[0]
    //const setcount= state[1]

    const [count, setCount] = useState(0);

    const handleClick=function(evento) {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Has hecho click {count} veces.</p>
            <button onClick={handleClick}>Hazme click</button>
            <button onClick={() => setCount(count - 1)}>Bajar</button>
            <button onClick={() => setCount(count(0))}> Reset</button>
        </div>
    )
}