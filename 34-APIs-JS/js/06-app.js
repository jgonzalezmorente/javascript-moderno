const salida = document.querySelector( '#salida' );
const microfono = document.querySelector( '#microfono' );

microfono.addEventListener( 'click', ejecutarSpeechAPI );


function ejecutarSpeechAPI() {
    const SpeechReconginition = webkitSpeechRecognition;
    const recognition = new SpeechReconginition();
    recognition.start();

    recognition.onstart = function() {
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando...';
    }

    recognition.onspeechend = function () {        
        //salida.textContent = 'Se dejó de grabar...';
        recognition.stop();
    }

    recognition.onresult = function(e) {
        console.log( 'onresult' );
        const { confidence, transcript } = e.results[0][0];
        const speech = document.createElement( 'p' );
        speech.innerHTML = `Grabando: ${ transcript }`;
        salida.appendChild( speech );
        
        const seguridad = document.createElement( 'p' );
        seguridad.innerHTML = `Seguridad: ${ parseInt( confidence * 100 ) }%`;
        salida.appendChild( seguridad );
    }
}
