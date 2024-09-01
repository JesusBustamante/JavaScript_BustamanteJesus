document.getElementById("id").addEventListener("click", GetDataFromAPI);

function GetDataFromAPI() {
    var idhero = document.getElementById(`entrada`).value;
    let url = `https://swapi.py4e.com/api/people/`+idhero;
    readid(url)
}

function subconsult() {
    var idhero = document.getElementById(`entrada`).value;
    var urlm = `https://swapi.py4e.com/api/planets/`+idhero
    return urlm
}

function readid(url) {
    fetch(url)
    .then (res => res.json())
    .then (data => {

        document.getElementById(`output`).innerHTML = ""
        document.getElementById(`output`).innerHTML += `
            
            <table class="table table-dark table-sm">
            <tbody>
                <tr>
                <td scope="row">name: </th>
                <td>${data.name}</td>
                </tr>
                <tr>
                <td scope="row">height: </th>
                <td colspan="2">${data.height}</td>
                </tr>
                <tr>
                <td scope="row">mass: </th>
                <td>${data.mass}</td>
                </tr>
                <tr>
                <td scope="row">hair color</th>
                <td colspan="2">${data.hair_color}</td>
                </tr>
                <tr>
                <td scope="row">skin color: </th>
                <td>${data.skin_color}</td>
                </tr>
                <tr>
                <td scope="row">eye color</th>
                <td colspan="2">${data.eye_color}</td>
                </tr>
                <tr>
                <td scope="row">Birth year</th>
                <td colspan="2">${data.birth_year}</td>
                </tr>
                <tr>
                <td scope="row">Gender</th>
                <td colspan="2">${data.gender}</td>
                </tr>
                <tr>
                <td scope="row">Homeworld</th>
                <td colspan="2" id="homeworld" style = "background-color: white; color: black;"></td>
                </tr>
                <tr>
                <td scope="row">Films</th>
                <td colspan="2" id="films" style = "background-color: white; color: black;"></td>
                </tr>
                <tr>
                <td scope="row">Species</th>
                <td colspan="2" id="species" style = "background-color: white; color: black;"></td>
                </tr>
                <tr>
                <td scope="row">Vehicles</th>
                <td colspan="2" id="vehicles" style = "background-color: white; color: black;"></td>
                </tr>
                <tr>
                <td scope="row">Starships</th>
                <td colspan="2" id="starships" style = "background-color: white; color: black;"></td>
                </tr>
                <tr>
                <td scope="row">Created</th>
                <td colspan="2">${data.created}</td>
                </tr>
                <tr>
                <td scope="row">Edited</th>
                <td colspan="2">${data.edited}</td>
                </tr>
                <tr>
                <td scope="row">Url</th>
                <td colspan="2">${data.url}</td>
                </tr>
            </tbody>
            </table>
        `;

        fetch(data.homeworld)
        .then(res => res.json())
        .then(homeworldData => {
            document.getElementById(`homeworld`).innerHTML = ""
            document.getElementById(`homeworld`).innerHTML += `
        
                <p>Name: ${homeworldData.name}</p>
                <p>Rotation period: ${homeworldData.rotation_period}</p>
                <p>Orbital period: ${homeworldData.orbital_period}</p>
                <p>Diameter: ${homeworldData.diameter}</p>
                <p>Climate: ${homeworldData.climate}</p>
                <p>Gravity: ${homeworldData.gravity}</p>
                <p>Terrain: ${homeworldData.terrain}</p>
                <p>Surface water: ${homeworldData.surface_water}</p>
                <p>Population: ${homeworldData.population}</p>
            `;
        });

        data.films.forEach(filmUrl => {
            fetch(filmUrl)
              .then(res => res.json())
              .then(filmData => {
                const filmElement = document.getElementById(`films`);
                filmElement.innerHTML += `
                    <p>${filmData.title}</p>
                    <p>Episode ID: ${filmData.episode_id}</p>
                    <p>Opening Crawl: ${filmData.opening_crawl}</p>
                    <p>Director: ${filmData.director}</p>
                    <p>Producer: ${filmData.producer}</p>
                    <p>Release Date: ${filmData.release_date}</p>
                    <p>Created: ${filmData.created}</p>
                    <p>Edited: ${filmData.edited}</p>
                    <p>Url: ${filmData.url}</p>
                    -----------------------------------------------------------------------------------------------------------------------------
                `;
            });
        });

        data.species.forEach(speciesUrl => {
            fetch(speciesUrl)
              .then(res => res.json())
              .then(speciesData => {
                const speciesElement = document.getElementById(`species`);
                speciesElement.innerHTML = ""
                speciesElement.innerHTML += `
                    <p>Name: ${speciesData.name}</p>
                    <p>Classification: ${speciesData.classification}</p>
                    <p>Designation: ${speciesData.designation}</p>
                    <p>Average height: ${speciesData.average_height}</p>
                    <p>Skin colors: ${speciesData.skin_colors}</p>
                    <p>Eye colors: ${speciesData.eye_colors}</p>
                    <p>Average lifespan: ${speciesData.average_lifespan}</p>
                    <p>Homeworld: ${speciesData.homeworld}</p>
                    <p>Language: ${speciesData.language}</p>
                    <p>Created: ${speciesData.created}</p>
                    <p>Edited: ${speciesData.edited}</p>
                    <p>Url: ${speciesData.url}</p>
                `;
            });
        });

        data.vehicles.forEach(vehiclesUrl => {
            fetch(vehiclesUrl)
              .then(res => res.json())
              .then(vehiclesData => {
                const vehiclesElement = document.getElementById(`vehicles`);
                vehiclesElement.innerHTML += `
                    <p>Name: ${vehiclesData.name}</p>
                    <p>Model: ${vehiclesData.model}</p>
                    <p>Manufacturer: ${vehiclesData.manufacturer}</p>
                    <p>Cost in credits: ${vehiclesData.cost_in_credits}</p>
                    <p>Length: ${vehiclesData.length}</p>
                    <p>Max atmosphering speed: ${vehiclesData.max_atmosphering_speed}</p>
                    <p>Crew: ${vehiclesData.crew}</p>
                    <p>Passengers: ${vehiclesData.passengers}</p>
                    <p>Cargo capacity: ${vehiclesData.cargo_capacity}</p>
                    <p>Consumables: ${vehiclesData.consumables}</p>
                    <p>Vehicle class: ${vehiclesData.vehicle_class}</p>
                    <p>Created: ${vehiclesData.created}</p>
                    <p>Edited: ${vehiclesData.edited}</p>
                    <p>Url: ${vehiclesData.url}</p>
                    -------------------------------------------------------------------------------------------------------------------------------
                `;
            });
        });

        data.starships.forEach(starshipsUrl => {
            fetch(starshipsUrl)
              .then(res => res.json())
              .then(starshipsData => {
                const starshipsElement = document.getElementById(`starships`);
                starshipsElement.innerHTML += `
                    <p>Name: ${starshipsData.name}</p>
                    <p>Model: ${starshipsData.model}</p>
                    <p>Manufacturer: ${starshipsData.manufacturer}</p>
                    <p>Cost in credits: ${starshipsData.cost_in_credits}</p>
                    <p>Length: ${starshipsData.length}</p>
                    <p>Max atmosphering speed: ${starshipsData.max_atmosphering_speed}</p>
                    <p>Crew: ${starshipsData.crew}</p>
                    <p>Passengers: ${starshipsData.passengers}</p>
                    <p>Cargo capacity: ${starshipsData.cargo_capacity}</p>
                    <p>Consumables: ${starshipsData.consumables}</p>
                    <p>Hyperdrive rating: ${starshipsData.hyperdrive_rating}</p>
                    <p>MGLT: ${starshipsData.hyperdrive_rating}</p>
                    <p>Starship class: ${starshipsData.starship_class}</p>
                    <p>Created: ${starshipsData.created}</p>
                    <p>Edited: ${starshipsData.edited}</p>
                    <p>Url: ${starshipsData.url}</p>
                    -------------------------------------------------------------------------------------------------------------------------------
                `;
            });
        });
    })
    
}
