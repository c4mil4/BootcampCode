// Book Constructor
function Book(id, title, author, sales, price) { // creo una funcion con 5 parametros 
    this.id = id; //a la propiedad de este objeto le asigno el valor del parametro
    this.title = title;
    this.author = author;
    this.sales = sales;
    this.price = price;
}

// Data initialization
let books = [ //creo un array constructor
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

let displayedBooks =[...books];

//let obj1 = {...obj2} para copiar el objeto


// Selectors
const booksTbody = document.getElementById("books-body");// creo una constante y del documento selecciono el elemento con ID BOOKSBODY

const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const salesInput = document.getElementById("salesInput");
const priceInput = document.getElementById("priceInput");
const addBookButton = document.getElementById("addBookButton");

const tfoot = document.querySelector("tfoot");

//Actualizar tabla

function updateTable() { //creo una funcion que actualiza tabla
    // Vaciamos el tbody por completo con el string vacio
    booksTbody.innerHTML = ""; 
    
    // Generamos de nuevo todas las filas
    displayedBooks.forEach(book => {
        //concatenamos los tr con de la tabla con +=
        booksTbody.innerHTML += ` 
            <tr>
                <td>${book.id}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.sales}</td>
                <td>${book.price}</td>
                <td>
                    <button class="btn btn-danger" id="${book.id}">Remove</button>
                </td>
            </tr>`;
    });

    const totalPrice = displayedBooks.reduce((priceSum, book) => priceSum + book.price, 0);

    tfoot.textContent = `Precio total ${totalPrice}`;
}
//e hace referencia al elemento que lanzo el evento
booksTbody.onclick = e => { //al valor de la constante le añado un evento y una funcion
    if(e.target.tagName === "BUTTON") {
        books = books.filter(book => book.id != e.target.id);
        displayedBooks = displayedBooks.filter(book => book.id != e.target.id);
        updateTable();
    }
};

updateTable();

function updateTableV2() {
    // Vaciamos el tbody por completo
    booksTbody.innerHTML = "";
    
    // Generamos de nuevo todas las filas
    books.forEach(book => {
        const newTr = document.createElement("tr");

        for (let property in book) {
            const newTd = document.createElement("td");
            newTd.textContent = book[property];
            newTr.appendChild(newTd);
        }
        
        const newRemoveButton = document.createElement("button");
        newRemoveButton.classList.add("btn", "btn-danger");
        newRemoveButton.id = book.id;
        newRemoveButton.textContent = "Remove";
        newRemoveButton.addEventListener("click", e => {
            books = books.filter(book => book.id != e.target.id);
            updateTable();
        });
        
        newTr.appendChild(newRemoveButton);

        booksTbody.appendChild(newTr);
    });
}

// updateTableV2();

// Process form and add a new book
addBookButton.addEventListener("click", e => {
    e.preventDefault();
    
    const newID = books[books.length-1].id + 1;

    const newBook = new Book(newID,titleInput.value,authorInput.value,
        salesInput.value, Number(priceInput.value));

        books.push(newBook);
        displayedBooks.push(newBook)

    updateTable();

    // titleInput.value = "";
    // authorInput.value = "";
    // salesInput.value = "";
    // priceInput.value = "";

    addBookButton.parentNode.reset();
});


//ejercicio5
const filterInput = document.querySelector("#filterInput");
const priceHeader = document.querySelector("#priceHeader");

let ascendinfOrder = true;

filterInput.addEventListener("input", e =>{
    //versin 1 teniendo en cuenta las mayusculas (case sensitive)
    displayedBooks = books.filter(book => book.title.includes(e.target.value));//parto del array principal y filtro el array. por e.target accedo al input
    //Para tener en cuenta otro campo,incluimos en la condicion lo siguiente:
    // || book.authoe.incluides(e.target.value)
    updateTable();
    
    // version 2- sin tener en cuenta las mayusculas
   /*  displayedBooks = books.filter(book => {
        const upperTitle = book.title.toUpperCase();
        const upperInputValue = book.title.toUpperCase();
        return upperTitle.includes(upperInputValue);
    });
    
    updateTable(); */
});

//apartado 2

priceHeader.style.cursor = "pointer";
priceHeader.addEventListener = ("click", e =>{
    ascendinfOrder = !ascendinfOrder;
   /*  displayedBooks.sort((book1, book2) => { 
    return ascendinfOrder       ? book1.price - book2.price
                                : book1.price - book2.price;
    }); */

    document.querySelector("#span").innerHTML = ascendinfOrder ? "&uarr;" : "&darr;"

    displayedBooks.sort((book1, book2)=>{
        if (ascendinfOrder) {
            return book1.price - book2.price; 
        }else{
            return book2.price - book1.price;
        }
    })

    updateTable()
});

//Aparatodo 3

document.querySelector("tfoot")