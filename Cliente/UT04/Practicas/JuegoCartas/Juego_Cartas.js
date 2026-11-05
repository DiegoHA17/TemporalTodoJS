let clickCounts = {};
const palos = ["oros", "copas", "espadas", "bastos"];
let baraja = new Set();
let puntos1 = 0;
let puntos2 = 0;
let ver = 1;
let posicionY = 45;
const paso = 170;

function MostarCratas() {
  const ficha = document.getElementById("ficha");
  if(posicionY < 385){
    posicionY += paso;
    ficha.style.top = posicionY + "px";
    console.log(posicionY);
  }
  if(posicionY >= 385){
    document.getElementById("fin").classList.add("visible");
  }
  let cartas1 = document
    .getElementById("jugador1")
    .getElementsByClassName("carta");
  let cartas2 = document
    .getElementById("jugador2")
    .getElementsByClassName("carta");
  for (let i = 0; i < cartas1.length; i++) {
    if (i === ver) {
      cartas1[i].classList.remove("invisible");
      cartas1[i].classList.add("visible");
    }
  }
  for (let i = 0; i < cartas2.length; i++) {
    if (i === ver) {
      cartas2[i].classList.remove("invisible");
      cartas2[i].classList.add("visible");
    }
  }
  ver += 1;
}

function sumarpuntos(carta) {
  let jugador = carta.parentElement.getAttribute("id");
  if (jugador === "jugador1") {
    let texto = carta.innerText;
    let sumar = parseInt(texto);
    puntos1 += sumar;
    document.getElementById("puntos1").innerText = puntos1;
  } else {
    let texto = carta.innerText;
    let sumar = parseInt(texto);
    puntos2 += sumar;
    document.getElementById("puntos2").innerText = puntos2;
  }
}
function restarpuntos(carta) {
  let jugador = carta.parentElement.getAttribute("id");
  if (jugador === "jugador1") {
    let texto = carta.innerText;
    let sumar = parseInt(texto);
    puntos1 -= sumar;
    document.getElementById("puntos1").innerText = puntos1;
  } else {
    let texto = carta.innerText;
    let sumar = parseInt(texto);
    puntos2 -= sumar;
    document.getElementById("puntos2").innerText = puntos2;
  }
}
function barajas() {
  for (let palo of palos) {
    for (let numero = 1; numero <= 12; numero++) {
      if (numero !== 8 && numero !== 9) {
        // Para tener 40 cartas reales
        baraja.add(numero + " de " + palo);
      }
    }
  }
  console.log(baraja);
}

function tomarCartaAleatoria() {
  const barajaArray = Array.from(baraja); // Convertimos el Set a Array
  if (barajaArray.length === 0) return null; // Si no quedan cartas
  const indice = Math.floor(Math.random() * barajaArray.length);
  const carta = barajaArray[indice];
  baraja.delete(carta); // La quitamos de la baraja
  return carta;
}

function conveces(carta) {
  let num = carta.getAttribute("id");
  clickCounts[num] = clickCounts[num] ? clickCounts[num] + 1 : 1;

  if (clickCounts[num] > 4) {
    alert("Solo puedes dar la vuelta a esta carta dos veces.");
    clickCounts[num] = 4; // Limitar a 2 clics
    return false;
  } else {
    return true;
  }
}

function asignarEventos() {
  let jugadores = document.getElementsByClassName("Jugador");
  for (let i = 0; i < jugadores.length; i++) {
    let cartas = jugadores[i].getElementsByClassName("carta");
    for (let j = 0; j < cartas.length; j++) {
      cartas[j].onclick = function () {
        if (conveces(this)) {
          this.classList.toggle("girada");

          // Escribir texto solo si ahora está girada
          if (this.classList.contains("girada")) {
            escribirDatos(this.getAttribute("id"));
            sumarpuntos(this);
            this.style.color = "white"; // Para que se vea sobre marrón
          } else {
            restarpuntos(this);
            this.innerHTML = ""; // Borrar texto al volver
          }
        }
      };
    }
  }
}
function botonFin() {
  let mensaje =
    "Puntos Jugador 1: " + puntos1 + "\nPuntos Jugador 2: " + puntos2 + "\n";
  if (puntos1 > puntos2) {
    mensaje += "¡Jugador 1 gana!";
  } else if (puntos2 > puntos1) {
    mensaje += "¡Jugador 2 gana!";
  } else {
    mensaje += "¡Empate!";
  }
  alert(mensaje);
}

function escribirDatos(car) {
  document.getElementById(car).innerHTML =
    "<span>" + tomarCartaAleatoria() + "</span>";
}

window.onload = function () {
  barajas();
  asignarEventos();
  document.getElementById("fin").onclick = botonFin;
  document.getElementById("ficha").onclick = MostarCratas;
};
