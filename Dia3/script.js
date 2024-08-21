function superdigit(n, k) {

    let r = ""

    for (j = 0; j < k; j++) {
        r += n
    }

    console.log(r)

    if (n.length === 1) {
        return parseInt(n)
    }

    let suma = 0;
    for  (let i = 0; i < n.length; i++) {
        suma += parseInt(n[i]);
    }

    suma *= k;

    console.log();
    console.log("SuperDigit", suma);
    return superdigit(suma.toString(), 1);
}

let n = prompt("Ingresa un valor: ");
let k = parseInt(prompt("Ingresa un segundo valor: "));

console.log(`El resultado es:` , superdigit(n, k));

