import List from "./List";
export default function Shop() { 

//Objeto (lista) con toda la informacion.
    const Shop = {
        electronics: [
            {id: 27, item: "Televisor", brand: "LG", modelo: "XP7302", price: 399},
            {id: 28, item: "Equipo Hi-FI", brand: "Samsung", modelo: "VF235", price: 179},
            {id: 29, item: "Televisor", brand: "Sony", modelo: "Bravia-173", price: 498},
        ],
        groceries: [
            {id: 30, item: "Galletas", brand: "María", price: 0.90},
            {id: 31, item: "Ensalada", brand: "Imizurra", price: 1.30},
            {id: 32, item: "Patatas", brand: "McKain", price: 0.90},
            {id: 33, item: "Pasta", brand: "Gallo", price: 0.90},
        ],
        pets: [
            {id: 34, item: "Croquetas para gato", brand: "Purina", price: 4.90},
            {id: 35, item: "Arena de gato", brand: "Limpior", price: 1.10},
        ]
    };
//renderizo la lista 3 veces.
//primer list tiene un array.
    return(
        <div>
            <List category="electronics" product={Shop.electronics} />
            <List category="groceries" product={Shop.groceries} />
            <List category="pets" product={Shop.pets} />
        </div>
    )
}

