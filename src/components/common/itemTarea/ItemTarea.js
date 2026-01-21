import { mostrarModal } from "../../common/Modal/Modal.js";
import { saveTareasToStorage } from "../../common/LocalStorage/storage.js";
import { storedTareas } from "../../sections/agregarTareas/NewTarea.js";

let ItemTarea = (tarea) => {
    let card = document.createElement("div");
    const actualizarClase = () => {
        const claseEstado = tarea.estado.toLowerCase().replace(/\s+/g, '-');
        card.className = `tarea-card ${claseEstado}`;
    };
    actualizarClase();

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
        const generarContenido = (editando = false) => {
            if (!editando) {
                return `
                    <div id="modal-container">
                        <p><strong>Descripción:</strong><br>${tarea.descripcion}</p>
                        <p><strong>Relevancia:</strong> ${tarea.relevancia}</p>
                        <p><strong>Dificultad:</strong> ${tarea.dificultad}</p>
                        <button id="btn-edit-mode" style="margin-top:10px; width:100%">Editar Detalles</button>
                    </div>
                `;
            } else {
                return `
                    <div id="modal-container" style="display:flex; flex-direction:column; gap:8px;">
                        <label>Descripción:</label>
                        <textarea id="edit-desc" rows="3">${tarea.descripcion}</textarea>
                        
                        <label>Relevancia:</label>
                        <select id="edit-rel">
                            <option value="Alta" ${tarea.relevancia === 'Alta' ? 'selected' : ''}>Alta</option>
                            <option value="Media" ${tarea.relevancia === 'Media' ? 'selected' : ''}>Media</option>
                            <option value="Baja" ${tarea.relevancia === 'Baja' ? 'selected' : ''}>Baja</option>
                        </select>

                        <label>Dificultad:</label>
                        <select id="edit-dif">
                            <option value="Fácil" ${tarea.dificultad === 'Fácil' ? 'selected' : ''}>Fácil</option>
                            <option value="Media" ${tarea.dificultad === 'Media' ? 'selected' : ''}>Media</option>
                            <option value="Difícil" ${tarea.dificultad === 'Difícil' ? 'selected' : ''}>Difícil</option>
                        </select>
                        <button id="btn-save-modal" style="background:#10b981; color:white; border:none; padding:8px; border-radius:4px; margin-top:10px;">Guardar Cambios</button>
                    </div>
                `;
            }
        };

        const refrescarModal = (modoEdicion) => {
            const cuerpoModal = document.querySelector(".modal-body");
            cuerpoModal.innerHTML = generarContenido(modoEdicion);

            if (!modoEdicion) {
                document.getElementById("btn-edit-mode").onclick = () => refrescarModal(true);
            } else {
                document.getElementById("btn-save-modal").onclick = () => {
                    tarea.descripcion = document.getElementById("edit-desc").value;
                    tarea.relevancia = document.getElementById("edit-rel").value;
                    tarea.dificultad = document.getElementById("edit-dif").value;

                    saveTareasToStorage(storedTareas); 
                    
                    refrescarModal(false);
                };
            }
        };

        mostrarModal(`Tarea: ${tarea.nombre}`, generarContenido(false));
        refrescarModal(false);
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
        saveTareasToStorage(storedTareas);
        actualizarClase();
        card.querySelector('strong').textContent = tarea.estado;
    };

    actionsDiv.appendChild(btnVer);
    actionsDiv.appendChild(selEstado);
    card.appendChild(actionsDiv);

    return card;
};

export { ItemTarea };