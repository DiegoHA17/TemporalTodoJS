function lanzarerror() {
    let mierror = new Error("Este es un error personalizado");
    throw mierror;
}

window.onload = function() {
    document.getElementById("crearlanzarerror").addEventListener("click", lanzarerror);
};