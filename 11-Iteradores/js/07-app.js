const pendientes = [ 'Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript' ];

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Taablet', precio: 200 },
    { nombre: 'Audífonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },    
];

for( let pendiente of pendientes ) {
    console.log( pendiente );
}

for( let producto of carrito ) {
    console.log( producto.nombre );
}

