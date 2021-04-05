// ----------uso de js externo----------

function saludo () {
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

    function saludar( ) {
        console.log("Inicial: ", contador);
        // Comprobar con var y con let y ver diferencias
        for (let contador = 0; contador < 3; contador++){
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
    console.log(var1, var2,var3);

    // const -> Block Scope
    const x=1;
    // x = 2 ERROR UNA CONSTANTE NO PUEDE SER SOBREESCRITA
    // const y; error missing = in const

    // ---------- Tipos de Datos ----------
    
    // ----------Primitivos----------
    let str = String("Im a string");
    let str2 = "Im another string"; // Recomendado  
    console.log(typeof str, typeof str2, typeof "");
    
    let num = Number (5);
    let num2 = 5;
    console.log(typeof num, typeof num2, typeof 5, typeof 5.3, typeof "5");
    
    // let str = "string" ES IGUAL A "string"

    let bool = Boolean(true);
    let bool2 = false;
    console.log(typeof bool, typeof bool2, typeof true, typeof "true");

    let undef;
    console.log(undef, typeof undef);

    let selectedColor = null; //Limpiar una variablecalcu
    console.log(selectedColor, typeof selectedColor);

    // ----------Objetos----------
    array = Array(1, 2, 3);
    let array2 = [1, 2, 3];
    console.log(array,array2);
    console.log(typeof array, typeof array2);

    console.log(typeof new Date("2021-05-21"));
    console.log(typeof new Error("Mensaje de Error"));

    console.clear();
    // ----------Strings----------
    str = "Hola Futuro";
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
    console.log("El dia de mi cumpleaños es", day);

    //----------Parsing ( conversion de un tipo a otro )----------
    let number = Number("asdasd"); // Nan = Not a Number. No genera error.
    console.log(number, typeof number);

    number = Number("1000");
    console.log(number, typeof number);

    number+= "1000"; // Entiende que es una concatenacion, no una suma
    console.log(number, typeof number);

    console.log("1" + 1, "1" - 1);// con el + contaquena, el - no tiene otro valor que no sea restar 

    // ----------Objetos----------
    let person = {
        name: "Oscar",
        age: 30,
        blonde: false,
        jump() {
            console.log("Hey, mira como salto!!");
        }//Funcion 
    }

    presentarse() {
        console.log(`me lamo ${this.name}, tengo ${this.age} y ${this.blonde ? `soy rubio`: `soy moreno`}`)
    }

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

    person.children = ["Marta","Peter"];
    console.log(person);
    console.log(person.children);

    person.jump();

    // {} Objeto, [] Array tambien es objeto, "" String
    console.log(typeof{}, typeof [], typeof"");


// ----------This-----------

const person2= {
    
    name: "Thom",
    talk() {
        console.log(`Me llamo ${this.name}`);
    }
}

const person3= {
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

selectedColors.sort();
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
    amigos:[],
    perderAmigo() {
        this.amigos.pop()
    }

}

console.log(chico);

chico.amigos.push("cristian","luisito","tania") // para añadir push anque el array este vacio 
console.log(chico.amigos);

chico.amigos.unshift("manuel");
console.log(chico.amigos);

chico.perderAmigo();
console.log(chico.amigos);

// ----------Condicionales----------

const randonNumber = 9;
const guessedNumber = "9";

if(typeof randonNumber !== typeof guessedNumber){
    console.log("Hey tienen diferente clase");
}

if(typeof guessNumber === "string"){
    console.log("");
}
/* if (randonNumber === quessedNumber) {
    console.log("Has acertado el numero");
} else if (randonNumber > quessedNumber) {
    console.log("El numero secreto es mayor");
} else if (randonNumber < quessedNumber) {
    console.log("El numero secreto es menor");
} */




// operador ternario

let variable = 12 < 10 ? "el precio es menor" : "el precio es mayor";
console.log(variable);

