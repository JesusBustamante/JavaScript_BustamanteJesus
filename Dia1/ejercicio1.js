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