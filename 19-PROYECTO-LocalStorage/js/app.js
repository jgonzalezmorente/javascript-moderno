// Variables
const formulario = document.querySelector( '#formulario' );
const listaTweets = document.querySelector( '#lista-tweets' );
const tweet = document.querySelector( '#tweet' )
const contenido = document.querySelector( '#contenido' );
let tweets = [];

// Event Listeners
eventListeners();


// Funciones
function eventListeners() {

    // Cuando el usuario agrega un nuevo tweet    
    formulario.addEventListener( 'submit', agregarTweet );

    // Cuando el documento está listo
    document.addEventListener( 'DOMContentLoaded', () => {
        tweets = JSON.parse( localStorage.getItem( 'tweets' ) ) || [];
        crearHTML();                
    });
};

function agregarTweet( e ) {
    e.preventDefault();
    const texto = tweet.value.trim();

    if ( texto === '' ) {
        mostrarError( 'Un mensaje no puede ir vacío' );
        return;        
    }

    const tweetObj = {
        id: Date.now(),
        texto
    };

    tweets = [ ...tweets, tweetObj ];

    crearHTML();

    formulario.reset();
    
}

function mostrarError( error ) {
    const mensajeError = document.createElement( 'p' );
    mensajeError.textContent = error;
    mensajeError.classList.add( 'error' );

    contenido.appendChild( mensajeError );

    setTimeout(() => {
        mensajeError.remove();        
    }, 3000);
}

function crearHTML() {
    
    limpiarHTML();

    if ( tweets.length === 0 ) return;
    
    tweets.forEach( ( tweet ) => {
        // Agregar un botón de eliminar 
        const btnEliminar = document.createElement( 'a' );
        btnEliminar.classList.add( 'borrar-tweet' );
        btnEliminar.innerText = 'X';

        btnEliminar.onclick = () => {
            borrarTweet( tweet.id );        
        }

        const li = document.createElement( 'li' );
        li.innerText = tweet.texto;

        li.appendChild( btnEliminar );
        listaTweets.appendChild( li );
    });

    sincronizarStorage();
}

function sincronizarStorage() {
    localStorage.setItem( 'tweets', JSON.stringify( tweets ) );
}

function borrarTweet( id ) {    
    tweets = tweets.filter( tweet => tweet.id !== id );
    crearHTML();   
}

function limpiarHTML() {
    while (listaTweets.firstChild ) {
        listaTweets.removeChild( listaTweets.firstChild )
    }
}