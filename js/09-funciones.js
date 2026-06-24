//Funciones o métodos
//código encapsulado que podemos ejecutar en cualquier momento
// tablaDelDos();
// capitalizarPalabra();

//Funciones declarativas

function tablaDelDos() {
  //acciones
  for (let i = 1; i <= 10; i++) {
    console.log(`2 x ${i} = ${2 * i}`);
  }
}

//Funciones anónimas

const capitalizarPalabra = function () {
  let palabra = prompt("Ingrese una palabra");
  console.log(
    `La palabra capitalizada es: ${palabra.at(0).toUpperCase() + palabra.substring(1)}`,
  );
};

//Diferencia entre funciones anónimas y declarativas

//Primera diferencia: las funciones anónimas deben declararse antes de ejecutarse, las declarativas podemos llamarlas en cualquier momento.
//Segunda: las funciones declarativas pueden ser reasignadas con un nuevo valor, las anónimas no porque son constantes

//Parámetros y argumentos

//Parámetros son dato de entrada que definimos al declarar la función

function generadorDeTabla(tabla) {
  //acciones
  for (let i = 1; i <= 10; i++) {
    console.log(`${tabla} x ${i} = ${tabla * i}`);
  }
}

//argumento es el valor que le envío a la función como parámetro
generadorDeTabla(5);

const capitalizarPalabra2 = function (palabra) {
  console.log(
    `La palabra capitalizada es: ${palabra.at(0).toUpperCase() + palabra.substring(1)}`,
  );
};

function sumarNumeros(num1, num2) {
  console.log(`${num1}+${num2}=${num1 + num2}`);
}

const cargarDatosPersona = function (nombre, edad, correo) {
  let datos = `Nombre: ${nombre}\nEdad: ${edad}\nEmail: ${correo}`;
  console.log(datos);
};

const cargarProducto = function (
  nombre = prompt("Ingrese el nombre del producto"),
  precio = prompt("Ingrese el precio del producto"),
  stock = Number(prompt("Ingrese la cantidad inicial")),
) {
  let datos = `Producto: ${nombre}\nPrecio: $${precio}\nStock: ${stock}`;
  console.log(datos);
};

//return
function calcularDescuento(valor, descuento = 5) {
  let valorDescuento = (valor * descuento) / 100;
  let valorAbonar = valor - valorDescuento;
  return Number(valorAbonar.toFixed(2));
}

function sistemaCompras() {
  let compra = Number(prompt("Ingrese el valor de la compra"));
  switch (true) {
    case compra < 100:
      console.log(`Debe abonar $${calcularDescuento(compra)}`);
      return;
    case compra <= 300:
      console.log(`Debe abonar $${calcularDescuento(compra, 10)}`);
      return;
    case compra <= 500:
      console.log(`Debe abonar $${calcularDescuento(compra, 15)}`);
      return;
    default:
      console.log(`Debe abonar $${calcularDescuento(compra, 20)}`);
      return;
  }
}

//retorna el resultado de una función
// Termina el proceso de la función

//SCOPE-----------------------------
// DIFERENCIA ENTRE VAR Y LET

// ❌ CON VAR (Function Scoped):
// Las variables var tienen scope a nivel de función
// Redeclararlas REEMPLAZA el valor original en toda la función
var usuario = "pmarino";
var password = "12345";

function validarCredenciales(user, pass) {
  // Estas redeclaraciones de var MODIFICAN las variables del scope externo
  var usuario = "lolita";
  var password = "ppmmtt23";

  if (user === usuario && password === pass) {
    alert("✅Acceso habilitado");
  } else {
    alert("❌Usuario o contraseña incorrectos");
  }
}
// Después de llamar la función, usuario y password ahora son "lolita" y "ppmmtt23"

// ✅ CON LET (Block Scoped):
// Las variables let tienen scope a nivel de bloque (función, if, for, etc)
// Redeclararlas SOLO afectan dentro de ese bloque
let usuarioSeguro = "pmarino";
let passwordSeguro = "12345";

function validarCredencialesSegura(user, pass) {
  // Estas variables let son NUEVAS, solo existen dentro de esta función
  let usuarioSeguro = "lolita";
  let passwordSeguro = "ppmmtt23";

  if (user === usuarioSeguro && pass === passwordSeguro) {
    alert("✅Acceso habilitado");
  } else {
    alert("❌Usuario o contraseña incorrectos");
  }
}
// Después de llamar la función, usuarioSeguro y passwordSeguro siguen siendo "pmarino" y "12345"

//funciones de flecha | Arrow function

const calcularDescuentoArrow = (valor, descuento = 5) =>
  Number((valor - (valor * descuento) / 100).toFixed(2));

const capitalizarPalabraArrow = (palabra) =>
  `${palabra.at(0).toUpperCase() + palabra.substring(1)}`;
