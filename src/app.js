import { Button } from "./components/common/Button/Button.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";
import { viewContacts, viewFormulario, viewTareas, viewNewTarea, logout } from "./components/layout/nav/NavControles.js";

let app = document.getElementById("app");

//instancias de mis elementos html (app.html)
let nav = document.getElementById("nav");
//agregar botones
nav.appendChild(Button("Agenda", "agenda", "Contactos.svg", viewContacts
));
nav.appendChild(Button("Crear Contacto", "plus", "New.svg", viewFormulario
));
nav.appendChild(Button("ToDoList", "todo", "Tareas.svg", viewTareas
));
nav.appendChild(Button("Crear Tarea", "plus", "AgregarTarea.svg", viewNewTarea
));
let btnLogout = Button("Cerrar sesión", "Logout", "Logout.svg", logout
);

btnLogout.id = "btn-logout-at-bottom";
nav.appendChild(btnLogout);

//contenedor principal
let container = document.getElementById("container");

container.innerHTML = "";//limpio el contenedor
container.appendChild(Contactos());

async function tareas() {
    try {
        let data = await fetch("https://jsonplaceholder.typicode.com/posts");
        let r = await data.json();
        console.log(r);

    } catch (error) {
        console.log(error);
    }
}
tareas();
console.log("completado");