//Generar un array de 100 objetos que tengan las siguientes propiedades:
//• Cargo: construido con un string plantilla (`${}`) cuyos valores sean “Empleado 1”, “Empleado 2”, etc.
//• Rendimiento: un número aleatorio con 2 decimales entre 0 y 1.
//• Salario: un número aleatorio entre 1250

let employees = [];
for (let i = 0; i < 100; i++) {
    const newEmployee = {
        cargo: `empleado ${i}`,
        rendimiento: Number(Math.random().toFixed(2)),
        salario: Math.ceil(Math.random() * (4000 - 1250) + 1250),
    }
    employees.push(newEmployee);
}

console.log("1. operacion del arrray", employees);

//Apartado 1 con constructor.
/* 
function Employee(cargo,rendimiento,salario){
    this.cargo= cargo;
    this.rendimiento= rendimiento;
    this.salario= salario;
};

employees= []

for (let i = 0; i < 100; i++) {
    employees.push(new Employee (
        `empleado ${i}`,
        Number (Math.random().toFixed(2)),
       Math.ceil(Math.random()*(4000 - 1250) + 1250)
    ))
}
 */

//Apartado 2: ordenar con rendimiento
employees.sort(function (empleado1, empleado2) {
    return empleado1.rendimiento - empleado2.rendimiento;
});

console.log(employees);

//Aparato3; Ordenar el array por salario e imprimirlo. Usar una función de flecha. 

employees.sort((empleado1, empleado2) => empleado1.salario - empleado2.salario);

console.log(employees);

//Aparatdo 4:Ordenar el array por el número de empleado de forma decreciente. El número de empleado sólo estará 
//dentro del string Cargo. Usar una función nombrada como callback.

employees.sort(ordernarDecreciente);

function ordernarDecreciente(empleado1, empleado2) {
    return empleado1.cargo.slice(9) - empleado2.cargo.slice(9)
};

console.log(employees);

//Aparatdo 5: Usando filter: imprimir el cargo y salario de los que cobren más de 2500€.

employees
    .filter(employee => employee.salario > 2500)
    .forEach(employee => console.log(employee.cargo, employee.salario));

console.log(employees);

//Apartado 6: Usando map,subir el sueldo un 25% a los que cobren menos de 1500€ y volver a hacer el punto 5.

employees = employees.map(employee => {
    if (employee.salario < 1500) {
        employee.salario - employee.salario * 1.25;
    }
    return employee;
});

console.log(employees);

//Aparatdo 7: Usando reduce,Obtener el coste total de todos los sueldos para la empresa teniendo en cuenta que 
//a la empresa le cuesta tener un empleado su sueldo más un 15% por impuestos. 

//reduce : devuelve un objeto/numero

// const totalCost = employees.reduce((salarioSuma, empleyee) => salarioSuma += empleyee.salario * 1.15, 0); //estado inicial de la suma.

const totalCost = employees.reduce((salarioSuma, empleyee) =>{
    return salarioSuma += empleyee.salario * 1.15;
},0); //estado inicial de la suma(primer argumento).
console.log(totalCost);

//8. Usar el método o métodos (reduce / map / filter / sort) que determinemos oportuno e imprimir en 
//cada apartado:
//• Subir el sueldo de los que tengan un rendimiento superior a 0.7.
employees = employees.filter(employee => employee.efficiency >= 0.3);
console.log("Despedir a los que tengan un rendmiento menor a 0.3", employees)
//• Despedir a los que tengan un rendimiento menor a 0.3.
let averiguaSalario = employees.reduce((salarioSuma, empleyee) => salarioSuma + empleyee.salario, 0) / employees.length;
averiguaSalario = averiguaSalario.toFixed(2);
console.log("Calcular el sueldo medio de la empresa", averiguaSalario);
//• Calcular el sueldo medio de la empresa.
employees = employees.map(employee => {
    if (employee.efficiency < 0.7) {
        employee.salario - employee.salario * 1.25;
    }
    return employee;
});

/* employees,forEach => {
    if (employee.efficiency < 0.7) {
        employee.salario - employee.salario * 1.25;
    }
    return employee;
}); */

console.log("subir el sueldo de los que tengan un rendimiento superior a 0.7",employees);