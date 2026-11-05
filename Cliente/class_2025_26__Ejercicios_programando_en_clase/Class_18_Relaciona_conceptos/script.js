let palabras = ["Barsa", "Atletico", "CR7", "Pejiño"];
let relaciones = ["Negreira", "0 champions", "El GOAT", "Tiene amigos"];
let elementosElegidos = [];
let posicion1 = -1;
let posicion2;
let palabraElegida;



function colocarPalabras() {

    colocarEnColumna(1, 4, palabras);
    elementosElegidos = [];
    colocarEnColumna(5, 8, relaciones);
}

function colocarEnColumna(num1, num2, array) {

    for (let i = num1; i <= num2; i++) {

        let elemento = document.getElementById("elemento" + i);
        let numAleatorio;

        do {
            numAleatorio = recuperarAleatroioMinMax(0,3);
        } while (comprobarPosicion(numAleatorio));

        elementosElegidos.push(numAleatorio);
        elemento.textContent = array[numAleatorio];
    }
}



function relacionarPalabras(i) { 
    if (posicion1 == -1) {
        idElemento = i.target.id;

        let elemento = document.getElementById(idElemento);
        palabraElegida = elemento;
        elemento.classList.add("seleccionado");

        for (let i = 0; i < 4; i++) {
            if (palabras[i] == elemento.textContent) {
                posicion1 = i;
                break;
            }
        }
        console.log(posicion1);
    }
}

function relacionarPalabras2(i) {
    if (posicion1 != -1) {
        idElemento = i.target.id;

        let elemento = document.getElementById(idElemento);

        for (let i = 0; i < 4; i++) {
            if (relaciones[i] == elemento.textContent) {
                posicion2 = i;
                break;
            }
        }
        console.log(posicion2);

        if (posicion1 == posicion2) {
            elemento.classList.add("correcto");
            palabraElegida.classList.add("correcto")
        }else{
            palabraElegida.classList.remove("seleccionado");
        }
        posicion1 = -1;
    }
}

function comprobarPosicion(num) {
    for (let i = 0; i < elementosElegidos.length; i++) {
        if (num == elementosElegidos[i]) {
            return true;
        }
    }

    return false;
}

function recuperarAleatroioMinMax(min, max) {
    let valorMaximo = max - min + 1;
    let valor = parseInt(Math.random() * valorMaximo) + min;
    return valor;
}


window.onload = function () {
    colocarPalabras();

    for (let i = 1; i < 5; i++) {
        document
            .getElementById("elemento" + i)
            .addEventListener("click", relacionarPalabras);
    }

    for (let i = 5; i < 9; i++) {
        document
            .getElementById("elemento" + i)
            .addEventListener("click", relacionarPalabras2);
    }
};
