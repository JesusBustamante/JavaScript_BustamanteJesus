let url = 'https://www.datos.gov.co/resource/gt2j-8ykr.json';

fetch(url)
.then(res => res.json())
.then(datos => {


    const contenedor = document.getElementById('caja')
    const search = document.getElementById('search')

    const conteoMunicipios = {};
    datos.forEach(element => {
        const municipio = element.ciudad_municipio_nom;
        if (!conteoMunicipios[municipio]) {
            conteoMunicipios[municipio] = { casos: 1, estado: element.estado };
        } else {
            conteoMunicipios[municipio].casos++;
        }
    });

    const municipiosUnicos = Object.keys(conteoMunicipios);

    municipiosUnicos.forEach(municipio => {

        const lista = document.createElement('li')
        lista.className = 'info'


        lista.innerHTML = `
            <h2>${municipio}</h2>
            <p id = "casos" >Casos: ${conteoMunicipios[municipio].casos}</p><br>
        `

        contenedor.appendChild(lista)

        document.getElementById('puntero').addEventListener('click', () => {
            const contenedor = document.getElementById('caja');
            contenedor.innerHTML = ''; 
        
            const lista = document.createElement('li');
            lista.className = 'info';
        
            lista.innerHTML = `
                <h2>CALI</h2>
                <p id="casos">Casos: ${conteoMunicipios['CALI'].casos}</p><br>
            `;
        
            contenedor.appendChild(lista);
        });
    });

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
    
});
