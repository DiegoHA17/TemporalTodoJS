let pila = new Array();
let cola = new Array();

function cargarElDato(){
    let valor = document.getElementById("nombre").value;
    valor=valor.toLowerCase();
    alert(valor);
    valor.charAt(0).toUpperCase();
    pila.splice(0,0,valor);
    cola.push(valor);
    visual();
}

function visual() {
    for (let i = 0; i < 10; i++) {
        let idPila="pila"+ i;
        document.getElementById(idPila).textContent=pila[i];
}
    for (let i = 0; i < 10; i++) {
        let idCola="cola"+ i;
        document.getElementById(idCola).textContent=cola[i];
}
}


function borrarCola() {
    if (cola.length>0) {
        cola.shift(); 
        visual();
    }
}

function borrarPila() {    
    if (pila.length>0) {
        pila.shift();
        visual();
    }
}



window.onload = function() {
    document.getElementById("botonIntroducir").addEventListener("click", cargarElDato);
    document.getElementById("pila").addEventListener("click", borrarPila);
    document.getElementById("cola").addEventListener("click", borrarCola);

}