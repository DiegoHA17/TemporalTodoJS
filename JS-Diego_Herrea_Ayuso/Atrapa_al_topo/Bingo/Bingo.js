class Carton {
  constructor() {
    this.carton = Array.from({ length: 3 }, () => Array(9).fill(null));
    this.usados = new Set();
  }

  generarNumero(min, max) {
    let n;
    do {
      n = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (this.usados.has(n));
    this.usados.add(n);
    return n;
  }

  generarCarton() {
    const rangos = [
      [1, 9],
      [10, 19],
      [20, 29],
      [30, 39],
      [40, 49],
      [50, 59],
      [60, 69],
      [70, 79],
      [80, 90],
    ];

    let numsPorColumna = Array(9).fill(1);
    let restantes = 15 - 9;

    while (restantes > 0) {
      let col = Math.floor(Math.random() * 9);
      if (numsPorColumna[col] < 3) {
        numsPorColumna[col]++;
        restantes--;
      }
    }

    for (let col = 0; col < 9; col++) {
      let cantidad = numsPorColumna[col];
      let [min, max] = rangos[col];

      let nums = [];
      for (let i = 0; i < cantidad; i++) {
        nums.push(this.generarNumero(min, max));
      }

      nums.sort((a, b) => a - b);

      let filas = [0, 1, 2];
      for (let n of nums) {
        let fila = filas.splice(Math.floor(Math.random() * filas.length), 1)[0];
        this.carton[fila][col] = n;
      }
    }
  }
}

class GestorCartones {
  constructor() {
    this.cartones = [];
    this.indiceActual = 0;
  }

  // Crear y guardar un nuevo cartón
  crearCarton() {
    const nuevo = new Carton();
    nuevo.generarCarton();
    this.cartones.push(nuevo.carton);
    return this.cartones.length - 1;
  }

  // Cargar un cartón existente al DOM
  cargarCarton(index) {
    if (index < 0 || index >= this.cartones.length) return;

    this.indiceActual = index;
    const datos = this.cartones[index];

    for (let fila = 0; fila < 3; fila++) {
      for (let col = 0; col < 9; col++) {
        let id = `${fila}${col + 1}`; // Ejemplo: 01, 02, 11, 21...
        let celda = document.getElementById(id);

        celda.classList.remove("libre", "marcada", "errada");

        if (datos[fila][col] === null) {
          celda.textContent = "";
          celda.classList.add("libre");
        } else {
          celda.textContent = datos[fila][col];
        }
      }
    }
  }

  // Ir al siguiente cartón o crearlo si no existe
  siguiente() {
    if (this.indiceActual + 1 < this.cartones.length) {
      this.cargarCarton(this.indiceActual + 1);
    } else {
      const nuevo = this.crearCarton();
      this.cargarCarton(nuevo);
    }
  }

  // Volver al anterior cartón
  anterior() {
    if (this.indiceActual > 0) {
      this.cargarCarton(this.indiceActual - 1);
    }
  }
}

function activarMarcado() {
  const celdas = document.querySelectorAll(".celda");

  celdas.forEach((celda) => {
    celda.addEventListener("click", () => {
      celda.classList.toggle("marcada");
    });
  });
}

window.onload = function () {
  window.gestor = new GestorCartones();

  // Generar el primer cartón
  gestor.crearCarton();
  gestor.cargarCarton(0);

  activarMarcado();

  // Botones
  document
    .getElementById("Siguiente")
    .addEventListener("click", () => gestor.siguiente());
  document
    .getElementById("Anterior")
    .addEventListener("click", () => gestor.anterior());
};
