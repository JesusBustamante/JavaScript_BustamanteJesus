document.getElementById("id").addEventListener("click", GetDataFromAPI);

function GetDataFromAPI() {

    var idhero = document.getElementById(`entrada`).value;
    let url = `https://superheroapi.com/api.php/f47f5af5f14d743179199bfa4970190f/`+idhero;
    readid(url)
}

function readid(url) {
    fetch(url)
    .then (res => res.json())
    .then (data => {
        const powerstats = data.powerstats;
        const biography = data.biography;
        const appearance = data.appearance;
        const work = data.work;
        const connections = data.connections;
        const image = data.image
        document.getElementById(`list-id`).innerHTML = `
            <p>ID: ${data.id}</p>
            <p>Nombre: ${data.name}</p>
        `;
        document.getElementById(`list-power`).innerHTML = `
            <p>intelligence: ${powerstats.intelligence}</p>
            <p>strength: ${powerstats.strength}</p>
            <p>speed: ${powerstats.speed}</p>
            <p>durability: ${powerstats.durability}</p>
            <p>power: ${powerstats.power}</p>
            <p>combat: ${powerstats.combat}</p>
        `;
        document.getElementById(`list-bio`).innerHTML = `
            <p>Full name: ${biography["full-name"]}</p>
            <p>alter egos: ${biography["alter-egos"]}</p>
            <p>aliases: ${biography.aliases}</p>
            <p>place of birth: ${biography["place-of-birth"]}</p>
            <p>first appearance: ${biography["first-appearance"]}</p>
            <p>publisher: ${biography.publisher}</p>
            <p>alignment: ${biography.alignment}
        `;
        document.getElementById(`list-app`).innerHTML = `
            <p>Full name: ${appearance.gender}</p>
            <p>alter egos: ${appearance.race}</p>
            <p>aliases: ${appearance.height}</p>
            <p>place of birth: ${appearance.weight}</p>
            <p>first appearance: ${appearance["eye-color"]}</p>
            <p>publisher: ${appearance["hair-color"]}</p>
        `;
        document.getElementById(`list-work`).innerHTML = `
            <p>Full name: ${work.occupation}</p>
            <p>alter egos: ${work.base}</p>
        `;
        document.getElementById(`list-connec`).innerHTML = `
            <p>group affiliation: ${connections["group_affiliation"]}</p>
            <p>relatives: ${connections.relatives}</p>
        `;
        document.getElementById(`list-image`).innerHTML = `
        <img src ="${image.url}">
        `;
    })
}

