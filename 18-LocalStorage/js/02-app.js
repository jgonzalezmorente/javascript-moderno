
const productoJSON = localStorage.getItem( 'producto' )
console.log( JSON.parse( productoJSON ) );

const mesesJSON = localStorage.getItem( 'meses' );
const mesesArray = JSON.parse( mesesJSON );
console.log( mesesArray );




