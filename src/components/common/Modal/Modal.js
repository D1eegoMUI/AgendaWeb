export const mostrarModal = (titulo, contenido) => {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    // Crear la ventana
    const modal = document.createElement("div");
    modal.className = "modal-content";

    modal.innerHTML = `
        <h4>${titulo}</h4>
        <div class="modal-body">${contenido}</div>
        <button class="btn-cerrar-modal">Cerrar</button>
    `;

    const cerrar = () => overlay.remove();
    modal.querySelector(".btn-cerrar-modal").onclick = cerrar;
    overlay.onclick = (e) => { if(e.target === overlay) cerrar(); };

    overlay.appendChild(modal);
    document.body.appendChild(overlay);
};