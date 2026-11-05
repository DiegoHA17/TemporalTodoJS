const zonaDibujo = document.getElementById("zonaDibujo");

let serie = [];
let posicion = 0;
let intervalo = null;

// Selección de las opciones que hay

function agregar(figura) {

    if (serie.length < 4) {
        serie.push(figura);
    }

    if (serie.length == 4 && intervalo == null) {
        iniciarSerie();
    }
}

function iniciarSerie() {
    intervalo = setInterval(() => {
        dibujarFigura(serie[posicion]);

        posicion++;

        if (posicion == serie.length) {
            posicion = 0;
        }

    }, 600);
}

function dibujarFigura(tipo) {
    const div = document.createElement("div");
    div.classList.add("figura", tipo);
    zonaDibujo.appendChild(div);

    // Esto es para limpiar la zona de dibujo si hay muchas figuras
    /*
    if (zonaDibujo.children.length > 10) {
        zonaDibujo.textContent = "";
    }
    */
}


document.querySelector(".cuadrado").addEventListener("click", () => agregar("cuadrado"));
document.querySelector(".triangulo").addEventListener("click", () => agregar("triangulo"));
document.querySelector(".circulo").addEventListener("click", () => agregar("circulo"));
document.querySelector(".rectangulo").addEventListener("click", () => agregar("rectangulo"));
