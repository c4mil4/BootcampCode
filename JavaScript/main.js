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


//apartado 3 al pusar enlace, cambiara la imagen

const items = document.getElementsByTagName("li");
const image = documen.querySelector("img");

const changeImage = (e) => image.src = e.target.textContent;

items[0].addEventListener("click", changeImage);
items[1].addEventListener("click", changeImage);
items[2].addEventListener("click", changeImage);













//solucion alternativa con arrow function. del apatado 2
button.addEventListener("click", () => document.body.style.background = "violet");











/* const contenedor = document.getElementById("contenedor");
const parrafo1 = document.getElementById("contenedor");
const parrafo2 = document.getElementById("contenedor"); */