import { storedTareas } from "../agregarTareas/NewTarea.js";
import { mostrarModal } from "../../common/Modal/Modal.js";
import { saveTareasToStorage } from "../../common/LocalStorage/storage.js";

let Tareas = () => {
    let section = document.createElement('section');
    section.className = "lista-tareas";

    let h2 = document.createElement("h2");
    h2.textContent = "Mis Tareas";
    section.appendChild(h2);

    storedTareas.forEach((tarea) => {
        let card = document.createElement("div");
        
        const claseEstado = tarea.estado.toLowerCase().replace(/\s+/g, '-');
        card.className = `tarea-card ${claseEstado}`;

        card.innerHTML = `
            <div class="tarea-info">
                <h3>${tarea.nombre}</h3>
                <p>Estado: <strong>${tarea.estado}</strong></p>
            </div>
        `;

        let actionsDiv = document.createElement("div");
        actionsDiv.className = "tarea-card-actions";

        let btnVer = document.createElement("button");
        btnVer.innerHTML = `🤓 Inspeccionar`;
        btnVer.onclick = () => {
            const contenidoHtml = `
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <p><strong> Descripción:</strong><br>${tarea.descripcion}</p>
                    <p><strong> Relevancia:</strong> ${tarea.relevancia}</p>
                    <p><strong> Dificultad:</strong> ${tarea.dificultad}</p>
                    <p><strong> Estado:</strong> ${tarea.estado}</p>
                </div>
            `;
            mostrarModal(`Detalles de: ${tarea.nombre}`, contenidoHtml);
        };

        let selEstado = document.createElement("select");
        ["Pendiente", "En Proceso", "Completada"].forEach(est => {
            let opt = document.createElement("option");
            opt.value = opt.textContent = est;
            if (est === tarea.estado) opt.selected = true;
            selEstado.appendChild(opt);
        });

        selEstado.onchange = (e) => {
            tarea.estado = e.target.value;
            // Actualiza el storage cuando cambie de estado
            saveTareasToStorage(storedTareas);
             
            const nuevaClase = tarea.estado.toLowerCase().replace(/\s+/g, '-');
            card.className = `tarea-card ${nuevaClase}`;
            
            card.querySelector('strong').textContent = tarea.estado;
            
            console.log(`Estado de "${tarea.nombre}" actualizado a: ${tarea.estado}`);
        };

        actionsDiv.appendChild(btnVer);
        actionsDiv.appendChild(selEstado);
        card.appendChild(actionsDiv);
        
        section.appendChild(card);
    });

    return section;
};

export { Tareas };