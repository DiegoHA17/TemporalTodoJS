window.onload = function () {
  let formulario = this.document.forms[0];
  let ususario = this.document.getElementById("name");
  let mensaje = this.document.getElementById("mensaje");

  formulario.addEventListener("submit", function (evento) {
    let expresion = /^[A-Za-z]+$/;
    if (!expresion.test(ususario.value)) {
      alert("El nombre solo debe contener letras.");
      evento.preventDefault();
    } else {
      // Enviar el formulario usando fetch
      evento.preventDefault(); // Prevenir el envío por defecto
    }
  });
};
