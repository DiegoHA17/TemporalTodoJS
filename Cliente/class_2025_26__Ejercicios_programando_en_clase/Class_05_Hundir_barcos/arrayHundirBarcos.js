let tablero = [[], []];

function recuperarAleatorioMinMax(min, max) {
    let valorMaximo = max - min + 1;
    let valor = parseInt(Math.random() * valorMaximo) + min;
    return valor;
}

function rellenarAgua() {
    for (let i = 0; i< tablero.length; i++){
        for(let j = 0; j <tablero.length[i]; j++){
            tablero [i][j] = "a";
        }
    }
}

function cargarBarcos() {
    let numeroCargarColocar = 1;

    while (numeroCargarColocar < 11) {
        let filaAleatoria = recuperarAleatorioMinMax (0,9);
        let columnaAleatoria = recuperarAleatorioMinMax(0,9);

        if(tablero[filaAleatoria][columnaAleatoria] == "a") {
            tablero[filaAleatoria][columnaAleatoria] = numeroCargarColocar;
            numeroCargarColocar++;
        }
    }
}

function manejarClickCelda(event) {
    let celda = event.target;
    let id = celda.id;
    
    // Extraer fila y columna del ID (ej: "23" -> fila 2, columna 3)
    let fila = parseInt(id.charAt(0));
    let columna = parseInt(id.charAt(1));
    
    // Obtener el valor del tablero en esa posición
    let valor = tablero[fila][columna];
    
    // Mostrar el valor en la celda
    celda.textContent = valor;
    console.log(`Celda [${fila}][${columna}] = ${valor}`);

    // recordar que esta celda fue pulsada
    celda.classList.add('celda-pulsada');

    if (valor === "a") {
        celda.classList.add('celda-agua');
    } else {
        celda.classList.add('celda-barco');
    }
}

function agregarEventos() {
    let celdas = document.getElementsByClassName('numeros');
    for (let i = 0; i < celdas.length; i++) {
        celdas[i].addEventListener('click', manejarClickCelda);
    }
}

function inicializarTablero() {
    tablero = [];
    for (let i = 0; i < 10; i++) {
        tablero[i] = [];
        for (let j = 0; j < 10; j++) {
            tablero[i][j] = "a";
        }
    }
}

let tableroVisible = false; // Estado del tablero

function mostrarTodasLasCasillas() {
    let celdas = document.getElementsByClassName('numeros');
    
    if (!tableroVisible) {
        // Mostrar todas las casillas
        for (let i = 0; i < celdas.length; i++) {
            let celda = celdas[i];
            let id = celda.id;
            let fila = parseInt(id.charAt(0));
            let columna = parseInt(id.charAt(1));
            let valor = tablero[fila][columna];

            celda.textContent = valor;

            if (celda.classList.contains('celda-pulsada')) {
                // no tocamos clases aquí
            } else {
                // Si NO estaba pulsada, la mostramos "temporalmente"
                if (valor === "a") {
                    celda.classList.add('celda-agua');
                } else {
                    celda.classList.add('celda-revelada'); // barcos revelados por botón
                }
            }
        }
        tableroVisible = true;
    } else {
        // Ocultar todas las casillas
        for (let i = 0; i < celdas.length; i++) {
            let celda = celdas[i];

            // Quitar solo lo que mostró el botón
            celda.classList.remove('celda-revelada');

            if (!celda.classList.contains('celda-pulsada')) {
                // Si nunca fue pulsada, se oculta completamente
                celda.textContent = "";
                celda.classList.remove('celda-agua', 'celda-barco');
            } else {
                // Si fue pulsada, se queda visible (agua o barco)
            }
        }
        tableroVisible = false;
    }
}


window.onload = function(){
    inicializarTablero();
    rellenarAgua();
    cargarBarcos();
    agregarEventos();
    document.getElementById('mostrarTodoBtn').addEventListener('click', mostrarTodasLasCasillas);
    console.log("Tablero cargado: ", tablero);
}