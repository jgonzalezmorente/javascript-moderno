const nav = document.querySelector( '.navegacion' );


// Registrar un evento
nav.addEventListener( 'mouseup', () => {
    console.log('entrando en la navegación');
    nav.style.backgroundColor = 'white';
});

nav.addEventListener( 'dbclick', () => {
    console.log('saliendo de la navegación');
    nav.style.backgroundColor = 'transparent';
});

// mousedown: similar a click
// click
// dbclick: doble click
// mouseup: cuando sueltas el mouse