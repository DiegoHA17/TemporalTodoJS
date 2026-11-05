function valorAtributo() {
  let lis = document.querySelectorAll("li");
  for (const li of lis) {
    console.log(li.getAttribute("class")); //Obtengo el atributo clase de cada li
  }

  console.log("*****************");
  lis.forEach((elemento) => {
    console.log(elemento.getAttribute("class"));
  });
}

window.onload = function () {
  //prettier-ignore
  document.getElementById("valorAtributo").addEventListener("click", valorAtributo);
};
