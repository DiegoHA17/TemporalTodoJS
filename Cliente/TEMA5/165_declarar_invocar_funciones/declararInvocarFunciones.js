
function triple(n) {
    return 3*n
}

function saludoConMensaje(mensaje) {
    console.log(mensaje);
}

function saludo() {
    console.log("Hola");
}

function pares(array) {
    let nPares = 0;
    if (array instanceof Array){
        for (n of array){
            if (n%2 == 0){
                nPares++;
            }
        }
    }
    return nPares;
}

function declararInvocarFunciones() {
    saludo();
    saludoConMensaje("Hola mundo");
    //Llamadas a triple
    let [x,y,z] = [6,4,"Hola"];
    console.log("Llamadas a la funcion triple");
    console.log(triple(9));//27
    console.log(triple(x));//18
    console.log(triple(x+y));//30
    console.log(triple(x) + triple(y));//30
    console.log(triple(triple(9)));//81
    console.log(triple(z));//NaN

    //Llamada a funcion pares, pasando array
    console.log("Existen: " + pares([1,2,3,4,5,6,7,8,9]) +" pares");

    //Comprueba pares, del triple de cada valor
    console.log(pares([triple(1), triple(2), (triple(3))]));
    
}

window.onload = function() {
    document.getElementById("declararInvocarFunciones").addEventListener("click", declararInvocarFunciones);
}