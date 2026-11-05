let pila = [];
let cola = [];


function recorrerPila() {
  for (let i = 0; i < 9; i++) {
    let elementopila = "pila" + i;
    if (i < pila.length) {
      document.getElementById(elementopila).textContent = pila[i];
    } else {
      document.getElementById(elementopila).textContent = "...";
    }
  }
}

function recorrercola() {
  for (let i = 0; i < 9; i++) {
    let elementocola = "cola" + i;
    if (i < cola.length) {
      document.getElementById(elementocola).textContent = cola[i];
    } else {
      document.getElementById(elementocola).textContent = "...";
    }
  }
  console.log(cola);
  ;
}

function eliminarpila() {
  if (pila.length > 0) {
    pila.shift();
  }
  recorrerPila();
}

function eliminarcola() {
  if (cola.length > 0) {
    cola.shift();
  }
  recorrercola();
}

function añadirpila() {
  let entrada = document.getElementById("nombre").value;
  pila.unshift(entrada);
  console.log(pila);
  recorrerPila();
}

function añadircola() {
  let entrada = document.getElementById("nombre").value;
  cola.push(entrada);
  recorrercola();
}

window.onload = function () {
  document
    .getElementById("botonIntroducir")
    .addEventListener("click", añadirpila);
  document
    .getElementById("botonIntroducir")
    .addEventListener("click", añadircola);
  document
    .getElementById("botonborrarP")
    .addEventListener("click", eliminarpila);
  document
    .getElementById("botonborrarC")
    .addEventListener("click", eliminarcola);
};
