
function tipoDastos(params) {
    console.log("Undefind: "+ typeof nada);
    console.log("Boolean: " + typeof true);
    console.log("Number: " + typeof 1);
    console.log("String: " + typeof "cadena de texto");
    console.log("Symbil: "+ typeof Symbol("valorUnico"));
    console.log("Null: " + typeof null);
    //Tipo de datos no primitivos
    console.log("Object: " + typeof{});
    console.log("Array: " + typeof[]);
    console.log("Map:" + typeof new Map());
    console.log("Set: " + typeof new Set());
    console.log("WeakMap: "+ typeof new WeakMap());
    console.log("WeakSet: "+ typeof new WeakSet());
    console.log("Date: "+ typeof new Date());
    console.log("Funtion: " + typeof function(){});
}

window.onload = function(){
    document.getElementById("tipoDatos").addEventListener("click",tipoDastos);
}