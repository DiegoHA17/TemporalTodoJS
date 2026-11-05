function rellenarCuadroAbajoAleatorio(i) {
    let idCuadroArriba = i.target.id;

    let n = parseInt(idCuadroArriba.charAt(6));

    let valorAleatorio = parseInt(Math.random() * 10+ 1) ;

    let secuencia = "";
    let k = 1;

    while (k <= valorAleatorio) {
        secuencia += "_" + k;
        k++;
    }

    let frase = "aleatorio_" + valorAleatorio + secuencia;

    let idCuadroAbajo = "cuadro" + (n + 5);

    document.getElementById(idCuadroAbajo).textContent = frase;
}

function asignarEventos() {
    let n = 1;
    let max = 5;

    while (n <= max) {
        let idCuadroArriba = "cuadro" + n;
        document.getElementById(idCuadroArriba).addEventListener("click", rellenarCuadroAbajoAleatorio);
        n++;
    }
}


window.onload = function() {
asignarEventos();
};
