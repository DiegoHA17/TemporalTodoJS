function aleatorios() {
    let valorAleatorio = parseInt(Math.random() * 11); // Genera un número aleatorio entre 1 y 11
    document.getElementById("resultado").textContent = valorAleatorio;
    
}
function recuperarvalorminimo(min, max) {
    let vlormaximo = max - min + 1;
    let valor = parseInt(Math.random() * vlormaximo) + min;
    return valor;
}
function aleatorioentrevalores() {
    let inicial = parseInt(document.getElementById("inicial").value);
    let final = parseInt(document.getElementById("final").value);

    let valorAleatorio = recuperarvalorminimo(inicial, final);
    document.getElementById("resultado").textContent = valorAleatorio;
}

window.onload = function() {
    document.getElementById("aleatorio").addEventListener("click", aleatorios);
    document.getElementById("aleatorioEntreValores").addEventListener("click",aleatorioentrevalores);
}