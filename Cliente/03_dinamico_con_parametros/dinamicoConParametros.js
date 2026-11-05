
function cambiarColor(valor) {
    let idCuadrado = "cuadrado" + valor;
    console.log(idCuadrado);

    document.getElementById(idCuadrado).classList.toggle("cuadradoColorAmarillo");
}

function asignarEventos(){
    let elementoClaseCaja = document.getElementsByClassName("cuadrado");

    for(let i=0; i<elementoClaseCaja.length; i++){
        elementoClaseCaja[i].addEventListener("click", 
            function(){ cambiarColor(i) })
    }
}

window.onload = function(){
    asignarEventos();
}