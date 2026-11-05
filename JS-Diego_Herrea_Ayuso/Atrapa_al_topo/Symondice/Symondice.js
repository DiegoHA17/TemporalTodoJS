const DEFINICION_BOTONES = [
  { colorId: "verde", color: "Verde", clase: "boton-verde" },
  { colorId: "rojo", color: "Rojo", clase: "boton-rojo" },
  { colorId: "amarillo", color: "Amarillo", clase: "boton-amarillo" },
  { colorId: "azul", color: "Azul", clase: "boton-azul" },
];

let botones = [];
let secuencia = [];
let indiceJugador = 0;
let bloqueado = true;
let jugando = false;


function crearBotones() {
  const panel = document.getElementById("panel");

  botones = DEFINICION_BOTONES.map(function (definicion) {
    const elemento = document.createElement("button");

    elemento.type = "button";
    elemento.classList.add("boton-simon", definicion.clase);
    elemento.dataset.colorid = definicion.colorId;

    panel.appendChild(elemento);

    return {
      colorId: definicion.colorId,
      color: definicion.color,
      elemento,
    };
  });
}

function actualizarEstado(texto) {
  document.getElementById("estado").textContent = texto;
}

function obtenerBotonPorColor(colorId) {
  return botones.find(function (boton) {
    return boton.colorId === colorId;
  });
}

function iluminarBoton(colorId, duracion) {
  const boton = obtenerBotonPorColor(colorId);

  if (!boton) {
    return;
  }

  boton.elemento.classList.add("activo");

  setTimeout(function () {
    boton.elemento.classList.remove("activo");
  }, duracion);
}

function iluminarPanel(clase) {
  const panel = document.getElementById("panel");
  panel.classList.add(clase);

  setTimeout(function () {
    panel.classList.remove(clase);
  }, 450);
}

function generarColorAleatorio() {
  const indiceAleatorio = Math.floor(Math.random() * botones.length);
  return botones[indiceAleatorio].colorId;
}

function agregarPasoASecuencia() {
  secuencia.push(generarColorAleatorio());
}

function reproducirSecuencia() {
  bloqueado = true;
  actualizarEstado("Memoriza la secuencia");

  secuencia.forEach(function (colorId, indice) {
    const retraso = indice * 800;

    setTimeout(function () {
      iluminarBoton(colorId, 420);
    }, retraso);
  });

  setTimeout(function () {
    bloqueado = false;
    indiceJugador = 0;
    actualizarEstado("Repite la secuencia");
  }, secuencia.length * 800);
}

function pasarARondaSiguiente() {
  bloqueado = true;
  iluminarPanel("exito");
  actualizarEstado("Correcto. Nueva ronda...");

  setTimeout(function () {
    agregarPasoASecuencia();
    reproducirSecuencia();
  }, 850);
}

function terminarPartida() {
  bloqueado = true;
  jugando = false;
  iluminarPanel("error");
  actualizarEstado("Fallaste. Partida terminada");

  setTimeout(function () {
    alert("Has fallado la secuencia");
  }, 150);
}

function gestionarClick(colorId) {
  if (bloqueado || !jugando) {
    return;
  }

  iluminarBoton(colorId, 220);

  if (colorId !== secuencia[indiceJugador]) {
    terminarPartida();
    return;
  }

  indiceJugador++;

  if (indiceJugador === secuencia.length) {
    pasarARondaSiguiente();
  }
}

function iniciarPartida() {
  secuencia = [];
  indiceJugador = 0;
  bloqueado = true;
  jugando = true;

  agregarPasoASecuencia();
  reproducirSecuencia();
}

window.onload = function () {
  crearBotones();

  botones.forEach(function (boton) {
    boton.elemento.addEventListener("click", function () {
      gestionarClick(boton.colorId);
    });
  });

  document.getElementById("botonInicio").addEventListener("click", iniciarPartida);
};
