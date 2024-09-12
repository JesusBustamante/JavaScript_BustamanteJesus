var puntuacion1 = 0
var puntuacion2 = 0

document.getElementById('boton').addEventListener('click', partida)

function partida() {

    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
    .then(resp => resp.json())
    .then(daticos => {

        // let numero = 0
        // daticos.forEach(cartita => {
        //     if (['KING', 'QUEEN', 'JACK'].includes(cartita.value)){
        //         numero += 10
        //     };
        //     if (['ACE'].includes(cartita.value)){
        //         numero += 1
        //     };

        // });

        console.log(daticos.cards[0].value["ACE"])

        document.getElementById('positioncart1').innerHTML = `
            <img id = "cart1" src = "${daticos.cards[0].image}">
        `

        document.getElementById('positioncart2').innerHTML = `
            <img id = "cart2" src = "${daticos.cards[1].image}">
        `

        if (daticos.cards[0].value > daticos.cards[1].value) {
            document.getElementById('mensaje').innerHTML = `
                <p id = "mensaje1">El jugador 1 es el ganador</p>
            `
            puntuacion1 += 1
        } 
        if (daticos.cards[0].value === daticos.cards[1].value) {
            document.getElementById('mensaje').innerHTML = `
                <p id = "mensaje1">Es un empate</p>
            `
            puntuacion1 += 1
            puntuacion2 += 1
        } 
        if (daticos.cards[1].value > daticos.cards[0].value) {
            document.getElementById('mensaje').innerHTML = `
                <p id = "mensaje1">El jugador 2 es el ganador</p>
            `
            puntuacion2 +=1
        }

        document.getElementById('puntito1').innerHTML = `
            <p id = "punto1">${puntuacion1}</p>
        `

        document.getElementById('puntito2').innerHTML = `
            <p id = "punto1">${puntuacion2}</p>
        `
    });

}

document.getElementById('welcome').addEventListener('click', () => {
    document.getElementById(`cuadro`).style.display = `none`
})

document.getElementById("question").addEventListener("mouseover", () => {
    document.getElementById(`init`).style.display = `block`
})

document.getElementById("question").addEventListener("mouseout", () => {
    document.getElementById(`init`).style.display = `none`
})


// fetch('https://deckofcardsapi.com/api/deck/new/')
// .then(res => res.json())
// .then(data => {
//     var pilaId = data.deck_id

//     const imagenPila = `https://deckofcardsapi.com/api/deck/${pilaId}/draw/?count=52`

//     fetch(imagenPila)
//     .then(respuesta => respuesta.json())
//     .then(datos => {

//         let reverse = "https://deckofcardsapi.com/static/img/back.png"
        
//         for (let i = 0; i < datos.cards.length; i++) {
//             let carta = datos.cards[i];
//             let img = carta.image;

//             document.getElementById('container').innerHTML += `
//               <img id = "imagen" src = "${img}">
//             `;

//         }   

//         document.getElementById('container').innerHTML += `
//             <img id = "reverse" src = "${reverse}">
//         `;

//         document.getElementById('boton1').addEventListener('click', () => {
//             datos.cards.forEach(cartita => {
                
//                 let pila1 = (`https://deckofcardsapi.com/api/deck/${pilaId}/pile/pilaplayer1/add/?cards=${cartita}`)
                
//                 cartita += pila1
                
//                 console.log(pila1)


//             });    
//         });
//     });
// });