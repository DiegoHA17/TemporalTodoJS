const FILAS = 3;
const COLUMNAS = 3;
const INTERVALO_APARICION = 900;
const TIEMPO_LIMITE = 1200;
const RUTA_TOPO = "img/topo.png";
const RUTA_VACIO = "img/notopo.png";
const RUTA_TOPO_GOLPEADO = "img/topogolpeado.png";

let aciertos = 0;
let fallos = 0;
let intervaloJuego = null;
let agujeros = [];

class Agujero {
  constructor(fila, columna, casilla, img) {
    this.posicion = { fila, columna };
    this.tieneTopo = false;
    this.tiempoAparecido = null;
    this.temporizador = null;
    this.casilla = casilla;
    this.img = img;
  }

  mostrarTopo() {
    this.tieneTopo = true;
    this.tiempoAparecido = Date.now();
    this.img.src = RUTA_TOPO;
    this.temporizador = setTimeout(() => {
      this.ocultarTopo(true);
    }, TIEMPO_LIMITE);
  }

  ocultarTopo(contarFallo) {
    this.tieneTopo = false;
    this.tiempoAparecido = null;
    this.temporizador = null;
    this.img.src = RUTA_VACIO;

    if (contarFallo) {
      fallos++;
      actualizarMarcador();
      this.casilla.classList.add("fallo");
      quitarMarca(this.casilla, "fallo");
    }
  }

  golpear() {
    if (!this.tieneTopo) {
      this.casilla.classList.add("fallo");
      quitarMarca(this.casilla, "fallo");
      return;
    }

    clearTimeout(this.temporizador);
    this.temporizador = null;
    this.tieneTopo = false;
    this.tiempoAparecido = null;
    this.img.src = RUTA_TOPO_GOLPEADO;
    this.casilla.classList.add("acierto");
    quitarMarca(this.casilla, "acierto");

    aciertos++;
    actualizarMarcador();

    setTimeout(() => {
      if (!this.tieneTopo) {
        this.img.src = RUTA_VACIO;
      }
    }, 250);
  }
}

function crearInterfaz() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <section class="juego">
      <h1 class="titulo">Atrapa al topo</h1>
      <div class="marcador">
        <div class="dato">Aciertos: <span id="aciertos">0</span></div>
        <div class="dato">Fallos: <span id="fallos">0</span></div>
      </div>
      <div id="tablero" class="tablero"></div>
    </section>
  `;
}

function actualizarMarcador() {
  document.getElementById("aciertos").textContent = aciertos;
  document.getElementById("fallos").textContent = fallos;
}

function quitarMarca(elemento, clase) {
  setTimeout(function () {
    elemento.classList.remove(clase);
  }, 250);
}

function obtenerAgujeroLibre() {
  const libres = agujeros.filter(function (agujero) {
    return !agujero.tieneTopo;
  });

  if (libres.length === 0) {
    return null;
  }

  const indiceAleatorio = Math.floor(Math.random() * libres.length);
  return libres[indiceAleatorio];
}

function crearTablero() {
  const tablero = document.getElementById("tablero");
  agujeros = [];

  for (let fila = 0; fila < FILAS; fila++) {
    for (let columna = 0; columna < COLUMNAS; columna++) {
      const casilla = document.createElement("button");
      const img = document.createElement("img");

      casilla.type = "button";
      casilla.classList.add("agujero");
      img.src = RUTA_VACIO;
      img.alt = "Agujero sin topo";

      casilla.appendChild(img);
      tablero.appendChild(casilla);

      const agujero = new Agujero(fila, columna, casilla, img);

      casilla.addEventListener("click", function () {
        agujero.golpear();
      });

      agujeros.push(agujero);
    }
  }
}

function iniciarJuego() {
  if (intervaloJuego) {
    clearInterval(intervaloJuego);
  }

  intervaloJuego = setInterval(function () {
    const agujero = obtenerAgujeroLibre();

    if (agujero) {
      agujero.mostrarTopo();
    }
  }, INTERVALO_APARICION);
}

window.onload = function () {
  crearInterfaz();
  crearTablero();
  actualizarMarcador();
  iniciarJuego();
};
