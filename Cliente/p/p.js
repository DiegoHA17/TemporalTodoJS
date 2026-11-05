function asignarEventos() {
    let cuadrado = document.getElementsByClassName("cuadrado");
    for (const cu of cuadrado) {
        cu.addEventListener("click", function () {
            p(cu);
        });
        console.log(cu);
  }
}

function p (i){
let ids = i.getAttribute("id");
document.getElementById(ids).classList.toggle("rojo");
}

window.onload = function () {
    asignarEventos();
};
