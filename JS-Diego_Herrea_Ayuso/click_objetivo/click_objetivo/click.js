const INTERVALO_CAMBIO = 1200;
const TIEMPO_VISIBLE = 900;
const RUTA_OBJETIVO = "mosca.png";
const REDUCCION_INTERVALO = 120;
const REDUCCION_VISIBLE = 90;
const INTERVALO_MINIMO = 420;
const TIEMPO_VISIBLE_MINIMO = 300;

let puntos = 0;
let fallos = 0;
let intervaloJuego = null;
let timeoutOcultacion = null;
let nivelVelocidadActual = 0;

const objetivo = {
  x: 0,
  y: 0,
  visible: false,
  tiempoAparece: null,
  elemento: null,
  imagen: null,
};

function actualizarMarcadores() {
  document.getElementById("puntos").textContent = puntos;
  document.getElementById("fallos").textContent = fallos;
}

function obtenerNivelVelocidad() {
  return Math.floor(puntos / 10);
}

function obtenerIntervaloActual() {
  const intervalo = INTERVALO_CAMBIO - obtenerNivelVelocidad() * REDUCCION_INTERVALO;
  return Math.max(INTERVALO_MINIMO, intervalo);
}

function obtenerTiempoVisibleActual() {
  const tiempoVisible = TIEMPO_VISIBLE - obtenerNivelVelocidad() * REDUCCION_VISIBLE;
  return Math.max(TIEMPO_VISIBLE_MINIMO, tiempoVisible);
}

function inicializarObjetivo() {
  objetivo.elemento = document.getElementById("objetivo");
  objetivo.imagen = document.getElementById("imagenObjetivo");
}

function posicionAleatoria() {
  const zonaJuego = document.getElementById("zonaJuego");
  const anchoMaximo = zonaJuego.clientWidth - objetivo.elemento.offsetWidth;
  const altoMaximo = zonaJuego.clientHeight - objetivo.elemento.offsetHeight;

  objetivo.x = Math.floor(Math.random() * (anchoMaximo + 1));
  objetivo.y = Math.floor(Math.random() * (altoMaximo + 1));

  objetivo.elemento.style.left = `${objetivo.x}px`;
  objetivo.elemento.style.top = `${objetivo.y}px`;
}

function ocultarObjetivo(contarFallo) {
  clearTimeout(timeoutOcultacion);
  timeoutOcultacion = null;

  if (!objetivo.visible) {
    return;
  }

  objetivo.visible = false;
  objetivo.tiempoAparece = null;
  objetivo.elemento.classList.remove("visible", "acierto");
  objetivo.elemento.classList.add("ocultando");

  if (contarFallo) {
    fallos++;
    actualizarMarcadores();
  }

  setTimeout(function () {
    objetivo.elemento.classList.remove("ocultando");
  }, 180);
}

function mostrarObjetivo() {
  posicionAleatoria();
  objetivo.visible = true;
  objetivo.tiempoAparece = Date.now();
  objetivo.elemento.classList.remove("ocultando", "acierto");
  objetivo.elemento.classList.add("visible");

  timeoutOcultacion = setTimeout(function () {
    ocultarObjetivo(true);
  }, obtenerTiempoVisibleActual());
}

function moverObjetivo() {
  if (objetivo.visible) {
    ocultarObjetivo(true);
  }

  mostrarObjetivo();
}

function golpearObjetivo() {
  if (!objetivo.visible) {
    return;
  }

  clearTimeout(timeoutOcultacion);
  timeoutOcultacion = null;

  puntos++;
  actualizarMarcadores();
  actualizarVelocidadJuego();

  objetivo.elemento.classList.add("acierto");

  setTimeout(function () {
    ocultarObjetivo(false);
  }, 140);
}

function actualizarVelocidadJuego() {
  const nuevoNivel = obtenerNivelVelocidad();

  if (nuevoNivel === nivelVelocidadActual) {
    return;
  }

  nivelVelocidadActual = nuevoNivel;

  clearInterval(intervaloJuego);
  intervaloJuego = setInterval(function () {
    moverObjetivo();
  }, obtenerIntervaloActual());
}

function iniciarJuego() {
  nivelVelocidadActual = obtenerNivelVelocidad();
  mostrarObjetivo();

  intervaloJuego = setInterval(function () {
    moverObjetivo();
  }, obtenerIntervaloActual());
}

window.onload = function () {
  inicializarObjetivo();
  actualizarMarcadores();

  objetivo.elemento.addEventListener("click", golpearObjetivo);

  iniciarJuego();
};
