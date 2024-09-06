fetch("https://randomuser.me/api/")
.then (res => res.json())
.then (daticos => {

    let fecha = new Date(daticos.results[0].dob.date).toLocaleDateString()

    document.getElementById("perfil").innerHTML += `
        <image src = "${daticos.results[0].picture.large}">
    `

    const infoContainer = document.getElementById("output");
    let infoActual = null;

    function mostrarInfo(info) {

        if (infoActual) {
            infoActual.style.display = "none";
        }
        infoContainer.innerHTML = info;
        infoContainer.style.display = "block";
    }

    function ocultarInfo() {
        if (infoActual) {
            infoActual.style.display = "none";
        }
    }

    document.getElementById("imagenes").addEventListener("mouseover", () => {
        mostrarInfo(`
            <p id = "info">Hi, My name is</p>
            <p id = "infoo">${daticos.results[0].name.first}</p>
        `);
    });
    document.getElementById("imagenes").addEventListener("mouseout", ocultarInfo);

    document.getElementById("imagenes2").addEventListener("mouseover", () => {
        mostrarInfo(`
            <p id = "info">My email address is</p>
            <p id = "infoo">${daticos.results[0].email}</p>
        `);
    });
    document.getElementById("imagenes2").addEventListener("mouseout", ocultarInfo);

    document.getElementById("imagenes3").addEventListener("mouseover", () => {
        mostrarInfo(`
            <p id = "info">My birthday is</p>
            <p id = "infoo">${fecha}</p>
        `);
    });
    document.getElementById("imagenes3").addEventListener("mouseout", ocultarInfo);

    document.getElementById("imagenes4").addEventListener("mouseover", () => {
        mostrarInfo(`
            <p id = "info">My address is</p>
            <p id = "infoo">${daticos.results[0].location.street.number}<span>  ${daticos.results[0].location.street.name}</span></p>
        `);
    });
    document.getElementById("imagenes4").addEventListener("mouseout", ocultarInfo);

    document.getElementById("imagenes5").addEventListener("mouseover", () => {
        mostrarInfo(`
            <p id = "info">My phone number is</p>
            <p id = "infoo">${daticos.results[0].phone}</p>
        `);
    });
    document.getElementById("imagenes5").addEventListener("mouseout", ocultarInfo);

    document.getElementById("imagenes6").addEventListener("mouseover", () => {
        mostrarInfo(`
            <p id = "info">My password is</p>
            <p id = "infoo">${daticos.results[0].login.password}</p>
        `);
    });
    document.getElementById("imagenes6").addEventListener("mouseout", ocultarInfo);
});