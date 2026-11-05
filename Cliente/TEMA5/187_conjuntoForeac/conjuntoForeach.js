function conjuntoForeach() {
    const conjunto = new Set([10, 20, 30, 40, 50]);

    console.log("Recorriendo el conjunto con forEach:");
    conjunto.forEach((valor) => {
        console.log(valor);
    });
}

function mapaForeach() { 
    const provincias = new Map();
    provincias.set("Cádiz", "Andalucía").set("Madrid", "Comunidad de Madrid").set("Barcelona", "Cataluña");

    provincias.forEach((valor, clave) => {
        console.log(`La provincia de ${clave} pertenece a la comunidad autónoma de ${valor}`);
    });
}
window.onload = function() {
    conjuntoForeach();
};