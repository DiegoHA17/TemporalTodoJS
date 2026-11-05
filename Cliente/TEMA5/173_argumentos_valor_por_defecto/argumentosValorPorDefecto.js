function saludo(text = "Hola") {
    console.log(text);
}
function argumenetosPorDefecto() {
    saludo(); 
    saludo("¡Buenos días!"); 
}
window.onunload = function() {
    document.getElementById("argumentosValor").addEventListener("click",argumenetosPorDefecto);
};