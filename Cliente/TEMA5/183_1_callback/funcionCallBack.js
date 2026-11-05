
function escribe(dato, funcion) {
    funcion(dato);
}

function llamarLog() {
    escribe("Hola",console.log)
}

function llamarError() {
    escribe("Adios",console.error)
}

function llamarAlert() {
    escribe("Buenas",alert)
}

window.onload = function(){
    document.getElementById("llamarLog").addEventListener("click", llamarLog);
    document.getElementById("llamarError").addEventListener("click", llamarError);
    document.getElementById("llamarAlert").addEventListener("click", llamarAlert);
}