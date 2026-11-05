// 1️⃣ Mapa número → imagen
const imagenes = new Map([
    [1, "https://via.placeholder.com/100x100?text=1"],
    [2, "https://via.placeholder.com/100x100?text=2"],
    [3, "https://via.placeholder.com/100x100?text=3"],
    [4, "https://via.placeholder.com/100x100?text=4"],
    [5, "https://via.placeholder.com/100x100?text=5"],
    [6, "https://via.placeholder.com/100x100?text=6"],
    [7, "https://via.placeholder.com/100x100?text=7"],
    [8, "https://via.placeholder.com/100x100?text=8"],
    [0, "https://via.placeholder.com/100x100?text= "], // hueco vacío
  ]);
  
  // 2️⃣ Estado inicial del puzzle (ordenado)
  let estado = [1, 2, 3, 4, 5, 6, 7, 8, 0];
  
  // 3️⃣ Función para renderizar el puzzle
  function dibujarPuzzle() {
    const puzzle = document.getElementById("puzzle");
    puzzle.innerHTML = ""; // limpiar contenido
  
    estado.forEach((num, index) => {
      const celda = document.createElement("div");
      const img = document.createElement("img");
      img.src = imagenes.get(num);
      celda.appendChild(img);
      puzzle.appendChild(celda);
  
      // evento al hacer clic
      img.addEventListener("click", () => moverPieza(index));
    });
  }
  
  // 4️⃣ Función para mover una pieza
  function moverPieza(index) {
    const posVacia = estado.indexOf(0);
  
    // Calcular posición fila/columna
    const fila = Math.floor(index / 3);
    const col = index % 3;
    const filaVacia = Math.floor(posVacia / 3);
    const colVacia = posVacia % 3;
  
    // Solo se puede mover si está al lado
    const sonAdyacentes =
      (Math.abs(fila - filaVacia) === 1 && col === colVacia) ||
      (Math.abs(col - colVacia) === 1 && fila === filaVacia);
  
    if (sonAdyacentes) {
      // Intercambiar posiciones
      [estado[index], estado[posVacia]] = [estado[posVacia], estado[index]];
      dibujarPuzzle();
    }
  }
  
  // 5️⃣ Mostrar puzzle al cargar
  dibujarPuzzle();
// ------------------
// Creamos un array ordenado del 1 al 9
const ordenado = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Lo mezclamos con sort y Math.random()
const desordenado = ordenado
  .slice() // copiamos el array para no modificar el original
  .sort(() => Math.random() - 0.5);

console.log(desordenado);

