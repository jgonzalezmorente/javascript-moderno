window.addEventListener( 'scroll', () => {
    const premium = document.querySelector( '.premium' );
    const ubicacion = premium.getBoundingClientRect();

    // console.log(ubicacion);
    
    if ( ubicacion.top < 784 ) {
        console.log( 'El elemento va a estar visible' );
    } else {
        console.log('Aun no, da más scroll');
    }
})