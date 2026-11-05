/*Una fila de cuadros numerados del 1 al 5 (cuadros con evento asociado).
Una fila de cuadros sin numerar (objetivo de los eventos, donde se escribe el texto).
Al hacer clic en el cuadro superior, se debe añadir un texto que diga "aleatorio" + un número aleatorio del 1 al 10, en el cuadro inferior correspondiente.
En el caso de que el número aleatorio sea par, deberá añadirse la palabra par, ejemplo, "aleatorio4par".
En el caso de que el número aleatorio sea impar, deberá añadirse la palabra impar, ejemplo, "aleatorio7impar".*/

function aleatorio(i){
    let idElemento = i.target.id;
    console.log("ID:", idElemento);

    let numero = parseInt(idElemento.replace("cuadro", ""), 10);
    let idElemntoFila2 = "cuadro" + (numero + 5);
    console.log("ID elemento fila 2:", idElemntoFila2);

    let aleatorio = Math.floor(Math.random() * 10) + 1;
    let texto = "aleatorio" + aleatorio;
    if(aleatorio % 2 === 0){
        texto += "par";
    } else {
        texto += "impar";
    }
    document.getElementById(idElemntoFila2).textContent= texto;
    document.getElementById(idElemntoFila2).classList.toggle("cuadro2"); //Esto es para que se vea mas bonito 
}

function asignarEventos(){
    let elementosClaseCuadrado = document.getElementsByClassName("cuadro");

    for (let i=0; i<elementosClaseCuadrado.length; i++){
        elementosClaseCuadrado[i].addEventListener("click", aleatorio);
    }
}

window.onload = asignarEventos;

