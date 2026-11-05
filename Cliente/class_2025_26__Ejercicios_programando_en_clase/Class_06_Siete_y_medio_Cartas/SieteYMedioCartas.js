//Baraja
let baraja = [
    "1O", "2O", "3O", "4O", "5O", "6O", "7O", "10O", "11O", "12O",
    "1C", "2C", "3C", "4C", "5C", "6C", "7C", "10C", "11C", "12C",
    "1E", "2E", "3E", "4E", "5E", "6E", "7E", "10E", "11E", "12E",
    "1B", "2B", "3B", "4B", "5B", "6B", "7B", "10B", "11B", "12B"
];


//Intentos por jugador (cada posicion corresponde a un cuadro de el jugador)

let intentosJ1 = [0,0,0];
let intentosJ2 = [0,0,0];


//Puntos de cada jugador

let puntosJ1 = 0;
let puntosJ2 = 0;

//Variable globar para controlar el turno
let turno = 1; //1 para jugador1, 2 para jugador2

//Funcion para generar carta aleatoria

function generarCarta() {
    let indice = parseInt(Math.random() * baraja.length);

    return baraja[indice]; //Que retorne una carta aleatoria de la baraja
}

//Cambiar carta al hacer click
function cambiarCarta(jugador, indice) {
    if(jugador !== turno) {
        alert(`No es el turno del Jugador ${jugador}`);
        return; //Sale si no es el turno del jugador
    }

    if(jugador === 1) {
        if(intentosJ1[indice] < 2) {
            cuadrosJ1[indice].textContent = generarCarta();
            intentosJ1[indice]++;
            actualizarPuntuacion(1);
            //Pasar turno al siguiente jugador
            turno = 2;
            actualizarTurno();
        } else {
            alert("Jugador 1: No puedes cambiar más esta carta");
        }
    } else if (jugador === 2) {
        if(intentosJ2[indice] < 2) {
            cuadrosJ2[indice].textContent = generarCarta();
            intentosJ2[indice]++;
            actualizarPuntuacion(2);
            //Pasar turno al siguiente jugador
            turno = 1;
            actualizarTurno();
        } else {
            alert("Jugador 2: No puedes cambiar más esta carta")
        }
    }

}

function actualizarTurno() {
    document.getElementById("turno").textContent = `Turno: Jugador ${turno}`;
}


//Sumar puntos de un jugador

function actualizarPuntuacion(jugador) {
    let total = 0;

    if(jugador === 1) {
        for(let i = 0; i < cuadrosJ1.length; i++) { //Recorremos cada carta del jugador1 
            let valor = cuadrosJ1[i].textContent; //Recogemos el valor de cada carta del jugador1
            if(valor != "") {
                let numero = parseInt(valor);       // obtiene la parte numerica de el valor de la carta que puede ser 1,2,3,...10,11,12
                
                //Si es figura (10, 11 , 12) vale 0.5
                if(numero >= 10) {        
                    total += 0.5;                   
                } else {
                    total += numero;                // Vale su número normal
                }
            }
        }

        puntosJ1 = total;
        document.getElementById("puntuacionJ1").textContent = puntosJ1;

        // Comprobar si se pasa de 7.5
        if(total > 7.5) {
            alert("Jugador 1 se ha pasado de 7.5 puntos!");
            for(let i = 0; i < cuadrosJ1.length; i++) { //Recorremos cada carta del jugador1
                cuadrosJ1[i].style.opacity = 0.6; //Hace que los cuadros se vean más transparentes, como desactivado o apagado.
                cuadrosJ1[i].style.cursor = "default"; //Cambia el cursor del ratón de la mano (pointer) a la flecha normal, indicando que ya no se puede hacer click.
                cuadrosJ1[i].replaceWith(cuadrosJ1[i].cloneNode(true)); //Quita el eventListener del cuadro, evitando que vuelvan a hacer click.
            }
        }

    } else if(jugador === 2) {
        for(let i = 0; i < cuadrosJ2.length; i++) { //Recorremos cada carta del jugador2
            let valor = cuadrosJ2[i].textContent; //Recogemos el valor de cada carta del jugador2
            if(valor != "") {
              let numero = parseInt(valor);       // obtiene un valor que puede ser 1,2,3,...10,11,12
                
                //Si es figura (10, 11 , 12) vale 0.5
                if(numero >= 10) {        
                    total += 0.5;                   
                } else {
                    total += numero;                // Vale su número normal
                }
            }
        }

        puntosJ2 = total;
        document.getElementById("puntuacionJ2").textContent = puntosJ2;

        // Comprobar si se pasa de 7.5
        if(total > 7.5) {
            alert("Jugador 2 se ha pasado de 7.5 puntos!");
            for(let i = 0; i < cuadrosJ2.length; i++) {
                cuadrosJ2[i].style.opacity = 0.6; //Hace que los cuadros se vean más transparentes, como desactivado o apagado.
                cuadrosJ2[i].style.cursor = "default"; //Cambia el cursor del ratón de la mano (pointer) a la flecha normal, indicando que ya no se puede hacer click.
                cuadrosJ2[i].replaceWith(cuadrosJ2[i].cloneNode(true)); //Quita el eventListener del cuadro, evitando que vuelvan a hacer click.
            }
        }
    }
}


//Finalizar juego

function finalizarJuego() {
    let mensaje = `Juego terminado!\nJugador 1: ${puntosJ1} puntos\nJugador 2: ${puntosJ2} puntos\n`;

    if(puntosJ1 > 7.5 && puntosJ2 > 7.5) {
        mensaje += "¡Ambos se pasaron!";
    } else if(puntosJ1 > 7.5) {
        mensaje += "¡Gana Jugador 2!";
    } else if(puntosJ2 > 7.5) {
        mensaje += "¡Gana Jugador 1!";
    } else if(puntosJ1 > puntosJ2) {
        mensaje += "¡Gana Jugador 1!";
    } else if(puntosJ2 > puntosJ1) {
        mensaje += "¡Gana Jugador 2!";
    } else {
        mensaje += "¡Empate!";
    }
    alert(mensaje);
}


//Variables globales para los cuadros

let cuadrosJ1, cuadrosJ2;


//Asignar eventos cuando la página se cargue

window.onload = function() {
    cuadrosJ1 = document.getElementsByClassName("jugador1"); //Cuadros del jugador1
    cuadrosJ2 = document.getElementsByClassName("jugador2"); //Cuadros del jugador2

    //Asignar click a cada cuadro del jugador1
    for(let i = 0; i < cuadrosJ1.length; i++) {
        cuadrosJ1[i].addEventListener("click", function() {
            cambiarCarta(1, i);
        });
    }

    //Asignar click a cada cuadro del jugador2

    for(let i = 0; i < cuadrosJ2.length; i++) {
        cuadrosJ2[i].addEventListener("click", function() {
            cambiarCarta(2, i);
        });
    }

    document.getElementById("botonFinalizar").addEventListener("click", finalizarJuego);
}