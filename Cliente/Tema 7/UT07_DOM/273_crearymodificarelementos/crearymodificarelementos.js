function añadirElementohijo() {
    let nuevoElemento = document.createElement("p");
    let contenido = document.createTextNode("Este es un nuevo elemento añadido como hijo.");
    nuevoElemento.appendChild(contenido);
    document.getElementById("principal").appendChild(nuevoElemento);
};
function añadirElementoposicion() {
    let nuevoElemento = document.createElement("p");
    let contenido = document.createTextNode("Este es un nuevo elemento añadido en una posición específica.");
    let capa = document.getElementById("principal");
    let pPosterior =document.querySelectorAll("#principal p:nth-of-type(2)")[0];
    nuevoElemento.appendChild(contenido);
    capa.insertBefore(nuevoElemento, pPosterior);
};
function remplazarElemento() {
    let nuevoElemento = document.createElement("p");
    let contenido = document.createTextNode("Este elemento ha reemplazado a otro.");
    nuevoElemento.appendChild(contenido);
    let elementoAReemplazar = document.getElementById("aReemplazar");
    document.getElementById("principal").replaceChild(nuevoElemento, elementoAReemplazar);  
};
function eliminarElemento() {
    let elementoAEliminar = document.getElementById("aEliminar");
    document.getElementById("principal").removeChild(elementoAEliminar);
};



window.onload = function() {
    document.getElementById("anadirhijo").addEventListener("click", añadirElementohijo);
    document.getElementById("anadirenposicion").addEventListener("click", añadirElementoposicion);
    document.getElementById("remplazarelemento").addEventListener("click", remplazarElemento);
    document.getElementById("eliminarelemento").addEventListener("click", eliminarElemento);

};