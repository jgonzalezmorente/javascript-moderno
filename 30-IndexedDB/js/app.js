let DB;

document.addEventListener( 'DOMContentLoaded', () => {
    crmDB();

    setTimeout( () => {
        crearCliente();
    }, 5000 );
});

function crmDB() {
    // Crear base de datos versión 1.0
    let crmdb = window.indexedDB.open( 'crm', 1 );

    // Si hay un error
    crmdb.onerror = function() {
        console.log( 'Hubo un error a la hora de crear la BD' );
    }

    // Si se creó bien
    crmdb.onsuccess = function() {
        console.log( 'Base de datos creada' );
        DB = crmdb.result;
    }

    // Configuración de la base de datos
    crmdb.onupgradeneeded = function( e ) {
        const db = e.target.result;
        const objectStore = db.createObjectStore( 'crm', {
            keyPath: 'crm',
            autoIncrement: true
        });

        // Definir las columnas
        objectStore.createIndex( 'nombre', 'nombre', { unique: false } );
        objectStore.createIndex( 'email', 'email', { unique: true } );
        objectStore.createIndex( 'telefono', 'telefono', { unique: false } );

        console.log( 'Columnas creadas' );
    }
}

function crearCliente() {
    let transaction = DB.transaction([ 'crm' ], 'readwrite' );
    transaction.oncomplete = function() {
        console.log( 'Transacción completada' );
    }

    transaction.onerror = function() {
        console.log( 'Hubo un error en la transacción' );
    }

    const objectStore = transaction.objectStore( 'crm' );
    const nuevoCliente = {
        telefono: 123456,
        nombre: 'Juan',
        email: 'correo@correo.com'
    };
    const peticion = objectStore.add( nuevoCliente );
    console.log( peticion );
}