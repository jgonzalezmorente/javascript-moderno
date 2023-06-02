// Variables
const marca = document.querySelector( '#marca' );
const year = document.querySelector( '#year' );
const minimo = document.querySelector( '#minimo' );
const maximo = document.querySelector( '#maximo' );
const puertas = document.querySelector( '#puertas' );
const transmision = document.querySelector( '#transmision' );
const color = document.querySelector( '#color' );

// Contenedor de los resultados
const resultado = document.querySelector( '#resultado' );

const max = new Date().getFullYear();
const min = max - 10;

// Generar un objeto con la búsqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

// Eventos
document.addEventListener( 'DOMContentLoaded', () => {
    // Muestra los automóviles al cargar
    mostrarAutos( autos ); 

    // Llena las opciones de años
    llenarSelect();

});

// Event listener para los selectores de búsqueda
marca.addEventListener( 'change', ( e ) => {
    datosBusqueda.marca = e.target.value;
    filtrarAutos();
});

year.addEventListener( 'change', ( e ) => {
    datosBusqueda.year = e.target.value;
    filtrarAutos();
});

minimo.addEventListener( 'change', ( e ) => {
    datosBusqueda.minimo = e.target.value;
    filtrarAutos();
});

maximo.addEventListener( 'change', ( e ) => {
    datosBusqueda.maximo = e.target.value;
    filtrarAutos();
});

puertas.addEventListener( 'change', ( e ) => {
    datosBusqueda.puertas = e.target.value;    
    filtrarAutos();
});

transmision.addEventListener( 'change', ( e ) => {
    datosBusqueda.transmision = e.target.value;
    filtrarAutos();
});

color.addEventListener( 'change', ( e ) => {
    datosBusqueda.color = e.target.value;
    filtrarAutos();
});

// Funciones
function mostrarAutos( autos ) {
    
    limpiarHTML();

    autos.forEach( ({ marca, modelo, year, puertas, transmision, precio, color }) => {
        const autoHTML = document.createElement( 'P' );

        autoHTML.textContent = `
            ${ marca } ${ modelo } - ${ year } - ${ puertas } Puertas - Transmisión: ${ transmision } - Precio: ${ precio } - Color: ${ color }
        `;

        // Insertar en el HTML
        resultado.appendChild( autoHTML );

    });
}

function llenarSelect() {
    for( let i = max; i >= min; i-- ) {
        const opcion = document.createElement( 'option' );
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild( opcion );
    }
}

function filtrarAutos() {
    const resultados = autos.filter( filtrarMarca )
                            .filter( filtrarYear)
                            .filter( filtrarMinimo )
                            .filter( filtrarMaximo )
                            .filter( filtrarPuertas )
                            .filter( filtrarTransmision )
                            .filter( filtrarColor );
    
    if ( resultados.length ) {
        mostrarAutos( resultados );
    } else {
        noResultados();
    }

}

const filtrarMarca = ( auto ) => !datosBusqueda.marca || datosBusqueda.marca === auto.marca; 
const filtrarYear = ( auto ) => !datosBusqueda.year || datosBusqueda.year == auto.year; 
const filtrarMinimo = ( auto ) => !datosBusqueda.minimo || auto.precio >= datosBusqueda.minimo;
const filtrarMaximo = ( auto ) => !datosBusqueda.maximo || auto.precio <= datosBusqueda.maximo;
const filtrarPuertas = ( auto ) => !datosBusqueda.puertas || datosBusqueda.puertas == auto.puertas;
const filtrarTransmision = ( auto ) => !datosBusqueda.transmision || datosBusqueda.transmision == auto.transmision;
const filtrarColor = ( auto ) => !datosBusqueda.color || datosBusqueda.color == auto.color;


// Limpiar HTML
function limpiarHTML() {
    while( resultado.firstChild ) {
        resultado.removeChild( resultado.firstChild );
    }

}

function noResultados() {

    limpiarHTML();

    const noResultados = document.createElement( 'div' );
    noResultados.classList.add( 'alerta', 'error' );
    noResultados.textContent = 'No hay resultados, intenta con otros términos de búsqueda';
    resultado.appendChild( noResultados );


}