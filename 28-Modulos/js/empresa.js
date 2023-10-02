import { Cliente } from './cliente.js';

export class Empresa extends Cliente {
    constructor( nombre, ahorro, categoria ) {
        super( nombre, ahorro );
        this.categoria = categoria;
    }

    mostrarInformacion() {
       return `${ super.mostrarInformacion().replace( 'Cliente', 'Empresa ') } - Categoría: ${ this.categoria }`;
    }
}
