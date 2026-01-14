import { ContactList } from "../contactos/db.js";
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

    let nombreCampo = crearCampo("Nombre:", "text", "Ej: Juan Pérez");
    let telCampo = crearCampo("Teléfono:", "tel", "Ej: +54 11...");

    let btnSubmit = document.createElement("button");
    btnSubmit.type = "submit";
    btnSubmit.textContent = "Guardar Contacto";

    form.appendChild(nombreCampo.container);
    form.appendChild(telCampo.container);
    form.appendChild(btnSubmit);
    sectionForm.appendChild(form);

    //Programacion del formulario   
    form.addEventListener("submit", (e)=> {
        e.preventDefault();
            let contacto = {
        nombre: nombreCampo.input.value,
        telefono: telCampo.input.value
    };   
        console.log(contacto);
        ContactList.push(contacto);
        console.log("Contacto Agregado existosamente.");
        //limpiar el formulario
        form.reset();
    });

    return sectionForm;
}

export { Formulario };