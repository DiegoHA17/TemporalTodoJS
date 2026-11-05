class Coche {
  constructor(marca, color, energia) {
    this.marca = marca;
    this.color = color;
    this.energia = energia;
  }
}

let listadoCoches = [];
let pulsadoboton = false;

function agregarCoche() {
  try {
    const formulario = document.getElementById("formulario");
    const marca = formulario.marca.value;
    const color = formulario.color.value;
    const energia = formulario.energia.value;

    if (!marca || !color || !energia) {
      throw new Error("Todos los campos son obligatorios");
    }

    const nuevoCoche = new Coche(marca, color, energia);
    listadoCoches.push(nuevoCoche);
    console.log(nuevoCoche);
    

 if(document.getElementById("listadocoches").innerHTML!==""){
      verlistadoCoches();
    }
    
    formulario.reset();
  } catch (error) {
    alert(error.message);
  }
}

function infocoche() {
  try {
    pulsadoboton = true;

    const numero = document.getElementById("numerocoche").value;
    const contenedor = document.getElementById("info");
    contenedor.innerHTML = "";

    if (numero === "" || !listadoCoches[numero]) {
      throw new Error("Número de coche no válido");
    }

    const cocheSeleccionado = listadoCoches[numero];
    const formulario = document.getElementById("formulariocoche");

    if (formulario.marca.checked) {
      const p = document.createElement("p");
      p.textContent = "Marca: " + cocheSeleccionado.marca;
      contenedor.appendChild(p);
    }

    if (formulario.color.checked) {
      const p = document.createElement("p");
      p.textContent = "Color: " + cocheSeleccionado.color;
      contenedor.appendChild(p);
    }

    if (formulario.energia.checked) {
      const p = document.createElement("p");
      p.textContent = "Energía: " + cocheSeleccionado.energia;
      contenedor.appendChild(p);
    }
  } catch (error) {
    alert(error.message);
  }
}

function verlistadoCoches() {
  try {
    const contenedor = document.getElementById("listadocoches");
    contenedor.innerHTML = "";

    if (listadoCoches.length === 0) {
      throw new Error("No hay coches registrados");
    }

    listadoCoches.forEach((coche, index) => {
      const p = document.createElement("p");
      p.textContent = `Coche ${index}: Marca: ${coche.marca}, Color: ${coche.color}, Energía: ${coche.energia}`;
      contenedor.appendChild(p);
    });
  } catch (error) {
    alert(error.message);
  }
}

window.onload = function () {
  document
    .getElementById("botonnuevocoche")
    .addEventListener("click", agregarCoche);

  document
    .getElementById("botonlistar")
    .addEventListener("click", verlistadoCoches);

  document.getElementById("botoninfo").addEventListener("click", infocoche);
};
