const tareas = [];

function crearTareaDesdeFormulario() {
  return {
    titulo: document.getElementById("titulo").value.trim(),
    descripcion: document.getElementById("descripcion").value.trim(),
    prioridad: document.getElementById("prioridad").value,
    tiempoRestante: Number(document.getElementById("tiempo").value),
    idIntervalo: null,
  };
}

function actualizarTiempoEnPantalla(tarea) {
  tarea.cronometro.textContent = `${tarea.tiempoRestante}s`;
}

function marcarExpirada(tarea) {
  clearInterval(tarea.idIntervalo);
  tarea.idIntervalo = null;
  tarea.tarjeta.classList.add("expirada");
  tarea.estado.textContent = "Estado: expirada";
  tarea.cronometro.textContent = "0s";
}

function iniciarContador(tarea) {
  tarea.idIntervalo = setInterval(function () {
    tarea.tiempoRestante--;
    actualizarTiempoEnPantalla(tarea);

    if (tarea.tiempoRestante <= 0) {
      marcarExpirada(tarea);
    }
  }, 1000);
}

function eliminarTarea(tarea) {
  clearInterval(tarea.idIntervalo);
  tarea.idIntervalo = null;

  const indice = tareas.indexOf(tarea);
  if (indice !== -1) {
    tareas.splice(indice, 1);
  }

  tarea.tarjeta.remove();
}

function pintarTarea(tarea) {
  const listado = document.getElementById("listadoTareas");
  const tarjeta = document.createElement("div");
  const cabecera = document.createElement("div");
  const titulo = document.createElement("h3");
  const cronometro = document.createElement("span");
  const descripcion = document.createElement("p");
  const estado = document.createElement("p");
  const botonEliminar = document.createElement("button");

  tarjeta.classList.add("tarea", tarea.prioridad);
  cabecera.classList.add("tarea-cabecera");
  cronometro.classList.add("cronometro");
  descripcion.classList.add("descripcion");
  estado.classList.add("estado");
  botonEliminar.classList.add("boton-eliminar");

  titulo.textContent = tarea.titulo;
  descripcion.textContent = tarea.descripcion;
  estado.textContent = `Estado: activa (${tarea.prioridad})`;
  botonEliminar.type = "button";
  botonEliminar.textContent = "Eliminar";

  cabecera.appendChild(titulo);
  cabecera.appendChild(cronometro);
  tarjeta.appendChild(cabecera);
  tarjeta.appendChild(descripcion);
  tarjeta.appendChild(estado);
  tarjeta.appendChild(botonEliminar);
  listado.appendChild(tarjeta);

  tarea.tarjeta = tarjeta;
  tarea.cronometro = cronometro;
  tarea.estado = estado;

  actualizarTiempoEnPantalla(tarea);
  iniciarContador(tarea);

  botonEliminar.addEventListener("click", function () {
    eliminarTarea(tarea);
  });
}

function limpiarFormulario() {
  document.getElementById("formularioTarea").reset();
}

window.onload = function () {
  const formulario = document.getElementById("formularioTarea");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const tarea = crearTareaDesdeFormulario();
    tareas.push(tarea);
    pintarTarea(tarea);
    limpiarFormulario();
  });
};
