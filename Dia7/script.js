document.getElementById(`id`).addEventListener(`click`, GetDataFromAPI)

function GetDataFromAPI() {
    fetch(`https://superheroapi.com/api.php/f47f5af5f14d743179199bfa4970190f/2`)
    .then (res => res.json())
    .then (data => {
        for (let i = 0; i < 1; i++) {

            var idhero = document.getElementById(`entrada`).value;
            console.log(data)
        }
        
    })
}

GetDataFromAPI()