class Animal {
  constructor(id, animal, patas, peso, color, altura, longevidad) {
    this.id = id;
    this.animal = animal;
    this.patas = patas;
    this.peso = peso;
    this.color = color;
    this.altura = altura;
    this.longevidad = longevidad;
  }
}

let listaAnimales = [];
let idEditar = null;
let contadorId = 1; // ID automático

function crearAnimal(id = null) {
  let animal = document.getElementById("animal").value;
  let patas = document.getElementById("patas").value;
  let peso = document.getElementById("peso").value;
  let color = document.getElementById("color").value;
  let altura = document.getElementById("altura").value;
  let longevidad = document.getElementById("longevidad").value;

  return new Animal(
    id ?? contadorId++,
    animal,
    patas,
    peso,
    color,
    altura,
    longevidad
  );
}

function guardarAnimal() {
  if (idEditar !== null) {
    const index = listaAnimales.findIndex(a => a.id === idEditar);
    listaAnimales[index] = crearAnimal(idEditar);
    idEditar = null;
  } else {
    listaAnimales.push(crearAnimal());
  }

  limpiarFormulario();
  mostrarLista();
}

function mostrarLista() {
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  listaAnimales.forEach(animal => {
    let li = document.createElement("li");
    li.textContent =
      `Animal: ${animal.animal} - ` +
      `${animal.patas} patas - ${animal.peso} kg - ` +
      `${animal.color} - ${animal.altura} cm - ` +
      `${animal.longevidad} años`;

    li.onclick = () => cargarFormulario(animal.id);
    lista.appendChild(li);
  });
}

function cargarFormulario(id) {
  const animal = listaAnimales.find(a => a.id === id);

  document.getElementById("animal").value = animal.animal;
  document.getElementById("patas").value = animal.patas;
  document.getElementById("peso").value = animal.peso;
  document.getElementById("color").value = animal.color;
  document.getElementById("altura").value = animal.altura;
  document.getElementById("longevidad").value = animal.longevidad;

  idEditar = id;
}

function eliminarAnimal() {
  if (idEditar !== null) {
    listaAnimales = listaAnimales.filter(a => a.id !== idEditar);
    idEditar = null;
    limpiarFormulario();
    mostrarLista();
  }
}

function limpiarFormulario() {
  document.getElementById("formulario").reset();
}

window.onload = function() {
document.getElementById("Enviar").addEventListener("click", guardarAnimal);
document.getElementById("Eliminar").addEventListener("click", eliminarAnimal);
};
