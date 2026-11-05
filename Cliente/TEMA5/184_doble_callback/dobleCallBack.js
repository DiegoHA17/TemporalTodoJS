//funcion para usar
function doble(y) {
    return 2*y;
}

function escribir(x,accion) {
    console.log(accion(x));
}

function dobleCallBack() {
    //doble -> es la llamada a la funcion doble
    escribir(12,doble);
}

function dobleCallBackAnonima() {
    /*En vez de pasar nombre de la funcion que ya existe
    Escribimos la declaracion completa de la funcion (anonima)*/
    escribir(12,function(y){
        return 2*y;
    });
}

function dobleCallBackFlecha() {
    //declaracion de la funcion flecha
    escribir(12,y=>2*y);
}

window.onload = function(){
    document.getElementById("dobleCallBack").addEventListener("click", dobleCallBack);
    document.getElementById("dobleCallBackAnonima").addEventListener("click", dobleCallBackAnonima);
    document.getElementById("dobleCallBackFlecha").addEventListener("click", dobleCallBackFlecha);
}