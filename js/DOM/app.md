Voy a revisar el bloque de código que comentaste y preparar una explicación clara, en formato markdown y pensada para estudiantes novatos.

Read [](file:///c%3A/Users/pablo/Documents/RollingCode%20school/Comisi%C3%B3n%20web24%20-%20tareas/M%C3%B3dulo%202/Javascript/fundamentos/js/DOM/app.js)

## Clase introductoria: conceptos de DOM en JavaScript

La parte que sigue muestra cómo usar JavaScript para interactuar con la página web. Este proceso se conoce como trabajar con el DOM, que significa Document Object Model, o “modelo de objetos del documento”.

### 1. Seleccionar elementos

Para trabajar con la página, primero hay que “encontrar” los elementos.

- `querySelector()`: selecciona el primer elemento que coincida con un selector CSS.
- `querySelectorAll()`: selecciona todos los elementos que coincidan.

Ejemplo:

```js
const menu = document.querySelector(".navbar-brand");
const items = document.querySelectorAll(".nav-link");
```

👉 En este caso:

- `.navbar-brand` es una clase de CSS.
- `.nav-link` es otra clase.

---

### 2. Modificar texto y contenido

Una vez seleccionado un elemento, podemos cambiar su contenido visible.

- `textContent` o `innerText`: cambian el texto que aparece en la página.

Ejemplo:

```js
menu.textContent = "DOM";
```

También se puede cambiar el texto de varios elementos con un bucle:

```js
items.forEach((item, index) => {
  item.textContent = "Opción " + index;
});
```

---

### 3. Cambiar clases con `classList`

Para darle estilo visual a un elemento, podemos agregar o quitar clases CSS.

- `classList.add()`: agrega una clase
- `classList.remove()`: elimina una clase

Ejemplo:

```js
menu.classList.add("fw-bold", "fs-3");
```

Esto hace que el elemento se vea más marcado o grande.

---

### 4. Escuchar eventos

Los eventos permiten que la página responda a la acción del usuario.

El código usa:

```js
addEventListener("change", ...)
```

Esto significa:

- “escucha cuando algo cambie”
- y ejecuta una función cuando eso ocurra

Ejemplo:

```js
boton.addEventListener("click", () => {
  alert("Haz hecho clic");
});
```

En el ejemplo, el evento `change` se usa para activar el modo oscuro.

---

### 5. Pedir información al usuario con `prompt()`

`prompt()` permite pedir datos al usuario desde la ventana del navegador.

Ejemplo:

```js
const nombre = prompt("¿Cómo te llamas?");
```

Luego ese valor puede usarse para cambiar texto en la página.

---

### 6. Crear elementos dinámicamente

También se puede crear un elemento nuevo desde JavaScript.

```js
const fila = document.createElement("tr");
```

Eso crea una nueva fila de tabla, pero todavía no la muestra en la página. Para agregarla se usa `append()` o `appendChild()`.

Ejemplo:

```js
bodyTable.append(fila);
```

Esto inserta la fila dentro del cuerpo de la tabla.

---

### 7. Recorrer datos con `forEach()`

`forEach()` sirve para recorrer arreglos o colecciones de elementos.

Ejemplo:

```js
const frutas = ["manzana", "pera", "uva"];

frutas.forEach((fruta) => {
  console.log(fruta);
});
```

En el código, se usa para recorrer los elementos del menú y cambiar su texto.

---

### 8. Trabajar con arreglos y objetos

También aparecen estructuras de datos como:

```js
const opcionesArray = ["Inicio", "Documentación", "Precio"];
```

Y objetos como:

```js
{
  selector: "querySelector",
  sintaxis: "document.querySelector('selector_css')"
}
```

Esto permite guardar información de forma ordenada y usarla después en el código.

---

### 9. Eliminar elementos

Por último, se demuestra cómo quitar un elemento del DOM:

```js
document.querySelector("table").remove();
```

Esto elimina la tabla de la página.

---

## Resumen rápido

En esta parte del código se aplican estos conceptos clave:

- seleccionar elementos del HTML
- modificar su texto
- cambiar clases CSS
- responder a eventos del usuario
- crear elementos nuevos
- agregar o eliminar contenido dinámicamente

> La idea principal es que JavaScript puede “hablar” con la página y cambiarla en tiempo real.
