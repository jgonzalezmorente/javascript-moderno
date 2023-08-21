// Campos del formulario
const mascotaInput = document.querySelector( '#mascota' );
const propietarioInput = document.querySelector( '#propietario' );
const telefonoInput = document.querySelector( '#telefono' );
const fechaInput = document.querySelector( '#fecha' );
const horaInput = document.querySelector( '#hora' );
const sintomasInput = document.querySelector( '#sintomas' );

// UI
const formulario = document.querySelector( '#nueva-cita' );
const contenedorCitas = document.querySelector( '#citas' );

let editando;

class Citas {
    constructor() {
        this.citas = [];
    }

    agregarCita( cita ) {
        this.citas = [ ...this.citas, cita ];
    }

    eliminarCita( id ) {
        this.citas = this.citas.filter( cita => cita.id !== id );
    }

    editarCita( citaActualizada ) {
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? cita = citaActualizada : cita );     
    }
}

class UI {

    imprimirAlerta( mensaje, tipo ) {
        // Crear el div
        const divMensaje = document.createElement( 'div' );
        divMensaje.classList.add( 'text-center', 'alert', 'd-block', 'col-12' );

        // Agregar clase en base al tipo de error
        if ( tipo === 'error' ) {
            divMensaje.classList.add( 'alert-danger' );
        } else {
            divMensaje.classList.add( 'alert-success' );
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Agregar al DOM
        document.querySelector( '#contenido' ).insertBefore( divMensaje, document.querySelector( '.agregar-cita' ) );

        // Quitar la alerta después de 5 segundos
        setTimeout( () => {
            divMensaje.remove();
        }, 5000 );

    }

    imprimirCita({ citas }) {   
        
        this.limpiarHTML();

        citas.forEach( cita  => {

            const { id, mascota, propietario, telefono, fecha, hora, sintomas } = cita;
            
            const divCita = document.createElement( 'div' );
            divCita.classList.add( 'cita', 'p-3' );
            divCita.dataset.id = id;

            // Scripting de los elementos de la cita
            const mascotaParrafo = document.createElement( 'h2' );
            mascotaParrafo.classList.add( 'card-title', 'font-weight-bolder' );
            mascotaParrafo.textContent = mascota;

            const propietarioParrafo = document.createElement( 'p' );
            propietarioParrafo.innerHTML = `
                <span class="font-weight-bolder">Propietario:</span> ${propietario}
            `;

            const telefonoParrafo = document.createElement( 'p' );
            telefonoParrafo.innerHTML = `
                <span class="font-weight-bolder">Teléfono:</span> ${telefono}
            `;

            const fechaParrafo = document.createElement( 'p' );
            fechaParrafo.innerHTML = `
                <span class="font-weight-bolder">Fecha:</span> ${fecha}
            `;

            const horaParrafo = document.createElement( 'p' );
            horaParrafo.innerHTML = `
                <span class="font-weight-bolder">Hora:</span> ${hora}
            `;

            const sintomasParrafo = document.createElement( 'p' );
            fechaParrafo.innerHTML = `
                <span class="font-weight-bolder">Síntomas:</span> ${sintomas}
            `;
            
            // Botón para eliminar cita
            const btnEliminar = document.createElement( 'button' );
            btnEliminar.classList.add( 'btn', 'btn-danger', 'mr-2' );
            btnEliminar.innerHTML = `Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>`;
            btnEliminar.onclick = () => eliminarCita( id );

            // Botón para editar cita
            const btnEditar = document.createElement( 'button' );
            btnEditar.classList.add( 'btn', 'btn-info', 'mr-2' );
            btnEditar.innerHTML = `Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>`;
            btnEditar.onclick = () => cargarEdicion( cita ); 

            // Agregar los párrafos al divCita
            divCita.appendChild( mascotaParrafo );
            divCita.appendChild( propietarioParrafo );
            divCita.appendChild( telefonoParrafo );
            divCita.appendChild( fechaParrafo );
            divCita.appendChild( horaParrafo );
            divCita.appendChild( sintomasParrafo );
            divCita.appendChild( btnEliminar );
            divCita.appendChild( btnEditar );

            // Agregar las citas al HTML
            contenedorCitas.appendChild( divCita );
        });
        
    }

    limpiarHTML() {
        while( contenedorCitas.firstChild ) {
            contenedorCitas.firstChild.remove();
        }
    }

}

const ui = new UI();
const administrarCitas = new Citas();

// Registrar eventos
eventListener();

function eventListener() {
    mascotaInput.addEventListener( 'input', datosCitas );
    propietarioInput.addEventListener( 'input', datosCitas );
    telefonoInput.addEventListener( 'input', datosCitas );
    fechaInput.addEventListener( 'input', datosCitas );
    horaInput.addEventListener( 'input', datosCitas );
    sintomasInput.addEventListener( 'input', datosCitas );

    formulario.addEventListener( 'submit', nuevaCita );
}

// Objeto con la información de la cita
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

// Agrega datos al objeto cita
function datosCitas( e ) {
    citaObj[ e.target.name ] = e.target.value;    
}

// Valida y agrega una nueva cita la clase de citas
function nuevaCita( e ) {    

    e.preventDefault();

    // Extraer la información del objeto cita
    const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

    // Validar
    if ( mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '' ) {
        ui.imprimirAlerta( 'Todos los campos son oblitagorios', 'error' );
        return;        
    }

    if( editando ) {
        ui.imprimirAlerta( 'Editado correctamente' );
                
        // Pasar el objeto de la cita a edición
        administrarCitas.editarCita( { ...citaObj } );

        // Regresar el texto del botón
        formulario.querySelector( 'button[type="submit"]').textContent = 'Crear cita';

        ui.imprimirCita( administrarCitas );   

        // Quitar el modo edición
        editando = false;
        
    } else {        
        // Generar un id único
        citaObj.id = Date.now();
    
        // Creando un nueva cita
        administrarCitas.agregarCita( { ...citaObj } );

        // Mensaje de agregado correctamente
        ui.imprimirAlerta( 'Se agregó correctamente' );
    }


    // Resetear formulario
    formulario.reset();
    reiniciarObjeto();

    // Mostrar HTML
    ui.imprimirCita( administrarCitas );


}

function reiniciarObjeto() {        
    Object.keys( citaObj ).forEach( key => citaObj[key] = '' );
}

function eliminarCita( id ) {
    // Eliminar la cita
    administrarCitas.eliminarCita( id );

    // Muestre un mensaje
    ui.imprimirAlerta( 'La cita se eliminó correctamente' );

    // Refrescar el HTML
    ui.imprimirCita( administrarCitas );   

}


// Carga los datos y el modo edición

function cargarEdicion( cita ) {
    const { id, mascota, propietario, telefono, fecha, hora, sintomas } = cita;

    // Llenar los inputs 
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    // Llenar el objeto
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    // Cambiar el texto del botón
    formulario.querySelector( 'button[type="submit"]').textContent = 'Guardar cambios';

    editando = true;
    
}