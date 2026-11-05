
posCola = 0;
posPila = 9;

function cargarElDato(){
    let valor = document.getElementById("nombre").value;
    valor=valor.toLowerCase();
    valor.charAt(0).toUpperCase();
    cargarCola(valor);
    cargarPila(valor)
}

function cargarCola(datoCola){
    let idCola = "cola" + posCola;
    document.getElementById(idCola).textContent = datoCola;
    posCola++;
}
function cargarPila(datoPila){
    let idPila = "pila" + posPila;
    document.getElementById(idPila).textContent = datoPila;
    posPila--;
}
function borrarCola(){
    if(posCola === 1){
        document.getElementById("cola0").textContent = "__1ª__";
    }else{
        for(let i=0 ; i<(posCola-1) ; i++){
            let idActual = "cola" + i;
            let idSiguiente = "cola" + (i+1);
            let valorSiguiente = document.getElementById(idSiguiente).textContent; 
            document.getElementById(idActual).textContent = valorSiguiente;
            document.getElementById(idSiguiente).textContent = "|---|"; 
        }
    }
    posCola--;
}
function borrarPila(){
    posPila++;
    let idActual = "pila" + posPila;
    document.getElementById(idActual).textContent = "..--..";
}





window.onload = function() {
    document.getElementById("botonIntroducir").addEventListener("click", cargarElDato);
    document.getElementById("pila").addEventListener("click", borrarPila);
    document.getElementById("cola").addEventListener("click", borrarCola);

}