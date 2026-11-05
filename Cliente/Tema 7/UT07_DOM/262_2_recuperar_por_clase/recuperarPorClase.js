function cargarClases() {
  let verduras = document.getElementsByClassName("verdura"); //Html collection no tiene metodo forEach y hay que convertirlo con spread
  let listadoVerduras = [...verduras];
  console.log("---------- VERDURAS -----------");
  
  listadoVerduras.forEach((element) => {
    console.log(element.textContent);
  });
}

window.onload = function () {
  //prettier-ignore
  document.getElementById("cargarClases").addEventListener("click", cargarClases);
};
