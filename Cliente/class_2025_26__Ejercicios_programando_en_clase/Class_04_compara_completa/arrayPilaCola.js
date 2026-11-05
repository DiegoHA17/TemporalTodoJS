let pilaUsados = [false, false, false, false, false, false, false, false, false, false];
let cola = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
let colaUsados = [false, false, false, false, false, false, false, false, false, false];
let pila = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let primero = null;
let segundo = null;

function recuperarAleatorioMinMax(min, max) {
  let valorMaximo = max - min + 1;
  let valor = parseInt(Math.random() * valorMaximo) + min;
  return valor;
}

function cargarDato() {
  // Pila
  let contadorPila = 0;
  while (contadorPila < 10) {
    let valorAleatorio = recuperarAleatorioMinMax(0, 9);
    if (pilaUsados[valorAleatorio] == false) {
      let idPila = "pila" + contadorPila;
      document.getElementById(idPila).textContent = valorAleatorio;
      pilaUsados[valorAleatorio] = true;
      contadorPila++;
    }
  }

  // Cola
  let contadorCola = 0;
  while (contadorCola < 10) {
    let valorAleatorio = recuperarAleatorioMinMax(0, 9);
    if (colaUsados[valorAleatorio] == false) {
      colaUsados[valorAleatorio] = true;
      let idCola = "cola" + contadorCola;
      document.getElementById(idCola).textContent = cola[valorAleatorio];
      contadorCola++;
    }
  }
}

function convertirANumero(texto) {
  let posicion = cola.indexOf(texto);
  if (posicion == -1) {
    // Es un número
    return parseInt(texto);
  } else {
    // Es una palabra
    return posicion;
  }
}

function cambiarColor(i) {
  let idElemento = i.target;

  if(idElemento.classList.contains("correcto")){
    return;
  }

  // PRIMER CLICK
  if(primero == null){
    primero = idElemento;
    primero.classList.add("seleccionado");
  } else if(segundo == null && idElemento != primero){
    segundo = idElemento;
    segundo.classList.add("seleccionado");
    
    let valorUno = convertirANumero(primero.textContent);
    let valorDos = convertirANumero(segundo.textContent);
    
    if(valorUno == valorDos){
      primero.classList.remove("seleccionado");
      segundo.classList.remove("seleccionado");
      primero.classList.add("correcto");
      segundo.classList.add("correcto");
    } else {
      primero.classList.remove("seleccionado");
      segundo.classList.remove("seleccionado");
    }
    
    // Reset 
    primero = null;
    segundo = null;
  }
}


function asignarEventos() {
  for (let i = 0; i < 10; i++) {
    let idPila = "pila" + i;
    let idCola = "cola" + i;
    document.getElementById(idPila).addEventListener("click", cambiarColor);
    document.getElementById(idCola).addEventListener("click", cambiarColor);
  }
}

window.onload = function () {
  cargarDato();
  asignarEventos();
};
