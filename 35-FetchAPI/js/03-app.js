const cargarJSONArrayBtn = document.querySelector( '#cargarJSONArray' );
cargarJSONArrayBtn.addEventListener( 'click', obtenerDatos );

function obtenerDatos() {
    const url = 'data/empleados.json';
    fetch( url )
        .then( respuesta => respuesta.json() )
        .then( resultado => mostrarHTML( resultado ) );        
}

function mostrarHTML( empleados ) {
    const contenido = document.querySelector('#contenido');
    let html = '<hr>';
    empleados.forEach(( { id, nombre, empresa, trabajo }) => {
        html += `     
            <p>Empleado: ${ nombre }</p>
            <p>ID: ${ id }</p>
            <p>Empresa: ${ empresa }</p>
            <p>Trabajo: ${ trabajo }</p>
            <hr>
        `;        
    });
    contenido.innerHTML = html;
}