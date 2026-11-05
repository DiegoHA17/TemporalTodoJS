
function funcionFlecha() {
    const triple = x=>3*x;
                    //x=>3*x            Declaracion funcion flecha
                    // -----------------------------------------------
                    //function(x){      EQUIVALENCIA
                    //  return 3*x;     en funcion
                    //}                 anonima
    console.log("Llamada a funcion flecha: " + triple(20));
    
    //Funcion Flecha con el paso de dos parametros
    const media = (x,y)=>(x+y)/2;
    console.log("Llamada a funcion media: " + media(10,20));

    //Funcion flecha con declaracion de varias filas
    const sumatorio = n => {
        let acu = 0;
        for(let i = n ; i > 0 ; i--){
            acu += i;
        }
        return acu;
    }
    console.log(sumatorio(5));
    
    const saludo = mensaje => {
        console.log(mensaje);
    }
    saludo("Saludos desde funcion flecha");

    const hola = ()=>{
       console.log("hola");
    }
    hola();
    
}

window.onload = function(){
    document.getElementById("funcionFlecha").addEventListener("click",funcionFlecha);
}