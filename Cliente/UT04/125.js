function convertirCadenaMayuscula(){
    let cadena = document.getElementById("campoEntrada").value;
    let cadeArray = cadena.split(" ");
    let nombreMayuscula = "";

    for(let i=0; i<cadeArray.length; i++){
        let palabra = cadeArray[i];
        let palabraMayuscula = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
        nombreMayuscula += palabraMayuscula + " ";
        let palabraMinuscula = palabra.toLowerCase();
        palabraMayuscula += palabraMinuscula + " ";
        console.log(palabraMinuscula);
    }
    document.getElementById("cajaCargarDatos").textContent = nombreMayuscula;

}

window.onload = function() {
    document.getElementById("botonCargarDatos").addEventListener("click",convertirCadenaMayuscula);
}