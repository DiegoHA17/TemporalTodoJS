let contador = 0;

function cambiarColorBarraLarga() {
       // document.getElementById("barraLarga").classList.add("colorMarronBarraLarga");
        document.getElementById("barraLarga").classList.remove("colorMarronBarraLarga");
}
 
function cambiarColorCuadrados(valor) {
        let idComponente = "cuadrado" + valor;
        document.getElementById(idComponente).classList.add("cuadradoColorAmarillo");
}
 
function cambiarColorCuadrados(valor) {
        let idComponente = "cuadrado" + valor;

        document.getElementById(idComponente).classList.toggle("cuadradoColorAmarillo");
        contador ++;
        console.log("Has pulsado " + contador + " veces");
}
 
 
 
 
window.onload = function() {
        document.getElementById("barraLarga").addEventListener("click", cambiarColorBarraLarga);
        document.getElementById("cuadrado1").addEventListener("click", function(){ cambiarColorCuadrados("1")});
        document.getElementById("cuadrado2").addEventListener("click", function(){ cambiarColorCuadrados("2")});
}
 