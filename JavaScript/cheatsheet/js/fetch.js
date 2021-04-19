//Peticion
const url = "https://jsonplaceholder.typicode.com/users";

let promise = fetch(url);

console.log(1)
promise.then(response => console.log(response)) //then siempre se aplica sobre una promesa cuando esta se resuelva y espera una funcion callback
console.log(2)

console.log(promise);

/* function printNames(array) {
    array.forEach(object => console.log(object.address.city));
    
}
*/
const printNames = array => array.forEach(user => console.log(user.name));
const printCities = array => array.forEach(user => console.log(user.address.city));
const printLats = array => array.forEach(user => console.log(user.address.geo.lat));

/* fetch(url).then(r => r.json()).then(data => console.log(data));

fetch(url)
.then(response =>{
    console.log(response);
    if (!response.ok) {
        throw Error("Hay algún problema con las respuesta:" + response.statusText) //throw corta la ejecucion//creamos un error
    }
    return response.json();
    })
    .then(data => {
        printNames(data);
        printCities(data);
        printLats(data);

    }).catch(error => console.log(error)); */

//Async - await - Alternativa a then

async function requestURL(url) {
    console.log(2);
    const response = await fetch(url);
    const data = await response.json();

    printNames(data);
    printCities(data);
    printLats(data);

    console.log(4)
}

console.log(1);
requestURL(url);
console.log(3);

//Peticion con metodos HTTP POST en lugar de GET

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

const newPost = {
    title:"mi titulo",
    body: "mi cuerpo mi publicación"
}

const http = {
    method: "POST",
    headers: {
        "conten-type": "application/json"
    },
    body: JSON.stringify(newPost)
};

fetch(POST_URL, http)
    .then(response => response.json())
    .then(data => console.log(data))