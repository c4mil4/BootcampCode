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

function User(name, firstLastName, secondLastName, email, age, city) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.productsCount = 0;
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
/* 

//rellenar select con opciones.
for (let user of users) {
    const newOption = document.createElement("option")
    newOption.textContent = user.name;
    select.appendChild(newOption);
}*/
users.forEach(user => {
    const newOption = document.createElement("option")
    newOption.textContent = user.name;
    select.appendChild(newOption);
});

//Rellenar la lista con la informacion de los usuarios
function fillList(user) {

    list.innerHTML = "";

    for (const propertyName in user) {
        const value = user[propertyName];


        if (typeof value !== "function") {
            const newListItem = document.createElement("li");
            newListItem.innerHTML = `<b>${propertyName}:</b>${value}`;
            newListItem.classList.add("list-group-item");
            list.appendChild(newListItem);

            /* list.innerHTML += `<li class="list-group-item"><b>${propertyname}:</b> ${value}</li>`; */
        };
    };
};

//Estado inicial
fillList(users[0]);

function processProducts(e) {
    const selectedUser = users.find(user => user.name === select.value);

    e.target === incrementButton
        ? selectedUser.incrementProducts()
        : selectedUser.emptyProducts()
    
    fillList(selectedUser);
}

//añadir listeners = guardar informacion de los usuarios.

select.addEventListener("change", e => {
    const selectedUser = users.find(user => user.name === select.value);
    fillList(selectedUser);
});

incrementButton.addEventListener("click", processProducts);
emptyButton.addEventListener("click", processProducts);
