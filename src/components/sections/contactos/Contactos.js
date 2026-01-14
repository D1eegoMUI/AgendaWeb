import  { ItemContacto } from "../../common/itemContacto/ItemContacto.js"
import { ContactList } from "./db.js";

let Contactos = () => {
    let sectionContactos = document.createElement('section');
    sectionContactos.className = "contactos";

    let h2 = document.createElement("h2");
    h2.textContent = "Contactos";
    sectionContactos.appendChild(h2);

    ContactList.forEach((contacto) => {
        sectionContactos.appendChild(ItemContacto("Perfil.svg", 
            contacto.nombre, contacto.telefono));
    });

    return sectionContactos;
}

export { Contactos };