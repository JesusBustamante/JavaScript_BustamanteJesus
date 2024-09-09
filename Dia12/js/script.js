document.addEventListener(`DOMContentLoaded`, () => {
    const datosContenedor = document.querySelector(`.opciones`);
    const taskInput = document.getElementById(`taskInput`);
    const addTaskButton = document.getElementById(`addTaskButton`);

    async function fetchData() {
        const res = await fetch("https://66df335bde4426916ee3de16.mockapi.io/Tarea")
        data = await res.json();
        return data;
    }

    function displayCapsula(capsula) {
        datosContenedor.innerHTML = ``;
        capsula.forEach(cap => {
            const capDiv = document.createElement('div');
            if (cap.status === "ready") {
                capDiv.classList.add(`capsulaNegativa`);
                capDiv.innerHTML = `
                
                <div class="capsulaNegativa">

                    <div class="infoTextNegativo">
                        <p>${cap.task}</p>
                    </div>

                    <div class="botonesNegativo">

                        <div class="terminadoNegativo">
                            <img src="./storage/img/pngwing.com (2).png" data-id="${cap.id}" class="completado">
                        </div>

                        <div class="eliminadoNegativo">
                            <img src="./storage/img/pngwing.com (4).png" data-id="${cap.id}" class="eliminado">
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
                            <img src="./storage/img/pngwing.com (2).png" data-id="${cap.id}" class="completado">
                        </div>

                        <div class="eliminado">
                            <img src="./storage/img/pngwing.com (4).png" data-id="${cap.id}" class="eliminado">
                        </div>

                    </div>
                    
                </div>
                
                `
            }

            datosContenedor.appendChild(capDiv)
        });

        document.querySelectorAll('.completado').forEach(button => {
            button.addEventListener('click', botonCompletado);
        })

        document.querySelectorAll('.eliminado').forEach(button => {
            button.addEventListener('click', botonEliminado);
        })
    }

    async function addNewTask() {
        const task = taskInput.value;
        if (task.trim() === "") {
            return
        }

        await fetch(`https://66df335bde4426916ee3de16.mockapi.io/Tarea`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                task,
                status: 'On hold'
            })
        });
        taskInput.value = '';
        const data = await fetchData();
        displayCapsula(data);
    }

    addTaskButton.addEventListener('click', addNewTask);

    async function botonCompletado(event) {
        const id = event.target.getAttribute('data-id');
        await fetch(`https://66df335bde4426916ee3de16.mockapi.io/Tarea/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify({status: 'ready'})
        });
        const data = await fetchData();
        displayCapsula(data)
    }

    async function botonEliminado(evento) {
        const id = evento.target.getAttribute('data-id');
        await fetch(`https://66df335bde4426916ee3de16.mockapi.io/Tarea/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify({status: 'ready'})
        });
        const data = await fetchData();
        displayCapsula(data)
    }

    fetchData()
        .then(data => {
            console.log(data);
            displayCapsula(data);
        })
})