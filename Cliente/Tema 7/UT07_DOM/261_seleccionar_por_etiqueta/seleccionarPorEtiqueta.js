function recuperarPorEtiqueta() {
  let prinicipal = document.getElementById("principal");
  let interiores = prinicipal.getElementsByTagName("p");
  console.log("Cantidad de p " + interiores.length);
}

window.onload = function () {
  //prettier-ignore
  document.getElementById("principal").addEventListener("click", recuperarPorEtiqueta);
};
