let index = 5; //declaro la variable con la que controlo el bucle
index <= 10; //la condición para que el bucle se ejecute
index++; //manejo la iteración

for (let index = 0; index < 10; index++) {
  console.log(index);
}
//el resto del código
console.log("Fin");

//Ejercicio 1
/*
ALGORITMO
- DATOS: Un array de números repetidos
- PROCESOS: creamos una lista llamada unicos vacia, recorrer la lista de números, comparar y guardamos los números sin repetir.
- SALIDA: lista nueva con números no repetidos.
*/

const numeros = [1, 2, 2, 3, 4, 4, 5, 1, 6];

const unicos = [];

for (let index = 0; index < numeros.length; index++) {
  //   console.log("valor del index: " + index);
  //   console.log("elemento dentro de numeros según el index: " + numeros[index]);
  if (!unicos.includes(numeros[index])) {
    unicos.push(numeros[index]);
  }
}
console.log(unicos);

/*
Ejercicio 2
ALGORITMO
- DATOS: dos arrays vacios y el array mixto
- PROCESOS: recorro la lista mixta, identifico los números y los strings, los agrego a los arrays correspondientes
- SALIDA: los dos arrays (números, strings)

*/

const mixto = ["Hola", 10, "Mundo", 25, 40, "Javascript", true];

const soloNumeros = [];
const soloStrings = [];

for (let index = 0; index < mixto.length; index++) {
  //   console.log(mixto[index]);
  if (typeof mixto[index] === "string") {
    soloStrings.push(mixto[index]);
  }

  if (typeof mixto[index] === "number") {
    soloNumeros.push(mixto[index]);
  }
}

console.log(soloNumeros);
console.log(soloStrings);
//--------------------------------------------------
// const num = 10;

// while (num < 10) {
//   console.log("Hola!!");

//   // break
// }

// do {
//   //acciones
//   console.log("Hola!!");
// } while (num < 10);

/*
ALGORITO
DATOS: palabra secreta, lista de palabras, indice inicial
PROCESOS: recorrer la lista hasta que encuentre la palabra secreta y se termine el problema.
SALIDA: Mensaje de que se encontró la palabra secreta en número de índice
*/

const palabras = ["manzana", "perro", "objetivo", "casa", "sol"];

const palabraSecreta = "objetivo";
let indice = 0;

while (true) {
  if (palabras[indice] === palabraSecreta) {
    console.log(`✅Se encontró la palabra secreta en el indice ${indice}`);
    break;
  } else if (indice === palabras.length) {
    console.log(`❌No se encontró la palabra secreta`);
    break;
  }
  indice++;
}

// while (palabras[indice] != palabraSecreta) { //mientras se cumpla la condición
//     indice++
//     if(indice===palabras.length){
//         break;
//     }
// }

// console.log(`La palabra secreta se encontró en el índice ${indice}`)

/*
ALGORITMO
- DATOS: Batería inicial
- PROCESOS: Realizar tareas con consumo de energía aleatorio(5-20).
- SALIDA: Cuantas tareas realizó antes de quedarse sin batería
*/
