//for

/*
El ciclo for nos permite iterar con acciones cuando sabemos cuantas veces se deben realizar.

*/
let index = 0;
for (; index < 10; ) {
  //acciones
  console.log(index);
  index++;
}

//Calcular promedio de alumno
const notas = [80, 45, 95, 60];

/*
ALGORITMO
DATOS:lista de notas, variable total
PROCESO: Recorrer la lista, sumar cada nota y dividir el resultado en la cantidad de notas.
SALIDA: Mensaje que diga cuál es el promedio del alumno.
*/

let total = 0;
for (let index = 0; index < notas.length; index++) {
  total += notas[index];
}

console.log(`El promedio de notas del alumno es ${total / notas.length}`);
