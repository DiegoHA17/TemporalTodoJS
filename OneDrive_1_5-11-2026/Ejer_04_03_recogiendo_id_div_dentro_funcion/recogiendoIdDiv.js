

function cambiarColor(i){
    
    let idElemento = i.target.id;
    document.getElementById(idElemento).classList. 
      toggle("cuadradoColorVerde");
}


function asignarEventos() {
    let elementosClaseCuadro = document.getElementsByClassName("cuadrado");

    for(let i=0; i<elementosClaseCuadro.length; i++){
        elementosClaseCuadro[i].addEventListener("click",cambiarColor);
    }
}

window.onload = function(){    
    asignarEventos();
}