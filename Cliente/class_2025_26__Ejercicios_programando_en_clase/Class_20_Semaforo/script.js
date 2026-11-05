let limite = 50;
let velocidad = 50;

function medirVelocidadBucle() {
    setInterval(() => { 
        let senial = document.getElementById("redondel");
        let cuadro = document.getElementById("cuadro");

        //let cambio = parseInt((Math.random()*10) + 1);
        let aceleraFrena = parseInt(Math.random() + 0.5);

        switch (aceleraFrena) {
            case 0:
                velocidad++;
                break;
            case 1:
                velocidad--;
                break;
        }

        cuadro.textContent = velocidad;

        if (velocidad > limite) {
            senial.classList.add("bordeRojo");
            senial.classList.remove("bordeVerde");
        } else {
            senial.classList.remove("bordeRojo");
            senial.classList.add("bordeVerde");
        }
    }, 3000);
}

function medirVelocidad() {

    let velocidad = 50;
    
    let senial = document.getElementById("redondel");
    let cuadro = document.getElementById("cuadro");

    let incremento = parseInt((Math.random()*10) + 1);
    let aceleraFrena = parseInt(Math.random() + 0.5);

    switch (aceleraFrena) {
        case 0:
            velocidad += incremento;
            break;
        case 1:
            velocidad -= incremento;
            break;
    }

    cuadro.textContent = velocidad;

    if (velocidad > limite) {
        senial.classList.add("bordeRojo");
        senial.classList.remove("bordeVerde");
    } else {
        senial.classList.remove("bordeRojo");
        senial.classList.add("bordeVerde");
    }
}

function colocaLimites() {
    let senial = document.getElementById("redondel");
    let cuadro = document.getElementById("cuadro");

    senial.textContent = limite;
    cuadro.textContent = velocidad;
}

window.onload = function() {
    colocaLimites();
    document.getElementById("boton").addEventListener("click", medirVelocidadBucle);
}