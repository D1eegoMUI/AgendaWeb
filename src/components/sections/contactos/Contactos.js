import { ItemContacto } from "../../common/itemContacto/ItemContacto.js"
import { storedContacts } from "../formulario/formulario.js";

let Contactos = () => {
    let sectionContactos = document.createElement('section');
    sectionContactos.className = "contactos";

    let h2 = document.createElement("h2");
    h2.textContent = "Contactos";
    sectionContactos.appendChild(h2);

    storedContacts.forEach((contacto) => {
        sectionContactos.appendChild(
            ItemContacto(
                "Perfil.svg",
                contacto.alias, 
                contacto.nombre, 
                contacto.telefono,
                contacto.correo   
            )
        );
    });

    return sectionContactos;
}

export { Contactos };