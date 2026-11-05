const luz_roja = document.getElementById("luz_roja");
const luz_amarilla = document.getElementById("luz_amarilla");
const luz_verde = document.getElementById("luz_verde");

let temporizadores = [];
let intervalos = [];

function apagarTodo() {
  luz_roja.style.backgroundColor = "black";
  luz_amarilla.style.backgroundColor = "black";
  luz_verde.style.backgroundColor = "black";
}

function limpiarAnimaciones() {
  temporizadores.forEach(clearTimeout);
  intervalos.forEach(clearInterval);
  temporizadores = [];
  intervalos = [];
}

function programarTimeout(funcion, tiempo) {
  const id = setTimeout(funcion, tiempo);
  temporizadores.push(id);
}

function programarIntervalo(funcion, tiempo) {
  const id = setInterval(funcion, tiempo);
  intervalos.push(id);
  return id;
}

function encenderRojo() {
  apagarTodo();
  luz_roja.style.backgroundColor = "red";
}

function encenderAmarillo() {
  apagarTodo();
  luz_amarilla.style.backgroundColor = "orange";
}

function encenderVerde() {
  apagarTodo();
  luz_verde.style.backgroundColor = "green";
}

function cicloTradicionalRojo() {
  encenderRojo();
  programarTimeout(cicloTradicionalVerde, 6000);
}

function cicloTradicionalVerde() {
  encenderVerde();
  programarTimeout(cicloTradicionalParpadeo, 6000);
}

function cicloTradicionalParpadeo() {
  let cambios = 0;

  const intervalo = programarIntervalo(function () {
    if (luz_verde.style.backgroundColor === "green") {
      luz_verde.style.backgroundColor = "black";
    } else {
      luz_verde.style.backgroundColor = "green";
    }

    cambios++;

    if (cambios >= 6) {
      clearInterval(intervalo);
      intervalos = intervalos.filter(function (id) {
        return id !== intervalo;
      });
      cicloTradicionalAmarillo();
    }
  }, 500);
}

function cicloTradicionalAmarillo() {
  encenderAmarillo();
  programarTimeout(cicloTradicionalRojo, 2000);
}

function iniciarTradicional() {
  limpiarAnimaciones();
  cicloTradicionalRojo();
}

function iniciarAlternanciaRojoVerde() {
  limpiarAnimaciones();
  let rojoEncendido = true;

  encenderRojo();

  programarIntervalo(function () {
    if (rojoEncendido) {
      encenderVerde();
    } else {
      encenderRojo();
    }

    rojoEncendido = !rojoEncendido;
  }, 1000);
}

function iniciarParpadeoAmarillo() {
  limpiarAnimaciones();
  let encendido = false;

  apagarTodo();

  programarIntervalo(function () {
    if (encendido) {
      apagarTodo();
    } else {
      encenderAmarillo();
    }

    encendido = !encendido;
  }, 1000);
}

window.onload = function () {
  luz_roja.addEventListener("click", iniciarTradicional);
  luz_amarilla.addEventListener("click", iniciarAlternanciaRojoVerde);
  luz_verde.addEventListener("click", iniciarParpadeoAmarillo);
};
