window.onload = function () {
  let boton = document.querySelector("button");
  let div = this.document.querySelector("div");
  boton.addEventListener("click", function (evento) {
    document.body.style.backgroundColor = "red";
    evento.stopPropagation();
  });
  div.addEventListener("click", function () {
    document.body.style.backgroundColor = "blue";
  });
};
