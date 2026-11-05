class Coche{
    constructor(marca, color, energia, numeroDeOcupantes){
        this.marca = marca;
        this.color = color;
        this.energia = energia;
        this.numeroDeOcupantes = numeroDeOcupantes;
    }
    mostrarDatos = function(){
        return [this.marca,this.color,this.energia,this.numeroDeOcupantes];
    };
}

Coche.prototype.numeroDeCoches = 0;

var coches = [];

var seMuestraLista = false;

function procesarDatos(){
    let marca = document.getElementById("marca").value;
    let color = document.getElementById("color").value;
    let energia = document.getElementById("energia").value;
    let numeroDeOcupantes = document.getElementById("numeroDeOcupantes").value;
    coches.push(new Coche(marca,color,energia,numeroDeOcupantes));
    Coche.prototype.numeroDeCoches++;
    document.getElementById("numeroDeCoches").textContent = "Número de coches: " + Coche.prototype.numeroDeCoches;
    if (seMuestraLista){
        agregarCocheHtml(marca,color,energia,numeroDeOcupantes);
    }
}

function mostrarLista(){
    if(!seMuestraLista){
        seMuestraLista = true;
        coches.forEach(coche => {
            agregarCocheHtml(coche.marca,coche.color,coche.energia,coche.numeroDeOcupantes);
        });
    }
}

function agregarCocheHtml(marca,color,energia,numeroDeOcupantes){
    let tarjetaNueva = document.createElement("div");
    tarjetaNueva.classList.add("tarjeta");
    let marcaNuevaP = document.createElement("p");
    marcaNuevaP.textContent = "Marca: " + marca;
    let colorNuevoP = document.createElement("p");
    colorNuevoP.textContent = "Color: " + color;
    let energiaNuevaP = document.createElement("p");
    energiaNuevaP.textContent = "Tipo de energía: " + energia;
    let numeroDeOcupantesNuevoP = document.createElement("p");
    numeroDeOcupantesNuevoP.textContent = "Numero de ocupantes: " + numeroDeOcupantes;
    tarjetaNueva.appendChild(marcaNuevaP);
    tarjetaNueva.appendChild(colorNuevoP);
    tarjetaNueva.appendChild(energiaNuevaP);
    tarjetaNueva.appendChild(numeroDeOcupantesNuevoP);
    document.getElementById("resultados").appendChild(tarjetaNueva);
}

window.onload = function(){
    document.forms[0].addEventListener("submit",ev=>ev.preventDefault());
    document.getElementById("enviar").addEventListener("click",procesarDatos);
    document.getElementById("mostrarLista").addEventListener("click",mostrarLista);
}