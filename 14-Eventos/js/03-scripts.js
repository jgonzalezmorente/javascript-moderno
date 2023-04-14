const busqueda = document.querySelector( '.busqueda' );

busqueda.addEventListener( 'input', ( e ) => {
    console.log(e.target.value);
    if ( e.target.value === '' ) {
        console.log( 'Falló la validación' );
    }
});