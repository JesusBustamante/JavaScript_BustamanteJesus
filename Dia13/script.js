

fetch('https://deckofcardsapi.com/api/deck/kxozasf3edqu/draw/?count=2')
.then(res => res.json())
.then(data => {
    console.log(data)
})

fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
.then(resp => resp.json())
.then(daticos => {

    document.getElementById('positioncart1').innerHTML = `
        <img id = "cart1" src = "${daticos.cards[0].image}">
    `

    document.getElementById('positioncart2').innerHTML = `
        <img id = "cart2" src = "${daticos.cards[1].image}">
    `

});