/*Una fila de cuadros numerados del 1 al 5 (cuadros con evento asociado).
Al clikear se añada en el cuadrado de abajo una secuencia de números del 1 al número del cuadro clickeado.
*/
function asignarparametro() {
    let elementosClaseCuadrado = document.getElementsByClassName("cuadro");

    for (let i = 0; i < elementosClaseCuadrado.length; i++) {
        elementosClaseCuadrado[i].addEventListener("click", function(event) {
            asignaparametrosdos(event);
        });
    }
}
function numaleatorio(){
    return Math.floor(Math.random() * 10) + 1;
}

function asignaparametrosdos(event) {
    let idElemento = event.target.id;

    let numero = parseInt(idElemento.charAt(idElemento.length - 1));
    let idElementoFila2 = idElemento.replace(idElemento.charAt(idElemento.length - 1), (numero + 5));

    let aleatorio = numaleatorio();
    let texto = "Aleatorio_" + aleatorio;
    let contador = 1;
    while (contador <= aleatorio) {
        texto += "_" + contador;
        contador++;
    }

    document.getElementById(idElementoFila2).textContent = texto;
}

window.onload = function() {
    asignarparametro();
}

