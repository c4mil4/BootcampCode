// ----------uso de js externo----------

function saludo() {
    alert("Hola desde un script externo");
    console.log("has hecho click");
}
// document.getElementsByTagName("a").item(2).addEventListener("click", saludo);

// ----------Depuracion / logging----------
// alert("Mensaje");
console.log("");


// ----------Variables---------
// var-> function scope
// let / const -> block scope

function saludar() {
    console.log("Inicial: ", contador);

    // Comprobar con var y con let y ver diferencias
    for (var contador = 0; contador < 6; contador++) {
        console.log(contador);
    }
    console.log("Final: ", contador);
}

saludar();

console.clear();
// Inicializacion
let day;
day = 5;

let monthName = "Octubre";

let hour, minute, second;

let array = [15, 20, 25]
console.log(array[0], array[1], array[2]);
let [var1, var2, var3] = [15, 20, 25]; //AVANZADA
console.log(var1, var2, var3);

// const -> Block Scope
const x = 1;
// x = 2 ERROR UNA CONSTANTE NO PUEDE SER SOBREESCRITA
// const y; error missing = in const



// ---------- Tipos de Datos ----------


// ----------Primitivos----------
let str = String("Im a string");
let str2 = "Im another string"; // Recomendado  
console.log(typeof str, typeof str2, typeof "");

// let str = "string" ES IGUAL A "string"

let num = Number(5);
let num2 = 5;
console.log(typeof num, typeof num2, typeof 5, typeof 5.3, typeof "5");

let bool = Boolean(true);
let bool2 = false;
console.log(typeof bool, typeof bool2, typeof true, typeof "true");

let undef;
console.log(undef, typeof undef);

let selectedColor = null; //Limpiar una variable
console.log(selectedColor, typeof selectedColor);

// ----------Objetos----------
array = Array(1, 2, 3);
let array2 = [1, 2, 3];
console.log(array, array2);
console.log(typeof array, typeof array2);

console.log(typeof new Date("2021-05-21"));
console.log(typeof new Error("Mensaje de Error"));

console.clear();
// ----------Strings----------
/*  str = "Hola Futuro";
 console.log(str, str.length);
 console.log(str.indexOf("Futuro"), str.indexOf("Cadena no Presente"));
 console.log("La ultima ocurrecia de `u` esta en el indice", str.lastIndexOf("u"));

 console.log(str.substring(1, 3));

 console.log("Hola mundo".concat(" .Adios mundo"));
 console.log("Hola mundo" + ".Adios mundo."); //Equivalente a concat
 str = str + ". Adios mundo.";
 str += ". Adios mundo.";
 console.log(str);
 console.log(str.replace("futuro", "mundo"));
 console.log(str.replaceAll("mundo", "futuro"));
 console.log(str.toLocaleLowerCase());
 console.log(str.toUpperCase());

 console.log(`El dia de mi cumpleaños es ${day}`); //String template
 console.log("El dia de mi cumpleaños es", day); */

//----------Parsing ( conversion de un tipo a otro )----------
let number = Number("asdasd"); // Nan = Not a Number. No genera error.
console.log(number, typeof number);

number = Number("1000");
console.log(number, typeof number);

number += "1000"; // Entiende que es una concatenacion, no una suma
console.log(number, typeof number);

console.log("1" + 1, "1" - 1);// con el + concatena, el - no tiene otro valor que no sea restar 

// ----------Objetos----------
let person = {
    name: "Oscar",
    age: 30,
    blonde: false,
    jump() {
        console.log("Hey, mira como salto!!");
    },//Funcion 
}

presentarse() {
    console.log(`me lamo ${this.name}, tengo ${this.age} y ${this.blonde ? `soy rubio`: `soy moreno`}`)
}

person.presentarse();

console.log(person);
console.log(`Se llama ${person.name} y tiene ${person.age} años`);

person.name = "Dimitrov";
// Acceso por punto / Dot notation

console.log(person, typeof person);
console.log(`Se llama ${person.name} y tiene ${person.age} años`);

// Acceso por corchetes / Brackets notation

let propertyName = "age";
console.log(person[propertyName]);

//Ampliacion

person.children = ["Marta", "Peter"];
console.log(person);
console.log(person.children);

person.jump();

// {} Objeto, [] Array tambien es objeto, "" String
console.log(typeof {}, typeof [], typeof "");


// ----------This-----------

const person2 = {

    name: "Thom",
    talk() {
        console.log(`Me llamo ${this.name}`);
    }
}

const person3 = {
    name: "Sarah",
    talk() {
        console.log(this);
        console.log(`Me llamo ${this.name}`);
    }
}

person2.talk();
person3.talk();

console.clear();
// ---------- Arrays ----------

let selectedColors = ["red", "blue"]; // Array de String
console.log(selectedColors, selectedColors.length, typeof selectedColors);

selectedColors[2] = "green";
console.log(selectedColors, selectedColors.length);

selectedColors.push("voileta"); //RECOMENDADA
console.log(selectedColors, selectedColors.length);

selectedColors.pop();
console.log(selectedColors, selectedColors.length);

selectedColors.unshift("white");
console.log(selectedColors, selectedColors.length);

selectedColors.shift("white");
console.log(selectedColors, selectedColors.length);

selectedColors.sort(); //pertenece al prototipo de arrays
console.log(selectedColors, selectedColors.length);

console.log("El rojo esta en el indice ", selectedColors.indexOf("red"));
console.log(selectedColors);

console.log(selectedColors.slice(1, 3));
console.log(selectedColors);

console.log("Los elementos Borrados son: ", selectedColors.splice(1, 3));
console.log("El elemento que ha sobrevivido a sido: ", selectedColors);

// Crea un objeto niño que tenga las propieades nombre altura genero
// y amigos, estara vacio y los añadiremos posterior mente 3 amigos nombre. 
//despues añadimos uno al iniicio
//ponerle funcion perder ultimo amigo

let chico = {
    name: "Oscar",
    height: 1.36,
    genero: "masculino",
    amigos: [],
    perderAmigo() {
        this.amigos.pop()
    }

}

console.log(chico);

chico.amigos.push("cristian", "luisito", "tania") // para añadir push aunque el array este vacio 
console.log(chico.amigos);

chico.amigos.unshift("manuel");
console.log(chico.amigos);

chico.perderAmigo();
console.log(chico.amigos);

// ----------Condicionales(bloques de flujo, sino)----------

const randonNumber = 5;
const guessedNumber = "5";
if (typeof randonNumber !== typeof guessedNumber) {
    console.log("Hey tienen diferente clase");
}

if (typeof guessNumber === "string") {
    console.log("");
}

if (randonNumber === guessedNumber) {
    console.log("Has acertado el numero");
} else if (randonNumber > guessedNumber) {
    console.log("El numero secreto es mayor");
} else if (randonNumber < guessedNumber) {
    console.log("El numero secreto es menor");
} 

// Ternary operator 

let variable = 12 < 10 ? "el primero es menor" : "el primero es mayor";
console.log(variable);

//switch 
let option = 5;
switch (option) {
    case 1:
        //bloque de codigo para valor 1
        console.log("option vale 1");
        break;
   case 2:
        //bloque de codigo para valor 
        console.log("option vale 2");
        break;
    case 3:
        //bloque de codigo para valor 3
        console.log("option vale 1");
        break;
    default: //"de otro modo" de pseint
        console.log("otra opcion");
        break;
}

console.clear();
 // funciones
 // nombradas
 function greet(name, lastName) {
     console.log(`hola, ${name} ${lastName}. ¿Que tal?`);
 }

greet();
greet("Marcos", "Aurelio");
//greet("Marcos", "aurelio");

//que devuelva el cuadrado de un numero que recibe un parametro
 function cuadrado (number){
    let cuadrado = number1 * number1;
    return cuadrado;
 }
 console.log(cuadrado(5));

 //anonimas 

 let numbersArray = [5, 51, 1, 15, 2]
 console.log(numbersArray);
 numbersArray.sort(); // lo ordena segun ASCII
 console.log(numbersArray);

 //se aplica en arrayas con numeros, objetos.

function orderNumbers (a, b) {
    if(a < b) {
        return -1;
    } else if (a === b) {
        return 0;
    } else {
        return 1;
    }
}

 //numbersArray.sort(orderNumbers);

 numbersArray.sort(function orderNumbers (a, b) {
    if(a < b) {
        return -1;
    } else if (a === b) {
        return 0;
    } else {
        return 1;
    }
});

numbersArray.sort(function (a, b){return a - b});
console.log(typeof orderNumbers,typeof function (a, b) {return a - b});
console.log(numbersArray);

console.clear();
// arrow fuctuions
let perimeterOfSquare = function (side) { // Función anónima normal
    return side * 4;
    }
    perimeterOfSquare = function (side) {return side * 4;} // (opcional) Una única línea
    perimeterOfSquare = (side) => {return side * 4;} // Sustituyo function por la flecha después de params.
    perimeterOfSquare = (side) => side * 4; // Si sólo quiero devolver algo, quito llaves y return.
    perimeterOfSquare = side => side * 4; // Si sólo tiene 1 param, puedo quitar paréntesis.
    
    console.log(perimeterOfSquare(5));

   /*  console.log(typeof function (){});
    console.log(typeof (() => {})); */

//------------ for
for (let i = 0; i <= 10; i++) {
    console.log(`Indice: ${i}`);

}
// definir y rellenar un array con el indice i
const arrayX = [];

for (let i = 0; i <= 10; i++) {
    arrayX.push(i);
}

console.log(arrayX);

//while 
let contador = 0;
while (contador <= 10 ) {
    console.log(contador)1 

}
console.log("no entra en bucle infinito");

// ForEch
console.log(numbersArray);

function myFunction (value, index){
    console.log(`Indice ${index}: ${item}`);
}

numbersArray.forEach(myFunction);

//Equivalente al forEch

myFunction(numberArray[0],  0, numbersArray);
myFunction(numberArray[1],  1, numbersArray);
myFunction(numberArray[2],  2, numbersArray);
myFunction(numberArray[3],  3, numbersArray);
myFunction(numberArray[4],  4, numbersArray);

let otherArray = []; // cuidado con la consola de navegador 

numbersArray.forEach(item => otherArray.push(item));

console.log(otherArray);