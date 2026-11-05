
let lista = [];
let listaSecundaria = []
let reinicio = false;
let clickContaRepetir = 0;
const sonidoC = new Audio("C_Note.mp3");

function memorizar(i) {
    let valor = i.target.id;
    lista.push(valor);
    console.log(lista);
    sonidoC.currentTime = 0;
    sonidoC.play();

    if (clickContaRepetir>=1) {
        reinicio = true
        listaSecundaria.push(valor)
    }
}

function mostrarLista() {
    if (reinicio) {
        reinicio = false;
        clickContaRepetir = 0;
        lista = listaSecundaria;
    } else {
        clickContaRepetir++;
    }
    let contadorTeclas = 0; 

    let parpadeo =  setInterval(() => {
        if (contadorTeclas>=1) {
            document.getElementById(lista[contadorTeclas-1]).classList.toggle("azul");
        }

        if (contadorTeclas<lista.length) {
            document.getElementById(lista[contadorTeclas]).classList.toggle("azul");
            sonidoC.currentTime = 0;
            sonidoC.play();
            contadorTeclas++;
        } else {
            clearInterval(parpadeo);
        }
    }, 2000);
}

window.onload = function(){
    for (let i = 1; i <= 7; i++) {
        document.getElementById("tecla"+i).addEventListener("click",memorizar);
    }
    document.getElementById("repetir").addEventListener("click",mostrarLista);
}