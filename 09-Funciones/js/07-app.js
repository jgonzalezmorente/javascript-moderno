iniciarApp();

function iniciarApp() {
    console.log( 'Iniciar App' );
    segundaFuncion();
}

function segundaFuncion() {
    console.log( 'Desde la segunda función' );
    usuarioAutenticado( 'Pablo' );
}

function usuarioAutenticado( usuario ) {
    console.log('Autenticando usuario... espere...');
    console.log(`Usuario autenticado exitosamente: ${ usuario }`);
}