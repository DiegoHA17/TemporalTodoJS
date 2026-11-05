let listas = ["Diego,123456aA.", "Ana,9876bB.", "Luis,5432cC."];

function mostrar() {
  let contraseña = document.getElementById("password");

  if (contraseña.type === "password") {
    contraseña.type = "text";
    contraseña.classList.add("mostrar");
  } else {
    contraseña.type = "password";
    contraseña.classList.remove("mostrar");
  }
}

function comprobar() {
  let nombre = document.getElementById("name").value.trim();
  let contraseña = document.getElementById("password").value;

  for (let i = 0; i < listas.length; i++) {
    let partes = listas[i].split(",");
    if (partes[0] === nombre) {
      alert("El nombre de usuario ya existe.");
      return;
    }
  }

  let minuscula = /[a-z]/;
  let mayuscula = /[A-Z]/;
  let numero = /[0-9]/;
  let caracterEspecial = /[.\-_]/;

  if (
    contraseña.length < 8 ||
    !minuscula.test(contraseña) ||
    !mayuscula.test(contraseña) ||
    !numero.test(contraseña) ||
    !caracterEspecial.test(contraseña)
  ) {
    alert("La contraseña no cumple los requisitos.");
    return;
  }

  // Añadir usuario
  listas.push(nombre + "," + contraseña);
  alert("Usuario añadido correctamente.");
  console.log(listas);
}

window.onload = function () {
  document.getElementById("Enviar").addEventListener("click", comprobar);
  document.getElementById("mostrar").addEventListener("click", mostrar);
};
