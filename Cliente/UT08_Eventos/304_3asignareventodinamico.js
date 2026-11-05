let contado = 5;

function asignarEventoDinamico() {
let parrafos = document.querySelectorAll("p");
for (const parrafo of parrafos) {
    parrafo.addEventListener("click", function() {
        alert("Evento asignado dinámicamente");
    });
}
}
function crearElemento(){
    let nuevoparrafo = document.createElement("p");
    nuevoparrafo.textContent = contado;
    contado++;
    nuevoparrafo.addEventListener("click", asignarEventoDinamico);
    document.body.appendChild(nuevoparrafo);
}
window.onload = function() {
    document.getElementById("asignareventodinamico").addEventListener("click", asignarEventoDinamico);
    document.getElementById("crearelemento").addEventListener("click",crearElemento );

};