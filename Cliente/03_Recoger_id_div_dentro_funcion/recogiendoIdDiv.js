
function cambiarColor(i){
    console.log(i);
    let idElemento = i.target.id;
    alert("Se cambia de color el " + idElemento);
    document.getElementById(idElemento).classList.toggle("cuadradoColorAmarillo");
}

function asignarEventos(){
    let elementosClaseCuadrado = document.getElementsByClassName("cuadrado");

    for (let i=0; i<elementosClaseCuadrado.length; i++){
        elementosClaseCuadrado[i].addEventListener("click", cambiarColor);
    }
}

window.onload = function(){
    asignarEventos();
}