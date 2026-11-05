
function cambiarColor(valor) {
    let idCuadrado = "cuadrado" + valor;
    console.log(idCuadrado);
    
    document.getElementById(idCuadrado).classList.
      toggle("cuadradoColorAmarillo");
}

function asignarEventos(){
    let elementoClaseCaja = document.getElementsByClassName("cuadrado");

    // MUY IMPORTANTE, aquí la variable i es obligatorio
    // declararla con let, para que en cada iteracción tenga
    // el valor de su contexto
    for(let i=0; i<elementoClaseCaja.length; i++){
        elementoClaseCaja[i].addEventListener("click",
            // closure en JavaScript
            function(){ cambiarColor(i) }
        )
    }
}

window.onload = function(){
    asignarEventos();
}