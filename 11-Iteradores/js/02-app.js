// for( let i = 0; i <= 10; i++ ) {

//     if ( i === 5 ) {
//         console.log( 'CINCO' );
//         continue;
//     }
    
//     console.log(`Número ${ i }`);
// }


const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200, descuento: true },
    { nombre: 'Audífonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },    
];


for( let i = 0; i < carrito.length; i++ ) {
    if( carrito[ i ].descuento ) {
        console.log( `El artículo ${ carrito[i].nombre } tiene descuento!` );
        continue;
    }
    console.log( carrito[i].nombre )
}