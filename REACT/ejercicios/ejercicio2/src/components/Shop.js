import List from "./List";
export default function Shop() { 

//Objeto (lista) con toda la informacion.
    const Shop = {
        electronics: [
            {id: 27, product: "Televisor", brand: "LG", modelo: "XP7302", price: 399},
            {id: 28, product: "Equipo Hi-FI", brand: "Samsung", modelo: "VF235", price: 179},
            {id: 29, product: "Televisor", brand: "Sony", modelo: "Bravia-173", price: 498},
        ],
        groceries: [
            {id: 30, product: "Galletas", brand: "María", price: 0.90},
            {id: 31, product: "Ensalada", brand: "Imizurra", price: 1.30},
            {id: 32, product: "Patatas", brand: "McKain", price: 0.90},
            {id: 33, producto: "Pasta", brand: "Gallo", price: 0.90},
        ],
        pets: [
            {id: 34, product: "Croquetas para gato", brand: "Purina", price: 4.90},
            {id: 35, product: "Arena de gato", brand: "Limpior", price: 1.10},
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

