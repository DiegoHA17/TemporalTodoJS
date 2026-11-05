const puzzle = document.getElementById("puzzle");
const botonReiniciar = document.getElementById("reiniciar");

const filas = 9;
const columnas = 2;
let piezas = [];
let seleccionadas = [];
let puzzleBloqueado = false;

function crearPiezas() {
    const lista = [];
    let indice = 0;

    for (let fila = 1; fila <= filas; fila++) {
        for (let columna = 1; columna <= columnas; columna++) {
            lista.push({
                id: `pieza-${indice}`,
                currentPosition: indice,
                correctPosition: indice,
                imgSrc: `img/fila-${fila}-columna-${columna}.png`
            });
            indice++;
        }
    }

    return lista;
}

function mezclarPiezas(lista) {
    const copia = [...lista];

    do {
        for (let i = copia.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copia[i], copia[j]] = [copia[j], copia[i]];
        }
    } while (copia.every((pieza, indice) => pieza.correctPosition === indice));

    copia.forEach((pieza, indice) => {
        pieza.currentPosition = indice;
    });

    return copia;
}

function actualizarVista() {
    const celdas = puzzle.querySelectorAll(".pieza");

    celdas.forEach((celda, indice) => {
        const pieza = piezas[indice];
        celda.dataset.currentPosition = pieza.currentPosition;
        celda.dataset.correctPosition = pieza.correctPosition;
        celda.querySelector("img").src = pieza.imgSrc;
        celda.querySelector("img").alt = `Fragmento ${pieza.correctPosition + 1}`;
    });
}

function comprobarSiEstaResuelto() {
    const resuelto = piezas.every(
        (pieza, indice) => pieza.correctPosition === indice
    );

    if (resuelto) {
        puzzle.classList.add("resuelto");
        puzzleBloqueado = true;

        setTimeout(() => {
            alert("Puzzle completado");
        }, 500);
    }
}

function limpiarSeleccion() {
    seleccionadas.forEach((pieza) => pieza.classList.remove("seleccionada"));
    seleccionadas = [];
}

function intercambiarPiezas() {
    const [primeraCelda, segundaCelda] = seleccionadas;
    const primerIndice = Number(primeraCelda.dataset.index);
    const segundoIndice = Number(segundaCelda.dataset.index);

    [piezas[primerIndice], piezas[segundoIndice]] = [piezas[segundoIndice], piezas[primerIndice]];

    piezas[primerIndice].currentPosition = primerIndice;
    piezas[segundoIndice].currentPosition = segundoIndice;

    actualizarVista();
    limpiarSeleccion();
    comprobarSiEstaResuelto();
}

function manejarClick(evento) {
    const celda = evento.currentTarget;

    if (puzzleBloqueado) {
        return;
    }

    if (seleccionadas.includes(celda)) {
        celda.classList.remove("seleccionada");
        seleccionadas = seleccionadas.filter((pieza) => pieza !== celda);
        return;
    }

    celda.classList.add("seleccionada");
    seleccionadas.push(celda);

    if (seleccionadas.length === 2) {
        intercambiarPiezas();
    }
}

function crearTablero() {
    puzzle.innerHTML = "";

    piezas.forEach((pieza, indice) => {
        const celda = document.createElement("button");
        celda.type = "button";
        celda.className = "pieza";
        celda.dataset.index = indice;
        celda.dataset.currentPosition = pieza.currentPosition;
        celda.dataset.correctPosition = pieza.correctPosition;

        const imagen = document.createElement("img");
        imagen.src = pieza.imgSrc;
        imagen.alt = `Fragmento ${pieza.correctPosition + 1}`;

        celda.appendChild(imagen);
        celda.addEventListener("click", manejarClick);
        puzzle.appendChild(celda);
    });
}

function iniciarJuego() {
    puzzle.classList.remove("resuelto");
    seleccionadas = [];
    puzzleBloqueado = false;

    piezas = mezclarPiezas(crearPiezas());
    crearTablero();
}

botonReiniciar.addEventListener("click", iniciarJuego);

iniciarJuego();
