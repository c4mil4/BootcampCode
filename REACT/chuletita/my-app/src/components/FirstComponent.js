import { Fragment } from "react";

//los propr se reciben por argumentos de la funcion/componente
export default function FirstComponent(props) {

    console.log(props, typeof props)//props es un objeto
    //console.log(props.title)Imprime solo el titulo y pasarlo desde el padre usar {props.title}

    return (
        <Fragment>
            <h3>{props.title}</h3>
            <small>{props.date ? props.date : "No hay fecha"} </small>
            <p>Lorem ipsum dolor sit amet.</p>
            <button>Click!</button>
        </Fragment>
    )
}

//export default FirstComponent: //ALTERNATIVA
//solo se puede un export default por archivo

//No hace falta exportar con fragment abreviado
function SecondComponent() {
    return( 
        <> 
            <h1>Soy otro componente</h1>
        </>
    )
}

function ThirdComponent() {
    return( 
        <div> 
            <h1>Soy otro componente</h1>
        </div>
    )
}

export {SecondComponent, ThirdComponent};
