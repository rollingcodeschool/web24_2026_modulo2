const menu = document.querySelector(".navbar-brand");
menu.textContent = "DOM";
menu.classList.add("fw-bold", "fs-3");

const opcionesArray = ["Inicio", "Documentación", "Precio"];

const opcionesMenu = document.querySelector(".navbar-nav");
const nodosItem = document.querySelectorAll(".nav-link");

nodosItem.forEach((item, index) => {
  item.textContent = opcionesArray[index];
});

const textoCard1 = document.querySelector("#card-text-1");
const textoCard2 = document.querySelector("#card-text-2");
const textoCard3 = document.querySelector("#card-text-3");

textoCard1.innerText =
  "Representan etiquetas HTML.\nTienen propiedades y pueden contener otros nodos.";

textoCard2.innerText =
  "Representan el texto puro dentro del documento. Nota crucial: ¡Incluso los espacios enblanco y saltos de línea entre etiquetas de HTML generan nodos de texto!";

textoCard3.innerText =
  "Representan los comentarios <!-- --> en el código. Son invisibles en pantalla pero existen en el árbol.";

function cambiarTexto(nodo) {
  const textoNuevo = prompt("Ingresa el nuevo texto");
  nodo.innerText = textoNuevo;
}
