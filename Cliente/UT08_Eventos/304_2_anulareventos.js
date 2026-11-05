function mensaje (){
    alert("Evento Anulado");
    let p = document.getElementById("anularEvento");
    p.removeEventListener("click", mensaje);
}
window.onload = function() {
    document.getElementById("anularEvento").addEventListener("click", mensaje);
};