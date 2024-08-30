document.getElementById("id").addEventListener("click", GetDataFromAPI);

function GetDataFromAPI() {
    var idhero = document.getElementById(`entrada`).value;
    let url = `https://swapi.py4e.com/api/people/`+idhero;
    readid(url)
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
                <td colspan="2">${data.homeworld}</td>
                </tr>
            </tbody>
            </table>

 
        `;
    })
}