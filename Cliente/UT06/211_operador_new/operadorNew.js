
//constructor de objeto con una funcion constructora
function Punto(coordX, coordY) {
    this.x = coordX;
    this.y = coordY;          //Declaracion de la funcion flecha
    this.mostrarCoordenadas = () => `(${this.x},${this.y})`;
}
//Constructor de objeto con declaracion de clase
class PuntoDos {
    constructor(coordX, coordY) {
        this.x = coordX;
        this.y = coordY;
    }
    mostrarCoordenadas = () => `(${this.x},${this.y})`;
}

function crearOperadorNew() {
    let a = new Punto(10,20);
    let b = new Punto(-3,6);
    let c = new PuntoDos(8,4);

    console.log("a.mostrarCoordenadas() --> " + a.mostrarCoordenadas());
    console.log("b.mostrarCoordenadas() --> " + b.mostrarCoordenadas());
    console.log("typeof Punto ------------> " + typeof Punto);
    console.log("typeof PuntoDos ---------> " + typeof PuntoDos);
    console.log("b.instanceof Punto ------> " + (b instanceof Punto));
    console.log("b.instanceof Object -----> " + (b instanceof Object));
    console.log("b.constructor.name ------> " + b.constructor.name);
    //******************************************************************************
    console.log("c.mostrarCoordenadas() --> " + c.mostrarCoordenadas());
    console.log("typeof PuntoDos ---------> " + typeof PuntoDos);
    console.log("c.instanceof PuntoDos ------> " + (c instanceof PuntoDos));
    console.log("c.instanceof Object -----> " + (c instanceof Object));
    console.log("c.constructor.name ------> " + c.constructor.name);
}

window.onload = function () {
    document.getElementById("crearOperadorNew").addEventListener("click", crearOperadorNew);
}