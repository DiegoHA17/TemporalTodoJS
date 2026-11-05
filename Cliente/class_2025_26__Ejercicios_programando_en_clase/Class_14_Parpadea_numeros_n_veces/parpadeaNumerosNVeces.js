
function parpadearSegunNum(i) {
    //Esta es la celda pulsada
    let idElemento = i.target.id;
    let celdaPulsada = document.getElementById(idElemento);
    celdaPulsada.classList.add("colorPulsado");

    setTimeout(()=>{
        celdaPulsada.classList.remove("colorPulsado");
    }, 500);

    //Este es el numero de la celda pulsada
    let contenido = document.getElementById(idElemento).textContent;
    let numero = parseInt(contenido.trim());

    //Recojo todas las celdas que hay 
    let celdas = document.querySelectorAll(".celda");

    parpadear(numero, celdas);
}

function parpadear(numero, celdas) {
    //let idElemento = i.target.id;
    //let celdaPulsada = document.getElementById(idElemento);
    let contador = 0;
    let celdaActual = null;
    let interval = setInterval(() => {
        if (celdaActual) {
            celdaActual.classList.remove("colorParpadear");
        }

        //Elijo la celda aleatoria
        let indice = Math.floor(Math.random() * celdas.length);

        //Hago el parpadeo
        celdaActual = celdas[indice];
        celdaActual.classList.add("colorParpadear");
        contador++;

        if (contador == numero) {
            setTimeout(() => {
                //Apago el ultimo parpadeo
                celdaActual.classList.remove("colorParpadear");

                //quito el color de la celda clicada
                celdaPulsada.classList.remove("colorPulsado");

            },500);
            clearInterval(interval);
        }
     }, 500);
}



window.onload = function() {
    document.getElementById("parpadear").addEventListener("click", parpadearSegunNum);
}