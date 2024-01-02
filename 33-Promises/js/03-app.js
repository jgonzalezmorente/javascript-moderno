
const aplicarDescuento = new Promise( ( resolve, reject ) => {
    const descuento = true;
    if ( descuento ) {
        resolve( 'Descuento aplicado' );
    } else {
        reject( 'No se pudo aplicar el descuento' );
    }
});

aplicarDescuento
    .then( descuento )
    .catch( error => console.log( error ) );

// Hay 3 valores posibles:
// fulfilled - El promise se cumplió
// rejected - El promise no se cumplió
// pending - No se ha cumplido y tampoco ha sido rechazado


function descuento( mensaje ) {
    console.log( mensaje );
}