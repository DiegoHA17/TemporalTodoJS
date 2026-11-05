function recuperarValores() {
    let parrafo = document.getElementById("parrafo1");
    let valores = parrafo.className;
    console.log("Valores de la clase del párrafo:", valores);
};
function recuperarvalorclasebucle() {
    let parrafo = document.getElementById("parrafo1");
    let listaClases = parrafo.classList;
    console.log("Recorriendo las clases del párrafo:");
    for (let clase of listaClases) {
        console.log(clase);
    }
}
window.onload = function() {
    recuperarValores();
    recuperarvalorclasebucle();
}