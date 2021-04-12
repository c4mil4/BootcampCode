//book constructor
function Book(id,title, author, sales, price) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.sales = sales;
    this.price = price;
};

//Data initialization
let books = [ 
new Book(1, "The Selfish Gene", "Richard Dawkins", 740120, 12),
new Book(2, "The God Delusion", "Richard Dawkins", 610120, 15),
new Book(3, "La nueva mente del emperador", "Roger Penrose", 120000, 17),
new Book(4, "Sapiens: A Brief History of Humankind", " Yuval Noah Harari", 910120, 16),
new Book(5, "The Selfish Gene", "Richard Dawkins", 740120, 12),
new Book(6, "The God Delusion", "Richard Dawkins", 610120, 15),
new Book(7, "La nueva mente del emperador", "Roger Penrose", 120000, 17),
new Book(8, "Sapiens: A Brief History of Humankind", " Yuval Noah Harari", 910120, 16),
new Book(9, "The Selfish Gene", "Richard Dawkins", 740120, 12),
new Book(10, "The God Delusion", "Richard Dawkins", 610120, 15),
];


//Selectors
const booksTbody = document.getElementById("books-body");
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const salesInput = document.getElementById("salesInput");
const priceInput = document.getElementById("priceInput");
const addBookButton = document.getElementById("addBookButton");

/* const booksTbody = document.getElementById("tbodyTable");

function updateTable() {
    booksTbody.innerHTML= "";
    
    books.forEach(book =>{
        booksTbody.innerHTML +=`
        <tr>
        <tr id="trRow${book.id}">
        <th scope="row">${book.id}</th>
        <td>${book.titulo}</td>
        <td>${book.autor}</td>
        <td>${book.ventas}</td>
        <td>${book.precios}</td>
        <td><button class="btn btn-danger" id="${book.id}">Eliminar</button></td>
        </tr>`;
    });

    booksTbody.onclick = e =>{
        if(e.target.tagName === "BUTTON") { 
        books = books.filter(book => book.id != e.target.id ); //desaparece cuando sobreescribo el array anterior, target es el id del boton
        updateTable();
    }; 
};
updateTable(); */

addBookButton.addEventListener("click", e => {
    e.preventDefault();
    console.log(titleInput.value, authorInput.value, salesInput.value, priceInput.value);
});







/* //Apartado3
let Books = [];
for (let i = 0; i < 10; i++) {
    const newBook = {
        id: `${i}`,
        titulo: `titutlo${i}`,
        autor: `autor${i}`,
        ventas: `ventas${i}`,
        precios: `precios${i}`,
    };
    Books.push(newBook);
};

//apartado4
const tbodyTable = document.getElementById("tbodyTable")

Books.forEach(book => {
    const saveTemplate =
    `<tr id="trRow${book.id}">
    <th scope="row">${book.id}</th>
    <td>${book.titulo}</td>
    <td>${book.autor}</td>
    <td>${book.ventas}</td>
    <td>${book.precios}</td>
    <td><button type="button" class="btn btn-danger" target-id="${book.id}" id="trButton${book.id}">Eliminar</button></td>
    </tr>`
    
    tbodyTable.innerHTML += (saveTemplate);  
}); */

//Apartado 5

//const buttonTd = document.querySelector(".btn.btn-danger");

//buttonTd.addEventListener("click", function (e){
//    const index = e.target-id;

//    Books.splice(index,1)
