// Variables y Selectores
const formulario = document.querySelector( '#agregar-gasto' );
const gastoListado = document.querySelector( '#gastos ul')

// Eventos
eventListeners();
function eventListeners() {
    document.addEventListener( 'DOMContentLoaded', preguntarPresupuesto );
    formulario.addEventListener( 'submit', agregarGasto );
}


// Clases
class Presupuesto {
    constructor( presupuesto ) {
        this.presupuesto = Number( presupuesto );
        this.restante = Number( presupuesto );
        this.gastos = [];
    }

    nuevoGasto( gasto ) {
        this.gastos = [ ...this.gastos, gasto ];
        this.calcularRestante();
    }

    calcularRestante() {
        const gastado = this.gastos.reduce( ( total, gasto ) => total + gasto.cantidad, 0 );
        this.restante = this.presupuesto - gastado;        
    }

    eliminarGasto( id ) {
        this.gastos = this.gastos.filter( gasto => gasto.id !== id );
        this.calcularRestante();
    }
}


class UI {
    insertarPresupuesto( presupuesto ) {
        // Extraer valores
        const { presupuesto: cantidad, restante } = presupuesto;
        
        // Asignar al HTML
        document.querySelector( '#total').textContent = cantidad;
        document.querySelector( '#restante').textContent = restante;
    }

    imprimirAlerta( mensaje, tipo ) {

        // Crear el div
        const divMensaje = document.createElement( 'div' );
        divMensaje.classList.add( 'text-center', 'alert' );

        if ( tipo === 'error' ) {
            divMensaje.classList.add( 'alert-danger' );
        } else {
            divMensaje.classList.add( 'alert-success' );
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el HTML
        document.querySelector( '.primario' ).insertBefore( divMensaje, formulario );

        // Quitar del HTML
        setTimeout(() => {
            divMensaje.remove();
        }, 3000 );
    }

    mostrarGastos( gastos ) {
        
        this.limpiarHTML();

        // Iterar sobre los gastos
        gastos.forEach( gasto => {
            const { cantidad, nombre, id } = gasto;

            // Crear un LI
            const nuevoGasto = document.createElement( 'li' );
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';            
            nuevoGasto.dataset.id = id;

            // Agregar el HTML del gasto
            nuevoGasto.innerHTML = `${ nombre } <span class="badge badge-primary badge-pill">$ ${ cantidad }</span>`;

            // Botón para borrar el gasto
            const btnBorrar = document.createElement( 'button' );
            btnBorrar.classList.add( 'btn', 'btn-danger', 'borrar-gasto' );
            btnBorrar.onclick = () => {
                eliminarGasto( id );
            }
            btnBorrar.innerHTML = 'Borrar &times;';

            nuevoGasto.appendChild( btnBorrar );
                        
            // Agregar al HTML
            gastoListado.appendChild( nuevoGasto );

            
        });
    }
    
    limpiarHTML() {
        while( gastoListado.firstChild ) {
            gastoListado.removeChild( gastoListado.firstChild );
        }

    }
    actualizarRestante( restante ) {
        document.querySelector( '#restante' ).textContent = restante;
    }

    comprobarPresupuesto( presupuestoObj ) {
        const { presupuesto, restante } = presupuestoObj;

        const restanteDiv = document.querySelector( '.restante' );

        // Comprobar 25%
        if ( ( presupuesto / 4 ) > restante  ) {            
            restanteDiv.classList.remove( 'alert-success', 'alert-warning' );
            restanteDiv.classList.add( 'alert-danger' );
        } else if ( ( presupuesto / 2 ) > restante ) {
            restanteDiv.classList.remove( 'alert-success' );
            restanteDiv.classList.add( 'alert-warning' );
        } else {
            restanteDiv.classList.remove( 'alert-danger', 'alert-warning' );
            restanteDiv.classList.add( 'alert-success' );
        }

        // Si el total es 0 o menor
        formulario.querySelector('button[type="submit"]').disabled = false;
        if ( restante <= 0 ) {
            ui.imprimirAlerta( 'El presupuesto se ha agotado', 'error' );
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }
}

let presupuesto;
const ui = new UI();

// Funciones
function preguntarPresupuesto() {
    const presupuestoUsuario = Number( prompt( '¿Cuál es tu presupuesto?' ) );    
    if ( !presupuestoUsuario || presupuestoUsuario < 0 ) {
        window.location.reload();
    }
    presupuesto = new Presupuesto( presupuestoUsuario );
    ui.insertarPresupuesto( presupuesto );
}

function agregarGasto( e ) {
    e.preventDefault();

    // Leer los datos del formulario
    const nombre = document.querySelector( '#gasto').value;
    const cantidad = Number( document.querySelector( '#cantidad').value );

    if ( nombre === '' ) {
        ui.imprimirAlerta( 'Ambos campos son oblitatorios', 'error' );
        return;
    }

    if ( cantidad <= 0 || isNaN( cantidad ) ) {
        ui.imprimirAlerta( 'Cantidad no válida', 'error' );
        return;
    }

    // Generar un objeto con el gasto
    const gasto = { nombre, cantidad, id: Date.now() };
    
    // Añade un nuevo gasto
    presupuesto.nuevoGasto( gasto );

    // Mensaje de todo bien!
    ui.imprimirAlerta( 'Gasto agregado correctamente' );

    // Imprimir los gastos
    const { gastos, restante } = presupuesto;
    ui.mostrarGastos( gastos );
    ui.actualizarRestante( restante );
    ui.comprobarPresupuesto( presupuesto );

    // Reinica el formulario
    formulario.reset();
    
}

function eliminarGasto( id ) {
    // Los elimina de la clase
    presupuesto.eliminarGasto( id );

    // Elimina los gastos del HTML
    const { gastos, restante } = presupuesto;
    ui.mostrarGastos( gastos );    
    ui.actualizarRestante( restante );
    ui.comprobarPresupuesto( presupuesto );
}