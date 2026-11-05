let coso = "12";
window.onload = function () {
  document.getElementById("buton").addEventListener("click", function () {
    document.getElementById("contenedor").textContent = parseInt(coso) + 2;
  });
};

//Ejmplos de todos los conversores que existen en JavaScript
let numero = "123";
let numeroEntero = parseInt(numero); // Convierte a entero
let numeroDecimal = parseFloat(numero); // Convierte a decimal
let numeroString = numeroEntero.toString(); // Convierte a string
let numeroFixed = numeroDecimal.toFixed(2); // Convierte a decimal con 2 decimales
let numeroNumber = Number(numero); // Convierte a número
let numeroUnary = +numero; // Convierte a número usando el operador unario
let numeroHex = parseInt("0x1A", 16); // Convierte de hexadecimal a entero
let numeroBin = parseInt("1101", 2); // Convierte de binario a entero
let numeroOct = parseInt("17", 8); // Convierte de octal a entero
let numeroFromChar = "A".charCodeAt(0); // Convierte carácter a su código ASCII
let numeroFromCode = String.fromCharCode(65); // Convierte código ASCII a carácter
let numeroMath = Math.floor(4.7); // Convierte a entero redondeando hacia abajo
let numeroMathRound = Math.round(4.5); // Convierte a entero redondeando al más cercano
let numeroMathCeil = Math.ceil(4.2); // Convierte a entero redondeando hacia arriba
let numeroMathTrunc = Math.trunc(4.9); // Convierte a entero eliminando decimales
let numeroBitwise = 5 | 0; // Convierte a entero usando operación bit a bit
let numeroDate = new Date().getTime(); // Convierte fecha a número (timestamp)
let numeroJSON = JSON.parse("123"); // Convierte string JSON a número
let numeroLocale = (1234.56).toLocaleString(); // Convierte número a string con formato local
let numeroIntl = new Intl.NumberFormat().format(1234.56); // Convierte número a string con formato internacional
let numeroUnaryPlus = +"456"; // Convierte a número usando el operador unario
let numeroUnaryMinus = -"789"; // Convierte a número negativo usando el operador unario
let numeroBitwiseNot = ~(-1); // Convierte a entero usando NOT bit a bit
let numeroMathSign = Math.sign(-123); // Convierte a -1, 0 o 1 dependiendo del signo del número
let numeroMathAbs = Math.abs(-123); // Convierte a valor absoluto
let numeroMathPow = Math.pow(2, 3); // Convierte a potencia
let numeroMathSqrt = Math.sqrt(16); // Convierte a raíz cuadrada
let numeroMathLog = Math.log(10); // Convierte a logaritmo natural
let numeroMathExp = Math.exp(2); // Convierte a exponencial
let numeroMathMin = Math.min(1, 2, 3); // Convierte a mínimo de una lista
let numeroMathMax = Math.max(1, 2, 3); // Convierte a máximo de una lista
let numeroMathRandom = Math.random() * 100; // Convierte a número aleatorio entre 0 y 100
let numeroBigInt = BigInt(12345678901234567890); // Convierte a BigInt
let numeroToPrecision = (123.456789).toPrecision(5); // Convierte a string con precisión específica
let numeroToExponential = (123.456).toExponential(2); // Convierte a string en notación exponencial
let numeroToLocaleString = (1234567.89).toLocaleString('de-DE'); // Convierte a string con formato local específico
let numeroFromArray = Number([123]); // Convierte array con un solo elemento a número
let numeroFromBoolean = Number(true); // Convierte booleano a número
let numeroFromNull = Number(null); // Convierte null a número
let numeroFromUndefined = Number(undefined); // Convierte undefined a número (NaN)
let numeroFromObject = Number({}); // Convierte objeto a número (NaN)
let numeroFromFunction = Number(function() {}); // Convierte función a número (NaN)