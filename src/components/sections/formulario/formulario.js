import { ContactList } from "../contactos/db.js";
import { viewContacts } from "../../layout/nav/NavControles.js"; 

let Formulario = () => {
    let sectionForm = document.createElement('section');
    sectionForm.className = "formulario-contacto";

    let h2 = document.createElement("h2");
    h2.textContent = "Agregar Nuevo Contacto";
    sectionForm.appendChild(h2);

    let form = document.createElement("form");
    form.id = "contact-form";

    const crearCampo = (labelTexto, inputType, inputPlaceholder) => {
        let container = document.createElement("div");
        container.className = "form-group";

        let label = document.createElement("label");
        label.textContent = labelTexto;

        let input = document.createElement("input");
        input.type = inputType;
        input.placeholder = inputPlaceholder;
        input.required = true;

        container.appendChild(label);
        container.appendChild(input);
        return { container, input };
    };

    let aliasCampo = crearCampo("Alias:", "text", "Ej: Golden Expirience");
    let nombreCampo = crearCampo("Nombre Completo:", "text", "Ej: Giorno Giovanna");
    let telCampo = crearCampo("Teléfono:", "tel", "Ej: +502 1234 5678");
    let correoCampo = crearCampo("Correo Electrónico:", "email", "ejemplo@correo.com");

    let btnSubmit = document.createElement("button");
    btnSubmit.type = "submit";
    btnSubmit.textContent = "Guardar Contacto";

    form.appendChild(aliasCampo.container);
    form.appendChild(nombreCampo.container);
    form.appendChild(telCampo.container);
    form.appendChild(correoCampo.container);
    form.appendChild(btnSubmit);
    
    sectionForm.appendChild(form);
   
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        let contacto = {
            alias: aliasCampo.input.value,
            nombre: nombreCampo.input.value,
            telefono: telCampo.input.value,
            correo: correoCampo.input.value,
            imagen: "Perfil.svg"
        };   

        console.log("Datos capturados:", contacto);
        ContactList.push(contacto);
        
        alert("Contacto Agregado exitosamente.");
        form.reset();

        if (typeof viewContacts === "function") {
            viewContacts();
        }
    });

    return sectionForm;
}

export { Formulario };