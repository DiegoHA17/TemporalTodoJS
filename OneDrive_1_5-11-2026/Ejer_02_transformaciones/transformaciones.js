
var fondoPagina = false;
var colorCirculo = false;
var tamanioGrande = false;
var ocultaRectangulo = false;


function cambiarColorFondo(){
    if(fondoPagina === false){
        document.body.classList.add("colorFondoPagina");
        document.getElementById("cambiarFondoPagina").textContent = "Restaurar Fondo";
        fondoPagina = true;
    }else{
        document.body.classList.remove("colorFondoPagina");
        document.getElementById("cambiarFondoPagina").textContent = "Cambiar fondo página";
        fondoPagina = false;
    }
    
}
function cambiarColorCirculo(){
    
    if(colorCirculo === false){
        document.getElementById("circulo").classList.add("colorCirculo");
        document.getElementById("cambiarColorCirculo").textContent = "Restaurar Color del círculo";
        colorCirculo = true;
    }else{
        document.getElementById("circulo").classList.remove("colorCirculo");
        document.getElementById("cambiarColorCirculo").textContent = "Cambiar color del círculo";
        colorCirculo = false;
    }
}
function cambiarTamanioCuadrado(){
    
    if (tamanioGrande === false) {
        document.getElementById("cuadrado").classList.add("aumentaCuadrado");
        document.getElementById("cambiarTamañoCuadrado").textContent = "Reducir cuadrado";
        tamanioGrande = true;
    }else{
        document.getElementById("cuadrado").classList.remove("aumentaCuadrado");
        document.getElementById("cambiarTamañoCuadrado").textContent = "Cambiar tamaño cuadrado";
        tamanioGrande = false;
    }
}
function ocultarRectangulo(){
    
    if(ocultaRectangulo === false){
        document.getElementById("rectangulo").classList.add("ocultaRectangulo");
        document.getElementById("ocultarRectangulo").textContent = "Mostrar rectángulo";
        ocultaRectangulo = true;
    }else{
        document.getElementById("rectangulo").classList.remove("ocultaRectangulo");
        document.getElementById("ocultarRectangulo").textContent = "Ocultar rectángulo";
        ocultaRectangulo = false;
    }
}

window.onload = function(){
    document.getElementById("cambiarFondoPagina"). 
        addEventListener("click",cambiarColorFondo);
    document.getElementById("cambiarColorCirculo"). 
        addEventListener("click",cambiarColorCirculo);
    document.getElementById("cambiarTamañoCuadrado"). 
        addEventListener("click",cambiarTamanioCuadrado);
    document.getElementById("ocultarRectangulo"). 
        addEventListener("click",ocultarRectangulo);
}