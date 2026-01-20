import { mostrarModal } from "../../common/Modal/Modal.js";
import { saveTareasToStorage } from "../../common/LocalStorage/storage.js";
import { storedTareas } from "../../sections/agregarTareas/NewTarea.js";

let ItemTarea = (tarea) => {
    // 1. Crear el contenedor principal de la tarea
    let card = document.createElement("div");
    const claseEstado = tarea.estado.toLowerCase().replace(/\s+/g, '-');
    card.className = `tarea-card ${claseEstado}`;

    // 2. Estructura de información
    card.innerHTML = `
        <div class="tarea-info">
            <h3>${tarea.nombre}</h3>
            <p>Estado: <strong>${tarea.estado}</strong></p>
        </div>
    `;

    // 3. Botón de Inspeccionar (Abrir Modal)
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

    // 4. Selector de Estado
    let selEstado = document.createElement("select");
    ["Pendiente", "En Proceso", "Completada"].forEach(est => {
        let opt = document.createElement("option");
        opt.value = opt.textContent = est;
        if (est === tarea.estado) opt.selected = true;
        selEstado.appendChild(opt);
    });

    selEstado.onchange = (e) => {
        tarea.estado = e.target.value;
        saveTareasToStorage(storedTareas);
        
        const nuevaClase = tarea.estado.toLowerCase().replace(/\s+/g, '-');
        card.className = `tarea-card ${nuevaClase}`;
        card.querySelector('strong').textContent = tarea.estado;
    };

    // 5. Ensamblaje y Retorno
    actionsDiv.appendChild(btnVer);
    actionsDiv.appendChild(selEstado);
    card.appendChild(actionsDiv);

    return card;
};

export { ItemTarea };