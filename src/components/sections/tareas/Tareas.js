import { storedTareas } from "../agregarTareas/NewTarea.js";
import { ItemTarea } from "../../common/itemTarea/ItemTarea.js"; // Importas el nuevo componente

let Tareas = () => {
    let section = document.createElement('section');
    section.className = "lista-tareas";

    let h2 = document.createElement("h2");
    h2.textContent = "Mis Tareas";
    section.appendChild(h2);

    // Solo recorremos y usamos el componente
    storedTareas.forEach((tarea) => {
        let card = ItemTarea(tarea); 
        section.appendChild(card);
    });

    return section;
};

export { Tareas };