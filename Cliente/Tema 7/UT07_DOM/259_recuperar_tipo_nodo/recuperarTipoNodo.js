function cargarTipoDeNodo() {
  let seccion = document.getElementById("s1");
  console.log("Elemento (nodeType): " + seccion.nodeType);
  console.log("Nombre del elemento nodeType (nodeName) " + seccion.nodeName); //Nombre del elemento en html
  console.log("Documento nodeType() " + document.nodeType);

  //Comprobar lo que devuvle nodeType
  let parrafoTexto = document.getElementById("texto");
  console.log("Node value (valor) " + parrafoTexto.nodeName);
  console.log("Valor del nodo " + parrafoTexto.firstChild.nodeValue);
}

window.onload = function () {
  //prettier-ignore
  document.getElementById("s1").addEventListener("click", cargarTipoDeNodo);
  document.getElementById("s2").addEventListener("click", cargarTipoDeNodo);
};
