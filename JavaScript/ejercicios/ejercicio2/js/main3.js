
const user = [{
    name: "Fran",
    firstLasrName: "Gomez",
    secondLastName: "Fernandez",
    email: "fgomez@gmail.com",
    age: "45",
    city: "Malaga",
},
{
    name: "Fran",
    firstLasrName: "Gomez",
    secondLastName: "Fernandez",
    email: "fgomez@gmail.com",
    age: "45",
    city: "Malaga",
}
];

function User(name, firstLastName, secondLastName, email, age, city, productsCount) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.productsCount = productsCount;
    this.incrementProducts = function () {
        this.productsCount++;
    };
    this.emptyProducts = function () {
        this.productsCount = 0;
    }
}
//Data
const users = [
    new User("Fran", "gomez", "fernandez", "fgomez@gmail.com", 45, " Malaga"),
    new User("Lucía", "García", "Ruíz", "lgarcia@gmail.com", 41, "Madrid"),
    new User("María", "Núñez", "Coronado", "mnunez@gmail.com", 18, "Albacete"),
];

//Selectors
const select = document.querySelector("#userSelect");
const list = document.querySelector("#userInfo");
const incrementButton = document.querySelector("#incrementButton");
const emptyButton = document.querySelector("#emptyButton");

for (let user of users) {
    const newOption = document.createElement("option")
    newOption.textContent = user.name;
    select.appendChild(newOption);
}
console.log();
console.log(user.name);


