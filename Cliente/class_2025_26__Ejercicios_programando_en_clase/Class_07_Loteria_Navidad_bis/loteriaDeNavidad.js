
var numeros = [];
var cajas = [];

var premiosPrincipales = [];
var premiosAdicionales = [];

var mostrados = 0;



function generarNumeros() {

    while (numeros.length < 50) {

        var num = Math.floor(Math.random() * 100000);
        var numTexto = num.toString();

        while (numTexto.length < 5) {
            numTexto = "0" + numTexto;
        }

        if (numeros.indexOf(numTexto) === -1) {
            numeros.push(numTexto);
        }
    }
}


function crearCasillas() {

    for (var i = 0; i < 50; i++) {

        var div = document.createElement("div");
        div.className = "casilla";

        var numeroDiv = document.createElement("div");
        numeroDiv.className = "numero";
        numeroDiv.textContent = "";

        var premioDiv = document.createElement("div");
        premioDiv.className = "premio";
        premioDiv.textContent = "";

        div.appendChild(numeroDiv);
        div.appendChild(premioDiv);

        contenedor.appendChild(div);
        cajas.push(div);
    }
}


function asignarPremios() {

    premiosPrincipales.push("El Gordo");
    premiosPrincipales.push("Segundo");
    premiosPrincipales.push("Tercero");
    premiosPrincipales.push("Cuarto A");
    premiosPrincipales.push("Cuarto B");

    for (var i = 0; i < premiosPrincipales.length; i++) {
        var numero;
        do {
            numero = numeros[Math.floor(Math.random() * numeros.length)];
        } while (premiosAdicionales.indexOf(numero) !== -1);

        premiosAdicionales.push(numero);
        premiosPrincipales[i] = {
            nombre: premiosPrincipales[i],
            numero: numero
        };
    }

    while (premiosAdicionales.length < 20) {

        var numExtra = numeros[Math.floor(Math.random() * numeros.length)];

        var repetido = false;

        for (var j = 0; j < premiosPrincipales.length; j++) {
            if (premiosPrincipales[j].numero === numExtra) {
                repetido = true;
            }
        }

        if (!repetido && premiosAdicionales.indexOf(numExtra) === -1) {
            premiosAdicionales.push(numExtra);
        }
    }
}


function mostrarSiguientes10() {

    for (var i = 0; i < 10; i++) {

        if (mostrados >= 50) {
            boton.disabled = true;
            return;
        }

        var casilla = cajas[mostrados];
        var numeroDiv = casilla.getElementsByClassName("numero")[0];
        var premioDiv = casilla.getElementsByClassName("premio")[0];

        var numeroActual = numeros[mostrados];
        numeroDiv.textContent = numeroActual;

        var premio = "";

        for (var j = 0; j < premiosPrincipales.length; j++) {
            if (premiosPrincipales[j].numero === numeroActual) {
                premio = premiosPrincipales[j].nombre;
            }
        }

        if (premio === "") {
            for (var k = 5; k < premiosAdicionales.length; k++) {
                if (premiosAdicionales[k] === numeroActual) {
                    premio = "1.000 €";
                }
            }
        }

        if (premio === "") {
            var ultimoGordo = premiosPrincipales[0].numero.charAt(4);
            var ultimoNumero = numeroActual.charAt(4);

            if (ultimoGordo === ultimoNumero) {
                premio = "1100 €";
            } else{
                premio = "100 €"
            }
        }

        if (premio === "") {
            premio = "";
        }

        premioDiv.textContent = premio;

        mostrados++;
    }
}


window.onload = function () {
    contenedor = document.getElementById("contenedor");
    boton = document.getElementById("Generar10");
    generarNumeros();
    crearCasillas();
    asignarPremios();
    document.getElementById("Generar10").addEventListener("click", mostrarSiguientes10);
};
