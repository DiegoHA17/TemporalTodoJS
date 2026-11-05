# Chuleta JavaScript: clases, arrays, DOM, imágenes, timers y medidas

Resumen práctico para repasar JavaScript de cliente. La idea no es memorizarlo todo de golpe, sino entender qué hace cada cosa y reconocerlo en un examen o en código real.

---

## 1. Clase en JavaScript

Una clase sirve para crear objetos con la misma estructura y comportamiento.

```js
class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
}

const usuario1 = new Usuario("Diego", 22);
usuario1.saludar();
```

### Qué está pasando

- `class Usuario` define la clase.
- `constructor()` se ejecuta al crear un objeto nuevo.
- `this.nombre` guarda una propiedad dentro del objeto.
- `new Usuario(...)` crea una instancia.
- `usuario1.saludar()` llama a un método de la clase.

---

## 2. Propiedades públicas y privadas en clases

En JavaScript, una propiedad normal es pública. Una propiedad privada se escribe con `#`.

```js
class CuentaBancaria {
    titular;       // pública
    #saldo;        // privada

    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.#saldo = saldoInicial;
    }

    ingresar(cantidad) {
        this.#saldo += cantidad;
    }

    verSaldo() {
        return this.#saldo;
    }
}

const cuenta = new CuentaBancaria("Diego", 100);

console.log(cuenta.titular);   // Diego
console.log(cuenta.verSaldo()); // 100

// console.log(cuenta.#saldo); // Error: no se puede acceder desde fuera
```

### Clave

- `titular` se puede leer desde fuera.
- `#saldo` solo se puede usar dentro de la clase.
- Si en un examen ves `#propiedad`, significa privada.

---

## 3. Crear objetos

Un objeto guarda información usando pares `clave: valor`.

```js
const prenda = {
    nombre: "Camiseta blanca",
    color: "blanco",
    talla: "M",
    favorita: true
};

console.log(prenda.nombre);      // Camiseta blanca
console.log(prenda["color"]);    // blanco

prenda.talla = "L";
prenda.material = "algodón";

delete prenda.favorita;
```

### Operaciones típicas con objetos

| Acción | Código |
|---|---|
| Leer una propiedad | `objeto.nombre` |
| Leer con corchetes | `objeto["nombre"]` |
| Modificar | `objeto.nombre = "Nuevo"` |
| Añadir | `objeto.nuevaPropiedad = valor` |
| Eliminar | `delete objeto.propiedad` |
| Comprobar si existe | `"nombre" in objeto` |

---

## 4. Arrays

Un array guarda varios valores en orden.

```js
const prendas = ["camiseta", "pantalón", "chaqueta"];

console.log(prendas[0]); // camiseta
console.log(prendas.length); // 3
```

Los arrays empiezan en posición `0`, no en `1`.

---

## 5. Métodos importantes de arrays

### Añadir y quitar elementos

| Método | Qué hace |
|---|---|
| `push(elemento)` | Añade al final |
| `pop()` | Elimina el último |
| `unshift(elemento)` | Añade al principio |
| `shift()` | Elimina el primero |
| `splice(posicion, cantidad)` | Elimina o inserta en una posición concreta |
| `slice(inicio, fin)` | Copia una parte del array sin modificar el original |

Ejemplo:

```js
const numeros = [1, 2, 3];

numeros.push(4);      // [1, 2, 3, 4]
numeros.pop();        // [1, 2, 3]
numeros.unshift(0);   // [0, 1, 2, 3]
numeros.shift();      // [1, 2, 3]
```

### Recorrer, buscar y transformar

| Método | Qué hace |
|---|---|
| `forEach()` | Recorre el array sin devolver uno nuevo |
| `map()` | Crea un nuevo array transformando cada elemento |
| `filter()` | Crea un nuevo array con los elementos que cumplen una condición |
| `find()` | Devuelve el primer elemento que cumple una condición |
| `findIndex()` | Devuelve la posición del primer elemento que cumple una condición |
| `includes()` | Comprueba si existe un valor |
| `some()` | Comprueba si al menos uno cumple la condición |
| `every()` | Comprueba si todos cumplen la condición |
| `reduce()` | Reduce el array a un solo valor |
| `sort()` | Ordena el array |
| `reverse()` | Invierte el orden |
| `join()` | Convierte el array en texto |

Ejemplos:

```js
const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function (numero) {
    console.log(numero);
});

const dobles = numeros.map(function (numero) {
    return numero * 2;
});

const pares = numeros.filter(function (numero) {
    return numero % 2 === 0;
});

const encontrado = numeros.find(function (numero) {
    return numero > 3;
});

const suma = numeros.reduce(function (total, numero) {
    return total + numero;
}, 0);
```

---

## 6. Copiar arrays con `...`

Los tres puntos `...` se llaman spread operator. Sirven para expandir/copiar elementos.

```js
const arrayOriginal = [1, 2, 3];
const copia = [...arrayOriginal];

copia.push(4);

console.log(arrayOriginal); // [1, 2, 3]
console.log(copia);         // [1, 2, 3, 4]
```

También se usa mucho para ordenar sin modificar el array original:

```js
const cartas = ["c", "a", "b"];

const cartasOrdenadas = [...cartas].sort(function (a, b) {
    return a.localeCompare(b);
});

console.log(cartas);          // ["c", "a", "b"]
console.log(cartasOrdenadas); // ["a", "b", "c"]
```

### Orden aleatorio típico

```js
const cartas = ["carta1", "carta2", "carta3"];

const mezcladas = [...cartas].sort(function () {
    return Math.random() - 0.5;
});
```

Ojo: esto se ve mucho, pero no es el método más perfecto para aleatorizar. Para ejercicios simples suele valer.

---

## 7. Map

`Map` es una estructura de datos que guarda pares clave-valor, parecido a un objeto, pero más flexible.

```js
const usuarios = new Map();

usuarios.set("diego", 22);
usuarios.set("ana", 20);

console.log(usuarios.get("diego")); // 22
console.log(usuarios.has("ana"));   // true

usuarios.delete("ana");

console.log(usuarios.size); // 1
```

### Métodos de Map

| Método | Qué hace |
|---|---|
| `set(clave, valor)` | Añade o actualiza un valor |
| `get(clave)` | Obtiene un valor |
| `has(clave)` | Comprueba si existe una clave |
| `delete(clave)` | Elimina una clave |
| `clear()` | Borra todo |
| `size` | Devuelve cuántos elementos tiene |
| `keys()` | Devuelve las claves |
| `values()` | Devuelve los valores |
| `entries()` | Devuelve clave y valor |

Recorrer un `Map`:

```js
const mapa = new Map();

mapa.set("nombre", "Diego");
mapa.set("edad", 22);

mapa.forEach(function (valor, clave) {
    console.log(clave, valor);
});
```

---

## 8. Set

`Set` guarda valores únicos. No permite duplicados.

```js
const colores = new Set();

colores.add("rojo");
colores.add("azul");
colores.add("rojo");

console.log(colores); // Set {"rojo", "azul"}
console.log(colores.has("azul")); // true

colores.delete("azul");
```

### Métodos de Set

| Método | Qué hace |
|---|---|
| `add(valor)` | Añade un valor |
| `has(valor)` | Comprueba si existe |
| `delete(valor)` | Elimina un valor |
| `clear()` | Borra todo |
| `size` | Número de elementos |

Quitar duplicados de un array:

```js
const repetidos = [1, 2, 2, 3, 3, 3];
const sinDuplicados = [...new Set(repetidos)];

console.log(sinDuplicados); // [1, 2, 3]
```

---

## 9. Seleccionar elementos del DOM

El DOM es la estructura HTML que JavaScript puede leer y modificar.

### Coger un elemento por ID

```html
<h1 id="titulo">Hola</h1>
```

```js
const titulo = document.getElementById("titulo");
titulo.textContent = "Nuevo título";
```

### Coger el primer elemento que coincida

```js
const boton = document.querySelector(".btn");
```

### Coger todos los elementos que coincidan

```js
const botones = document.querySelectorAll(".btn");

botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
        console.log("Click en botón");
    });
});
```

### Métodos principales para seleccionar

| Método | Qué selecciona |
|---|---|
| `document.getElementById("id")` | Un elemento por ID |
| `document.querySelector("selector")` | El primer elemento que coincida |
| `document.querySelectorAll("selector")` | Todos los elementos que coincidan |
| `document.getElementsByClassName("clase")` | Elementos por clase |
| `document.getElementsByTagName("div")` | Elementos por etiqueta |

---

## 10. Cambiar contenido HTML

### `textContent`

Cambia solo texto. Es más seguro.

```js
const caja = document.getElementById("caja");
caja.textContent = "Texto nuevo";
```

### `innerHTML`

Permite meter HTML dentro del elemento.

```js
const caja = document.getElementById("caja");

caja.innerHTML = `
    <h2>Título creado desde JS</h2>
    <p>Texto creado dinámicamente.</p>
`;
```

Ojo: `innerHTML` no debería usarse con texto que venga directamente del usuario sin limpiar, porque puede abrir problemas de seguridad.

---

## 11. Crear elementos desde JavaScript

```js
const lista = document.getElementById("lista");

const li = document.createElement("li");
li.textContent = "Elemento nuevo";
li.classList.add("activo");

lista.appendChild(li);
```

### Crear una tarjeta completa

```js
const contenedor = document.getElementById("contenedor");

const tarjeta = document.createElement("article");
tarjeta.classList.add("tarjeta");

tarjeta.innerHTML = `
    <h2>Camiseta blanca</h2>
    <p>Prenda básica de verano</p>
`;

contenedor.appendChild(tarjeta);
```

---

## 12. Añadir, quitar y alternar clases

```js
const caja = document.getElementById("caja");

caja.classList.add("activo");      // añade una clase
caja.classList.remove("oculto");   // quita una clase
caja.classList.toggle("abierto");  // la añade si no está, la quita si está

console.log(caja.classList.contains("activo")); // true o false
```

### Métodos de `classList`

| Método | Qué hace |
|---|---|
| `add("clase")` | Añade una clase |
| `remove("clase")` | Quita una clase |
| `toggle("clase")` | Alterna una clase |
| `contains("clase")` | Comprueba si existe una clase |
| `replace("vieja", "nueva")` | Cambia una clase por otra |

---

## 13. Modificar estilos desde JS

```js
const caja = document.getElementById("caja");

caja.style.backgroundColor = "red";
caja.style.color = "white";
caja.style.padding = "20px";
caja.style.display = "none";
```

Ojo con nombres CSS con guion:

```css
background-color
font-size
```

En JS se escriben en camelCase:

```js
backgroundColor
fontSize
```

---

## 14. Atributos HTML

```html
<a id="enlace" href="https://example.com">Ir</a>
```

```js
const enlace = document.getElementById("enlace");

enlace.setAttribute("href", "https://google.com");
enlace.setAttribute("target", "_blank");

console.log(enlace.getAttribute("href"));

enlace.removeAttribute("target");
```

### Métodos de atributos

| Método | Qué hace |
|---|---|
| `setAttribute("atributo", "valor")` | Añade o cambia un atributo |
| `getAttribute("atributo")` | Lee un atributo |
| `removeAttribute("atributo")` | Elimina un atributo |
| `hasAttribute("atributo")` | Comprueba si existe |

---

## 15. Imágenes desde JavaScript

### Cambiar el `src` de una imagen

```html
<img id="foto" src="imagen1.jpg" alt="Foto">
```

```js
const foto = document.getElementById("foto");

foto.src = "imagen2.jpg";
foto.alt = "Nueva imagen";
```

También se puede hacer con atributos:

```js
foto.setAttribute("src", "imagen2.jpg");
foto.setAttribute("alt", "Nueva imagen");
```

### Crear una imagen desde JS

```js
const contenedor = document.getElementById("contenedor");

const imagen = document.createElement("img");
imagen.src = "ropa/camiseta.png";
imagen.alt = "Camiseta blanca";
imagen.classList.add("imagen-prenda");

contenedor.appendChild(imagen);
```

### Cambiar imagen al hacer click

```js
const foto = document.getElementById("foto");
const boton = document.getElementById("botonCambiar");

boton.addEventListener("click", function () {
    foto.src = "imagen-nueva.jpg";
});
```

---

## 16. Eventos

Un evento es una acción del usuario o del navegador: click, escribir, cargar, mover el ratón, etc.

```js
const boton = document.getElementById("boton");

boton.addEventListener("click", function () {
    console.log("Has hecho click");
});
```

### Eventos comunes

| Evento | Cuándo ocurre |
|---|---|
| `click` | Al hacer click |
| `dblclick` | Al hacer doble click |
| `input` | Al escribir en un input |
| `change` | Al cambiar un valor |
| `submit` | Al enviar un formulario |
| `keydown` | Al pulsar una tecla |
| `keyup` | Al soltar una tecla |
| `load` | Cuando carga la página/recurso |
| `resize` | Cuando cambia el tamaño de ventana |
| `mouseover` | Cuando el ratón entra encima |
| `mouseout` | Cuando el ratón sale |

Ejemplo con formulario:

```js
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    console.log("Formulario interceptado con JS");
});
```

---

## 17. `setTimeout`

Ejecuta una función una sola vez después de cierto tiempo.

```js
setTimeout(function () {
    console.log("Han pasado 2 segundos");
}, 2000);
```

El tiempo va en milisegundos:

- `1000` = 1 segundo
- `2000` = 2 segundos
- `5000` = 5 segundos

### Guardar y cancelar un timeout

```js
const temporizador = setTimeout(function () {
    console.log("Esto no se ejecutará si se cancela antes");
}, 3000);

clearTimeout(temporizador);
```

---

## 18. `setInterval`

Ejecuta una función repetidamente cada cierto tiempo.

```js
const intervalo = setInterval(function () {
    console.log("Esto se repite cada segundo");
}, 1000);
```

### Parar un intervalo

```js
const intervalo = setInterval(function () {
    console.log("Repetición");
}, 1000);

setTimeout(function () {
    clearInterval(intervalo);
    console.log("Intervalo detenido");
}, 5000);
```

Esto imprime el mensaje cada segundo y lo detiene después de 5 segundos.

---

## 19. `clientWidth`, `offsetWidth` y medidas del DOM

Sirven para medir elementos HTML.

```js
const caja = document.getElementById("caja");

console.log(caja.clientWidth);
console.log(caja.offsetWidth);
console.log(caja.scrollWidth);
```

### Diferencias importantes

| Propiedad | Qué mide |
|---|---|
| `clientWidth` | Ancho interno: contenido + padding, sin borde ni scrollbar |
| `offsetWidth` | Ancho total visible: contenido + padding + borde + scrollbar |
| `scrollWidth` | Ancho total del contenido, incluso lo que no se ve |
| `clientHeight` | Alto interno |
| `offsetHeight` | Alto total visible |
| `scrollHeight` | Alto total del contenido, incluso oculto |

Ejemplo práctico:

```js
const caja = document.getElementById("caja");

if (caja.scrollHeight > caja.clientHeight) {
    console.log("Hay contenido oculto con scroll vertical");
}
```

---

## 20. Tamaño de la ventana

```js
console.log(window.innerWidth);  // ancho visible de la ventana
console.log(window.innerHeight); // alto visible de la ventana
```

Ejemplo:

```js
if (window.innerWidth < 768) {
    console.log("Vista móvil");
} else {
    console.log("Vista tablet o escritorio");
}
```

Evento resize:

```js
window.addEventListener("resize", function () {
    console.log("Nuevo ancho:", window.innerWidth);
});
```

---

## 21. `dataset`

Sirve para leer atributos personalizados `data-*` del HTML.

```html
<button class="btn-prenda" data-id="15" data-nombre="Camiseta blanca">
    Ver prenda
</button>
```

```js
const boton = document.querySelector(".btn-prenda");

console.log(boton.dataset.id);     // 15
console.log(boton.dataset.nombre); // Camiseta blanca
```

Modificar dataset:

```js
boton.dataset.estado = "activo";
```

Resultado aproximado en HTML:

```html
<button data-estado="activo">...</button>
```

---

## 22. Plantillas de texto con `${}`

Los template strings usan comillas invertidas y permiten meter variables dentro del texto.

```js
const nombre = "Diego";
const edad = 22;

const mensaje = `Hola, soy ${nombre} y tengo ${edad} años`;

console.log(mensaje);
```

Esto es JavaScript, no PHP.

En PHP sería diferente:

```php
$nombre = "Diego";
echo "Hola, soy $nombre";
```

---

## 23. `for`, `for...of` y `for...in`

### `for` clásico

```js
const nombres = ["Ana", "Luis", "Diego"];

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
```

### `for...of`

Sirve para recorrer valores de arrays, strings, sets, maps, etc.

```js
const nombres = ["Ana", "Luis", "Diego"];

for (const nombre of nombres) {
    console.log(nombre);
}
```

### `for...in`

Sirve para recorrer claves de un objeto.

```js
const usuario = {
    nombre: "Diego",
    edad: 22
};

for (const clave in usuario) {
    console.log(clave, usuario[clave]);
}
```

---

## 24. JSON básico

JSON es un formato de texto para intercambiar datos.

```js
const usuario = {
    nombre: "Diego",
    edad: 22
};

const textoJSON = JSON.stringify(usuario);
console.log(textoJSON);

const objetoOtraVez = JSON.parse(textoJSON);
console.log(objetoOtraVez.nombre);
```

| Método | Qué hace |
|---|---|
| `JSON.stringify(objeto)` | Convierte objeto a texto JSON |
| `JSON.parse(texto)` | Convierte texto JSON a objeto |

---

## 25. Ejemplo completo: pintar tarjetas desde un array

HTML:

```html
<section id="contenedorPrendas"></section>
```

JavaScript:

```js
const prendas = [
    {
        nombre: "Camiseta blanca",
        imagen: "img/camiseta.png",
        color: "blanco"
    },
    {
        nombre: "Pantalón negro",
        imagen: "img/pantalon.png",
        color: "negro"
    }
];

const contenedor = document.getElementById("contenedorPrendas");

prendas.forEach(function (prenda) {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta-prenda");

    tarjeta.innerHTML = `
        <img src="${prenda.imagen}" alt="${prenda.nombre}">
        <h2>${prenda.nombre}</h2>
        <p>Color: ${prenda.color}</p>
    `;

    contenedor.appendChild(tarjeta);
});
```

Este ejemplo junta:

- Array de objetos.
- `forEach()`.
- `document.getElementById()`.
- `document.createElement()`.
- `classList.add()`.
- `innerHTML`.
- Imágenes con `src` desde JS.
- Template strings con `${}`.

---

## 26. Ejemplo completo: buscador con filtro

HTML:

```html
<input id="buscador" type="text" placeholder="Buscar prenda">
<section id="resultado"></section>
```

JavaScript:

```js
const prendas = [
    "camiseta blanca",
    "pantalón negro",
    "chaqueta azul",
    "sudadera gris"
];

const buscador = document.getElementById("buscador");
const resultado = document.getElementById("resultado");

function pintarPrendas(lista) {
    resultado.innerHTML = "";

    lista.forEach(function (prenda) {
        const p = document.createElement("p");
        p.textContent = prenda;
        resultado.appendChild(p);
    });
}

pintarPrendas(prendas);

buscador.addEventListener("input", function () {
    const texto = buscador.value.toLowerCase();

    const filtradas = prendas.filter(function (prenda) {
        return prenda.includes(texto);
    });

    pintarPrendas(filtradas);
});
```

---

## 27. Ejemplo completo: contador con interval

HTML:

```html
<p id="contador">0</p>
<button id="iniciar">Iniciar</button>
<button id="parar">Parar</button>
```

JavaScript:

```js
const contador = document.getElementById("contador");
const iniciar = document.getElementById("iniciar");
const parar = document.getElementById("parar");

let numero = 0;
let intervalo = null;

iniciar.addEventListener("click", function () {
    if (intervalo !== null) {
        return;
    }

    intervalo = setInterval(function () {
        numero++;
        contador.textContent = numero;
    }, 1000);
});

parar.addEventListener("click", function () {
    clearInterval(intervalo);
    intervalo = null;
});
```

---

## 28. Cosas que suelen caer o confundir

| Código | Significado |
|---|---|
| `=` | Asignar valor |
| `==` | Comparar valor, convierte tipos |
| `===` | Comparar valor y tipo |
| `const` | Variable que no se reasigna |
| `let` | Variable que sí puede cambiar |
| `var` | Forma antigua, mejor evitarla |
| `document` | Representa el HTML de la página |
| `window` | Representa la ventana del navegador |
| `this` | Hace referencia al objeto/contexto actual |
| `event.preventDefault()` | Evita el comportamiento normal, por ejemplo enviar formulario |
| `return` | Devuelve un valor o corta una función |
| `callback` | Función que se pasa como argumento a otra función |

---

## 29. Mini resumen final

- Para coger un elemento por ID: `document.getElementById("id")`.
- Para coger el primero por selector: `document.querySelector(".clase")`.
- Para coger todos: `document.querySelectorAll(".clase")`.
- Para cambiar texto: `textContent`.
- Para meter HTML: `innerHTML`.
- Para cambiar una imagen: `imagen.src = "ruta.jpg"`.
- Para crear elementos: `document.createElement("div")`.
- Para añadir al DOM: `appendChild()`.
- Para añadir clase: `classList.add()`.
- Para quitar clase: `classList.remove()`.
- Para alternar clase: `classList.toggle()`.
- Para ejecutar una vez tarde: `setTimeout()`.
- Para repetir: `setInterval()`.
- Para parar un timeout: `clearTimeout()`.
- Para parar un interval: `clearInterval()`.
- Para transformar arrays: `map()`.
- Para filtrar arrays: `filter()`.
- Para buscar: `find()`.
- Para recorrer: `forEach()`.
- Para copiar arrays: `[...array]`.
- Para quitar duplicados: `[...new Set(array)]`.
