import { Button } from "./components/common/Button/Button.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";


let app = document.getElementById("app");

//instancias de mis elementos html (app.html)
let nav = document.getElementById("nav");
//agregar botones
nav.appendChild(Button("Agenda", "agenda", "Contactos.svg"));
nav.appendChild(Button("Crear Contacto", "plus", "New.svg"));
nav.appendChild(Button("ToDoList", "todo", "Tareas.svg"));
nav.appendChild(Button("Crear Tarea", "plus", "AgregarTarea.svg"));

let container = document.getElementById("container");
container.appendChild(Contactos());


