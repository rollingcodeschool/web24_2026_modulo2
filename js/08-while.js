//while
// mientras...
// while (condition) {

// }

//contador
let contador = 1;
while (contador <= 10) {
  console.log(contador);
  contador++;
}

//Tabla 3.0
let tabla = prompt("Ingrese el número de la tabla a calcular");
while (tabla) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${tabla} x ${i} = ${tabla * i}`);
  }
  console.log("------------");
  tabla = prompt("Ingrese el número de otra tabla a calcular");
}

//Acceso con contraseña
let password = "12345678";

let passwordUser = prompt("Ingrese la contraseña");
while (passwordUser != password) {
  passwordUser = prompt(
    `❌La contraseña ingresada no es correcta\nIngrese la contraseña nuevamente`,
  );
}
alert("✅Acceso concedido");

//Cargar nombres de alumnos
let nombre = prompt("Ingresa el nombre del alumno");
let listaNombres = "";
while (nombre) {
  listaNombres += nombre + " ";
  nombre = prompt("Ingresa el siguiento nombre de alumno");
}
if (listaNombres) {
  console.log(listaNombres);
}

/*
Ejercicio 3: Cajero Automático
Comenzar con:
let saldo = 100000;
Mientras el usuario no escriba:
    salir
preguntar cuánto dinero desea retirar.
Si el monto es menor o igual al saldo:
    Restarlo del saldo.
Si es mayor:
    Mostrar "Saldo insuficiente".
Al finalizar mostrar el saldo restante.
*/

let saldo = 1000000;
let opciones = prompt(
  "Cuánto dinero desea retirar | Escriba 'Salir' para cerrar el programa",
);
// while (opciones !== "Salir") {
//   let isNumber = Number(opciones);
//   if (!isNaN(isNumber)) {
//     if (isNumber < saldo) {
//       saldo = saldo - isNumber;
//     } else {
//       alert("Saldo insuficiente");
//     }
//     opciones = prompt(
//       "Quiere retirar otro monto? | Escriba 'Salir' para cerrar el programa",
//     );
//   } else {
//     opciones = prompt(
//       "Ingrese un monto en número | Escriba 'Salir' para cerrar el programa",
//     );
//   }
// }
// alert(`El saldo restante de la cuenta es $${saldo}`);
while (opciones !== "Salir") {
  let isNumber = Number(opciones);

  switch (true) {
    case isNumber < saldo:
      saldo = saldo - isNumber;
      console.log(isNumber);
      opciones = prompt(
        "Ingrese otro monto | Escriba 'Salir' para cerrar el programa",
      );
      break;
    case isNumber > saldo:
      alert("Saldo insuficiente\nSaldo actual: $" + saldo);
      console.log(isNumber);

      opciones = prompt(
        "Ingrese otro monto | Escriba 'Salir' para cerrar el programa",
      );
      break;

    default:
      console.log(isNumber);

      opciones = prompt(
        "Ingrese un monto en número | Escriba 'Salir' para cerrar el programa",
      );
      break;
  }
}
alert(`El saldo restante de la cuenta es $${saldo}`);

//Juego
let intentos = 3;
let respuestaCorrecta = "HELSINKI";
let win = false;
let input = "";

while (intentos > 0) {
  input = prompt(
    "Cual es la capital de Finlandia? | tenés " + intentos + " intentos",
  );
  if (respuestaCorrecta === input.toUpperCase()) {
    win = true;
    intentos = 0;
  } else {
    intentos--;
  }
}
if (win) {
  alert("🎉GANASTE!!");
} else {
  alert("😔PERDISTE...");
}
