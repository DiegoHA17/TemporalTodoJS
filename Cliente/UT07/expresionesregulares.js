function validarDni() {
    let dni = prompt("Introduce un DNI (formato 12345678A):");
    let expNIF = /^[0-9]{8}[A-Za-z]$/;
    console.log(expNIF);
    if (expNIF.test(dni)) {
        alert("DNI válido");
    } else {
        alert("DNI no válido");
    }
    
}
function existecaracter() {
    let cadena = prompt("Introduce una cadena de texto:");
    let caracter = prompt("Introduce un carácter a buscar:");
    let expCaracter = new RegExp(caracter);
    if (expCaracter.test(cadena)) {
        alert("El carácter existe en la cadena");
    } else {
        alert("El carácter no existe en la cadena");
    }
}
function empiezaytermina() {
    let cadena = prompt("Introduce una cadena de texto:");
    let expEmpiezaTermina = /^a.*z$/;
    if (expEmpiezaTermina.test(cadena)) {
        alert("La cadena empieza con 'a' y termina con 'z'");
    } else {
        alert("La cadena no cumple la condición");
    }
}
function conmayus() {
    let cadena = prompt("Introduce una cadena de texto:");
    let expConMayuscula = /[A-Z]/;
    if (expConMayuscula.test(cadena)) {
        alert("La cadena contiene al menos una letra mayúscula");
    } else {
        alert("La cadena no contiene letras mayúsculas");
    } 
    
}

window.onload = function() {
    document.getElementById("valida").addEventListener("click", validarDni);
    document.getElementById("existeCarcter").addEventListener("click", existecaracter);
        document.getElementById("empiexaYtermina").addEventListener("click", empiezaytermina);
    document.getElementById("conMayuscula").addEventListener("click", conmayus);

};
