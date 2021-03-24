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

const parents = document.getElementsByClassName("parent") //primo de array, agarra todos los elementos
const parent1 = parents[0];                               // de la clase y devuelve un html colect
const parent2 = document.getElementsByClassName("parent")[1];                                                        

console.log(parent1, parent2);

const children =document.getElementsByName("child");
console.log(children);

let element = document.querySelector(".grandparent div");
console.log(element);

parent1.style.backgroundColor = "#333";













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