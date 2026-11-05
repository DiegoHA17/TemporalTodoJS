const IMAGEN_REVERSO = "img/reverso.png";
const IMAGENES_BASE = [
  "img/carta1.png",
  "img/carta2.png",
  "img/carta3.png",
  "img/carta4.png",
  "img/carta5.png",
  "img/carta6.png",
  "img/carta7.png",
  "img/carta8.png",
];

let cartas = [];
let primeraCarta = null;
let segundaCarta = null;
let bloqueo = false;

function crearArrayCartas() {
  const parejas = [];

  for (let i = 0; i < IMAGENES_BASE.length; i++) {
    parejas.push({
      id: i + 1,
      imagen: IMAGENES_BASE[i],
      encontrada: false,
      volteada: false,
    });

    parejas.push({
      id: i + 1,
      imagen: IMAGENES_BASE[i],
      encontrada: false,
      volteada: false,
    });
  }

  return parejas;
}

function mezclarCartas(arrayCartas) {
  return [...arrayCartas].sort(function () {
    return Math.random() - 0.5;
  });
}

function crearTablero() {
  const tablero = document.getElementById("tablero");
  tablero.innerHTML = "";

  cartas.forEach(function (carta, indice) {
    const boton = document.createElement("button");
    const imagen = document.createElement("img");

    boton.type = "button";
    boton.classList.add("carta");
    boton.dataset.indice = indice;

    imagen.src = IMAGEN_REVERSO;
    imagen.alt = "Carta boca abajo";

    boton.appendChild(imagen);
    boton.addEventListener("click", function () {
      gestionarClickCarta(indice);
    });

    tablero.appendChild(boton);
  });
}

function obtenerElementoCarta(indice) {
  return document.querySelector(`[data-indice="${indice}"]`);
}

function mostrarCarta(indice) {
  const carta = cartas[indice];
  const elementoCarta = obtenerElementoCarta(indice);
  const imagen = elementoCarta.querySelector("img");

  carta.volteada = true;
  imagen.src = carta.imagen;
  elementoCarta.classList.add("volteada");
}

function ocultarCarta(indice) {
  const carta = cartas[indice];
  const elementoCarta = obtenerElementoCarta(indice);
  const imagen = elementoCarta.querySelector("img");

  carta.volteada = false;
  imagen.src = IMAGEN_REVERSO;
  elementoCarta.classList.remove("volteada");
}

function marcarEncontrada(indice) {
  const carta = cartas[indice];
  const elementoCarta = obtenerElementoCarta(indice);

  carta.encontrada = true;
  carta.volteada = true;
  elementoCarta.classList.remove("volteada");
  elementoCarta.classList.add("encontrada");
}

function reiniciarTurno() {
  primeraCarta = null;
  segundaCarta = null;
  bloqueo = false;
}

function comprobarPareja() {
  const cartaUno = cartas[primeraCarta];
  const cartaDos = cartas[segundaCarta];

  if (cartaUno.id === cartaDos.id) {
    marcarEncontrada(primeraCarta);
    marcarEncontrada(segundaCarta);
    reiniciarTurno();
    return;
  }

  bloqueo = true;

  setTimeout(function () {
    ocultarCarta(primeraCarta);
    ocultarCarta(segundaCarta);
    reiniciarTurno();
  }, 800);
}

function gestionarClickCarta(indice) {
  const carta = cartas[indice];

  if (bloqueo || carta.encontrada || carta.volteada) {
    return;
  }

  mostrarCarta(indice);

  if (primeraCarta === null) {
    primeraCarta = indice;
    return;
  }

  segundaCarta = indice;
  comprobarPareja();
}

window.onload = function () {
  cartas = mezclarCartas(crearArrayCartas());
  crearTablero();
};
