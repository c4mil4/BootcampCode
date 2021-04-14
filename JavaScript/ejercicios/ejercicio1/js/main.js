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
const liUrl1 = document.querySelector("#liUrl1");// creo una constante y selecciono del documento con el queryselector el elemento que tiene ID:liurl1
liUrl1.addEventListener("click", function (event){//a la constante le añedo el evento click con una funcion 
    document.querySelector("#imgChange").src = this.innerHTML;// del documento html selecciono el elemento que tiene ID imgChange,el atributo src
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
const buttonCopyText = document.getElementById("buttonCopyText");// creo una constante y selecciono del documento un elemento con id buttoncopytext

buttonCopyText.addEventListener("click", function (event) { //a esa constante le añado un evento click con funcion
    const inputValueCopyText = document.getElementById("inputCopyText").value;// creo una constante y selecciono del documento un elemento con ID inputcopytext para que me guarde el valor.
    document.getElementById("pCopyText").innerHTML = inputValueCopyText;//del documento HTML selecciono un elemento con ID pcopytext,contenido HTML que tiene adentro y le asigno el valor de la constante

});
//apartado 4.2
const inputCopyTextPulsation = document.querySelector("#inputCopyTextPulsation");// creo una constante y selecciono del documento un elemento con ID

inputCopyTextPulsation.addEventListener("keypress", function (event) { //a la constante le agrego un evento keypress con funcion
    const inputValueCopyTextPulsation = document.querySelector("#inputCopyTextPulsation").value;//creo una constante y selecciono del documento un elemento que tiene ID y guardo el valor
    document.querySelector("#pCopyTextPulsation").innerHTML = inputValueCopyTextPulsation;//del documento HTML selecciono un elemnto con ID,contenido HTML que tiene adentro y le asigno el valor de la constante
});

//apartado 5

const buttonTextarea = document.querySelector("#textareabutton");// creo una constante y selecciono del documento un elemento con ID 

buttonTextarea.addEventListener("click", function (event) { // a la constante le añado un evento click con funcion
    const textareValue = document.querySelector("textarea").value;//creo una constante y selecciono del documento un elemento y guardo el valor.
    if (textareValue.length > 15){ //si la longitud de la constante es mayor a 15
        document.querySelector("#ptextareaUp").innerHTML = textareValue;// selecciono del documento el elemento con ID,contenido HTML que tiene adentro y le asigno la constante
    }else {
        alert("Debe ser mayor a 15 caracteres");// sino envio una alerta.
    }
});

//apartado 6
 
const buttonTextPlaceholder = document.querySelector("#buttonTextPlaceholder");//creo una constante y del documento selecciono un elemento con ID

buttonTextPlaceholder.addEventListener("click", function (event){//a la constante le añado un evento click con funcion
    const inputValue = document.querySelector("#inputTextPlaceholder").value; //creo una constante y selecciono del documento un elemento con ID y guardo el valor
    
    const resto = inputValue % 2; //creo una constante y le asigno el resto del valor de la constante inputvalue
    if (resto != 0 ) { // si la constante es diferente a 0
    document.querySelector("#inputTextPlaceholder").style.border = "thick solid red";// del documento selecciono un elemento con ID, el estilo borde y asigno color
    }
});

// Apartado 7

// const ul = document.getElementsByTagName("ul")[0];
const ul = document.querySelector('#ulAddElements');// creo una constante y selecciono del documento un elemento con ID
for (let i = 0; i < 10 ; i++) {// uso el for para crear 10 elementos
    const li = document.createElement("li") //creo un elemento y se lo asigno a la constante
    li.innerHTML = `element ${i}`;// le asigno al contenido interno HTML del elemento que está guardado en la constante un string concatenado con la variable
    ul.appendChild(li); // al elemento de la constante le añado de hijo el elemento que esta guardado
};

//Apartado 8

const buttonUrl = document.querySelector("#buttonUrl"); // creo una constante y selecciono del documento un elemento con ID

buttonUrl.addEventListener("click", function (event){ // a la constante le añado un eveneto click con funcion
    const aTarget = document.querySelector("#aUrl").target;// creo una constante y le asigno lo que selecciono del documento,el target de un elemento con ID
    if (aTarget === "_self") { //si el valor de la constante es igual al string
        document.querySelector("#aUrl").target = "_blank" ;// selecciono el target del elemento con ID y le asigno  el string _blank
    }else{
        document.querySelector("#aUrl").target = "_self"//sino selecciono el target del elemento con ID y le asigno e sting _self
    }
});

//Apartado 9

const selectOpcion = document.querySelector('#selectColour');// creo una constante y selecciono del documento un elemento con ID

selectOpcion.addEventListener("change", function (event) {// a la constante de añado un evento change y funcion //el chage cambia cuando se selecciona otro elemento
    const selectOpcionValue = document.querySelector('#selectColour').value;// selecciono del documento el valor de un elemento con ID y lo asigno a la constante 
    document.querySelector('#paragraph').style.color = selectOpcionValue;//del documento selecciono el estilo-color del elemento con ID y le asigno el valor que tiene adentro la constante
}); 

//Apartado 10: Incluir un botón que al pulsarlo genere un número aleatorio y mantenga en una lista actualiza el número 
//de elementos que se han generado, los que son pares y los que son impares.
/* //Apartado 10 
const buttonNumbsRandom = document.querySelector(`#buttonNumbsRandom`);

buttonNumbsRandom.addEventListener("click", function (event) {
    //crear una constante que guarade numeros aleatorios
    const numbSave = 
    
    //separar en impar/par
} */
    





const currentRandom = document.getElementById("currentRandom");// creo una constante  y del documento selecciono el elemnto con ID
const totalNumbers = document.getElementById("totalNumbers");
const oddNumbers = document.getElementById("oddNumbers");
const eventNumbers = document.getElementById("eventNumbers");

document.getElementById("randomButton").onclick = () =>{ // del documento selecciono un elemento con ID,le añado un evento onclick y una funcion
    const randomNumber = Math.floor(Math.random() * 100);//creo una conastante y le asigna un numero aleatorio parseado y entero.Alternativa: parseInt
    currentRandom.textContent = randomNumber;// al contenido texto del valor de la conastante le asigno el valor que contiene el numero aleatorio parseado y entero.

    totalNumbers.textContent++;// al contenido texto de la constante le igualo la variable y le sumo uno //totalNumbers.textContent = Number(totalNumbers.textContent) + 1; //todo lo que se adquiera de text se devuelve en strings
    randomNumber % 2 === 0 ? eventNumbers.textContent++ : oddNumbers.textContent++;// si el resto del valor de la constante es igual a 0,al contenido de texto del evento le sumo uno sino al contenido de texto del evento oddnumber le sumo uno.
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