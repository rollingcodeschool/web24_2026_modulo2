//Funciones o métodos
//código encapsulado que podemos ejecutar en cualquier momento
// tablaDelDos(); //se ejecuta porque est´+a en la pila de funciones
// capitalizarPalabra();// no se ejecuta porque es una constante y debe estar declarada antes

//Funciones declarativas
function tablaDelDos() {
  for (let i = 1; i <= 10; i++) {
    console.log(`2 x ${i} = ${2 * i}`);
  }
}

// tablaDelDos(); //ejecutando la función

//Funciones anónimas
const capitalizarPalabra = function () {
  let palabra = prompt("Ingresa una palabra");
  console.log(
    `La palabra capitalizada es: ${palabra.trim().at(0).toUpperCase() + palabra.trim().substring(1)}`,
  );
};

//Primera diferencia: las funciones anónimas deben declararse antes de ejecutarse, las declarativas podemos llamarlas en cualquier momento.
//Segunda: las funciones declarativas pueden ser reasignadas con un nuevo valor, las anónimas no porque son constantes

//Parámetros y argumentos

function generadorDeTabla(tabla) {
  if (tabla) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${tabla} x ${i} = ${tabla * i}`);
    }
  }
}

// generadorDeTabla();
// generadorDeTabla(5);
// generadorDeTabla(8);

//return
//termina el programa
//retorna un valor

function calcularDescuento(valor, descuento = 5) {
  let valorDescuento = (valor * descuento) / 100;
  let valorAbonar = valor - valorDescuento;
  return Number(valorAbonar.toFixed(2));

  console.log('"first"'); //❌no se ejecuta despues del return
}

// console.log(
//   `El valor a abonar de la compra es $${calcularDescuento(3000, 15)}`,
// );
// console.log(`El valor de la compra es $${calcularDescuento(6078, 10)}`);

//Scope
let usuario = "pmarino";
let password = "12345";

function validarCredenciales(user, pass) {
  let usuario = "pepito";
  let password = "12345678";
  //   console.log(usuario);

  if (user === usuario && pass === password) {
    alert("✅Acceso habilitado");
  } else {
    alert("❌Usuario o contraseña incorrectos");
  }
}

//Función flecha
const calcularDescuentoArrow = (valor, descuento = 5) =>
  Number(valor - (valor * descuento) / 100);

const generadorDeTablaArrow = (tabla) => {
  if (tabla) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${tabla} x ${i} = ${tabla * i}`);
    }
  }
};

const compraConDescuento = () => {
  alert("🤑 Bienvenid@ al sistema de descuentos");
  let compra = Number(prompt("🤑 Ingresá el valor de la compra..."));

  if (!isNaN(compra)) {
    switch (true) {
      case compra < 100:
        return "🤑 No tiene descuento";

      case compra <= 300:
        return "El descuento es del 5%";

      case compra <= 500:
        return "El descuento es del 10%";

      default:
        return "Descuento del 15%";
    }
  } else {
    alert("❌No ingresó un valor númerico");
  }
};

// console.log(compraConDescuento() + " Amigazo!!");
