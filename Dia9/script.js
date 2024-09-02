document.getElementById(`inp`).addEventListener(`input`, GetDataFromAPI)

function GetDataFromAPI() {
    var id = document.getElementById(`inp`).value;
    let url = `https://pokeapi.co/api/v2/pokemon/`+id;
    readid(url)
};

function readid(url) {
    fetch(url)
    .then (res => res.json())
    .then (data => {
        first = data.sprites.other.showdown.front_default

        document.getElementById(`screen`).innerHTML = ""
        document.getElementById(`screen`).innerHTML += `
            <img src ="${first}">
        `
        document.getElementById(`screens`).innerHTML = ""
        document.getElementById(`screens`).innerHTML += `
        <p>-${data.name}</p>
        `

        document.getElementById(`screenss`).innerHTML = ""
        document.getElementById(`screenss`).innerHTML += `
        <p>${data.id}</p>
        `

    })
}