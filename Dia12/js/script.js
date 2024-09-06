document.addEventListener(`DOMContentLoaded`, () => {
    const datosContenedor = document.querySelector(`.opciones`);
    const taskInput = document.getElementById(`taskInput`);
    const addTaskButton = document.getElementById(`addTaskButton`);

    async function fetchData() {
        const res = await fetch("https://6674179975872d0e0a950e53.mockapi.io/todoList")
        data = await res.json();
        return data;
    }

    function displayCapsula(capsula) {
        datosContenedor.innerHTML = "";
        capsula.forEach(cap => {
            const capDiv = document.createElement(`div`);
            if (cap.status === "ready") {
                capDiv.classList.add(`capsulaNegativa`);
                capDiv.innerHTML = `
                
                <div class="capsulaNegativa">

                    <div class="infoTextNegativo">
                        <p>${cap.task}</p>
                    </div>

                    <div class="botonesNegativo">

                        <div class="terminadoNegativo">
                            <img src="./storage/img/pngwing.com (2).png" data-id="1" class="completado">
                        </div>

                        <div class="eliminadoNegativo">
                            <img src="./storage/img/pngwing.com (4).png" data-id="2" class="eliminado">
                        </div>

                    </div>

                </div>

                `
            }

            if (cap.status === "On hold") {
                capDiv.classList.add(`capsulaPositiva`);
                capDiv.innerHTML = `
                
                <div class="capsulaPositiva">

                    <div class="infoTextPositivo">
                        <p>${cap.task}</p>
                    </div>

                    <div class="botonesPositivo">

                        <div class="terminado">
                            <img src="./storage/img/pngwing.com (2).png" data-id="1" class="completado">
                        </div>

                        <div class="eliminado">
                            <img src="./storage/img/pngwing.com (4).png" data-id="2" class="eliminado">
                        </div>

                    </div>
                    
                </div>
                
                `
            }

            datosContenedor.appendChild(capDiv)
        });
    }

    fetchData().then(data => {
        console.log(data);
        displayCapsula(data);
    })
})