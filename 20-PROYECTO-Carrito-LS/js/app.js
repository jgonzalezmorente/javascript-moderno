// Variables
const carrito = document.querySelector( '#carrito' );
const contenedorCarrito = document.querySelector( '#lista-carrito tbody' );
const vaciarCarritoBtn = document.querySelector( '#vaciar-carrito' );
const listaCursos = document.querySelector( '#lista-cursos' );
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {    

    // Cuando agregas un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener( 'click', agregarCurso );

    // Elimina cursos del carrito
    carrito.addEventListener( 'click', eliminarCurso );

    // Muestra los cursos de Local Storage
    document.addEventListener( 'DOMContentLoaded', () => {
        articulosCarrito = JSON.parse( localStorage.getItem( 'carrito' ) ) || [];
        carritoHTML();        
    });

    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener( 'click', () => {
        articulosCarrito = [];
        limpiarHTML(); // Eliminamos todo el HTML
    });

}

// Funciones
function agregarCurso( e ) {
    e.preventDefault();
    if( e.target.classList.contains( 'agregar-carrito' ) ) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso( cursoSeleccionado );
    }
}

// Elimina el curso del carrito
function eliminarCurso( e ) {
    if ( e.target.classList.contains( 'borrar-curso' ) ) {
        const cursoId = e.target.getAttribute( 'data-id' );
        
        // Elimina del arreglo de articulosCarrito por el data-id
        const articulo = articulosCarrito.find( curso => curso.id === cursoId );
        if ( articulo.cantidad > 1 ) {
            articulo.cantidad--;
        } else {
            articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId );
        }

        carritoHTML(); // Iterar sobre el carrito y mostrar su HTML

    }
}

// Lee el contenido del HTML al que le dimos click y extrae la información del curso
function leerDatosCurso( curso ) {    

    // Crear un objet con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector( 'img' ).src,
        titulo: curso.querySelector( 'h4' ).textContent,
        precio: curso.querySelector('.precio span' ).textContent,
        id: curso.querySelector( 'a' ).getAttribute( 'data-id' ),
        cantidad: 1
    }

    // Revisa si un elemento ya existe en el carrito
    const articulo = articulosCarrito.find( curso => curso.id === infoCurso.id );
    if ( articulo ) {
        // Actualizamos la cantidad
        articulo.cantidad++;

    } else {
        // Agregamos el elemento al carrito
        articulosCarrito = [ ...articulosCarrito, infoCurso ];
    }

    // Agrega elementos al arrego de carrito
    carritoHTML();

}

// Muestra el carrito de compras en el HTML
function carritoHTML() {
    // Limpiar el HTML
    limpiarHTML();

    // Recorre el carrito y genera el HTML
    articulosCarrito.forEach( ( curso ) => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement( 'tr' );
        row.innerHTML = `
            <td>
                <img src="${ imagen }" width="100">
            </td>
            <td>${ titulo }</td>
            <td>${ precio }</td>
            <td>${ cantidad }</td>
            <td>
                <a href='#' class="borrar-curso" data-id="${ id }">X</a>
            </td>

        `;

        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild( row );

    });

    sincronizarStorage();
}

function sincronizarStorage() {
    localStorage.setItem( 'carrito', JSON.stringify( articulosCarrito ) );
}

// Elimina los cursos del tbody
function limpiarHTML() {
    // Forma lenta
    // contenedorCarrito.innerHTML = '';

    while( contenedorCarrito.firstChild ) {
        contenedorCarrito.removeChild( contenedorCarrito.firstChild );
    }
}