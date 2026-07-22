//funciones de tiempo
const contador = document.querySelector(".card-text");

let intervalo = null;
let count = 0;
const segundero = () => {
  intervalo = setInterval(() => {
    contador.innerText = count++;
  }, 1000);
};

const detener = () => {
  clearInterval(intervalo);
};

const reset = () => {
  count = 0;
  contador.innerText = count;
};

//setTimeout

const img = document.querySelector("#imagen");
const cardFooter = document.querySelector(".card-footer");
const messageContainer = document.createElement("div");
// messageContainer.classList.add("alert")
messageContainer.role = "alert";

const delivery = () => {
  // console.log("Preparando tu pedido...⏲️");
  // setTimeout(() => {
  //   console.log("Podés retirar tu pedido 🍔🍟");
  // }, 3000);
  img.src = "./assets/cocinando.gif";

  document.querySelector(".btn-warning").setAttribute("disabled", "");
  messageContainer.classList = "alert alert-warning";
  messageContainer.innerText = "Preparando tu pedido...⏲️";
  cardFooter.append(messageContainer);
  setTimeout(() => {
    messageContainer.classList = "alert alert-success";
    messageContainer.innerText = "Podés retirar tu pedido 🍔🍟";
    document.querySelector(".btn-warning").removeAttribute("disabled");
    img.src = "./assets/aviso.gif";
  }, 5000);
};

document.querySelector(".btn-warning").addEventListener("click", delivery);

//promesas
const miPromesa = () => {
  return new Promise((resolve, reject) => {
    let exito = true;
    if (exito) {
      resolve("Tarea terminada ✅");
    } else {
      reject("Tarea falló ❌");
    }
  });
};

miPromesa()
  .then((respuesta) => console.log(respuesta))
  .catch((error) => console.log(error));

fetch("https://devsapihub.com/api-movies")
  .then((respuesta) => respuesta.json())
  .then((movies) => console.log(movies))
  .catch((error) => console.log(error));

const traerPeliculas = async () => {
  try {
    const respuesta = await fetch("https://devsapihub.com/api-movies");
    console.log(respuesta);
    const movies = await respuesta.json();
    return movies;
  } catch (error) {
    throw new Error(error);
  }
};
console.log(traerPeliculas().then((respuesta) => console.log(respuesta)));

/*

## Explicación sencilla

En app.js, la línea:

```js
const respuesta = await fetch("https://devsapihub.com/api-movies");
```

hace esto:

1. `fetch(...)` inicia una petición HTTP al servidor.
2. Esa operación devuelve una `Promise`.
3. `await` espera a que esa promesa termine.
4. Cuando termina, el valor que recibe en `respuesta` NO son todavía las películas, sino un objeto `Response`.

### ¿Qué es ese objeto `Response`?
Es la respuesta HTTP completa que devolvió el servidor. Por ejemplo, incluye cosas como:

- si la petición fue exitosa
- el estado HTTP (`200`, `404`, etc.)
- los headers
- el cuerpo de la respuesta

### Entonces, ¿qué devuelve exactamente el primer `await`?
Devuelve:

- un objeto `Response` de `fetch`

Y luego, la siguiente línea:

```js
const movies = await respuesta.json();
```

es la que sí convierte el cuerpo de esa respuesta en un objeto JavaScript real, como un array de películas.

### Analogía rápida
Piensa en esto:

- `fetch()` = “voy a pedir la información”
- `await` = “me quedo esperando a que llegue”
- `respuesta` = “ya llegó la caja, pero todavía no la abrí”
- `respuesta.json()` = “abro la caja y la convierto en datos útiles”

> En resumen: el primer `await` devuelve la respuesta HTTP completa; el segundo `await` devuelve los datos ya convertidos a JSON.
*/
