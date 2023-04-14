const formulario = document.querySelector( '#formulario' );

formulario.addEventListener( 'submit', validarFormulario );

function validarFormulario( e ) {
    e.preventDefault();
    console.log('Consultar una API');
    console.log(e.target.action);
}