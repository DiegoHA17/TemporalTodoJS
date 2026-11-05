function ordenarpalabra() {
  let uno = "camióna";
  let dos = "camiona";
  let tres = "camiono";

  let unoDos = uno.localeCompare(dos);
  let unoTres = uno.localeCompare(tres);
  let dosTres = dos.localeCompare(tres);
  let tresTres = tres.localeCompare(tres);

  alert(
    "Comparación entre camióna y camiona: " +
      unoDos +
      "\n" +
      "Comparación entre camióna y camiono: " +
      unoTres +
      "\n" +
      "Comparación entre camiona y camiono: " +
      dosTres +
      "\n" +
      "Comparación entre camiono y camiono: " +
      tresTres
  );
}
function sustitucionCadena() {
  let cadena = "Esta clase esta para probar estos métodos de String";
  let cadenaDos = cadena.replace("sta", 111);
  let cadenaTres = cadena.replaceAll("sta", 111);
  alert("Frase original: " + cadena + "\n" + "Frase modificada: " + cadenaDos + "\n" + "Frase modificada con replaceAll: " + cadenaTres);
}

window.onload = function () {
  document
    .getElementById("ordenarPalbaras")
    .addEventListener("click", ordenarpalabra);
  document
    .getElementById("sustitucionCadena")
    .addEventListener("click", sustitucionCadena);
};
