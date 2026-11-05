let puntos = 0;
let contenido = [];
function generarTablero() {
    let marcador = document.getElementById("puntos");
    let contenido = [
        "mina", "mina", "mina", "mina", "mina",
        "bomba", "bomba", "bomba", "bomba", "bomba",
        "agua", "agua", "agua", "agua", "agua",
        "nube", "nube", "nube", "nube", "nube",
        "nube", "nube", "nube", "nube", "nube"
    ];


    contenido.sort(() => Math.random() - 0.5);
    for (let i = 1; i <= 25; i++) {
        let casilla = document.getElementById("casilla" + i);
        let tipo = contenido[i - 1];
        casilla.className = "casilla " + tipo;
        casilla.addEventListener("click", function () {

            if (this.classList.contains("descubierta") || this.classList.contains("parpadeando")) {
                return;
            }
            this.classList.add("parpadeando");
            let parpadeos = 0;
            const intervalo = setInterval(() => {
                this.classList.toggle("descubierta");
                parpadeos++;
                if (parpadeos >= 4) {
                    clearInterval(intervalo);
                    this.classList.add("descubierta");
                    this.classList.remove("parpadeando");

                    if (tipo === "mina") {
                        puntos += 4;
                    } else if (tipo === "bomba") {
                        puntos -= 2;
                    } else if (tipo === "agua") {
                        puntos -= 3;
                    }

                    marcador.textContent = puntos;
                }
            }, 250);
        });
    }
}
window.onload = function () {
    generarTablero();
}