let s1 = null; 
let s2 = null; 

const parejas = new Map([
    ["1", "uno"],
    ["2", "dos"],
    ["3", "tres"],
    ["4", "cuatro"],
    ["uno", "1"],
    ["dos", "2"],
    ["tres", "3"],
    ["cuatro", "4"]
]);

function mezclar(clase) {
    let elementos = document.getElementsByClassName(clase);
    for (let i = 0; i < 10; i++) {
        let a = Math.floor(Math.random() * 4);
        let b = Math.floor(Math.random() * 4);

        let tAux = elementos[a].textContent;
        elementos[a].textContent = elementos[b].textContent;
        elementos[b].textContent = tAux;
    }
}

function efectoParpadeo(elemento, claseBrillo, claseFinal) {
    let contador = 0; 
    
    let intervalo = setInterval(() => {
        elemento.classList.toggle(claseBrillo);
        
        contador++;
        if (contador == 6) { 
            clearInterval(intervalo);
            elemento.classList.remove("cyan-brillo", "verde-brillo", "rojo-brillo", "seleccionado", "gris", "blanco");
            elemento.classList.add(claseFinal);
        }
    }, 200); 
}

function comprobar(cuadradoElegido1, cuadradoElegido2) {
    let v1 = cuadradoElegido1.textContent;
    let v2 = cuadradoElegido2.textContent;

    // El mapa busca si el valor de v1 corresponde con v2
    // Si parejas.get("1") es igual a "uno", devuelve true.
    return parejas.get(v1) == v2;
}

function procesarClick(e) {
    let pulsado = e.target;

    // Evitamos que se pulse algo ya acertado (clase gris)
    if (pulsado.classList.contains("gris")) return;

    // Añadimos clase de selección y efecto cyan
    pulsado.classList.add("seleccionado");
    efectoParpadeo(pulsado, "cyan", "seleccionado");

    if (pulsado.classList.contains("col1")) s1 = pulsado;
    else s2 = pulsado;

    if (s1 != null && s2 != null) {
        let aux1 = s1; 
        let aux2 = s2;
        s1 = null; s2 = null;

        setTimeout(() => {
            if (comprobar(aux1, aux2)) {
                efectoParpadeo(aux1, "verde", "gris");
                efectoParpadeo(aux2, "verde", "gris");
            } else {
                efectoParpadeo(aux1, "rojo", "blanco");
                efectoParpadeo(aux2, "rojo", "blanco");
            }
        }, 1250); 
    }
}

function inicializarEventos() {
    let cuadrados = document.querySelectorAll(".cuadrado");
    for (let i = 0; i < cuadrados.length; i++) {
        cuadrados[i].addEventListener("click", procesarClick);
    }
}

window.onload = function() {
    mezclar("col1"); 
    mezclar("col2");
    inicializarEventos(); 
}