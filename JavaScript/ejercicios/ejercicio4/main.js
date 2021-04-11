//Apartado3
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
});

//Apartado 5

const buttonTd = document.querySelector(".btn.btn-danger");

buttonTd.addEventListener("click", function (e){
    const index = e.target-id;
    //eliminar un elemento
    Books.splice(index,1)
    // acatualizar la tabla
    
})
