function modificarAtributo() {
  //Selecciona el primer elemento li de cada lista
  let primerLi = document.querySelectorAll("li:first-of-type");
  primerLi[0].setAttribute("class", "fondo");
}

window.onload = function () {
  //prettier-ignore
  document.getElementById("modificarAtributo").addEventListener("click", modificarAtributo);
};
