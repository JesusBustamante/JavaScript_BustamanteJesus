// Creación de un elemento personalizable (WebComponent General)
class crearBoton extends HTMLElement{
    constructor(){
        super();
        this.textContent = '¡Haz click aquí!';
        this.addEventListener('click', () => alert("Hiciste click!!! Eres muy inteligente"))
    }
}

customElements.define('mi-boton', crearBoton)

// ----------------------------------------------------------------------

// Creación de un elemento personalizable (ShadowDom)
class crearBotonShadow extends HTMLElement{
    constructor(){
        super();
        let miShadow = this.attachShadow({mode:'open'});
        miShadow.innerHTML = `
        <mi-boton></mi-boton>
        <button>Soy un lindo botón!</button>
        `
    }
}
customElements.define("boton-shadow", crearBotonShadow)