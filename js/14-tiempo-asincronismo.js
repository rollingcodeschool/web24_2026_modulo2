//Funciones de tiempo
//DOM
//BOM Browser Object Model

//setInterval 1000

const contador = document.querySelector(".card-text");
let intervalo = null;
let intervalo2 = null;
// let count = 10;
const segundero = () => {
  intervalo = setInterval(() => {
    contador.textContent = Number(contador.textContent) + 1;
  }, 1000); //1 seg

  //   intervalo2 = setInterval(() => {
  //     console.log(count++);
  //   }, 3000); //3 seg
};

//setTimeout
//clearInterval
const detener = () => {
  clearInterval(intervalo);
};

document
  .querySelector("#reset")
  .addEventListener("click", () => (contador.textContent = "0"));

//--------------------------------------------

const img = document.querySelector("#imagen");
const cardFooter = document.querySelector(".card-footer");
const messageContainer = document.createElement("div");
messageContainer.role = "alert";

const delivery = () => {
  //   console.log("Preparando tu pedido⏲️");
  //   setTimeout(() => {
  //     console.log("Podés retirar tu pedido 🍔🍟");
  //   }, 3000);

  img.src = "./assets/cocinando.gif";
  document.querySelector(".btn-warning").setAttribute("disabled", "");
  messageContainer.classList = "alert alert-warning";
  //   messageContainer.classList.add("alert", "alert-warning")
  messageContainer.textContent = "Preparando tu pedido⏲️";
  cardFooter.append(messageContainer);

  setTimeout(() => {
    messageContainer.classList = "alert alert-success";
    messageContainer.textContent = "Podés retirar tu pedido 🍔🍟";
    img.src = "./assets/aviso.gif";
  }, 5000); //despúes de 5 seg

  setTimeout(() => {
    messageContainer.classList = "";
    messageContainer.textContent = "";
    img.src = "./assets/tienda.gif";
    document.querySelector(".btn-warning").removeAttribute("disabled");
  }, 10000);
};

document.querySelector(".btn-warning").addEventListener("click", delivery);
//-------------------------------------------------
//PROMESAS (promise)

const miPromesa = () => {
  return new Promise((resolve, reject) => {
    let exito = true;
    setTimeout(() => {
      if (exito) {
        resolve("Tarea terminada✅");
      } else {
        reject("Falló la tarea❌");
      }
    }, 3000);
  });
};

miPromesa()
  .then((respuesta) => console.log(respuesta))
  .catch((error) => console.error(error));

//API
//Interfaz de Programación de Aplicaciones
//Endpoint
//protocolos de internet
//HTTP
let peliculas = [];
fetch("https://devsapihub.com/api-movies")
  .then((respuesta) => respuesta.json())
  .then((movies) => (peliculas = movies.splice(0)))
  .catch((error) => console.log(error));

//async | await

const traerPeliculas = async () => {
  const response = await fetch("https://devsapihub.com/api-movies");
  // console.log(response);
  const data = await response.json();
  return data;
};

traerPeliculas().then((respuesta) => (peliculas = respuesta.splice(0)));
