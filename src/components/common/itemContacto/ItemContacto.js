import { mostrarModal } from "../../common/Modal/Modal.js";

let ItemContacto = (imgContacto, alias, nombre, telefono, correo) => {
    let div = document.createElement('div');
    div.className = "item-contacto";
    div.style.cursor = "pointer";

    let etiquetaImg = document.createElement('img');
    etiquetaImg.src = `./Assets/icons/${imgContacto}`;

    let etiquetaAlias = document.createElement('p');
    etiquetaAlias.textContent = alias;
    etiquetaAlias.style.fontWeight = "bold";
    etiquetaAlias.style.fontSize = "1.1rem";

    let etiquetaTelefono = document.createElement('p');
    etiquetaTelefono.textContent = telefono;
    etiquetaTelefono.style.color = "gray";

    let infoContenedor = document.createElement('div');
    infoContenedor.style.display = "flex";
    infoContenedor.style.flexDirection = "column";

    infoContenedor.appendChild(etiquetaAlias);
    infoContenedor.appendChild(etiquetaTelefono);

    div.appendChild(etiquetaImg);
    div.appendChild(infoContenedor);

    div.onclick = () => {
        const contenidoDetalle = `
            <div class="contacto-detalle-modal">
                <p><strong> Nombre:</strong> ${nombre}</p>
                <p><strong> Teléfono:</strong> ${telefono}</p>
                <p><strong> Correo:</strong> ${correo || "No proporcionado"}</p>
            </div>
        `;
        mostrarModal(`Contacto de: ${alias}`, contenidoDetalle);
    };

    return div;
};

export { ItemContacto };