const jugadores = [];

function mostrarMensaje(texto) {
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = texto;
  mensaje.classList.add("visible");

  setTimeout(function () {
    mensaje.classList.remove("visible");
    mensaje.textContent = "";
  }, 2500);
}

function quitarSeleccionTarjetas() {
  const tarjetas = document.querySelectorAll(".tarjeta-jugador");
  tarjetas.forEach(function (tarjeta) {
    tarjeta.classList.remove("seleccionado");
  });
}

function crearTarjetaJugador(jugador) {
  const listado = document.getElementById("listadoJugadores");
  const tarjeta = document.createElement("div");
  const cabecera = document.createElement("div");
  const titulo = document.createElement("h3");
  const botonEliminar = document.createElement("button");
  const datos = document.createElement("div");

  tarjeta.classList.add("tarjeta-jugador", jugador.nivel);
  cabecera.classList.add("tarjeta-cabecera");

  titulo.textContent = jugador.nombre;

  botonEliminar.type = "button";
  botonEliminar.textContent = "Eliminar";
  botonEliminar.classList.add("boton-eliminar");

  datos.classList.add("datos-jugador");
  datos.innerHTML = `
    <div>Edad: ${jugador.edad}</div>
    <div>Nivel: ${jugador.nivel}</div>
    <div>Color favorito: <span style="display:inline-block;width:16px;height:16px;border-radius:50%;background:${jugador.color};vertical-align:middle;"></span> ${jugador.color}</div>
  `;

  cabecera.appendChild(titulo);
  cabecera.appendChild(botonEliminar);
  tarjeta.appendChild(cabecera);
  tarjeta.appendChild(datos);
  listado.appendChild(tarjeta);

  tarjeta.addEventListener("click", function () {
    quitarSeleccionTarjetas();
    tarjeta.classList.add("seleccionado");
  });

  botonEliminar.addEventListener("click", function (event) {
    event.stopPropagation();
    tarjeta.classList.add("eliminando");

    setTimeout(function () {
      const indice = jugadores.indexOf(jugador);
      if (indice !== -1) {
        jugadores.splice(indice, 1);
      }
      tarjeta.remove();
    }, 250);
  });
}

function obtenerJugadorDesdeFormulario() {
  return {
    nombre: document.getElementById("nombre").value.trim(),
    edad: document.getElementById("edad").value,
    nivel: document.getElementById("nivel").value,
    color: document.getElementById("color").value,
  };
}

function limpiarFormulario() {
  document.getElementById("formularioJugador").reset();
  document.getElementById("color").value = "#4f8ef7";
}

window.onload = function () {
  const formulario = document.getElementById("formularioJugador");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const jugador = obtenerJugadorDesdeFormulario();
    jugadores.push(jugador);
    crearTarjetaJugador(jugador);
    mostrarMensaje("Jugador anadido correctamente");
    limpiarFormulario();
  });
};
