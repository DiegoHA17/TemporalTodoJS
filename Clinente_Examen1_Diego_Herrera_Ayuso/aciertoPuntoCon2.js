var puntuacion = 0;
function mostrarPuntuacion() {
  document.getElementById("resultado").textContent = puntuacion;
}

function valorAleatorio(arrDatos, elemeto) {
  let orden = [0, 1, 2, 3];
  orden.sort(() => Math.random() - 0.5);
  for (let i = 0; i < orden.length; i++) {
    for (let j = 0; j < arrDatos.length; j++) {
      if (orden[i] === j) {
        let valor = arrDatos[j];
        cargarCuadros(i, valor, elemeto);
      }
    }
  }
}
function cargarCuadros(i, valor, elemeto) {
  let tipe = elemeto;
  let cuadrado = document.getElementById(tipe + (i + 1));
  cuadrado.textContent = valor;
}
function datos() {
  valorAleatorio(["rojo", "azul", "verde", "amarillo"], "color");
  valorAleatorio(["I1", "II2", "III3", "V4"], "romano");
  valorAleatorio([1, 2, 3, 4], "numero");
  valorAleatorio(["cuadrado", "rectangulo", "triangulo", "circulo"], "forma");
}

function asignarEventos() {
  let elementoiz = document.getElementById("izquierda").querySelectorAll("*");
  for (const cu of elementoiz) {
    cu.addEventListener("click", function () {
      let val = cu.textContent;
      let num = cu.getAttribute("id").charAt(cu.getAttribute("id").length - 1);
      console.log(num);
      document.getElementById("color").textContent =
        "Fondo " + val.replace(num, "");
      puntuacion += parseInt(num);
      mostrarPuntuacion();
    });
  }
  let elementocent = document.getElementById("superior").querySelectorAll("*");
  for (const cu of elementocent) {
    cu.addEventListener("click", function () {
      let val = cu.textContent;
      let num = cu.getAttribute("id").charAt(cu.getAttribute("id").length - 1);
      document.getElementById("romano").textContent = val.replace(num, "");
      if (num == 1) {
        puntuacion += 45;
      } else if (num == 2) {
        puntuacion += 60;
      } else if (num == 3) {
        puntuacion += 90;
      } else if (num == 4) {
        puntuacion += 120;
      }
      mostrarPuntuacion();
    });
  }
  let elemenroinfe = document.getElementById("inferior").querySelectorAll("*");
  for (const cu of elemenroinfe) {
    cu.addEventListener("click", function () {
      let val = cu.textContent;
      let num = cu.getAttribute("id").charAt(cu.getAttribute("id").length - 1);
      document.getElementById("numero").textContent = val;
      if (num == 1) {
        puntuacion += 300;
      } else if (num == 2) {
        puntuacion += 500;
      } else if (num == 3) {
        puntuacion += 800;
      } else if (num == 4) {
        puntuacion += 1200;
      }
      mostrarPuntuacion();
    });
  }
  let elementodere = document.getElementById("derecha").querySelectorAll("*");
  for (const cu of elementodere) {
    cu.addEventListener("click", function () {
      let val = cu.textContent;
      let num = cu.getAttribute("id").charAt(cu.getAttribute("id").length - 1);
      document.getElementById("forma").textContent = val.replace(num, "");
      puntuacion += parseInt(num);
      mostrarPuntuacion();
    });
  }
}

function datosjugador() {
  console.log("datos");

  document.getElementById("destinoNombre").textContent =
    document.getElementById("nombre").value;
  console.log(document.getElementById("fecha").value);
  if (mayoriaEdad(document.getElementById("fecha").value) == true) {
    document.getElementById("destinoFecha").textContent =
      document.getElementById("fecha").value;
  }
}
function mayoriaEdad(edad) {
  let año = edad.charAt(6) + edad.charAt(7) + edad.charAt(8) + edad.charAt(9);
  console.log(año);
  if (parseInt(año) == 2007 || parseInt(año) > 2007) {
    alert("No pueden jugar menores de edad");
    return false;
  }
  return true;
}
function final() {
  const checkCompletion = () => {
    if (
      document.getElementById("color").textContent != "..." &&
      document.getElementById("forma").textContent != "..." &&
      document.getElementById("romano").textContent != "..." &&
      document.getElementById("numero").textContent != "..."
    ) {
      alert(document.getElementById("nombre").value + " has terminado");
    }
  };
  setInterval(checkCompletion, 1000); // Check every second
}

window.onload = function () {
  datos();
  asignarEventos();
  final();
  document
    .getElementById("cargarJugador")
    .addEventListener("click", function () {
      datosjugador();
    });
};
