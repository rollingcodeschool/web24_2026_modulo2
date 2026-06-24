//for
/*
- declaramos un iterador (number)
- definir la condición
- controlar iteración (++, --)
*/

//sintaxis
//-------------
// for (let index = 0; index <= 10; index++) {
//   //acciones que se van a realizar
//   console.log(i);
// }

// tabla 2
// for (let i = 1; i <= 10; i++) {
//     console.log(`2 x ${i} = ${2 * i}`);
//   }

//Tabla 2.0

// let tabla = prompt("Ingrese el número de la tabla a calcular");

// if (!tabla) {
//   alert("❌El valor ingresado no es correcto");
// } else {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${tabla} x ${i} = ${tabla * i}`);
//   }
// }

//Tabla 3.0
// while (tabla) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${tabla} x ${i} = ${tabla * i}`);
//   }
//   console.log("------------");
//   tabla = prompt("Ingrese el número de la tabla a calcular");
// }

//Buscar pares entre un min y un max

let min = 1;
let max = 30;

for (let index = min; index < max; index++) {
  if (index % 2 === 0) {
    console.log(`El número ${index} es par`);
  }
}

//contar la cantidad de vocales en una frase

/*
ALGORITMO
----------
- datos de entrada: Frase
- Proceso: Recorrer cada caracter de la frase y lo comparamos con las vocales, si coincide las acumulamos.
- Salida: Mensaje con la cantidad de vocales 
*/

let frase = prompt("Ingrese la frase");
let vocales = "aáeéiíoóuú";
let contadorVocales = 0;

for (let i = 0; i < frase.length; i++) {
  for (let j = 0; j < vocales.length; j++) {
    if (frase[i] === vocales[j]) {
      contadorVocales++;
    }
  }
}
console.log(`Cantidad de vocales encontradas: ${contadorVocales}`);
