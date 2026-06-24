//Bucles o ciclos

//bucle for

// for (let index = 0; index < 10; index++) {
//   //acciones

// }

//crear un programa que calcule la tabla del 2
//v 1.0
// for (let i = 1; i <= 10; i++) {
//   console.log(`2 x ${i} = ${2 * i}`);
// }

//2 x 0 = 0
//2 x 1= 2
//2 x 2 = 4

//v. 2.0
let tabla = prompt("🤖 Ingresá el número de la tabla a calcular pibe");
//falsy
if (!tabla) {
  console.log("Debe ingresar un valor numerico");
} else {
  for (let i = 1; i <= 10; i++) {
    console.log(`${tabla} x ${i} = ${tabla * i}`);
  }
}
//string !="" -> true
//number != 0 -> true

//Buscar números pares en un rango

let min = 1;
let max = 10;

for (let i = min; i <= max; i++) {
  if (i % 2 === 0) {
    console.log(`El número ${i} es par`);
  }
}

//cuenta regresiva desde el 10
for (let index = 10; index >= 0; index--) {
  console.log(index);
}

//contar la cantidad de vocales en una frase

/*
ALGORITMO
---------
- Datos de entrada: la frase, lista de vocales
- proceso: Recorrer cada caracter de la frase, compararlo con la lista de vocales y si coincide con una vocal guradar 1 valor en el acumulador.
- Salida: mensaje que diga "la cantidad de vocales en la frase es:..."
*/

let frase = "Que tal tu día, cómo lo pasaste?";
let vocales = "aeiouáéíóú";
let contadorVocales = 0;

for (let i = 0; i < frase.length; i++) {
  for (let indexVocal = 0; indexVocal < vocales.length; indexVocal++) {
    if (frase[i] === vocales[indexVocal]) {
      contadorVocales++;
    }
  }
}

// for (let i = 0; i < frase.length; i++) {
//   switch (true) {
//     case frase[i].toLowerCase() === "a" || frase[i].toLowerCase() === "á":
//     case frase[i].toLowerCase() === "e" || frase[i].toLowerCase() === "é":
//     case frase[i].toLowerCase() === "i" || frase[i].toLowerCase() === "í":
//     case frase[i].toLowerCase() === "o" || frase[i].toLowerCase() === "ó":
//     case frase[i].toLowerCase() === "u" || frase[i].toLowerCase() === "ú":
//       contadorVocales++;
//       break;
//   }
// }

console.log(`La frase tiene ${contadorVocales} vocales`);
