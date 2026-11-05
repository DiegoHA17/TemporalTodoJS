const preguntas = [
    {
        texto: "¿Cuál es la capital de Barbados?",
        opciones: [
            { texto: "Skopie", correcta: false },
            { texto: "Bridgetown", correcta: true },
            { texto: "Bratislava", correcta: false },
            { texto: "La Valeta", correcta: false }
        ]
    },
    {
        texto: "¿Qué hizo Leibniz?",
        opciones: [
            { texto: "Creó la teoría de la relatividad", correcta: false },
            { texto: "Inventó la notación moderna para integrales", correcta: true },
            { texto: "Fundó la geometría analítica", correcta: false },
            { texto: "Desarrolló la teoría de las probabilidades", correcta: false }
        ]
    },
    {
        texto: "¿Cuál era el nombre original del lenguaje Java antes de que fuera cambiado?",
        opciones: [
            { texto: "Mocha", correcta: false },
            { texto: "Green", correcta: false },
            { texto: "C++", correcta: false },
            { texto: "Oak", correcta: true }
        ]
    }
];

let indicePregunta = 0;

const pregunta = document.getElementById("pregunta");
const respuestas = document.getElementById("respuestas");
const botonReiniciar = document.getElementById("reiniciar");

function mostrarPregunta() {
    // De esta manera, eliminamos respuestas anteriores.
    respuestas.replaceChildren();

    // Otro enfoque
    // const saneamiento = respuestas.querySelectorAll("button");
    // saneamiento.forEach(limpiar => limpiar.remove());


    // Obtenemos la pregunta correspondiente al índice actual
    const preguntaActual = preguntas[indicePregunta];
    pregunta.textContent = preguntaActual.texto;

    // Primero | Creamos copia del array de opciones.
    // Segundo | Mezclamos las respuestas, para que aparezcan en orden aleatorio.
    const opcionesMezcladas = [...preguntaActual.opciones].sort(() => Math.random() - 0.5);

    opcionesMezcladas.forEach(opcion => {
        const boton = document.createElement("button");
        boton.textContent = opcion.texto;

        // Comprobamos si la respuesta es correcta
        boton.addEventListener("click", () => comprobarRespuesta(opcion.correcta, boton));

        respuestas.appendChild(boton);
    });
}

// Comprueba cada respuesta
function comprobarRespuesta(esCorrecta, boton) {

    // Asignamos una clase según si la respuesta es correcta o no
    if (esCorrecta) {
        boton.classList.add("correcto");
    } else {
        boton.classList.add("incorrecto");
    }

    // Desactivamos todos los botones para evitar múltiples respuestas
    // document.querySelectorAll("button").forEach(b => b.disabled = true);

    setTimeout(() => {
        indicePregunta++;

        if (indicePregunta < preguntas.length) {
            mostrarPregunta();
        } else {
            pregunta.textContent = "¡Juego terminado!";
            respuestas.replaceChildren();
            botonReiniciar.textContent = "Reiniciar";
            botonReiniciar.addEventListener("click", reiniciarPregunta);
        }
    }, 1000);

}

function reiniciarPregunta() {
    indicePregunta = 0;
    mostrarPregunta();
    botonReiniciar.replaceChildren();
}

window.onload = function () {
    mostrarPregunta();
}