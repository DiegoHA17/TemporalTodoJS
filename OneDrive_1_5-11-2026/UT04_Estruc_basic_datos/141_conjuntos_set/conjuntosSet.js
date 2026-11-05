
const conjunto = new Set();

function borrarDatos(){
    let listaCajas = document.getElementsByClassName("caja");

    for (const caja of listaCajas) {
        caja.textContent = "";
    }
}

function actualizarConjunto(){
    let numeroCaja = 1;

    borrarDatos();

    for (const element of conjunto) {
        let idCaja = "";
        
        if(numeroCaja < 10){
            idCaja = "caja0" + numeroCaja;
        }else{
            idCaja = "caja" + numeroCaja;
        }

        document.getElementById(idCaja).textContent = "_" + element + "_";
        numeroCaja++;
    }
}

function aniadirElementoConjunto(){
    let valorInsertar = prompt("Introduce el valor a insertar:");

    if(compruebaExiste(valorInsertar)){
        alert("El valor " + valorInsertar + " ya existe");
    }else{
        conjunto.add(valorInsertar);
        actualizarConjunto();
    }
}

function aniadirValoresInicialesConjunto(){    
    conjunto.add("7");
    conjunto.add("3");
    conjunto.add("1");
    console.log(conjunto);
    actualizarConjunto();
    
}

function mostrarTamanioConjunto(){
    let tamanio = conjunto.size;

    document.getElementById("valorTamanio").textContent = tamanio;
    
}

function eliminarValorConjunto() {
    let valorEliminar = prompt("Introduce el valor a eliminar:");

    if(compruebaExiste(valorEliminar)){
        conjunto.delete(valorEliminar);
        actualizarConjunto();
    }else{
        alert("El valor " + valorEliminar + " no existe");
    }
}

function compruebaExiste(valor){
    
    let encontrado = conjunto.has(valor);

    return encontrado;
}

function buscarElemento(){
    let valorBuscar = prompt("Introduce el valor a buscar:");
    
    let encontrado = compruebaExiste(valorBuscar);

    if(encontrado === true){
        alert("El valor " + valorBuscar + " si que existe");
    }else{
        alert("El valor " + valorBuscar + " no existe");
    }
    
}

function convertirConjuntoEnArray(){
    const array = [...conjunto];
    console.log(array);
    
}

window.onload = function(){
    document.getElementById("aniadirValoresInicialesConjunto"). 
      addEventListener("click",aniadirValoresInicialesConjunto);
    document.getElementById("aniadirElementoConjunto"). 
      addEventListener("click",aniadirElementoConjunto);
    document.getElementById("mostrarTamanioConjunto"). 
      addEventListener("click",mostrarTamanioConjunto);
    document.getElementById("eliminarValoresConjunto"). 
      addEventListener("click",eliminarValorConjunto);
    document.getElementById("buscarValoresConjunto"). 
      addEventListener("click",buscarElemento);
    document.getElementById("convertirConjuntoEnArray"). 
      addEventListener("click",convertirConjuntoEnArray);
}