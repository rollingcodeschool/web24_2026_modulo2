//funciones de tiempo

let intervalo = null;
let count = 0;
const segundero = () => {
  intervalo = setInterval(() => {
    console.log(count);
    count++;
  }, 1000);
};

const detener = () => {
  clearInterval(intervalo);
};

const reset = () => (count = 0);

//setTimeout
const delivery = () => {
  console.log("Preparando tu pedido...⏲️");
  setTimeout(() => {
    console.log("Podés retirar tu pedido 🍔🍟");
  }, 3000);
};

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
  const respuesta = await fetch("https://devsapihub.com/api-movies");
  const movies = await respuesta.json();
  return movies;
};
console.log(traerPeliculas().then((respuesta) => console.log(respuesta)));
