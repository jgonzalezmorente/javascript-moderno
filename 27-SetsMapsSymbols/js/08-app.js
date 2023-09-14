const ciudades = [ 'Londres', 'New York', 'Madrid', 'París' ];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();

datos.set('nombre', 'Juan');
datos.set('profesion', 'Desarrollador Web');

// Default
console.warn( 'DEFAULT' );

for ( let ciudad of ciudades ) {
    console.log( ciudad );    
}

for ( let orden of ordenes ) {
    console.log( orden );    
}

for ( let dato of datos ) {
    console.log( dato );    
}

// Keys Iterator
console.warn( 'KEYS' );
for( let key of ciudades.keys() ) {
    console.log( key );    
}

for( let key of ordenes.keys() ) {
    console.log( key );
}

for( let key of datos.keys() ) {
    console.log( key );    
}


// Values Iterator
console.warn( 'VALUES' );
for( let value of ciudades.values() ) {
    console.log( value );    
}

for( let value of ordenes.values() ) {
    console.log( value );
}

for( let value of datos.values() ) {
    console.log( value );    
}


// Entries Iterator
// for( let entry of ciudades.entries() ) {
//     console.log( entry );   
// }

// for( let entry of ordenes.entries() ) {
//     console.log( entry );   
// }

// for( let entry of datos.entries() ) {
//     console.log( entry );   
// }

