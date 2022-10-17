const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}


// Destructuring
const { nombre, disponible } = producto;
console.log( nombre, disponible );


// Destructuring con Arreglos
const numeros = [10, 20, 30, 40, 50];

const [ , , ...tercero ] = numeros;

console.log( tercero );