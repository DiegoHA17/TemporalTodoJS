
function cargarElDatos(){
    let valor = document.getElementById("campoEntrada").value;
    document.getElementById("cajaCargarDato").textContent = valor;
}

window.onload = function(){
    document.getElementById("botonCargarDatos"). 
      addEventListener("click",cargarElDatos);
}