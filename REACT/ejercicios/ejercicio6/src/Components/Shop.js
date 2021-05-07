import ShoppingList from "./ShoppingList";

export default function Shop() {

    //Objeto (lista) con toda la informacion.
    const shooping = {
        electronics: [
            { id: 27, name: "Televisor", brand: "LG", modelo: "XP7302", price: 399 },
            { id: 28, name: "Equipo Hi-FI", brand: "Samsung", modelo: "VF235", price: 179 },
            { id: 29, name: "Televisor", brand: "Sony", modelo: "Bravia-173", price: 498 },
        ],
        groceries: [
            { id: 30, name: "Galletas", brand: "María", price: 0.90 },
            { id: 31, name: "Ensalada", brand: "Imizurra", price: 1.30 },
            { id: 32, name: "Patatas", brand: "McKain", price: 0.90 },
            { id: 33, name: "Pasta", brand: "Gallo", price: 0.90 },
        ],
        pets: [
            { id: 34, name: "Croquetas para gato", brand: "Purina", price: 4.90 },
            { id: 35, name: "Arena de gato", brand: "Limpior", price: 1.10 },
        ]
    };

    return (
        <div>
            <ShoppingList category="electronics" products={shooping.electronics} />
            <ShoppingList category="groceries" products={shooping.groceries} />
            <ShoppingList category="pets" products={shooping.pets} />
        </div>
    )
}