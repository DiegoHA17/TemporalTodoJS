function aniadirElemento() {
  let coches = ["Mercedes", "Tesla", "Seat"];
  console.log(coches);
  // Añade sin eliminar
  coches.splice(1, 0, "BMW");
  console.log(coches);
  // Elimina elementos desde la posición 0, elimina 3
  coches.splice(0, 3);
  console.log(coches);
}
window.onload = function () {
  document
    .getElementById("aniadirElemento")
    .addEventListener("click", aniadirElemento);
};
