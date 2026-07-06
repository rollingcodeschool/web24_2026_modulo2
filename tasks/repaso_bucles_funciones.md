# Repaso: Bucles y Funciones

Documento de repaso para alumnos principiantes que cubre los conceptos básicos de los bucles `for`, `while` y las funciones en JavaScript. Incluye explicaciones, sintaxis y ejemplos prácticos tomados de `app.js`.

## Índice

- Introducción
- Bucles `for`
  - ¿Para qué sirve?
  - Sintaxis
  - Ejemplos
- Bucles `while`
  - ¿Para qué sirve?
  - Sintaxis
  - Ejemplos
- Funciones
  - Declaración y arrow functions
  - Ejemplos
- Buenas prácticas
- Ejercicios recomendados

## Introducción

Los bucles y las funciones son herramientas fundamentales para repetir tareas y organizar código en piezas reutilizables. Este repaso usa ejemplos sencillos para comprender su uso.

## Bucles `for`

- ¿Para qué sirve?: Iterar un número conocido de veces o sobre colecciones (arrays).
- Sintaxis básica:

```js
for (let i = 0; i < limite; i++) {
  // acciones
}
```

- Ejemplo 1 — contador simple (de `app.js`):

```js
let index = 0;
for (; index < 10; ) {
  console.log(index);
  index++;
}
```

- Ejemplo 2 — calcular promedio de un array:

```js
const notas = [80, 45, 95, 60];

const calcularPromedio = (array) => {
  let total = 0;
  for (let index = 0; index < array.length; index++) {
    total += array[index];
  }
  return total / array.length;
};

console.log(`El promedio de notas del alumno es ${calcularPromedio(notas)}`);
```

Consejos:

- Usa `for` cuando conoces (o puedes calcular) cuántas iteraciones necesitas.
- Para arrays modernos puedes usar `for...of` o métodos como `.forEach`, `.map`, etc.

## Bucles `while`

- ¿Para qué sirve?: Repetir una acción mientras se cumple una condición. Útil cuando no se sabe de antemano cuántas iteraciones harán falta.
- Sintaxis básica:

```js
while (condicion) {
  // acciones
}
```

- Ejemplo 1 — buscar una palabra secreta (de `app.js`):

```js
const palabras = ["manzana", "perro", "objetivo", "casa", "sol"];
const buscarPalabraSecreta = (lista, palabraSecreta) => {
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
```

- Ejemplo 2 — simulación de batería del robot (de `app.js`):

```js
let batery = 100;
let tareas = 0;
while (batery > 0) {
  batery -= Math.round(Math.random() * (20 - 5) + 5);
  tareas++;
}

console.log(`El robot🤖 realizó ${tareas} tareas en total`);
```

Consejos:

- Asegúrate de que la condición vaya a cambiar dentro del bucle, para evitar bucles infinitos.
- Usa `break` para salir anticipadamente si se cumple una condición interna.

## Funciones

- ¿Para qué sirven?: Encapsular lógica reutilizable, recibir parámetros y devolver resultados.
- Declaración clásica:

```js
function nombre(param) {
  // cuerpo
  return resultado;
}
```

- Arrow function (forma moderna y concisa):

```js
const nombre = (param) => {
  /* cuerpo */
};
```

Ejemplos (de `app.js`):

```js
const convertirAMinutos = (horas) => {
  return horas * 60;
};

const puedeVotar = (edad) => edad >= 18;

const calcularPrecioFinal = (precioOriginal, porcentajeDescuento) => {
  return precioOriginal - (precioOriginal * porcentajeDescuento) / 100;
};
```

Consejos:

- Nombra funciones de forma que describan su acción (`calcularPromedio`, `convertirAMinutos`).
- Mantén funciones pequeñas y con una sola responsabilidad.

## Buenas prácticas generales

- Evita bucles anidados innecesarios por impacto en rendimiento.
- Usa nombres descriptivos para variables y parámetros.
- Agrega comentarios sólo cuando la intención no sea obvia.

## Ejercicios recomendados (práctica)

1. Transformador de Textos (for): Dado `const palabras = ["jAvAsCrIpT", "pRoGrAmAcIoN", "eJeRcIcIo"]`, crear un nuevo array con cada palabra capitalizada (primera letra mayúscula, resto minúscula).
2. Análisis de Temperaturas (for): Dado `const temperaturas = [18, 22, 15, 28, 12, 25, 19]`, encontrar la temperatura mínima y máxima.
3. Codificador Simple (for): Dado `const datos = [1,2,3,4,5,6,7,8]`, devolver un nuevo array donde cada número par se reemplace por su cuadrado y los impares se mantengan.

## Recursos y siguiente paso

- Practica los ejercicios anteriores y compara soluciones usando bucles y métodos de array.

---
