let tablero = [];
let puntos = 0;

function reyenar() {
  let contadormina = 5;
  let contadorbomba = 5;
  let contadornube = 5;
  let contadoragua = 10;

  for (let i = 0; i < 5; i++) {
    tablero[i] = [];
  }

  while (
    contadormina > 0 ||
    contadorbomba > 0 ||
    contadornube > 0 ||
    contadoragua > 0
  ) {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (tablero[i][j] !== undefined) continue;

        let num = Math.floor(Math.random() * 4);

        if (num == 0 && contadormina > 0) {
          tablero[i][j] = num;
          contadormina--;
        } else if (num == 1 && contadorbomba > 0) {
          tablero[i][j] = num;
          contadorbomba--;
        } else if (num == 2 && contadornube > 0) {
          tablero[i][j] = num;
          contadornube--;
        } else if (num == 3 && contadoragua > 0) {
          tablero[i][j] = num;
          contadoragua--;
        }
      }
    }
  }

  return tablero;
}

function mostrarTablero() {
  let cuadrados = document.querySelectorAll("#tablero .cuadrado");

  cuadrados.forEach((cuadrado, index) => {
    let i = Math.floor(index / 5);
    let j = index % 5;

    cuadrado.addEventListener("click", function () {
      if (tablero[i][j] === 0) {
        cuadrado.innerHTML = "💣";
        puntos += 4;
        actualizarPuntos();
      } else if (tablero[i][j] === 1) {
        cuadrado.innerHTML = "💥";
        puntos -= 2;
        actualizarPuntos();
      } else if (tablero[i][j] === 2) {
        cuadrado.innerHTML = "☁️";
        puntos += 1;
        actualizarPuntos();
      } else if (tablero[i][j] === 3) {
        cuadrado.innerHTML = "💧";
        puntos -= 3;
        actualizarPuntos();
      }

      cuadrado.classList.add("descubierto");
      cuadrado.style.pointerEvents = "none";
    });
  });
}

function actualizarPuntos() {
  let puntosElemento = document.getElementById("puntos");
  puntosElemento.textContent = "Puntos: " + puntos;
}

window.onload = function () {
  tablero = reyenar();
  mostrarTablero();
  console.log(tablero);
};
