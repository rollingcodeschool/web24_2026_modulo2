const tareas = [];

const btnAdd = document.querySelector("#btnAgregar");
const inputText = document.querySelector("#inputTarea");
const lista = document.querySelector("#listaTareas");

const crearItem = () => {
  lista.innerHTML = "";
  tareas.forEach((tarea, index) => {
    const item = document.createElement("li");
    item.id = `item${index}`;
    const itemContent = `<span>${tarea}</span><div><button class="btn btn-danger btn-sm" onclick="(borrarItem(${index}))">X</button><button class="btn btn-warning ms-2" onclick="prioridad(${index})">Prioridad</button></div>`;
    item.innerHTML = itemContent;
    console.log(item);
    item.classList.add("list-group-item", "d-flex", "justify-content-between");
    lista.append(item);
  });
};

function borrarItem(index) {
  const validar = confirm("Querés eliminar esta tarea?");
  if (validar) {
    tareas.splice(index, 1);
    crearItem();
  }
}

function prioridad(id) {
  document.querySelector(`#item${id}`).classList.toggle("bg-warning");
}

btnAdd.addEventListener("click", () => {
  if (inputText.value) {
    tareas.push(inputText.value.trim());
    inputText.value = "";
    inputText.focus();
    crearItem();
  }
});
