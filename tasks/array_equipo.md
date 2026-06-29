### Ejercicio: "El DT de la Selección" ⚽

Imagina que eres el Director Técnico y tienes una lista inicial de jugadores convocados. Tu objetivo es gestionar la alineación usando los métodos de arrays.

#### El código base:

```javascript
let convocatoria = ["Arquero", "Defensor", "Mediocampista", "Delantero"];
```

#### Consigna:

1. **Llegó una estrella:** Agrega un nuevo "Delantero" al final de la lista.
2. **Un jugador se lesionó:** Elimina al primer jugador de la lista (el "Arquero") porque tuvo que ser reemplazado.
3. **Nuevo refuerzo:** Agrega un "Arquero Suplente" al principio de la lista.
4. **Cambio de estrategia:** El último jugador de la lista no jugará hoy, así que debes quitarlo.
5. **Informe final:** Usa un bucle `for` para mostrar en consola la alineación final de la siguiente forma:

- _Ejemplo de salida:_ `Posición 0: Arquero Suplente`, `Posición 1: Defensor`, etc.

---

### Guía para el profesor (Solución esperada):

Este ejercicio permite visualizar los cambios en el "plantel" paso a paso:

```javascript
let convocatoria = ["Arquero", "Defensor", "Mediocampista", "Delantero"];

// 1. push
convocatoria.push("Delantero Estrella");

// 2. shift
convocatoria.shift();

// 3. unshift
convocatoria.unshift("Arquero Suplente");

// 4. pop
convocatoria.pop();

// 5. Bucle for
for (let i = 0; i < convocatoria.length; i++) {
  console.log("Posición " + i + ": " + convocatoria[i]);
}
```

### ¿Por qué funciona bien este ejercicio?

- **Es intuitivo:** Es fácil entender por qué `.shift()` elimina al primero (el arquero titular sale) y `.push()` agrega al final.
- **Resultados visibles:** Al imprimir el array final, el alumno ve cómo el orden de los elementos cambió completamente, lo cual refuerza el concepto de que el array es una **estructura dinámica**.
- **Validación de conocimientos:** Si el alumno logra completar el bucle `for`, demuestra que entendió cómo funciona el índice `i` y la propiedad `.length`.
