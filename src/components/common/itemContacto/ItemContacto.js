let ItemContacto = (imgContacto, nombre, telefono) => {
    let div = document.createElement('div');
    div.className = "item-contacto";

    let etiquetaImg = document.createElement('img');
    etiquetaImg.src = `./Assets/icons/${imgContacto}`;

    let etiquetaNombre = document.createElement('p');
    etiquetaNombre.textContent = nombre;

    let etiquetaTelefono = document.createElement('p');
    etiquetaTelefono.textContent = telefono;

    let infoContenedor = document.createElement('div');
    infoContenedor.style.display = "flex";
    infoContenedor.style.flexDirection = "column";

    infoContenedor.appendChild(etiquetaNombre);
    infoContenedor.appendChild(etiquetaTelefono);

    div.appendChild(etiquetaImg);
    div.appendChild(infoContenedor);
    div.appendChild(infoContenedor);

    return div;
};

export { ItemContacto };