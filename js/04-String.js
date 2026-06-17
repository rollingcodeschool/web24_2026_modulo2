let apellido = "Marino";
let frase = "     La vida es un regalo🎁     ";
console.log(`El apellido tiene ${apellido.length} caracteres`);

console.log(`El apellido en mayúsculas es: ${apellido.toUpperCase()}`);

console.log(`El apellido en minúsculas es: ${apellido.toLowerCase()}`);

console.log(frase);
console.log(`La frase sin espacios es:\n${frase.trim()}`);

console.log(
  `La última letra del apellido es: ${apellido.at(-1)} y la primera es: ${apellido.at(0)}`,
);
//Obtener la segunda letra

//obtener de la frase la parte que dice "un regalo 🎁"
console.log(`${frase.trim().substring(11)}`); //un regalo
console.log(`${frase.trim().substring(0, 7)}`); //La vida

//Capitalizar palabras
let palabra = prompt("Ingrese una palabra");

console.log(
  `La palabra capitalizada es: ${palabra.at(0).toUpperCase() + palabra.substring(1)}`,
);

//Buscar una palabra
let texto = prompt("Ingrese un texto");
let busqueda = prompt("Ingrese la palabra que quiere buscar");

if (texto.includes(busqueda)) {
  console.log(
    `🎉Felicitaciones! la palabra '${busqueda}' se encuentra en el texto.`,
  );
} else {
  console.error(`😔 Lo sentimos, no hubo coincidencias`);
}
