//Hacer una peticion a la API de https://jsonplaceholder.typicode.com/comments
//Con el array que nos llegue,iremos rellenando nuestra ul con <li>
//primeros 20 elementos.

//Peticion
/*  const url = "https://jsonplaceholder.typicode.com/comments";

const ul = document.querySelector("ul");

function filList(array) {
    array.slice(0, 20).forEach(element => {
        ul.innerHTML += `<li>${element.name}</li>`;
    });
}


fetch(url)
    .then(response => {
        if (!response.ok) {
            throw Error("Hay algún problema con las respuesta:" + response.statusText) //throw corta la ejecucion//creamos un error
        }
        return response.json();
    })
    .then(data => {
        filList(data)
})
.catch(error => console.log(error)); 

// 6.1 Posts- paginacion del lado de cliente

//constante
 const posts_url = "https://jsonplaceholder.typicode.com/posts";
const page_size = 20;

//VARIABLES
let posts= [];
let currentPage= 1;

//selectores
const postsDiv = document.querySelector("#posts");
document.querySelectorAll(".previousPage").forEach(button =>button.addEventListener("click", changePage));
document.querySelectorAll(".nextPage").forEach(button =>button.addEventListener("click", changePage));

//utilidades

function fillDiv() { 
    const newPagePosts = paginate(posts, page_size, currentPage);
    postsDiv.innerHTML = "";
    newPagePosts.forEach(posts => postsDiv.innerHTML += `<h3>${posts.title}</h3><p>${posts.body}</p>`);
   
}

function changePage(element) { 
    if(element.target.className === "previousPage" && currentPage > 1) {
        currentPage--;
    }else if (element.target.className === "nextPage" && currentPage < posts.length / page_size){
        currentPage++;
    }
    fillDiv();
}

function paginate(array, page_size, page_number) {
    //https://stackoverflow.com/questions/42761068/paginate-javascript-array
    return array.slice((page_number - 1) * page_size, page_number * page_size);
    
}

fetch(posts_url)
.then(response => response.json())
.then(data => {
    posts = [...data];
fillDiv();
});

console.log(paginate(["hola", "code", "space", "eduard"],2,2 )); */

//6.2 - LOGUIN Y PAGINACION DESDE EL SERVIDOR

const login_url = "https://reqres.in/api/login";
const users_url = "https://reqres.in/api/users";

//selectores
const emailInput = document.querySelector("#inputEmail");
const passwordInput = document.querySelector("#inputPassword");
const usersList = document.querySelector("#usersList");
document.querySelector("#loginButton").addEventListener("click", login);


function login(event) {
    event.preventDefault();
    
    const userInfo = {
        email: emailInput.value,
        password: passwordInput.value
    };
    
    const config = {
        method:"POST",
        Headers:{ "conten-Type": "aplication/json" },
        body:JSON.stringify(userInfo) // en el body metemos el objeto que queremos enviar en tipo string
    };
    
    fetch(login_url, config)
    .then(response => response.json())
    .then(data => data.error ? alert(data.error) : fetchAllUsers());
    
};  
/* async function fetchAllUsers() {
    let response = await fetch(users_url);
    let data = await response.json();
    
    let users = [];

    for(let page = 1; page <= data.total_page; page++) {
        response = await fetch(`${users_url}?pages=${page}`);
        let newData = await response.json();
        users.concat(newData.data); // users: [...users, ...newData.data]; concatenar array de 2 alternativas
    }
    usersList.innerHTML="";
    users.forEach(user => usersList.innerHTML += `<li>${user.email}</li>`);
}

//Alternativa para recuperar todas las paginas de una API utilizando .then()
let users = [];

function fetchAllUsersv2(url) {
    fetch(url)
    .then(response => response.json())
    .then(newData => {
        users=users.concat(newData.data)

        if(newData.page < newData.total_pages){
            fetchAllUsersv2(`${users_url}?page=${newData.page+1}`)
        }else{
            usersList.innerHTML = "";
            users.forEach(user => usersList.innerHTML += `<li>${user.email}</li>`);
        }
    })
}

 */

