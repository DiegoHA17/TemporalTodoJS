let loterias = [];
let gordo = generalLot();
let segundopremio = generalLot();
let tercerpremio = generalLot();
let cuartopremio = generalLot();
let quintopremio = generalLot();
let sextopremio = generarSextoPremio();
let reintegro = gordo.charAt(4);
let premios = new Map([
  ["gordo", 400000],
  ["segundo", 125000],
  ["tercero", 50000],
  ["cuarto", 20000],
  ["quinto", 6000],
  ["sexto", 1000],
  ["reintegro", 20],
  ["nada", "x_X"],
]);
function generarSextoPremio (){
    let sextopremio = [];
    for (let i = 0; i < 15; i++) {
        sextopremio.push(generalLot());
    }
    return sextopremio;
};
function comprobarpremio() {
    let lots = document.getElementsByClassName("decimo");
    let prem = document.getElementsByClassName("pre");
  
    for (let i = 0; i < lots.length; i++) {
      let num = lots[i].innerText;
  
      if (num === gordo) {
        prem[i].innerText = premios.get("gordo") + "€";
      } else if (num === segundopremio) {
        prem[i].innerText = premios.get("segundo") + "€";
      } else if (num === tercerpremio) {
        prem[i].innerText = premios.get("tercero") + "€";
      } else if (num === cuartopremio) {
        prem[i].innerText = premios.get("cuarto") + "€";
      } else if (num === quintopremio) {
        prem[i].innerText = premios.get("quinto") + "€";
      } else if (sextopremio.includes(num)) { 
        prem[i].innerText = premios.get("sexto") + "€"; 
      } else if (num.charAt(4) === reintegro) {
        prem[i].innerText = premios.get("reintegro") + "€";
      } else {
        prem[i].innerText = premios.get("nada");
      }
    }
  }
  

function decimos() {
  let lots = document.getElementsByClassName("decimo");
  for (let i = 0; i < 5; i++) {
    loterias.push(generalLot());
  }
  let ultimosCinco = loterias.slice(-5);
  for (let i = 0; i < lots.length; i++) {
    lots[i].innerText = ultimosCinco[i];
  }
  comprobarpremio();
  console.log(loterias);
  document.getElementById("decimos").innerText = loterias;
}

function info() {
  let info =
    "El número del Gordo es: " +
    gordo +
    "\n" +
    "El número del Segundo Premio es: " +
    segundopremio +
    "\n" +
    "El número del Tercer Premio es: " +
    tercerpremio +
    "\n" +
    "El número del Cuarto Premio es: " +
    cuartopremio +
    "\n" +
    "El número del Quinto Premio es: " +
    quintopremio +
    "\n" +
    "El número del Reintegro es: " +
    reintegro;
  document.getElementById("info").innerText = info;
}

function generalLot() {
  let num = () => Math.floor(Math.random() * 10);
  let cadena = "";
  for (let i = 0; i < 5; i++) {
    cadena = cadena + num();
  }
  if (!loterias.includes(cadena)) {
    return cadena;
  } else {
    generalLot();
  }
}

window.onload = function () {
  info();
  document.getElementById("boton").onclick = decimos;
};
