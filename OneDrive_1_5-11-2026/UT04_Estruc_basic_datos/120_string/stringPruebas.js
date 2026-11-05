
function ordenarPalabras(){
    let valorUno = document.getElementById("valorUno").value;
    let valorDos = document.getElementById("valorDos").value;
    let valoresOrdenados = "";

    console.log("valor uno: " + valorUno);
    console.log("valor dos: " + valorDos);
    
    let resultado = valorUno.localeCompare(valorDos);

    console.log(resultado);
    
    if(resultado === 0){
        valoresOrdenados = valorUno + " 2 veces";
    }else if(resultado<0){
        valoresOrdenados = valorUno + ", " + valorDos;
    }else{
        valoresOrdenados = valorDos + ", " + valorUno;
    }
    console.log(valoresOrdenados);
    document.getElementById("mostrarPalabrasOrdenadas"). 
      textContent = valoresOrdenados
    
}

window.onload = function(){
    document.getElementById("ordenarPalabras"). 
      addEventListener("click",ordenarPalabras);
}