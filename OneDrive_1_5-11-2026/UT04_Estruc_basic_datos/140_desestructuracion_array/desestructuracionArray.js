
function asignarALaVez(){
    let [saludo,despedida,cierre] = ["Hola","Adios","Me voy"];
    console.log("Variable uno --> " + saludo);
    console.log("Variable dos --> " + despedida);
    console.log("Variable tres -> " + cierre);
}

function intercambiarVariables(){
    let a = 1;
    let b = 2;

    console.log("Variabla a --> " + a + " Variable b --> " + b);
    [a,b] = [b,a]; // Cambia variable a por b SIN USAR AUX
    console.log("Variabla a --> " + a + " Variable b --> " + b);
}

function operadorPropagacion(){
    let array = [1,2,3];
    let [x,y,z] = [...array];
        // Asigna valor de array a las variables x y z
    console.log("Las variables x y z valen --> " + x + " " + y + " " + z);    
    let [n,,m] = [...array];
    console.log("Las variables m y n valen --> " + n + " " + m);    
    let l,ll;
    [l,ll,...arrayNuevo] = [1,2,3,4,5];
    console.log("Las variables l y ll son: " + l + " " + ll);
    console.log("El array nuevo es: " + arrayNuevo);
    
    
}

window.onload = function(){
    document.getElementById("asignarALaVez"). 
      addEventListener("click",asignarALaVez);
    document.getElementById("intercambiarVariables"). 
      addEventListener("click",intercambiarVariables);
    document.getElementById("operadorPropagacion"). 
      addEventListener("click",operadorPropagacion);
}