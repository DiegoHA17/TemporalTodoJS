function numeroAleatorio(i) {
    let valorAleatorio = parseInt(Math.random() * 10 + 1);

    let parImpar;

    if (valorAleatorio % 2 == 0) {
        parImpar = "par";
    } else {
        parImpar = "impar";
    }

    let frase = "aleatorio" + valorAleatorio + parImpar;

    document.getElementById("cuadro"+(i+6)).textContent = frase;
}

function conseguirNumeros() {
    let elementosClaseCuadro = document.getElementsByClassName("evento");

    for (let i=0; i < elementosClaseCuadro.length;i++) {

        elementosClaseCuadro[i].addEventListener("click",
            function() {
                numeroAleatorio(i)
            }
        )
    }
}

window.onload = function() {
    conseguirNumeros();
}
