//-----------DOM-(document model object)-----------//
//Basics
console.log(document);
console.log(document.domain)
console.log(document.URL);
document.title += "(DOM)"; // MODIFICA EL TITULO DEL DOCUMENTO
console.log(document.title);

//Selectors
const family = document.getElementsByTagName("div");
console.log(family);

// array.from(family).forEach (item=> console.log(item)); //construyo un array con from
// for (let familyMember of family){
//     console.log(familyMember);
// }

const grandParent = document.getElementById("grandParent");
console.log(grandParent);

const parents = document.getElementsByClassName("parent");
const parent1 = parents[0]; //accedo al array 0 de parents y los guardo en una variable

const parent2 = document.getElementsByClassName("parent")[1];

const children = document.getElementsByClassName("child");
console.log(parent1,parent2);

// query selector

let element = document.querySelector(".grandParent div");
console.log(element);

parent1.style.backgroundColor = "#333"; //cambiar color directamente de js

grandParent.style.backgroundColor ="#dddd"; //cambiar color directamente a gris


// parents[1].parentNode.style.backgroundColor = "#333";


const changeBackground = (element,color) => element.style.backgroundColor = color;

changeBackground(parents[0],"green");
changeBackground(parent2.children[1], "blue");
changeBackground(children[1].parentNode.parentNode, "red");
changeBackground(grandParent.children[1].previousElementSibling.lastElementChild, "yellow");

//PROPIEDADES / PROPERTIES

console.log(children[2].innerHTML);
console.log(children[2].textContent);

console.log("Classlist: ", parent1.classList);
parent1.classList.remove("bg-dark");
parent1.classList.add("bg-red");
console.log("Classlist: ", parent1.classList);

parent1.classList.toggle("bg-red"); //alterna la clase, si no la tiene la incluye
                                    //si está, la elimina

parent1.setAttribute("name", "nombre-del-parent-1"); //cambia o sustutiye atributos como class, name del html

//Create /remove elements

let myDiv = document.createElement("div");  //crea un elemento en el html en este caso un div
myDiv.id = "new-div"; // crea nuevo div
myDiv.classList.add("child");//crea clase dentro del nuevo div
myDiv.textContent = "child 2.5"; //crea texto dentro del nuevo div

let myDiv2 = myDiv;

parent2.appendChild(myDiv2);
parent1.appendChild(myDiv); //mismo div con distintos nombres


myDiv2 = myDiv.cloneNode(true); //creamos un nuevo nodo a partir del original con true copia todo
parent2.appendChild(myDiv2);    //con false solo clona la etiqueta

myDiv2.textContent = "child 5";

myDiv.remove();

let MyDiv3 = myDiv.cloneNode(true);//creo variable y clono div
parent2.before(MyDiv3);
parent2.after(myDiv.cloneNode(true))


//crear una funcion que me devuelva un nodo nuevo y queme devuelva etiqueta e id

function createNode(label,id){
    let newNode = document.createElement(label);
    newNode.id = id;

    return newNode;
}

let newDive = createNode("div", "identificadador1");
let link = createNode("a", "mainLink");

link.textContent = "texto de enlace";
link.setAttribute("href", "https://google.com")

grandParent.appendChild(link);



//Events

const colorButton = document.getElementsByTagName("button")[0];

colorButton.addEventListener("click",function (event){
    // console.log(event);
    // console.log(event.target);
    // document.body.classList.toggle("bg-red");
    // console.log(event.target.tagName);

    if (event.ctrlKey){
        document.body.classList.toggle("bg-red");
    }
    console.log(`x: ${event.clientX} | y: ${event.clientY}`);
    console.log(`Alt: ${event.altKey}. Shift: ${event.shiftKey}. Ctrl: ${event.ctrlKey}`);
});

const emailInput = document.querySelector("#emailInput"); //queryselector  y el selector por ID te devuelven el elemto directo
emailInput.addEventListener("focus", inputListener);
emailInput.addEventListener("blur", inputListener);

function inputListener (e) {
    console.log("Tipo de evento", e.type)

    // if (e.type === "focus") {
    //     e.target.classList.add("bg-red"); 

    // }else if (e.type === "blur"){
    //     e.target.classList.remove("bg-blue");
    // }
   
}

const changeTitle = e => {
    document.querySelectorAll("h1")[2].textContent = emailInput.value;// seleccionames el texto del titulo y lo igualamos al avalor del emailinput

}

emailInput.addEventListener("keydown", inputListener);
emailInput.addEventListener("keyup", changeTitle);

const container = document.getElementById("container");

container.addEventListener("mouseover", inputListener);
container.addEventListener("mouseout", inputListener);

function coords(e){
    document.querySelectorAll("h1")[3].textContent = `x: ${e.clientX} | y: ${e.clientY}`;
}

document.body.addEventListener("mousemove", coords);