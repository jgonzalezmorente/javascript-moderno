const enlace = document.createElement( 'A' );

enlace.textContent = 'Nuevo Enlace';
enlace.href = '/nuevo-enlace';
enlace.target = '_blank';
enlace.setAttribute( 'data-enlace', 'nuevo-enlace' );
enlace.classList.add( 'alguna-clase' );
enlace.onclick = miFuncion;

const navegacion = document.querySelector( '.navegacion' );
navegacion.insertBefore( enlace, navegacion.children[1] );

function miFuncion() {
    alert( 'Diste click' );
}

// Crear un Card de forma dinámica
