
function cargarElDato(){
    let valor = document.getElementById("campoEntrada").value;
    document.getElementById("cajaCargarDatos").textContent = valor;
}

window.onload = function(){
    document.getElementById("botonCargarDatos").addEventListener("click",cargarElDato);
}