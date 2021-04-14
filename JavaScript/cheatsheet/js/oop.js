console.clear()
//Antes de ES6
function Car(brand, model, year) {
    this.brand= brand;
    this.model= model;
    this.year=year;
    this.getAge = function () { //metodo getAge.
        let age = new Date().getFullYear() - this.year; 
        console.log(`This ${this.brand} ${this.model} is ${age} years old.`);
    }   
}

let myCar = new Car("Ford", "Mustang", 1990);
let myCar2 = new Car("Audi", "q7", 2015);

myCar.getAge();

console.log(myCar, myCar2);

Car.getHP = function () { // No actualiza las instancias
    console.log("This car has 300 horsepower");
}

myCar.getHP = function () {// solo modifica la instanca myCar
    console.log("This car has 300 horsepower");
}

Car.prototype.getHP = function () { // gracias a clase todas las funciones se guardan en el prototipo
    console.log("This car has 400 horsepower");
}

myCar.getHP();
myCar2.getHP();

function SUV (brand, model, year, width, height) {
    Car.call(this, brand, model , year);
    this.width = width;
    this.height = height;
}

SUV.prototype = Object(Car.prototype); // hereda todos los metodos de instancia por prototipo

let mySUV = new SUV ("Audi", "Q3", 2017, 2200, 2000);
mySUV.getAge();
mySUV.getHP();

//--------------- ES6 ------------------------------------

class Book{
    constructor(title,author,year){
        this.title= title;
        this.author = author;
        this.year= year;
    }

    getSummary(){
        console.log(`${this.title} was written by ${this.author} in ${this.year}`)
    }

    getType(){
        console.log("I'm a normal book");
    }
}

const book1 = new Book("Metamorfosis", "Franz Kafka", 1915);
console.log(book1);
book1.getType();
book1.getSummary();

// subclases (herencia)
class Magazine extends Book{ // magazine hereda todo de book

    constructor(title, author, year, month){
        super(title,author,year)
        this.month = month;
    }

    getType(){
        super.getType();
        console.log("I'm a magazine");
    }

}

// Instanciamos una revista 
const mag1 = new Magazine("Super Pop", "Algun loco", 2015);
mag1.getSummary();

mag1.getType();
//book1.getType(); la llamo con "super" que hace referencia a la clase

// Otro ejemplo de polimorfismo
class Animal {
    constructor(type, name, sound){
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    
    makeSound() {
        console.log(`This ${this.type} named ${this.name} goes ${this.sound}`);
    }

    static compareAnimals(animal1, animal2){
        return animal1.type === animal2.type;
    }
}

class Feline extends Animal { 
    constructor(type, name){
        super(type, name, "miau")
    }

    scratchFurniture(params){

    }
}

class Cat extends Feline {
    constructor(name) {
        super("cat", name, "miau");
    }
}

class Panther extends Feline { 
    constructor(name){
        super("cat", name);
    }
}

class Dog extends Animal {
    constructor(name) {
        super("dog", name, "woof");
    }
}

const conBotas= new Cat("con botas");
const dylan= new Dog("Dylan");
const danko= new Dog("Danko");

console.clear();
console.log(conBotas);

conBotas.makeSound();
dylan.makeSound();
danko.makeSound();


console.log(Animal.compareAnimals(dylan, danko));