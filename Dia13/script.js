

// fetch('https://deckofcardsapi.com/api/deck/1yn0ys5l3ddf/draw/?count=2')
// .then(res => res.json())
// .then(data => {
//     console.log(data)
// })

fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
.then(resp => resp.json())
.then(daticos => {

    // const mazo = 'https://deckofcardsapi.com/api/deck/new/draw/?count=52';
    // const division = Math.floor(mazo.length/2);

    // const player1 = []
    // const player2 = []

    // for (let i = 0; i < mazo.length; i++) {
    //     if (i < division) {
    //         player1.push(mazo[i])
    //     } else {
    //         player2.push(mazo[i])
    //     }
    // }

    // const deckContainer = document.getElementById("leftbar");


    // viewcart(player1);
    // viewcart(player2);


    document.getElementById('positioncart1').innerHTML = `
        <img id = "cart1" src = "${daticos.cards[0].image}">
    `

    document.getElementById('positioncart2').innerHTML = `
        <img id = "cart2" src = "${daticos.cards[1].image}">
    `



});


fetch('https://deckofcardsapi.com/api/deck/new/')
.then(res => res.json())
.then(data => {
    const pilaId = data.deck_id

    const imagenPila = `https://deckofcardsapi.com/api/deck/${pilaId}/draw/?count=52`

    fetch(imagenPila)
    .then(respuesta => respuesta.json())
    .then(datos => {

        let reverse = "https://deckofcardsapi.com/static/img/back.png"
        
        for (let i = 0; i < datos.cards.length; i++) {
            let carta = datos.cards[i];
            let img = carta.image;

            document.getElementById('container').innerHTML += `
              <img id = "imagen" src = "${img}">
            `;

        }   

        document.getElementById('container').innerHTML += `
            <img id = "reverse" src = "${reverse}">
        `;

    })

    
})