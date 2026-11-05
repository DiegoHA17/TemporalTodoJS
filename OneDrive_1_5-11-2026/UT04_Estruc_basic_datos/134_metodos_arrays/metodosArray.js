
const vector = [1,2,3,4,5,6,7,8,9];

function aniadirPush(){
    let valor = prompt("Introduce el valor a insertar: ");
    vector.push(valor);  
}

function quitarPop(){    
    vector.pop();  
}

function aniadirUnShift(){
    let valor = prompt("Introduce el valor a insertar: ");
    vector.unshift(valor);  
}

function quitarShift(){
    vector.shift();
}

function mostrar(){
    console.log(vector);    
    let vectorCadena = "";
    for (const elemento of vector) {        
        vectorCadena = vectorCadena + elemento + ",";
    }
    document.getElementById("resultado").textContent = vectorCadena;
}

window.onload = function(){
    document.getElementById("aniadirPush"). 
      addEventListener("click",aniadirPush);
    document.getElementById("quitarPop"). 
      addEventListener("click",quitarPop);
    document.getElementById("aniadirUnShift"). 
      addEventListener("click",aniadirUnShift);
    document.getElementById("quitarShift"). 
      addEventListener("click",quitarShift);
    document.getElementById("mostrar"). 
      addEventListener("click",mostrar);
}