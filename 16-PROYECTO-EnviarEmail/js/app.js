document.addEventListener( 'DOMContentLoaded', function() {
    
    const email = {
        email: false,
        asunto: false,
        mensaje: false,
        cc: true
    }
    
    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector( '#email' );
    const inputCC = document.querySelector( '#cc' );
    const inputAsunto = document.querySelector( '#asunto' );
    const inputMensaje = document.querySelector( '#mensaje' );
    const formulario = document.querySelector( '#enviar-mail' );
    const btnSubmit = document.querySelector( '#enviar-mail button[type="submit"]' );
    const btnReset = document.querySelector( '#enviar-mail button[type="reset"]' );
    const spinner = document.querySelector( '#spinner' );

    // Asignar eventos
    inputEmail.addEventListener( 'input', validar );
    inputCC.addEventListener( 'input', validar );
    inputAsunto.addEventListener( 'input', validar );
    inputMensaje.addEventListener( 'input', validar );

    inputEmail.addEventListener( 'blur', validar );
    inputCC.addEventListener( 'blur', validar );
    inputAsunto.addEventListener( 'blur', validar );
    inputMensaje.addEventListener( 'blur', validar );

    formulario.addEventListener( 'submit', enviarEmail );

    btnReset.addEventListener( 'click', function( e ) {
        e.preventDefault();
        resetFormulario();
    });

    function validar( e ) {
        const value = e.target.value.trim();

        email[ e.target.id ] = false;

        if ( value === '' && e.target.id !== 'cc' ) {
            mostrarAlerta( `El campo ${ e.target.id } es obligatorio`, e.target.parentElement );
            return;
        }

        if ( e.target.id === 'email' && !validarEmail( value ) ) {
            mostrarAlerta( 'El email no es válido', e.target.parentElement );
            return;
        }

        if ( e.target.id === 'cc' && value !== '' && !validarEmail( value ) ) {
            mostrarAlerta( 'El email CC no es válido', e.target.parentElement );
            return;
        }

        limpiarAlerta( e.target.parentElement );

        // Asignar los valores
        email[ e.target.id ] = true;
        
        // Comprobar el objeto email
        comprobarEmail();

    }

    function mostrarAlerta( mensaje, referencia ) {

        limpiarAlerta( referencia );
        
        // Generar alerta en HTML        
        const error = document.createElement( 'P' );
        error.textContent = mensaje;
        error.classList.add( 'bg-red-600', 'text-white', 'p-2', 'mt-3', 'text-center', 'font-bold' );

        // Inyectar el error al formulario
        referencia.appendChild( error );

        comprobarEmail();
    }

    function limpiarAlerta( referencia ) {        
        const alerta = referencia.querySelector( '.bg-red-600' );
        if ( alerta ) {
            alerta.remove();
        }
    }

    function validarEmail( email ) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const resultado = regex.test( email );        
        return resultado;
    }

    function comprobarEmail() {        

        if ( Object.values( email ).includes( false ) ) {
            btnSubmit.classList.add( 'cursor-not-allowed', 'opacity-50' );
            btnSubmit.disabled = true;
            return;
        }
        
        btnSubmit.classList.remove( 'cursor-not-allowed', 'opacity-50' );
        btnSubmit.disabled = false;

    }

    function limpiarAlertas() {
        const alertas = document.querySelectorAll( '.bg-red-600' );
        alertas.forEach( alerta => alerta.remove() );
    }

    function enviarEmail( e ) {
        e.preventDefault();

        spinner.classList.remove( 'hidden' );
        spinner.classList.add( 'flex' );

        setTimeout( () => {
            spinner.classList.remove( 'flex' );    
            spinner.classList.add( 'hidden' );

            resetFormulario();

            // Crear una alerta
            const alertaExito = document.createElement( 'P' );
            alertaExito.classList.add( 'bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase' );
            alertaExito.textContent = 'Mensaje enviado correctamente';
            formulario.appendChild( alertaExito );

            setTimeout(() => {
                alertaExito.remove();
            }, 3000 );

        }, 3000 );

    }

    function resetFormulario() {
        // Reiniciar el objeto        
        Object.keys( email ).map( key => email[ key ] = ( key === 'cc' ) );

        formulario.reset();
        limpiarAlertas();
        comprobarEmail();        
    }

});