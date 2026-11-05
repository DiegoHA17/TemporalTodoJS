let seleccionado1 = null;
let seleccionado2 = null;

function mezclar(array) {
  return array.sort(() => Math.random() - 0.5);
}

function parpadear(elemento, color, veces, callback) {
  let contador = 0;
  const original = elemento.style.backgroundColor;

  const intervalo = setInterval(() => {
    elemento.style.backgroundColor =
      elemento.style.backgroundColor === color ? original : color;

    contador++;

    if (contador === veces * 2) {
      clearInterval(intervalo);
      elemento.style.backgroundColor = color;
      if (callback) callback();
    }
  }, 200);
}

function rellenarValores() {
  const numeros = mezclar([1, 2, 3, 4]);
  const textos = mezclar(["uno", "dos", "tres", "cuatro"]);

  const col1 = document.querySelectorAll("#columna1 .cuadrado");
  const col2 = document.querySelectorAll("#columna2 .cuadrado");

  col1.forEach((div, i) => {
    div.textContent = numeros[i];
    div.dataset.valor = numeros[i];
  });

  col2.forEach((div, i) => {
    div.textContent = textos[i];
    div.dataset.valor = i + 1;
  });
}

function manejarClickCol1(div) {
  div.onclick = () => {
    if (seleccionado1) return;

    parpadear(div, "yellow", 3, () => {
      div.classList.add("seleccionado");
      seleccionado1 = div;
      comprobar();
    });
  };
}

function manejarClickCol2(div) {
  div.onclick = () => {
    if (seleccionado2) return;

    parpadear(div, "yellow", 3, () => {
      div.classList.add("seleccionado");
      seleccionado2 = div;
      comprobar();
    });
  };
}

function comprobar() {
  if (seleccionado1 && seleccionado2) {
    if (seleccionado1.dataset.valor === seleccionado2.dataset.valor) {
      parpadear(seleccionado1, "green", 3);
      parpadear(seleccionado2, "green", 3);
    } else {
      parpadear(seleccionado1, "red", 3, resetear);
      parpadear(seleccionado2, "red", 3, resetear);
    }
  }
}

function resetear() {
  if (seleccionado1 && seleccionado2) {
    seleccionado1.classList.remove("seleccionado");
    seleccionado2.classList.remove("seleccionado");
    seleccionado1 = null;
    seleccionado2 = null;
  }
}

window.onload = () => {
  rellenarValores();

  document.querySelectorAll("#columna1 .cuadrado").forEach(manejarClickCol1);

  document.querySelectorAll("#columna2 .cuadrado").forEach(manejarClickCol2);
};
