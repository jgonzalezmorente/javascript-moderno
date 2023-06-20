function Cliente( nombre, saldo ) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function() {
    let tipo;
    if ( this.saldo > 10000 ) {
        tipo = 'Gold';
    } else if ( this.saldo > 5000 ) {
        tipo = 'Platinium';    
    } else {
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${ this.nombre }, Saldo: ${ this.saldo }, Tipo Cliente: ${ this.tipoCliente() }`;
}

Cliente.prototype.retiraSaldo = function( retira ) {
    return this.saldo -= retira;
}

function Persona( nombre, saldo, telefono ) {
    Cliente.call( this, nombre, saldo );
    this.telefono = telefono;
}

Persona.prototype = Object.create( Cliente.prototype );
Persona.prototype.constructor = Cliente;

Persona.prototype.mostrarTelefono = function() {
    return `El teléfono de esta persona es ${ this.telefono }`;
}

// Instanciarlo
const juan = new Persona( 'Juan', 5000, 1025979 );

console.log( juan );
console.log( juan.nombreClienteSaldo() );
console.log( juan.mostrarTelefono() );

