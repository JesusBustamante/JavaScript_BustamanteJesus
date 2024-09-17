var buscar = document.getElementById('search').value;

let url = 'https://www.datos.gov.co/resource/gt2j-8ykr.json';

function DataSearch() {

    fetch(url)
    .then(res => res.json())
    .then(datos => {
        console.log(datos)

        var contenedor = document.getElementById('container')
    
        datos.forEach(element => {
            var municipio = element.ciudad_municipio_nom
            var estado = element.estado

            contenedor.innerHTML += `
                <h2>${municipio}</h2><br>
                <p>${estado}</p>
            `
            if (buscar === municipio) {

            }

        });
    })
}

DataSearch()

search.addEventListener('input', e => {

    const buscar = e.target.value.toLowerCase();
    const articulos = contenedor.children;

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
