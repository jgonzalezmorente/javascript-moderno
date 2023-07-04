class Cliente {
    
    #nombre;

    setNombre( nombre ) {
        this.#nombre = nombre;
    } 

    getNombre() {
        return this.#nombre;
    }

    set nombre( nombre ) {
        this.#nombre = nombre;
    }

    get nombre() {
        return this.#nombre
    }


}

const juan = new Cliente( 'Juan', 200 );
juan.setNombre( 'Juan' );
console.log( juan );
console.log( juan.nombre );
juan.nombre = 'Juan2';
console.log( juan.nombre );


