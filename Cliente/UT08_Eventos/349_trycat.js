function trycat() {
try{
    console.log("Intentando ejecutar el bloque try");
}catch(error){
    console.log("Se ha producido un error: " + error.message);

}
};


window.onload = function() {
    this.document.getElementById("ejecutartry").onclick = trycat;
    this.document.getElementById("tryok").onclick = trycat;
};