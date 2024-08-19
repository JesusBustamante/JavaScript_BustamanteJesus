function fecha(año, edad) {
    año = 2024;
    edad = 20;

    return año - edad
}

console.log(fecha())

function conversor(celcius) {
    celcius = 35;
    return 32 + (9*celcius/5)
}

console.log(conversor())

function promotion(cliente) {

    cliente =21
    if (cliente <=20) {
        descuento = "30%";
    }
    else if (cliente>20 & cliente<50) {
        descuento = "10%";
    }

    return descuento
}

console.log("Su descuento es de: ", promotion())

// Funcion con sin parametros y sin retorno
function funcion() {
    console.log(1)
    console.log(2)
    console.log(3)
}

funcion()

// Funcion con parametros y sin retorno
function parameters(calculo) {
    calculo = 5*5
    console.log(calculo)
}

parameters()


// Funcion con parametros con retorno 
function resta(num1, num2) {
    num1 = 30;
    num2 = 20;

    return num1 - num2
}
console.log(resta())

// Funcion sin parametros con retorno
function division() {
    dividendo = 10
    divisor = 5

    resultado = dividendo/divisor

    return resultado
}

console.log(division())

//--------------------------------------------------------------------

// Variable var 
var tester = "hey, hola";
    
function nuevaFuncion() {
    var hola = "hola";
    // Mientras que hola tiene un ámbito local. Así que no podemos 
    //acceder a la variable hola fuera de la función.
    
}
console.log(tester); // tester tiene un ámbito global porque existe fuera de la función.

//---------------------------------------------------------------------

// Variable const

// const no puede modificarse ni volver a declararse dentro de su mismo ámbito.

//Mientras que un objeto const no se puede actualizar, las propiedades de este objeto sí se pueden actualizar. 
//Como resultado, si declaramos un objeto const como este:
const saludar = {
    mensaje: "dice Hola",
    tiempos: 4
}

// Mientras que no podemos hacer esto:
// saludar = {
//     palabras: "Hola",
//     numero: "cinco"
// }

// Podemos hacer esto:
saludar.mensaje = "Hola bro";
console.log(saludar.mensaje)


// Variable let 
// Al igual que var,  una variable declarada con let puede ser actualizada 
//dentro de su ámbito. A diferencia de var, una variable let no puede ser 
//re-declarada dentro de su ámbito. 

let saludo = "dice Hola";
saludo = "dice Hola tambien";

console.log(saludo) // Esto funciona

// let saludar = "dice Hola";
// let saludar = "dice Hola tambien"; // Esto devolverá un error 







