//apartado1:  Define e inicializa un array con 5 elementos string en una sola línea.
let array = ["17", "20", "25", "30", "11"];
console.log(array);
console.log("ejercicio 1");
//apartado2: Define un array inicialmente vacío. Añade tres elementos de tipo number posteriormente. Elimina por
//completo el primero y añade dos nuevos números al inicio. En cada paso, imprime la longitud y el array
//entero por consola utilizando un string template del tipo: `Longitud: ${}`
let array1 = []
array1.push("1", "2", "3");
console.log(array1, `Longitud: ${array1.length}`);
array1.shift("1");
console.log(array1, `Longitud: ${array1.length}`);
array1.unshift("8", "9");
console.log(array1, `Longitud: ${array1.length}`);
console.log("ejercicio 2")

//apartado 3 : Escribe una función nombrada que devuelva true si el argumento dado es de tipo boolean y false en
//caso contrario.

/* function isBool(params) {
    return typeof params === "Boolean";
};
console.log(isBool(true));
console.log(isBool("true"));
console.log(isBool(2)); */

function exerciseThree(params) {
    if (params === true | params === false) {
        return true;
    } else {
        return false;
    }
};
let i = true;
console.log(exerciseThree(i));
console.log("ejercicio 3");

//apartado 4 : Escribe una función que devuelva la longitud de un string recibido por argumento
/* 
const lengthCalculate = params => params.length;

console.log(lengthCalculate("hola mundo")); */

function lengthCalculate(params) {
    return params.length;
};

let lengthText = "manzana";
console.log(lengthCalculate(lengthText));
console.log("ejercicio 4");

//Apartado 5: Crea una función de flecha que reciba una cantidad de minutos y lo devuelva convertido en segundos.
/* function mintOseg = value => value * 60;
console.log(mintOseg(10)); */

function mintOseg(value) {
    return value + 60;
};
console.log(mintOseg(10));
console.log("ejercicio 5");

/* function mintOseg = value => value * 60;
console.log(mintOseg(10)); */

function mintOseg(value) {
    return value + 60;
};
console.log(mintOseg(10));
console.log("ejercicio 5");

// Apartado 6 :Crea una función que reciba un número y devuelva el siguiente número par. (Si él es par, lo devolverá
//directamente).

function nextPar(number) {
    // let calculo = number % 2;
    // if (calculo == 0){
    if (number % 2 == 0) {
        return number;
    } else {
        // return number + 1; 
        number = number + 1;
        return number;
    }
};
let resultado = nextPar("5");
console.log(resultado);
console.log("ejercicio 6");

// Apartado 7: Crea una función que reciba una edad y devuelva la cantidad de días que esa persona ha vivido. Puedes
//obviar los años bisiestos.

function quantityDays(ages) {
    //    let result = ages * 365;
    //    return result;
    return ages * 365;
};
// let años = 24;
// let cantidad = quantityDays(años);

let cantidad = quantityDays(24);
console.log(cantidad);
console.log("ejercicio7");

//Apartado 8: . Crea una función que reciba un array y devuelva su último elemento. Prueba tu función con varios arrays
//de diferentes longitudes.

function receive(arrayColours) { // <- Función creada.
    let calculo = arrayColours.length - 1; // <- Variable creada para recuperar la ultima posición.
    let lastElement = arrayColours[calculo]; //<- Variable para acceder al ultimo elemento.

    return lastElement; //Con el return regreso al ultimo elemento.
};
//llamada a la funcion o invocación
let arrayColours = ["violeta", "Marron", "Gris", "Purpura"];
console.log(receive(arrayColours));
console.log("ejercicio8");

//Apartado 9: Un granjero necesita contar la cantidad de patas de los animales en sus diferentes granjas muy
//frecuentemente, pero tiene tres especies: pollos (2 patas), vacas (4 patas) y cerdos (4 patas). Tu función
//recibirá la cantidad de animales en ese orden y devolverá la cantidad de patas totales.
// Ejemplo: countLegs(5, 2, 8); // output: 50

function countLegs(quotationPollos, quotationVacas, quotationCerdos) {
    let cpp = quotationPollos * 2;
    let cpv = quotationVacas * 4;
    let cpc = quotationCerdos * 4;

    return cpp + cpv + cpc;
};
let totalPatas = countLegs("2", "4", "8");
console.log("cantidad de patas: " + totalPatas);
console.log("ejercicio9");


// Apartado 10: Crea una función que determine si dos datos recibidos por argumentos son del mismo tipo.
function determineDates(G, H) {
    if ((typeof G == typeof H)){
        return true;
    }else{
        return false;
    }  
};
let comparacionString = determineDates("indigo", 25);
console.log("Los datos recibidos son: " + comparacionString);
console.log("ejercicio10");

//Apartado 11: Crea una función que reciba un string con una frase y devuelva un array donde cada elemento será una
//palabra de la frase original. Investigar método existente de los strings para este fin.

function separateWords(params) {//<- Creo función
    // return params.split(" ");
    let arrayWords = params.split(" "); //<-Variable para guardar frase separada en un array

    return arrayWords;//<- Devuelve un array
};
// Llamada de funcion o invocación
let frase = separateWords("Hoy es mañana");
console.log(frase);
console.log("ejercicio11");
// let frase = "hoy es mañana";
// let palabrasSeparadas = separateWords(frase);
// console.log(palabrasSeparadas);

// console.log(separateWords("hola y chau"));  

// Apartado 12:Inicializa dos objetos, address1 y address2 con las propiedades: provincia, ciudad, municipio, código
//postal, calle, número, planta, y número de puerta.

let address1 = {
    provincia: "Buenos Aires",
    ciudad: "Avellaneda",
    municipio: "Crucecita",
    codigo: 1254,
    calle: "General GÜemes",
    número: 835,
    planta: "baja",
    númeroDePlanta: "A",
};

let address2 = {
    provincia: "Cordoba",
    ciudad: "Capilla del Monte",
    municipio: "Punilla",
    codigo: 5184,
    calle: "Pedanial dolores",
    número: 875,
    planta: "Alta",
    númeroDePlanta: "D",
}
console.log(address1, address2);
console.log("ejercicio12");

/* console.clear() */
//Apartado 13: Los dominios en la web, se componen del nombre de dominio (codespaceacademy) y de un TLD 
//(toplevel domain) como, por ejemplo .com / .es / .org, etc.
//  Crea una función que se llame parseDomain() que reciba por argumento un string y
//  devuelva un objeto con dos propiedades: domain y tld.
// 1) crear funcion

function parseDomain(params) {
    let arrayF = params.split(".");
    let dominio = {
        domain: arrayF[0],
        tld: arrayF[1],
    }
    return dominio;
};
let objeto = (parseDomain("facebook.com"));
console.log(objeto);
console.log("ejercicio13");     

/* ejercicio 13:
const parseDomain = function (x) {
const array = x.split(".");
const object = {
Domain: array[0],
TLD: array[1]
}
return object;
} */

//Apartado 14: . Nos han prohibido el uso del operador de igualdad estricta (===), pero queremos poder seguir utilizando
//dicha esa funcionalidad. Crea una función que devuelva true si dos números tienen el mismo valor y el
//mismo tipo de dato. Debemos usar el operador lógico “&&”. Prueba tu función con dos estos inputs:
//strictEquality("5", 5); // false
//strictEquality(5, 5); // true

function logical(a ,b) {
    if ((typeof a == typeof b) && (a == b)) {
        
        return true;
    }else{
        return false;
    }
};
let a = "5";
let b = "5";

let c = logical( a, b);
console.log(c);
console.log("ejercicio14");

//Apartado 15: Crea una función que reciba dos strings y devuelva true si tienen la misma longitud y false en
// caso contrario.

function booleanString(C, D) {
    let stringC = C.length;
    let stringD = D.length;
    if (stringC === stringD) {

        return true;
    } else {
        return false;
    }
};
/* let C = "indigo";
let D = "purpurina"; */
let comparacion = booleanString("indigo", "purpurina");
console.log(comparacion);
console.log("ejercicio15");

//Apartado 16: Crea una función que reciba un string y determine si está vacío sin utilizar la propiedad length.

/* function receiveStringV (stringVacio) {
    if (stringVacio === " ") {
        return true;
    }else{
        return false;
    }
};
console.log(receiveStringV("jsgkflf"));
console.log("Ejercicio 16"); */

// Apartado 17: Imprimir elemento a elemento el array del apartado 1 de cuatro formas diferentes: 
//• while
//• for
//• for of
//• forEach



//Apartado 18:Crea una función que reciba un string y un número N y devuelva el string original repetido N veces.

function repeatString(J, N) {

    let i = J.repeat(N);
    return i;
};

let returnString = repeatString("Ahora como animalitos ", 2);
console.log(returnString);
console.log("ejercicio18");     

//Apartado 19:Crea una función que recibe un objeto con dos campos, votos positivos y votos negativos
//y que devuelva la cuenta final.

// let votos = { 
//     positivo: 80,
//     negativos: 25,
// }

/* const getVoteCount = function (obj) {
    return obj.upVotes - obj.downVotes;
    }
    
    const votes = {upVotes: 35, downVotes: 15};
    console.log(getVoteCount(votes));
    console.log(getVoteCount({upVotes: 35, downVotes: 15}));
 */
function recibeObject(params) {
    let calculate = params.positivo - params.negativo;
    return calculate;
};

let votes = {
    positivo: 80,
    negativo: 25,
};
let resultVotes = recibeObject(votes);
console.log(resultVotes);
console.log("ejercicio19");     

//Apartado 20:Crea una función que recibe un array de tipos de datos mezclados y que devuelva otro array con el tipo
//de cada uno de los elementos.
//getTypes(["I'm learning JS in a Bootcamp 🚀", 7.5, {}, 0, undefined, [], "codespace"]);
// output ["string", "number", "object", "number", "undefined", "object", "string"];

function returnTypes(arrayDatosMezclados) {// creo una funcion que recibe por parametro un array DatosMezclados
    let arrayTipoDeDatos = []; // creo un array que guarda tipoDeDatos
    arrayDatosMezclados.forEach(element => {
        let saveTypesDates = typeof element // creo una variable que guarda tipo de dato
        arrayTipoDeDatos.push(saveTypesDates);// guardo  los datos, en el array tipoDeDatos        
    });  
    
    return arrayTipoDeDatos; // devuelo el array tipo de datos
};
let x = returnTypes(["I'm learning JS in a Bootcamp 🚀", 7.5, {}, 0, undefined, [], "codespace"]);
console.log(x);
console.log("ejercicio20");

//Apartado 21:Función que dado un array de números con formato string devuelva un array con los números ya
//parseados.

function returnArrayParcing(arrayFormatString) { //creo funcion que devuelve numeros parseados
    let arrayNumbers = []; 
    arrayFormatString.forEach(element =>{
        let saveNumbers = parseInt(element)
        arrayNumbers.push(saveNumbers);
    });
    return arrayNumbers;
};
let m = returnArrayParcing(["12","14","58","1","78","18","8"]);
console.log(m);
console.log("ejercicio21");

/* let z = returnArrayParcing[("12","14","58","1","78","18","8")];
console.log(z); */

//Apartado 22:Crea una función de flecha que devuelva “Positivo” si el número que recibe por argumento es mayor o
//igual que cero y “Negativo” en caso contrario. Usa el operador ternario.
const isPositive = num => num >= 0 ? "positive" : "negative";
console.log(isPositive(-5));
console.log(isPositive(5));
console.log(isPositive(0));

//Apartado 23: Crea una función que dado un array cualquiera y un índice, borre el elemento guardado en ese índice.

function deleteIndex(arrayIndex,indice){
    arrayIndex.splice(indice,1);
    return arrayIndex;
};

let arrayIndex = ["guitarra","pua"];
console.log(deleteIndex(arrayIndex,1));
console.log("ejercicio23");

//Apartado 24: Usando la función del apartado anterior, crea otra función que dado un array de números y un número a
//filtrar, devuelva un array borrando todos las apariciones de dicho número.
//object.entrie se puede usar para este tipo de ejercicio
// borrando todos las apariciones de dicho número, Significado:
/* [1,2,4,5,6,7,2,4,5,1] */
/* 1 */
/* [2,4,5,6,7,2,4,5] */

function deleteNumbers(arrayNumbers, numbOfFilter) { //creo una funcion que recibe un array de numeros y un numero filtrado y devuelve array borraando dicho nuemro.
    let arrayAux = arrayNumbers;
    /* hacer forEach con parametros Element e Index*/
    arrayNumbers.forEach((element, index) => {
        /* Si element es == a NumbOfFilter */
        if (element == numbOfFilter) {
        /* Verdadero: Borra el elemento usando deleteIndex */
        arrayAux = deleteIndex(arrayAux,index);
        };   
    });
    return arrayAux;
};

let f = [10,52,10,52,20];
console.log(deleteNumbers(f,10));
console.log("ejercicio24");

//Apartado 25: Crea dos funciones que recibirán un objeto, la primera devolverá un array con los nombres de todas sus
//propiedades. La segunda devolverá un array con los valores de dichas propiedades.
//Investigar los métodos keys y values del prototipo de Object.


function propiedadesDearray(object) {
    return Object.keys(object)
    
};

let colores = {
    color1:"esmeralda",
    color2:"purpura",
    color3:"dorado",
};

console.log(propiedadesDearray(colores));
console.log("Ejercicio 25");

/* const valoresArray = (object) => Object.values(object);

console.log(valoresArray(clase));*/

//Apartado 26: Crea una función que invierta un string

function reverseString(sTring) {
    return sTring.split("").reverse().join(""); //split/convierto array. reverse/invierto. join/devuelvo string
};

let sTring = ("Hola");
console.log(reverseString(sTring));
console.log("ejercicio 26");     

//Apartado 27: Crea una función que compare strings sin tener en cuenta las mayúsculas / minúsculas.

function compareStrings(params1, params2) {
    return (params1 == params2) 
};

let params1 = "Darth Coder";
let params2 = "dart coder"

console.log(compareStrings(params1, params2));
console.log("ejercicio27");     

//Aparatado 28: Crea una función que convierta en mayúscula sólo la primera letra de cada palabra de un string dado. El
//apartado 11 será de ayuda. Investigar cómo unir un array de strings en un único string.


//Apartado 29
const negate  = (logical) => !logical;

console.log(negate(true));
console.log(negate(false));
console.log("Ejercicio 28");
