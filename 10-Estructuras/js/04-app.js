// Operador Mayor que y menor que

const dinero = 100;
const totalAPagar = 500;
const tarjeta = false;
const cheque = false;

if( dinero >= totalAPagar ) {
    console.log('Sí podemos pagar');
} else if ( cheque ) {
    console.log( 'Sí tengo un cheque' );
}
else if( tarjeta) {
    console.log( 'Si puedo pagar con tarjeta' );
}
else {
    console.log('Fondos insuficientes');
}