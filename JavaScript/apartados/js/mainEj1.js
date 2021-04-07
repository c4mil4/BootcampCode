//apartado 1 - Partimos de un html con un div vacio.
//Con JS añadir dos elementos p con un texto dentro.

const div = document.getElementsByClassName("contenedor")[0];

const p = document.createElement("p");

p.textContent = "Parrafo 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sint voluptates neque expedita quod quae libero quas, molestias atque alias?"; //le doy el texto

div.appendChild(p);
const p2 = document.createElement("p");
p2.textContent = "Parrafo 2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sint voluptates neque expedita quod quae libero quas, molestias atque alias?";
div.appendChild(p2)

//apartado 2 alpulsar un boton , cambiar el color del fondo del cuerpo de html.
const button = document.querySelector("button");
button.addEventListener("click", function () {
    document.body.style.backgroundColor = ("blueviolet");
    //document.querySelector("body").style.background = "red"; //alternativa manual
});

// apartado 3

// const li = document.querySelector(".liUlr");
// const li = document.getElementsByClassName(".liUlr");
const liUrl1 = document.querySelector("#liUrl1");
liUrl1.addEventListener("click", function (event){
    document.querySelector("#imgChange").src = this.innerHTML;
});

const liUrl2 = document.querySelector("#liUrl2");
liUrl2.addEventListener("click", function (event){
    document.querySelector("#imgChange").src = this.innerHTML;
});

const liUrl3 = document.querySelector("#liUrl3");
liUrl3.addEventListener("click", function (event){
    document.querySelector("#imgChange").src = this.innerHTML;
});

//apartado 3 al pusar enlace, cambiara la imagen

/* const listItems = document.getElementsByTagName("li");
const image = documen.querySelector("img");

const changeImage = (e) => image.src = e.target.textContent;

listItems[0].addEventListener("click", changeImage);
listItems[1].addEventListener("click", changeImage);
listItems[2].addEventListener("click", changeImage);

 */


// apartado 4

/* const textButton = document.getElementsByTagName("button")[0];
textButton.addEventListener("click", function (event){  
}) */

/* const inputCopyText = document.getElementById( "inputCopyText")/ */
/* const pCopyText = document.getElementById( "pCopyText"); */
const buttonCopyText = document.getElementById("buttonCopyText");

buttonCopyText.addEventListener("click", function (event) {
    const inputValueCopyText = document.getElementById("inputCopyText").value;
    document.getElementById("pCopyText").innerHTML = inputValueCopyText;

})
//apartado 4.2
const inputCopyTextPulsation = document.querySelector("#inputCopyTextPulsation");

inputCopyTextPulsation.addEventListener("keypress", function (event) {
    const inputValueCopyTextPulsation = document.querySelector("#inputCopyTextPulsation").value;
    document.querySelector("#pCopyTextPulsation").innerHTML = inputValueCopyTextPulsation;
})

//apartado 5

const buttonTextarea = document.querySelector("#textareabutton");

buttonTextarea.addEventListener("click", function (event) {
    const textareValue = document.querySelector("textarea").value;
    if (textareValue.length > 15){
        document.querySelector("#ptextareaUp").innerHTML = textareValue;
    }else {
        alert("Debe ser mayor a 15 caracteres");
    }
});

//apartado 6
 
const buttonTextPlaceholder = document.querySelector("#buttonTextPlaceholder");

buttonTextPlaceholder.addEventListener("click", function (event){
    const inputValue = document.querySelector("#inputTextPlaceholder").value;
    
    const resto = inputValue % 2;
    if (resto != 0 ) {
    document.querySelector("#inputTextPlaceholder").style.border = "thick solid red";
    }
});

// Apartado 7

// const ul = document.getElementsByTagName("ul")[0];
const ul = document.querySelector('#ulAddElements');
for (let i = 0; i < 10 ; i++) {
    const li = document.createElement("li")
    li.innerHTML = `element ${i}`;
    ul.appendChild(li);  
};

//Apartado 8

const buttonUrl = document.querySelector("#buttonUrl");

buttonUrl.addEventListener("click", function (event){
    const aTarget = document.querySelector("#aUrl").target;
    if (aTarget === "_self") {
        document.querySelector("#aUrl").target = "_blank" ;
    }else{
        document.querySelector("#aUrl").target = "_self"
    }
})

//Apartado 9

const selectOpcion = document.querySelector('#selectColour');

selectOpcion.addEventListener("change", function (event) {
    const selectOpcionValue = document.querySelector('#selectColour').value;
    document.querySelector('#paragraph').style.color = selectOpcionValue;
}); 

//Apartado 10: Incluir un botón que al pulsarlo genere un número aleatorio y mantenga en una lista actualiza el número 
//de elementos que se han generado, los que son pares y los que son impares.

const currentRandom = document.getElementById("currentRandom");
const totalNumbers = document.getElementById("totalNumbers");
const oddNumbers = document.getElementById("oddNumbers");
const eventNumbers = document.getElementById("eventNumbers");

document.getElementById("randomButton").onclick = () =>{
    const randomNumber = Math.floor(Math.random() * 100);//Alternativa: parseInt
    currentRandom.textContent = randomNumber;

    totalNumbers.textContent++; //totalNumbers.textContent = Number(totalNumbers.textContent) + 1; //todo lo que se adquiera de text se devuelve en strings
    randomNumber % 2 === 0 ? eventNumbers.textContent++ : oddNumbers.textContent++;
};

//Aparatdo 12: Crearemos una clase .btn en CSS que le de ciertos estilos a un botón. Al hacer click en el botón haremos 
//“toggle” o alternaremos esa clase, es decir, si está presente la quitaremos y si no está, la añadiremos.
document.querySelector("#toggler").onclick = (e) => e.target.classList.toggler("btn");

//Apartado extra: El código siguiente, añade un eventListener a cada botón para que cuando se haga click en cada uno de 
//ellos, le cambie el backgroundColor.Refactorizar el código para hacerlo con un único forEach.

let buttons = document.getElementsByClassName('btn-green'); //Devuelve HTMLCollection.

buttons[0].addEventListener('click', () => {
    buttons[0].style.backgroundColor = "green";
});

buttons[1].addEventListener('click', () => {
    buttons[1].style.backgroundColor = "green";
});

buttons[2].addEventListener('click', () => {
    buttons[2].style.backgroundColor = "green";
});

//Solución 1

/* Array.from(buttons).forEach(button => button.onclick = e => e.target.style.backgroundColor = "green" ); */ //despues del igual espera una funcion.

//Solución 1
Array.from(buttons).forEach(button =>{
    
    button.addEventListener("click", function (e) {
        e.target.style.backgroundColor = "green";
    });
}); 

/* buttons = document.querySelector(".btn-green");
 */



//solucion alternativa con arrow function. del apatado 2
/* button.addEventListener("click", () => document.body.style.background = "violet"); */


/* const contenedor = document.getElementById("contenedor");    
const parrafo1 = document.getElementById("contenedor");
const parrafo2 = document.getElementById("contenedor"); */