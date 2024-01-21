const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const salirBtn = document.querySelector('#salir-pantalla-completa');

abrirBtn.addEventListener( 'click', pantallaCompleta );
salirBtn.addEventListener( 'click', salirCompleta );

function pantallaCompleta() {
    document.documentElement.requestFullscreen();
}

function salirCompleta() {
    document.exitFullscreen();

}