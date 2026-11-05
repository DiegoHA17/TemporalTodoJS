function barajar(listaDeDivs, padre) {
    listaDeDivs.sort(function() {
        return Math.random() - 0.5;
    });

    //Vacía el contenido sin usar innerHTML
    padre.textContent = "";

    listaDeDivs.forEach(function(divTarjeta) {
        divTarjeta.classList.remove('activo');
        divTarjeta.classList.remove('finalizado');
        
        // Inserta el elemento div dentro del contenedor padre 
        padre.appendChild(divTarjeta);
    });
}

function parpadear(elemento, totalParpadeos) {
    if (elemento.classList.contains('activo') || elemento.classList.contains('finalizado')) {
        return;
    }

    let contador = 0; 
    let estaEncendido = false; 

    
    let intervalo = setInterval(function() {
        if (estaEncendido === false) {
            if (contador < totalParpadeos) {
                elemento.classList.add('activo'); // pone fondo amarillo
                estaEncendido = true; 
                contador++;
            } else {
                clearInterval(intervalo); 
                elemento.classList.add('finalizado'); //pone fondo verde 
            }
        } else {
            elemento.classList.remove('activo'); 
            estaEncendido = false;
        }

    }, 300);
}

window.onload = function() {
    let contenedor = document.getElementById('contenedor');
    let btnBarajar = document.getElementById('btn-barajar');

    let tarjetas = Array.from(document.querySelectorAll('.tarjeta'));

    // Recorre cada uno de los elementos que están en el array 'tarjetas'
    tarjetas.forEach(function(divTarjeta) {
        divTarjeta.addEventListener('click', function() {
            let numeroVeces = parseInt(divTarjeta.textContent);
            parpadear(divTarjeta, numeroVeces);
        });
    });

    btnBarajar.addEventListener('click', function() { barajar(tarjetas, contenedor); });
    barajar(tarjetas, contenedor);
};
