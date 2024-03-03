const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener( 'click', obtenerDatos );

function obtenerDatos() {
    const url = 'https://picsum.photos/list';
    fetch( url )
        .then( respuesta => respuesta.json() )
        .then( resultados => mostrarHTML( resultados ) );
}

function mostrarHTML( datos ) {
    const contenido = document.querySelector( '.contenido' );
    let html = '';
    datos.forEach(({ author, post_url }) => {
        html += `
            <p>Autor: ${ author }</p>
            <a href="${ post_url }" target="_blank">Ver imagen</a>        
        `;
    });

    contenido.innerHTML = html;
}