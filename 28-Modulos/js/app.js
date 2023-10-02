import miNuevaFuncion, { nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente } from './cliente.js';
import { Empresa } from './empresa.js';

miNuevaFuncion();

console.log( nombreCliente );
console.log( ahorro );

console.log( mostrarInformacion( nombreCliente, ahorro ) );

tieneSaldo( ahorro );

const cliente = new Cliente( nombreCliente, ahorro );
console.log( cliente );

console.log( cliente.mostrarInformacion() );

const empresa = new Empresa( 'Código con Juan', 100, 'Aprendizaje en Línea' );
console.log( empresa.mostrarInformacion() );


