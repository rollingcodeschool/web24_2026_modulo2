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
  const respuesta = await fetch("https://devsapihub.com/api-movies");
  const movies = await respuesta.json();
  return movies;
};
console.log(traerPeliculas().then((respuesta) => console.log(respuesta)));
