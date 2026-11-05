class Punto {
  constructor(coordX, coordY) {
    this.x = coordX;
    this.y = coordY;
  }

  mostrarCoordenadas() {
    //Para delcara una funcion en una clase, no hace falta poner function
    return this.x + ", " + this.y; //
  }
}

function mostrarPropiedadPrototipoVacio() {
  let x = 10;
  let y = 20;
  let a = new Punto(x, y); // usar variables ya inicializadas
  console.log(a.__proto__);
  console.log(Object.getPrototypeOf(a));
}

function aniadirMetodoYPropiedadPrototipo() {
  let a = new Punto(a, b);

  Punto.prototype.sumaXY = function () {
    return this.x + this.y;
  };

  Punto.prototype.z = 99;
  console.log(Punto.prototype);
  console.log(a.__proto__);
}

function mostrarEnDosObjetos() {
  let a = new Punto(10, 20);
  let b = new Punto(-3, 6);

  Punto.prototype.sumaXY = function () {
    return this.x + this.y;
  };

  Punto.prototype.z = 0;
  console.log(a.sumaXY());
  console.log(b.sumaXY());
  console.log(a.z);
  console.log(b.z);
}

function modificarPropiedadPrototipo() {
  let puntoA = new Punto(10, 20);
  let puntoB = new Punto(-3, 6);

  Punto.prototype.sumaXY = function () {
    return this.x + this.y;
  };

  Punto.prototype.z = 0;
  //Modificar prototipo

  puntoA.z = 7; //Si cambio z en puntoA, cambia en puntoB

  console.log(puntoA.sumaXY());
  console.log(puntoB.sumaXY());
  console.log("Valor de la propiedad puntoA.z " + puntoA.z);
  console.log("Valor de la propiedad puntoA._proto_.z " + puntoA.__proto__.z);
  //Al no existri una propiedad unica llamada z, en b, es el prototipo
  console.log("Valor de la propiedad puntoB.z " + puntoB.z);
  console.log("Valor de la propiedad puntoB._proto_.z " + puntoB.__proto__.z.z);
}

window.onload = function () {
  //prettier-ignore
  document.getElementById("mostrarPropiedadPrototipoVacio").addEventListener("click", mostrarPropiedadPrototipoVacio);
  //prettier-ignore
  document.getElementById("aniadirMetodoYPropiedadPrototipo").addEventListener("click", aniadirMetodoYPropiedadPrototipo);
  //prettier-ignore
  document.getElementById("mostrarEnDosObjetos").addEventListener("click", mostrarEnDosObjetos);
  //prettier-ignore
  document.getElementById("modificarPropiedadPrototipo").addEventListener("click", modificarPropiedadPrototipo);
};
