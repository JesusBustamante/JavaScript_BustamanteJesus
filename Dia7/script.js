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
            <p><span style = "color: white;">ID: </span>${data.id}</p>
            
        `;
        document.getElementById(`list-power`).innerHTML = `
            <p><span style = "color: white;">intelligence:</span>${powerstats.intelligence}</p>
            <p><span style = "color: white;">strength: </span>${powerstats.strength}</p>
            <p><span style = "color: white;">speed: </span>${powerstats.speed}</p>
            <p><span style = "color: white;">durability: </span>${powerstats.durability}</p>
            <p><span style = "color: white;">power: </span>${powerstats.power}</p>
            <p><span style = "color: white;">combat: </span>${powerstats.combat}</p>
        `;
        document.getElementById(`list-bio`).innerHTML = `
            <p><span style = "color: white;">Full name: </span> ${biography["full-name"]}</p>
            <p><span style = "color: white;">alter egos: </span> ${biography["alter-egos"]}</p>
            <p><span style = "color: white;">aliases:</span> ${biography.aliases}</p>
            <p><span style = "color: white;">place of birth: </span> ${biography["place-of-birth"]}</p>
            <p><span style = "color: white;">first appearance: </span> ${biography["first-appearance"]}</p>
            <p><span style = "color: white;">publisher: </span> ${biography.publisher}</p>
            <p><span style = "color: white;">alignment: </span> ${biography.alignment}</p>
        `;
        document.getElementById(`list-app`).innerHTML = `
            <p><span style = "color: white;">Full name: </span>${appearance.gender}</p>
            <p><span style = "color: white;">alter egos: </span>${appearance.race}</p>
            <p><span style = "color: white;">aliases: </span>${appearance.height}</p>
            <p><span style = "color: white;">place of birth: </span>${appearance.weight}</p>
            <p><span style = "color: white;">first appearance: </span>${appearance["eye-color"]}</p>
            <p><span style = "color: white;">publisher: </span>${appearance["hair-color"]}</p>
        `;
        document.getElementById(`list-work`).innerHTML = `
            <p><span style = "color: white;">Full name: </span>${work.occupation}</p>
            <p><span style = "color: white;">alter egos: </span>${work.base}</p>
        `;
        document.getElementById(`list-connec`).innerHTML = `
            <p><span style = "color: white;">group affiliation: </span>${connections["group_affiliation"]}</p>
            <p><span style = "color: white;">relatives: </span>${connections.relatives}</p>
        `;
        document.getElementById(`list-image`).innerHTML = `
        <img src ="${image.url}">
        <p>${data.name}</p>
        `;
    })
}

