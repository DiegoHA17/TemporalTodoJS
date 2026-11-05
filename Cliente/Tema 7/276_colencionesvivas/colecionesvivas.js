function cargarHijos() {
    let capa = document.getElementById("principal");
    let hijos = capa.children;
    console.log("Número de hijos de la capa principal: " + hijos.length);
    let nuevoParrafo = document.createElement("p");
    capa.appendChild(nuevoParrafo);
    console.log("Número de hijos de la capa principal después de añadir un nuevo párrafo: " + capa.children.length);
}
window.onload = function() {
    document.getElementById("cargarhijo").addEventListener("click", cargarHijos);
}