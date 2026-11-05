function anularcomportamiento() {
  document.getElementById("enlace").classList.add("anulado");
  let enlace = document.querySelector("a");
  enlace.addEventListener("click", function (event) {
    if (!confirm("¿Desea ir a Wikipedia?")) {
      event.preventDefault();
    }
  });
}

window.onload = function () {
  document.getElementById("anularcomportpredetermininado").onclick =
    anularcomportamiento;
};
