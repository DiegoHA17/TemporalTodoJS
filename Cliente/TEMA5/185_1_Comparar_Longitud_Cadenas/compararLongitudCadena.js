
function ordenPersonal(a,b) {
    return a.length-b.length;
}

function compararLongitud() {
    let cadenaUno  = prompt("Intruduce cadena uno: ");
    let cadenaDos  = prompt("Intruduce cadena dos: ");

    let resultado = ordenPersonal(cadenaUno, cadenaDos);

    if(resultado == 0){
        alert("Las cadenas son iguales --> " + resultado);
    }else if (resultado > 0){
        alert("La cadena uno es mayor --> " + resultado);
    }else{
        alert("La cadena dos es mayor --> " + resultado);
    }
}

window.onload = function(){
    document.getElementById("compararLongitud").addEventListener("click", compararLongitud);
}