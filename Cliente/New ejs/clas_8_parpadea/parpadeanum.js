function generarNumeros() {
  const numeros = [];

  while (numeros.length < 9) {
    const num = Math.floor(Math.random() * 9) + 1;

    if (!numeros.includes(num)) {
      numeros.push(num);
    }
  }

  return numeros;
}

function crearNumero() {
  const numeros = generarNumeros();
  const container = document.getElementById("container");

  numeros.forEach((num) => {
    const numeroDiv = document.createElement("div");
    numeroDiv.classList.add("numero");
    numeroDiv.textContent = num;
    container.appendChild(numeroDiv);
  });
}

function asignarEventos() {
  const numerosDivs = document.querySelectorAll(".numero");

  numerosDivs.forEach((div) => {
    div.addEventListener("click", () => {
      if (div.classList.contains("bloqueado")) return;

      div.classList.add("bloqueado");

      const veces = parseInt(div.textContent, 10);
      let contador = 0;

      const intervalo = setInterval(() => {
        div.classList.toggle("parpadeo");
        contador++;

        if (contador >= veces * 2) {
          clearInterval(intervalo);
          div.classList.remove("parpadeo");
          div.classList.add("color");
          div.classList.remove("bloqueado");
        }
      }, 300);
    });
  });
}

window.onload = () => {
  crearNumero();
  asignarEventos();
};
