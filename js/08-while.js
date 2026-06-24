//While
//mientras se cumpla la condición hacer las acciones

// while (condition) {
//     //acciones

// }

let contador = 1;

while (contador <= 10) {
  console.log(contador);
  contador++;
}

//tabla 3.0
let tabla = prompt("Ingrese el número de la tabla a calcular");
//validar el ingreso de datos
while (tabla) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${tabla} x ${i} = ${tabla * i}`);
  }
  console.log("----------");
  tabla = prompt("Ingrese el número de la tabla a calcular");
}

//Acceso con contraseña
let password = "12345678";

let passwordUser = prompt("Ingrese la contraseña");

while (passwordUser != password && passwordUser != null) {
  passwordUser = prompt(
    "❌La contraseña es incorrecta\nIngrese la contraseña nuevamente",
  );
}
if (passwordUser) {
  alert("✅Acceso habilitado");
}

//Juego----------------------------------------------
// ALGORITMO
//Dato de entrada: respuesta correcta, respuesta del usuario, intentos
//Proceso: comparar la respuesta del usuario con la correcta, si es correcta mostrar mensaje de GANASTE y si es incorrecta volver a intentar y restar 1 intento. Cuando se acaban los intentos el usuario pierde.
//Salida: Mensaje (Ganaste o PERDISTE)

let intentos = 3;
let respuestaCorrecta = "HELSINKI";
let input = "";
let win = false;

while (intentos > 0) {
  input = prompt(
    "🤔Cuál es la capital de Finlandia? | tenés " + intentos + " intentos",
  );

  if (respuestaCorrecta === input.trim().toUpperCase()) {
    win = true;
    intentos = 0;
  } else {
    intentos--;
  }
}

if (win) {
  alert("🎉GANASTE!!");
} else {
  alert("😔PERDISTE, LOSER!, te quedaste con " + intentos + " intentos");
}
