const weakset = new WeakSet();

const cliente = {
    nombre: 'Juan',
    saldo: 100
}

const nombre = 'Juan';

weakset.add( cliente );
weakset.add( cliente );
// weakset.add( nombre );

console.log( weakset.has( cliente ) );
weakset.delete( cliente );

console.log( weakset.size ); // undefined

console.log( weakset );

