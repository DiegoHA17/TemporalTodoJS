//Los prototipos añaden mas funcionalidades
class Punto {
  constructor(coordX, coordY) {
    this.x = coordX;
    this.y = coordY;
  }
  //mostrarCoordenadas = () => `(${this.x},${this.y})`;
  mostrarCoordenadas() {
    //otra forma de hacerlo sin la funcion flecha
    return "(" + this.x + ", " + this.y + ")";
  }
}

function mostrarPropiedadPrototipoVacio() {
  let a = new Punto(10, 20);
  console.log(a.__proto__);
  console.log(Object.getPrototypeOf(a));
}

function aniadirPrototipo() {
  let a = new Punto(10, 20);

  Punto.prototype.sumaXY = function () {
    return this.x + this.y;
  };
  Punto.prototype.z = 0; //se crea la propiedad z que el igual a la clase Punto
  console.log(Punto.prototype);
  console.log(a.__proto__);
}

function mostrarDosObjetos() {
  let a = new Punto(10, 20);
  let b = new Punto(-3, 6);
  Punto.prototype.sumaXY = function () {
    return this.x + this.y;
  };
  Punto.prototype.z = 0;
  // Muestra las coordenadas y la suma de x e y de ambos objetos
  console.log(
    "Objeto b: " +
      b.mostrarCoordenadas() +
      " Suma x+y: " +
      b.sumaXY() +
      " z: " +
      b.z
  );
  console.log(
    "Objeto a: " +
      a.mostrarCoordenadas() +
      " Suma x+y: " +
      a.sumaXY() +
      " z: " +
      a.z
  );
}

function modificarPropiedadPrototipo() {
  let a = new Punto(10, 20);
  let b = new Punto(-3, 6);
  Punto.prototype.sumaXY = function () {
    return this.x + this.y;
  };
  Punto.prototype.z = 0;
//   Modificamos prototipo
a.z = 7;
    console.log(a.sumaXY());
    console.log(b.sumaXY());
    console.log("Valor de z en a: " + a.z);
    console.log("Valor del prototipo : " + b.__proto__.z);
}

window.onload = function () {
  document
    .getElementById("mostrarPropiedadPrototipoVacio")
    .addEventListener("click", mostrarPropiedadPrototipoVacio);
  document
    .getElementById("aniadirPrototipo")
    .addEventListener("click", aniadirPrototipo);
  document
    .getElementById("mostrarDosObjetos")
    .addEventListener("click", mostrarDosObjetos);
  document
    .getElementById("modificarPropiedadPrototipo")
    .addEventListener("click", modificarPropiedadPrototipo);
};
