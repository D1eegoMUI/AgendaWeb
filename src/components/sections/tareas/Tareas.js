import { TareaList } from "./dbTarea.js";
import { mostrarModal } from "../../common/Modal/Modal.js";

let Tareas = () => {
    // Contenedor principal de la sección
    let section = document.createElement('section');
    section.className = "lista-tareas";

    // Título de la sección
    let h2 = document.createElement("h2");
    h2.textContent = "Mis Tareas";
    section.appendChild(h2);

    // Renderizado de cada tarea
    TareaList.forEach((tarea) => {
        let card = document.createElement("div");
        
        // Formateo de clase para el estado (ej: "En Proceso" -> "en-proceso")
        const claseEstado = tarea.estado.toLowerCase().replace(/\s+/g, '-');
        card.className = `tarea-card ${claseEstado}`;

        // Contenido principal de la tarjeta
        card.innerHTML = `
            <div class="tarea-info">
                <h3>${tarea.nombre}</h3>
                <p>Estado: <strong>${tarea.estado}</strong></p>
            </div>
        `;

        // Contenedor de acciones (Botones y Selectores)
        let actionsDiv = document.createElement("div");
        actionsDiv.className = "tarea-card-actions";

        // --- BOTÓN INSPECCIONAR (USA EL MODAL) ---
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

        // --- SELECTOR DE ESTADO ---
        let selEstado = document.createElement("select");
        ["Pendiente", "En Proceso", "Completada"].forEach(est => {
            let opt = document.createElement("option");
            opt.value = opt.textContent = est;
            if (est === tarea.estado) opt.selected = true;
            selEstado.appendChild(opt);
        });

        // Evento para cambiar el estado y actualizar la UI visualmente
        selEstado.onchange = (e) => {
            tarea.estado = e.target.value;
            // Actualizar la clase de la card para cambiar el color del borde/fondo
            const nuevaClase = tarea.estado.toLowerCase().replace(/\s+/g, '-');
            card.className = `tarea-card ${nuevaClase}`;
            
            // Actualizar el texto del estado dentro de la card
            card.querySelector('strong').textContent = tarea.estado;
            
            console.log(`Estado de "${tarea.nombre}" actualizado a: ${tarea.estado}`);
        };

        // Ensamblaje de la tarjeta
        actionsDiv.appendChild(btnVer);
        actionsDiv.appendChild(selEstado);
        card.appendChild(actionsDiv);
        
        section.appendChild(card);
    });

    return section;
};

export { Tareas };