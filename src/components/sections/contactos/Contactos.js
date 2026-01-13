import  { ItemContacto } from "../../common/itemContacto/ItemContacto.js"

let Contactos = () => {
    let sectionContactos = document.createElement('section');
    sectionContactos.className = "contactos";

    let h2 = document.createElement("h2");
    h2.textContent = "Contactos";
    sectionContactos.appendChild(h2);

    sectionContactos.appendChild(ItemContacto("Perfil.svg", "Juan Pérez", "+54 11 1234-5678"));
    sectionContactos.appendChild(ItemContacto("Perfil.svg", "Juan Pérez", "+54 11 1234-5678"));
    sectionContactos.appendChild(ItemContacto("Perfil.svg", "Juan Pérez", "+54 11 1234-5678"));
    sectionContactos.appendChild(ItemContacto("Perfil.svg", "Juan Pérez", "+54 11 1234-5678"));
    sectionContactos.appendChild(ItemContacto("Perfil.svg", "Juan Pérez", "+54 11 1234-5678"));
    sectionContactos.appendChild(ItemContacto("Perfil.svg", "Juan Pérez", "+54 11 1234-5678"));
    sectionContactos.appendChild(ItemContacto("Perfil.svg", "Juan Pérez", "+54 11 1234-5678"));

    return sectionContactos;
}

export { Contactos };