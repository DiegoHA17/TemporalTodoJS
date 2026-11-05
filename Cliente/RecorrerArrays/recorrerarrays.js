let notas = [7, , , , , , 8, , , , 8, 10, 9, 0, , , , 6, 9, 5];
function recorrerFor() {
  for (let i = 0; i < notas.length; i++) {
    console.log(`La nota ${i} es: ${notas[i]}`);
  }
}
function recorrerFori() {
  for (let nota in notas) {
    console.log(`La nota ${nota} es: ${notas[nota]}`);
  }
}
function recorrerForOf() {
  for (let nota of notas) {
    if (nota != undefined) {
        console.log(`La nota es: ${nota}`);    }
  }
}
function recorrerCaracteres() {
  let palabra ="Programacion";
  for (let caracter of palabra) {
    console.log(`El caracter es: ${caracter}`);
  }
  
}

window.onload = function () {
  document.getElementById("recorrerFor").addEventListener("click", recorrerFor);
  document
    .getElementById("recorrerFori")
    .addEventListener("click", recorrerFori);
  document
    .getElementById("recorrerForor")
    .addEventListener("click", recorrerForOf);
    document
    .getElementById("recorrerForor")
    .addEventListener("click", recorrerForOf);
    document
    .getElementById("recorrerCaracter")
    .addEventListener("click", recorrerCaracteres);
};
