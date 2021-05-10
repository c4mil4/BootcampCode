// Creamos la coleccion customers insertando varios
db.customers.inserMany([
    {
        name: "Jane",
        lastname: "Donovan",
        address: "Carretera de Cádiz",
        email: "jdonovan@gmail.com",
        phoneNumber: 123980123,
        shoppingCart: []

    }, {
        name: "Peter",
        lastname: "Parker",
        address: "NY",
        email: "pparker@gmail.com",
        phoneNumber: 123123,
        shoppingCart: []

    }
]);

//Creamos la coleccion products insertando varios documentos del...
db.products.insertMany(
    [
        {
            name: "T-shirt",
            brand: "Adidas",
            category: "clothes",
            price: 15
        }, {
            name: "Smartphone",
            brand: "iphone",
            category: "electronics",
            price: 1200
        }, {
            name: "Macarrones",
            brand: "Carrefour",
            category: "food",
            price: 2
        }
    ]
);

const products = db.products.find().toArray();

db.customers.update(
    {name: "John"},
    {
        $set: {shoppingCart: [
            {
                product_id: products[0]._id,
                quantity: 3
            }, {
                product_id: products[1]._id,
                quantity: 1
            }
        ]}
    }
);

db.customers.update(
    {name: "Peter"},
    {
        $set: {shoppingCart: [products[2]._id]}
    }
);

//Para que sea mas comodo desde la shell,guardamos los clientes en un array.
const customers = db.customers.find().toArray();

//creamos la coleccion de las facturas creando varias con los respectivos indentificadores
db.invoice.insertMany(
    [
        {
            productId: products[1]._id,
            clientId: customers[0]._id,
            date: new Date()
        },
        {
            productId: products[2]._id,
            clientId: customers[1]._id,
            date: new Date()
        },
        {
            productId: products[0]._id,
            clientId: customers[2]._id,
            date: new Date()
        },
    ]
);

