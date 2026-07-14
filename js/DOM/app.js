const brand = document.querySelector(".navbar-brand");
brand.textContent = "Document Object Model";
brand.classList.add("fw-bold", "fs-3");

const opcionesDeMenu = ["Inicio", "Documentación", "Precio"];

const nodosItem = document.querySelectorAll(".nav-link");

nodosItem.forEach((item, index) => {
  item.textContent = opcionesDeMenu[index];
});

const textoCard1 = document.querySelector("#card-text-1");
textoCard1.innerText = "Hola comisión Web24";
