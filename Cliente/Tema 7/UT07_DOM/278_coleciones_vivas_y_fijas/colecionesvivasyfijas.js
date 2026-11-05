function cargarcolecion(){
    let principal = document.getElementById("principal");
    let listauno = document.getElementsByClassName("especial");
    let listadatos = document.querySelectorAll(".especial");
    console.log("getElementsByClassName" + listauno.length)
    console.log("querySelectorAll" + listadatos.length);
}
window.onload = cargarcolecion;