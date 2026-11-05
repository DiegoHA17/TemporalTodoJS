
function ordenarArrayLongitud() {
    const palabras = ["Ñu", "Águila", "boa", "oso", "marsopa", "Nutria"];
    console.log(palabras);

    palabras.sort((a,b)=>a.length-b.length);
    
    console.log(palabras);   
}

window.onload = function(){
    document.getElementById("ordenarArrayLongitud").addEventListener("click",ordenarArrayLongitud);
}