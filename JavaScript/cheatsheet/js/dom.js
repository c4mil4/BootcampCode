//Dom (documen object mode)
//Basics
console.log(document);
console.log(document.domain);
console.log(document.URL);
// document.title = "cheatsheet javascript (dom)";
document.title += "(DOM)";// modo simplificado con el +=
console.log(document.title);

//Selectors
const family = document.getElementsByTagName("div");
console.log(family);

const grandParent = document.getElementById("grandparent");
console.log(grandParent)

const parents = document.getElementsByClassName("parent"); //primo de array, agarra todos los elementos
const parent1 = parents[0];                               // de la clase y devuelve un html colect
const parent2 = document.getElementsByClassName("parent")[1];                                                        

console.log(parent1, parent2);

const children =document.getElementsByName("child");
console.log(children);

let element = document.querySelector(".grandparent div");
console.log(element);

const changeBackground = (element, color) => element.style.backgroundColor = color;

/* changeBackground(children[0], "#333");
changeBackground(parent1, "red");
changeBackground(parent2.children[1], "pink");
changeBackground(children[1].parentNode.parentNode, "#ddd"); */

//nunca utilizamos acceso tan complejoscomo el siguente
//changeBackground(parent1.children[1].previousElementSibling, "#ddd") //saltando elementos

//"grandParent.children[1].previousElementSibling.lastElementChild,"

//propiedades - properties
//grandParent.innerHTML = "<h1>HOLA FUTURO</H1>"; //elemntos creados desde js
//children[0].innerHTML= "child 1 v2";
//console.log(children[0].innerHTML); // agrega etiqueta HTML
//console.log(children[0].textContent);// ignora etiqueta HTML

console.log("Classlist: ", parent1.classList);// class para alternar las clases
parent1.classList.remove("bg-dark");
parent1.classList.add("bg-blueviolet");
console.log("Classlist: ", parent1.classList);

parent1.classList.toggle("bg-blueviolet");
//toggle: alterna la clase, si no está,la incluye,si està ,la elimina.


parent1.setAttribute("name", "nombre-parent1"); //cuando lleva atributo es del html

console.log();
// create / remove elements
let myDiv = document.createElement("div");
myDiv.id= "new-Div";
myDiv.classList.add("child");
myDiv.textContent = "child 2.5";

let myDiv2 = myDiv;

parent2.appendChild(myDiv2); //un nodo no puede existir en dos sitios a la vez
parent1.appendChild(myDiv); // mismo nodo con dos nombres diferentes

myDiv2 = myDiv.cloneNode(true); //creamos un nuevo nodo a partir del original.
parent2.appendChild(myDiv2);
myDiv2.textContent = "child 5";

myDiv.remove();//eliminar nodo

let myDiv3 = myDiv.cloneNode(true);
parent2.before(myDiv3);

parent2.after(myDiv.cloneNode(true));

//crear una funcion que me devuelva un nodo nuevo y que reciba etiqueta e ID.

function createNode(tag, id) {
    let newNode = document.createElement(tag);
    newNode.id = id;
    return newNode;
}

let newDiv = createNode("div", "identificador1");
let link = createNode("a", "mainLink");

link.textContent = "texto del enlace";
link.setAttribute("href", "http://google.com"); // atributo href y el valor
grandParent.appendChild(link);



// eventos- event listeners = movimientos de raton,teclas. cada vez que se ejecuta el evento se ejecuta la funcion que està en espera
//elemento ,llamar argumento,pasarla a la funcion que le quiera asignar.

// Events

const colorButton = document.getElementsByTagName("button")[0];//hey variable colorbutton agarra el documento del elemento de la etiqueta con nombre button.

colorButton.addEventListener("click", function (event){  //variable,mas argumento mas funcion y sus argumentos.
    console.log(event);
    console.log(event.target);
    document.body.classList.toggle("bg-red");
    console.log(event.target.tagName);
    
    if (event.ctrlKey) {
        document.body.classList.toggle("bg.red");
    }
    console.log(`X: ${event.clientX} | Y: ${event.clientY}`); //cuando el boton se ejecutete mostrara las cordinadas del raton.
    console.log(`Alt: ${event.altKey}. Shift: ${event.shiftKey}. Ctrl: ${event.ctrlKey}`); //3 propiedades del evento.
});

const emailInput = document.querySelector("#emailInput"); 

emailInput.addEventListener("focus", inputListener);
emailInput.addEventListener("blur", inputListener); //para validar input

function inputListener(e) {
    console.log("Tipo de evento:", e.type);

   /*  if (e.type === "focus") {
        e.target.classList.add ("bg-blueviolet");

    } else if (e.type === "blur") {
        e.target.classList.remove("bg-blueviolet");
    } */
}

const changeTitle = e => {
    document.querySelectorAll("h1")[2].textContent = emailInput.value; //propiedad value importante
}

emailInput.addEventListener("keydowon", inputListener);
emailInput.addEventListener("keyup", changeTitle);

const container = document.getElementById("container");

container.addEventListener("mouseover", inputListener);
container.addEventListener("mouseout", inputListener);

function coords(e) {
    conts h1.document.querySelectorAll("h1")[3];
    h1.textContent = `X: ${e.clientX} | Y: ${e.clientY}`;
}

 document.body.addEventListener("mousemove", coords);

















/* //crear una funcion que me devuelva un nodo nuevo y que reciba etiqueta e ID.

function crearNode(label, id) {
    let newNode = document.createElement(label)
    newNode.id = id; 
    return newNode;
}

let newDiv = createNode("div", "identificador1")
let table = createNode("table", "identificador2")

parent2.appendChild(newDiv);
parent2.appendChild(table); */





/* function devuelveArray () {
    const array = [10,20,30,40];
    return Array;
}

array[0];
devuelvoArray()[0]
devuelvoArray().forEche[0]

 */














//Array.from(family).forEach(item => console.log(item)); //construyo un array desde html 
//for (let familyMember of family) {
//    console.log(familyMember);
//}