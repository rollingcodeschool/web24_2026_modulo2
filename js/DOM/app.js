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
  if (textoNuevo) nodo.innerText = textoNuevo;
}

const btnDark = document.querySelector("#switchCheckChecked");
const btnList = document.querySelectorAll(".btn");

btnDark.addEventListener("change", () => {
  if (btnDark.checked) {
    document.body.classList.add("dark-mode");
    btnList.forEach((item) => {
      item.classList.remove("btn-warning");
      item.classList.add("btn-outline-warning");
    });
    document.querySelector("table").classList.add("table-dark");
  } else {
    document.body.classList.remove("dark-mode");
    btnList.forEach((item) => {
      item.classList.remove("btn-outline-warning");
      item.classList.add("btn-warning");
    });
    document.querySelector("table").classList.remove("table-dark");
  }
});
// document.body.classList.add("dark-mode");

//createElement
//appendChild
//remove
//replaceChild
//style
//keydown

const selectoresDOM = [
  {
    selector: "getElementById",
    sintaxis: "document.getElementById('id')",
    devuelve:
      "Un único objeto elemento cuya propiedad 'id' coincida, o null si no hay coincidencias.",
  },
  {
    selector: "getElementsByClassName",
    sintaxis: "document.getElementsByClassName('clase')",
    devuelve:
      "Una HTMLCollection (viva) con todos los elementos que tienen esa clase.",
  },
  {
    selector: "getElementsByTagName",
    sintaxis: "document.getElementsByTagName('etiqueta')",
    devuelve:
      "Una HTMLCollection (viva) con todos los elementos de esa etiqueta (ej. 'p' o 'img')].",
  },
  {
    selector: "querySelector",
    sintaxis: "document.querySelector('selector_css')",
    devuelve:
      "El primer elemento que coincida con el selector CSS o null si no encuentra nada.",
  },
  {
    selector: "querySelectorAll",
    sintaxis: "document.querySelectorAll('selector_css')",
    devuelve:
      "Una NodeList estática con todos los elementos que coinciden con el selector CSS.",
  },
];
const bodyTable = document.querySelector("#body-table");
selectoresDOM.forEach((item) => {
  const fila = document.createElement("tr");
  const celda = `<td>${item.selector}</td><td>${item.sintaxis}</td><td>${item.devuelve}</td>`;
  fila.innerHTML = celda;

  bodyTable.append(fila);
});

document
  .querySelector("#dangerBtn")
  .addEventListener("click", () => document.querySelector("table").remove());
