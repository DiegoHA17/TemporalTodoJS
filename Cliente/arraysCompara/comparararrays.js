columnaUno = [];
columnaDos = [];

function comprobar(fila,columna) {
    for (let i = 0; i < columnaUno.length; i++) {
        let elemento = "pila" + i;
        let elementoDos = "cola" + i;

        if (columnaUno[i] !== undefined && columnaDos[i] !== undefined) {
            if (columnaUno[i] === columnaDos[i]) {
                console.log("correcto");
                document.getElementById(elemento).parentElement.classList.add("colorCorrecto");
                document.getElementById(elementoDos).parentElement.classList.add("colorCorrecto");
            } else {
                document.getElementById(elemento).parentElement.classList.add("colorFallo");
                document.getElementById(elementoDos).parentElement.classList.add("colorFallo");
            }
        }
    }
}

function numaleatorios() {
    return Math.floor(Math.random() * 10);
}

function rellenarArrays() {
    while (columnaUno.length < 10) {
        let num = numaleatorios();
        if (!columnaUno.includes(num)) {
            columnaUno.push(num);
        }
    }
    while (columnaDos.length < 10) {
        let num = numaleatorios();
        if (!columnaDos.includes(num)) {
            columnaDos.push(num);
        }
    }
    rellenarDatos();
}

function numeroaletra() {
    const numeros = [
        "Cero", "Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve",
    ];
    for (let i = 0; i < columnaUno.length; i++) {
        let num = columnaDos[i];
        let celdaDos = "cola" + i;
        document.getElementById(celdaDos).textContent = numeros[num];
    }
}

function rellenarDatos() {
    for (let i = 0; i < columnaUno.length; i++) {
        let celdauno = "pila" + i;
        let celdaDos = "cola" + i;
        document.getElementById(celdauno).textContent = columnaUno[i];
        document.getElementById(celdaDos).textContent = columnaDos[i];
    }
    numeroaletra();
}

function asignarevento() {
    let elementosClaseFila = document.getElementsByClassName("fila");
    for (let i = 0; i < elementosClaseFila.length; i++) {
        elementosClaseFila[i].addEventListener("click", comprobar);
    }
    let elementosClaseCola = document.getElementsByClassName("cola");
    for (let i = 0; i < elementosClaseCola.length; i++) {
        elementosClaseCola[i].addEventListener("click", comprobar);
    }
}

window.onload = function () {
    document.getElementById("botonIntroducir").addEventListener("click", rellenarArrays);
    document.getElementById("comparar").addEventListener("click", comprobar); 
    asignarevento();
};
