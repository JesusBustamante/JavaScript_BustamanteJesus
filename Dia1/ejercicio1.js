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