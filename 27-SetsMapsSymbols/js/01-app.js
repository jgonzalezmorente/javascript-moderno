const carrito = new Set();

carrito.add( 'Camisa' );
carrito.add( 'Disco #1' );
carrito.add( 'Disco #2' );
carrito.add( 'Disco #3' );

console.log( carrito.delete( 'Disco #3' ) );

console.log( carrito.has( 'Guitarra' ) );

// carrito.clear();

carrito.forEach( (producto, index, pertenece )  => console.log({ producto, index, pertenece }) );

console.log( carrito.size );

// Del siguiente arreglo, eliminar los duplicados

const numeros = [10, 20, 30, 40, 50, 10, 20];
const noDuplicados = new Set(numeros);

console.log( [...noDuplicados] );



