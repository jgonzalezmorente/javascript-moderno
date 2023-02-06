// forEach

const pendientes = [ 'Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript' ];

pendientes.forEach( ( pendiente, indice ) => {
    console.log( `${ indice }: ${ pendiente }` );
});

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Taablet', precio: 200 },
    { nombre: 'Audífonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },    
];

const nuevoArreglo = carrito.forEach( producto => producto.nombre );
const nuevoArreglo2 = carrito.map( producto => producto.nombre );

console.log(nuevoArreglo);
console.log(nuevoArreglo2);