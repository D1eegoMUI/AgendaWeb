import { Contactos } from "../../sections/contactos/Contactos.js";
import { Formulario } from "../../sections/formulario/formulario.js";
import { Tareas } from "../../sections/tareas/Tareas.js";
import { NewTarea } from "../../sections/agregarTareas/NewTarea.js";

let container = document.getElementById("container");

let viewContacts = function () {
    container.innerHTML = "";//limpio el contenedor
    container.appendChild(Contactos());
}

let viewFormulario = function () {
    container.innerHTML = "";//limpio el contenedor
    container.appendChild(Formulario());
}

let viewTareas = function () {
    container.innerHTML = "";//limpio el contenedor
    container.appendChild(Tareas());
}

let viewNewTarea = function () {
    container.innerHTML = "";//limpio el contenedor
    container.appendChild(NewTarea());
}

export { viewContacts, viewFormulario, viewTareas, viewNewTarea };