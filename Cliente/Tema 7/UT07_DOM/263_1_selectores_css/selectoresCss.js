function cargarSelectoresCss() {
  console.log("Selecciona los elementos de clase verdura");
  let verduras = document.querySelectorAll(".verdura"); //Hay que poner el selector css, nodeLIst tiene el metodo forEach, no hace falta el spread
  verduras.forEach((element) => {
    console.log(element.textContent);
  });

  // Selecciona los elementos li dentro de ul

  console.log("--- Selecciona los elementos li dentro de ul");
  let listadoLi = document.querySelectorAll("ul li");
  listadoLi.forEach((element) => {
    console.log(element.textContent);
  });

  //Selecciona el primer li

  console.log("--------- Selecciona el primer elemento li de la lista ul");
  let listadoPrimerLi = document.querySelectorAll("li:first-of-type");
  listadoPrimerLi.forEach((element) => {
    console.log(element.textContent);
  });

  //Primer elemento li si es verdura de cada ul

  console.log("---- Selecciona el primer elemento de la lsita si es verdura");
  let listadoPrimerVeruda = document.querySelectorAll("li.verdura:first-of-type");
  listadoPrimerVeruda.forEach((element) => {
    console.log(element.textContent);
  });

  //Selecciona el atributo data-src
  console.log("---- Selecciona el aitrubuto data-src");
  let atributosDataSrc = document.querySelectorAll("li[data-src]");
  atributosDataSrc.forEach((element) => {
    console.log(element.textContent);
  });

  //Selecciona el atributo data-src
  console.log("---- Selecciona el aitrubuto data-src");
  let atributosDataSrcValorDos = document.querySelectorAll("li[data-src='valorDos']");
  atributosDataSrcValorDos.forEach((element) => {
    console.log(element.textContent);
  });
}

window.onload = function () {
  //prettier-ignore
  document.getElementById("cargarSelectoresCss").addEventListener("click", cargarSelectoresCss);
};
