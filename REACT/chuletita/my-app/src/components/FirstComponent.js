import {Fragment} from "react";
import ProtoTypes from "props-types";

//los propr se reciben por argumentos de la funcion/componente
export default function FirstComponent(props) {

    //console.log(props, typeof props)//props es un objeto
    //console.log(props.title)//Imprime solo el titulo y pasarlo desde el padre usar {props.title}

    const myFunction= function (bookID) {
        return function (event) {
            console.log(bookID, event.target);
        };    
    };

    const mySimpleFunction = function(event) {
        //process event
        console.log(event);
    }

    return (
        <Fragment>
            <h3>{props.title}</h3>
            <small>{props.date ? props.date : "No hay fecha"} </small>
            <p>Lorem ipsum dolor sit amet.</p>
            <button onClick={mySimpleFunction()}>Eliminar book2!</button>
            <button onClick={myFunction(1)}>Eliminar Book 1!</button>
            <button onClick={myFunction(2)}>Eliminar Book 2!</button>
        </Fragment>
    )
}

FirstComponent.defaultProps = {
    title: "Sin titulo",
    data: "Sin fecha",
    products: [],
}

FirstComponent.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.string,
    products: PropTypes.array,
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
