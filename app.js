//for
//---------
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

/*
ALGORITMO
DATOS:lista de notas, variable total
PROCESO: Recorrer la lista, sumar cada nota y dividir el resultado en la cantidad de notas.
SALIDA: Mensaje que diga cuál es el promedio del alumno.
*/

const notas = [80, 45, 95, 60];

const calcularPromedio = (array) => {
  let total = 0;
  for (let index = 0; index < array.length; index++) {
    total += array[index];
  }

  return total / array.length;
};

console.log(`El promedio de notas del alumno es ${calcularPromedio(notas)}`);

//Números repetidos

/*
ALGORITMO
DATOS: Lista de números repetidos
PROCESO: Recorrer la lista y almacenar en una nueva lista los números únicos para crear una lista sin repetidos.
SALIDA: Una lista nueva de números únicos
*/

const numeros = [1, 2, 2, 3, 4, 4, 5, 1, 6];

const numerosSinRepetir = (array) => {
  const unicos = [];
  for (let index = 0; index < array.length; index++) {
    if (!unicos.includes(array[index])) {
      unicos.push(array[index]);
    }
  }
  return unicos;
};

console.log(numerosSinRepetir(numeros));

//El Separador de Tipos (separar en dos listas: solo números y solo strings)
/*
ALGORITMO
DATOS: array con numeros y strings
PROCESO: Recorrer el array y separar elementos strings de numbers y guardarlos en arrays distintos
SALIDA: 2 arrays 
*/

const mixto = ["Hola", 10, "Mundo", 25, 40, "Javascript", true];

const separarTipos = (array) => {
  const onlyNumbers = [];
  const onlyStrings = [];

  for (let index = 0; index < array.length; index++) {
    if (typeof array[index] === "string") {
      onlyStrings.push(array[index]);
    }

    if (typeof array[index] === "number") {
      onlyNumbers.push(array[index]);
    }
  }

  return { onlyNumbers, onlyStrings };
};

//---------------------------------------------------------------------------------

//El Buscador de "La palabra Secreta"
/*
ALGORITO
DATOS: palabra secreta, lista de palabras, indice inicial
PROCESOS: recorrer la lista hasta que encuentre la palabra secreta y se termine el problema.
SALIDA: Mensaje de que se encontró la palabra secreta
*/

const palabras = ["manzana", "perro", "objetivo", "casa", "sol"];
const buscarPalabraSecreta = (lista, palabraSecreta) => {
  // const palabraSecreta = "objetivo";
  let indice = 0;
  while (true) {
    if (lista[indice] === palabraSecreta) {
      console.log(`✅Se encontró la palabra secreta en el indice: ${indice}`);
      break;
    } else if (indice === lista.length) {
      console.log(`❌No se encontró la palabra secreta`);
      break;
    }
    indice++;
  }
};

//La Batería del Robot
/*
Imagina que un robot tiene una batería inicial de 100%. Cada tarea que realiza consume una cantidad aleatoria de energía (entre 5 y 20).

ALGORITMO
- DATOS: Batería inicial
- PROCESOS: Realizar tareas con consumo de energía aleatorio(5-20).
- SALIDA: Cuantas tareas realizó antes de quedarse sin batería
*/

let batery = 100;
let tareas = 0;
while (batery > 0) {
  batery = batery - Math.round(Math.random() * (20 - 5) + 5);
  tareas++;
}

console.log(`El robot🤖 realizó ${tareas} tareas en total`);

/*
Ejercicios de Lógica con Funciones
1. La Calculadora de Conversión
Crea una función llamada convertirAMinutos que reciba un número de horas y retorne la cantidad equivalente en minutos.
- Reto: Invoca la función con diferentes valores y muestra el resultado en consola.
- Pista: minutos = horas * 60.
*/

const convertirAMinutos = (horas) => {
  return horas * 60;
};

/*
2. El Comparador de Edad
Crea una función llamada puedeVotar que reciba una edad (número) y retorne true si la persona tiene 18 años o más, y false en caso contrario.
- Reto: Usa la estructura if/else dentro de la función o simplemente retorna el resultado de la comparación edad >= 18.
*/

// const puedeVotar = (edad) => {
//   // if(edad>=18){
//   //     return true
//   // }else{
//   //     return false
//   // }
//   return edad >= 18;
// };

const puedeVotar = (edad) => edad >= 18;

/*

3. Crea una función llamada `calcularPrecioFinal` que reciba dos parámetros: `precioOriginal` y `porcentajeDescuento`. La función debe retornar el precio final después de aplicar el descuento.

ALGORITMO
- DATOS: Precio original, porcentaje de descuento
- PROCESOS: calcular precio original - porcentaje del descuento (precio original * porcentaje de descuento/100)
- SALIDA: Precio final con descuento aplicado

*/

const calcularPrecioFinal = (precioOriginal, porcentajeDescuento) => {
  return precioOriginal - (precioOriginal * porcentajeDescuento) / 100;
};
