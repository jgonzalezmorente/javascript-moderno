'use strict';

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}


// Object Constructor

function Producto( nombre, precio ) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto( 'Monitor 20 pulgadas', 500 );
console.log( producto2 );

const producto3 = new Producto( 'Televisión', 100 );
console.log( producto3 );
