import List from "./List";
//Creamos la funcion de shop y le añadimos el array de objetos con el que queremos trabajar
export default function Shop () { 

//Objeto (lista) con toda la informacion.
    const shooping = {
        Electronics: [
            {id: 27, name: "Televisor", brand: "LG", modelo: "XP7302", price: 399},
            {id: 28, name: "Equipo Hi-FI", brand: "Samsung", modelo: "VF235", price: 179},
            {id: 29, name: "Televisor", brand: "Sony", modelo: "Bravia-173", price: 498},
        ],
        Groceries: [
            {id: 30, name: "Galletas", brand: "María", price: 0.90},
            {id: 31, name: "Ensalada", brand: "Imizurra", price: 1.30},
            {id: 32, name: "Patatas", brand: "McKain", price: 0.90},
            {id: 33, name: "Pasta", brand: "Gallo", price: 0.90},
        ],
        Pets: [
            {id: 34, name: "Croquetas para gato", brand: "Purina", price: 4.90},
            {id: 35, name: "Arena de gato", brand: "Limpior", price: 1.10},
        ]
    };
    //accedemos a cada objeto a través de la constante shopping con el punto segundo del 
    return(
        <div>
            <List category="electronics" products={shooping.Electronics} />
            <List category="groceries" products={shooping.Groceries} />
            <List category="pets" products={shooping.Pets} />
        </div>
    )
}

