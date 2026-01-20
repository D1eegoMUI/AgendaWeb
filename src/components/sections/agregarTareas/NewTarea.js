import { getTareasFromStorage } from "../../common/LocalStorage/storage.js";
import { saveTareasToStorage } from "../../common/LocalStorage/storage.js";

let storedTareas = getTareasFromStorage();

let NewTarea = () => {
    let sectionForm = document.createElement('section');
    sectionForm.className = "formulario-tarea";

    let h2 = document.createElement("h2");
    h2.textContent = "Nueva Tarea";
    sectionForm.appendChild(h2);

    let form = document.createElement("form");

    const crearInput = (label, type, placeholder) => {
        let div = document.createElement("div");
        let inp = document.createElement("input");
        inp.type = type; inp.placeholder = placeholder; inp.required = true;
        div.innerHTML = `<label>${label}</label>`;
        div.appendChild(inp);
        return { div, inp };
    };

    const crearSelect = (label, opciones) => {
        let div = document.createElement("div");
        let sel = document.createElement("select");
        opciones.forEach(opt => {
            let o = document.createElement("option");
            o.value = opt; o.textContent = opt;
            sel.appendChild(o);
        });
        div.innerHTML = `<label>${label}</label>`;
        div.appendChild(sel);
        return { div, sel };
    };

    let nombre = crearInput("Tarea:", "text", "Nombre de la tarea");
    let desc = crearInput("Descripción:", "text", "Detalles...");
    let relevancia = crearSelect("Relevancia:", ["Baja", "Media", "Alta"]);
    let dificultad = crearSelect("Dificultad:", ["Fácil", "Intermedia", "Difícil"]);

    let btn = document.createElement("button");
    btn.textContent = "Crear Tarea";
    btn.type = "submit";

    form.append(nombre.div, desc.div, relevancia.div, dificultad.div, btn);
    sectionForm.appendChild(form);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let tarea = {            
            id: Date.now(),
            nombre: nombre.inp.value,
            descripcion: desc.inp.value,
            relevancia: relevancia.sel.value,
            dificultad: dificultad.sel.value,
            estado: "Pendiente"
        };
        console.log(tarea);
        storedTareas.push(tarea);
        // Guardar en LocalStorage
        saveTareasToStorage(storedTareas);
        
        console.log("Tarea agregada exitosamente.");
        form.reset();
    });

    return sectionForm;
};

export { NewTarea, storedTareas };