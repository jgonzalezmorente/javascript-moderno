(function(){
    let DB;    
    const formulario = document.querySelector( '#formulario' );
    document.addEventListener( 'DOMContentLoaded', async () => {
                
        formulario.addEventListener( 'submit', validarCliente );
        DB = await conectarDB();

    });

    function validarCliente( e ) {
        e.preventDefault();
        
        // Leer todos los inputs
        const nombre = document.querySelector( '#nombre' ).value.trim();
        const email = document.querySelector( '#email' ).value.trim();
        const telefono = document.querySelector( '#telefono' ).value.trim();
        const empresa = document.querySelector( '#empresa' ).value.trim();

        if ( nombre === '' || email === '' || telefono === '' || empresa === '' ) {
            imprimirAlerta( 'Todos los campos son obligatorios', 'error' );
            return;
        }

        // Crear un objeto con la información
        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        cliente.id = Date.now()

        crearNuevoCliente( cliente );

    }

    function crearNuevoCliente( cliente ) {
        const transaction = DB.transaction( 'crm', 'readwrite' );
        const objectStore = transaction.objectStore( 'crm' );
        objectStore.add( cliente );
        transaction.onerror = function() {
            imprimirAlerta( 'Hubo un error', 'error' );
        }

        transaction.oncomplete = function() {
            imprimirAlerta( 'El cliente se agregó correctamente' );
            setTimeout(() => {
                window.location.href = 'index.html'
                
            }, 3000 );
        }
    }
})();