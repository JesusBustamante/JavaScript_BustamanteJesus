fetch("https://randomuser.me/api/")
.then (res => res.json())
.then (daticos => {

    console.log(daticos.results[0].name)
    document.getElementById("perfil").innerHTML += `
        <image src = "${daticos.results[0].picture.large}">
    `

    document.getElementById("container").innerHTML += `
        <p id = "nombre">Hi, My name is</p>
        <p id = name>${daticos.results[0].name.first}</p>
    `
    
})