
function cambiarFondo(){
    //alert("Hola mundo");
    let color = "rojo";
    console.log("Mensaje LOG de hola mundo: " + color);
    document.getElementById("idFondo").classList.add("fondoNaranja");
}

window.onload = function() {
    document.getElementById("idTitulo").addEventListener("click",cambiarFondo);
}