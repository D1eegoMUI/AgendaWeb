import { Contactos } from "../../sections/contactos/Contactos.js";
import { Formulario } from "../../sections/formulario/formulario.js";

let container = document.getElementById("container");

let viewContacts = function () {
    container.innerHTML = "";//limpio el contenedor
    container.appendChild(Contactos());
}

let viewFormulario = function () {
    container.innerHTML = "";//limpio el contenedor
    container.appendChild(Formulario());
}

export { viewContacts, viewFormulario };