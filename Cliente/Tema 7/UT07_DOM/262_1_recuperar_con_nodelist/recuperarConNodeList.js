function principal() {
  let principal = document.getElementById("principal");
  let listaParrafos = principal.getElementsByTagName("p");

  let listaArray = [...listaParrafos];
  listaArray.forEach((element) => {
    console.log(element.textContent);
  });
}

window.onload = function () {
  //prettier-ignore
  document.getElementById("principal").addEventListener("click", principal);
};
