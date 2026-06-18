let apellido = "Perez";
let frase = "           La vida es un regalo🎁         ";

//métodos -> acciones empaquetadas que pueden recibir un dato o parámetro. Tienen paréntesis.

//propiedades -> datos de solo lectura

//Cantidad de caracteres
console.log(`El apellido tiene ${apellido.length} caracteres`);

//Convertir a mayúsculas
console.log(`El apellido en Mayúscula es: ${apellido.toUpperCase()}`);

//Convertir a minúsculas
console.log(`El apellido en minúsculas es: ${apellido.toLowerCase()}`);

//quitar espacios adelante y atrás
console.log(`La frase sin espacios es:\n${frase.trim()}`);
console.log(frase);

console.log(`La primera letra del apellido es: ${apellido.at()}`);

// console.log(
//   `La última letra del apellido es: ${apellido.at(apellido.length - 1)}`,
// );

console.log(`La última letra del apellido es: ${apellido.at(-1)}`);

console.log(`La segunda letra del apellido es: ${apellido.at(1)}`);

//Quiero obtener de la frase solo la pare que dice 'un regalo🎁'

console.log(frase.trim().substring(11));
console.log(frase.trim().substring(0, 7));

let fraseSinEspacio = frase.trim();
console.log(fraseSinEspacio.toLowerCase().includes("La"));

//Capitalizar palabras

let palabra = prompt("Ingresa una palabra");

//marmota
// palabra = palabra.trim();
// let primerCaracter = palabra.at(0).toUpperCase();
// console.log(primerCaracter);
// let restoPalabra = palabra.substring(1);
// console.log(primerCaracter + restoPalabra);

console.log(
  `La palabra capitalizada es: ${palabra.trim().at(0).toUpperCase() + palabra.trim().substring(1)}`,
);
