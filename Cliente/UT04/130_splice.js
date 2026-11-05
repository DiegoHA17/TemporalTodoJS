
function añadireElementos() {
    let numeros = ["10","20","30","40","50","60","70","80","90"];
    console.log(numeros);
    numeros.splice(0,1); //Eliminar el primer elemento
    console.log(numeros);
    numeros.splice(2,3); //Eliminar tres elementos a partir del índice 2
    console.log(numeros);
    numeros.splice(-1,1); //Eliminar el último elemento
    console.log(numeros);
    // Inserta dos elemenetos desde la posición 0
    numeros.splice(0,0,"100","200");
}

window.onload = function() {
    document.getElementById("añadirElemento").addEventListener("click", añadireElementos); 
}
