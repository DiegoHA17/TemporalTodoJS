

let listaUsuarios = new Set(); 


function logica (event) {

    event.preventDefault(); 

    const nombre = document.getElementById("nombre").value.trim();
    const password = document.getElementById("pass").value;
    const listaUI = document.getElementById("listaUsuarios");

    let errores = []; 

    if (nombre === "" ) { 

        errores.push("El nombre se encuentra vacio"); 
    
    } 

    else if (listaUsuarios.has(nombre)) {
        errores.push("El nick ya existe")
    }



//  Aqui lo que stamos haciendo ene ste caso es en cierta manera hacer 
// un camino de validaciones en vez de hacer un reggex, completo, lo diseccionamos, 
// en diferentes partes, si en este caso le falta algo lo qyue hace lo mebte en el array de errores
// para insertarlo despues abajo, de tal manera que el contenifo del array, se muestra con un alert al usario´
// si todo es correcto, sigue la validacion ya se forma la vista y se añade
// a la lista. 
if (!/[a-z]/.test(password)) {

    errores.push("La contraseña no contiene letras minusculas"); 
}

if (!/[A-Z]/.test(password)) {
    errores.push("La contraseña no contiene letras mayusculas"); 
}

if (!/\d/.test(password)) {
     errores.push("Falta un al menos un numero"); 
}
if (!/[.\-_]/.test(password)) {   
    errores.push("Falta un carácter especial (. - _).");
}
if (password.length <8) {
     errores.push("Minimo 8 caracteres.")
}


    if (errores.length == 0) {

        
    let ul = document.getElementById("listaUsuarios")

   listaUsuarios.add(nombre); 

   const li = document.createElement("li"); 

   li.textContent = nombre; 

   ul.appendChild(li); 

   document.getElementById("nombre").value = "";
    document.getElementById("pass").value = "";
   
     console.log("Usuario añadido con exito: " + nombre); 

    } else {
         alert ("Errores detectados en el formulario: " + errores); 
    }



    }

window.onload = function () {

    document.getElementById("boton").addEventListener("click", logica); 
}