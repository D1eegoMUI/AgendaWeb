import { ItemContacto } from "../../common/itemContacto/ItemContacto.js"
import { storedContacts } from "../formulario/formulario.js";
import { saveContactsToStorage } from "../../common/LocalStorage/storage.js";

let Contactos = () => {
    let sectionContactos = document.createElement('section');
    sectionContactos.className = "contactos";

    const renderizarLista = () => {
        sectionContactos.innerHTML = ""; 
        
        let h2 = document.createElement("h2");
        h2.textContent = "Contactos";
        sectionContactos.appendChild(h2);

        if (storedContacts.length === 0) {
            let p = document.createElement("p");
            p.textContent = "No hay contactos guardados.";
            sectionContactos.appendChild(p);
            return;
        }

        storedContacts.forEach((contacto, index) => {
            const item = ItemContacto(
                "Perfil.svg",
                contacto.alias, 
                contacto.nombre, 
                contacto.telefono,
                contacto.correo,
                () => {

                    storedContacts.splice(index, 1); 
                    
                    saveContactsToStorage(storedContacts); 
                    
                    renderizarLista(); 
                }
            );
            sectionContactos.appendChild(item);
        });
    };

    renderizarLista();
    return sectionContactos;
}

export { Contactos };