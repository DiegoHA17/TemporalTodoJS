
let caracteresSpinner = ["-", "\\", "|", "-", "/"];
let indiceSpinner = 0;
let progreso = 0;
let intervaloCarga = null;

function generarBarra() {
    let barra = document.getElementById("barra-fondo");
    
    while(barra.firstChild) {
        barra.removeChild(barra.firstChild);
    }

    for (let i = 0; i < 100; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "segmento");
        div.setAttribute("id", "seg-" + i);
        barra.appendChild(div);
    }
}

function actualizarSpinner() {
    indiceSpinner++;
    if (indiceSpinner >= caracteresSpinner.length) {
        indiceSpinner = 0;
    }
    return caracteresSpinner[indiceSpinner];
}

function iniciarCarga() {
    let btn = document.getElementById("btnIniciar");
    btn.disabled = true;
    
    progreso = 0;
    
    let segmentos = document.getElementsByClassName("segmento");
    for(let i=0; i<segmentos.length; i++) {
        segmentos[i].classList.remove("cargado");
    }

    intervaloCarga = setInterval(function() {
        if (progreso >= 100) {
            clearInterval(intervaloCarga);
            document.getElementById("etiqueta-carga").textContent = "100%";
            btn.disabled = false;
            return;
        }

        let segmentoActual = document.getElementById("seg-" + progreso);
        segmentoActual.classList.add("cargado");

        let caracter = actualizarSpinner();
        let texto = (progreso + 1) + "% " + caracter;
        
        let etiqueta = document.getElementById("etiqueta-carga");
        etiqueta.textContent = texto;

        etiqueta.style.left = (progreso + 1) + "%";

        progreso++;

    }, 100);
}

window.onload = function() {
    generarBarra();
    document.getElementById("btnIniciar").addEventListener("click", iniciarCarga);
};