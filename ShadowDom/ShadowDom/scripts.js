class childComponent extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = `
            <div id="topbar"></div>

                <p id="tittle">Live User Filter</p>
                <p id="subtittle">Search by my name and/or location</p>
                <input type="text" name="buscador" id="filter" placeholder="Search">

            </div>

            <section id="contenedor-main"></section>

                <div>

                    <ul id="listaArticulos"></ul>

                </div>

            </section>
        `  
    }
}
customElements.define('ti-ttle', childComponent)

fetch('https://66e45ad1d2405277ed1404d3.mockapi.io/LiveUser')
.then(response => response.json())
.then(data => {

    const listaArticulos = document.getElementById('listaArticulos');
    const filter = document.getElementById('filter');

    data.forEach(item => {
        const lista = document.createElement('li');
        lista.className = 'articulo';
        lista.innerHTML = `
            <img src="${item.avatar}" alt="${item.name_full}">
            <h2>${item.name_full}</h2>
            <p id = "descripcion">${item.description}</p>
        `;
        listaArticulos.appendChild(lista);
    });


    filter.addEventListener('input', e => {

        const buscar = e.target.value.toLowerCase();
        const articulos = listaArticulos.children;

        Array.prototype.forEach.call(articulos, articulo => {

            const nombreCompleto = articulo.querySelector('h2').textContent.toLowerCase();
            const descripcion = articulo.querySelector('p').textContent.toLowerCase();

            if (nombreCompleto.includes(buscar) || descripcion.includes(buscar)) {
                articulo.style.display = 'block';
            } else {
                articulo.style.display = 'none';
            }
        });
    });
});