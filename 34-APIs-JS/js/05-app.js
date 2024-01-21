document.addEventListener( 'visibilitychange', () => {
    if ( document.visibilityState === 'visible' ) {
        console.log( 'Pausar el video' );
    } else {
        console.log( 'Ejecutar la función para reproducir el video...' );
    };
});