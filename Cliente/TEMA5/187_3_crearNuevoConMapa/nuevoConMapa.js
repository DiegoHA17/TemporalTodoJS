function crearconMapa(){
    const notas =  [4,5,9,2,,5,6,,,,,7,5];
    const doble = notas.map(function(valor){
        return valor * 2;
    });
    console.log(notas);
    console.log(doble);
}

window.onload = function() {
}