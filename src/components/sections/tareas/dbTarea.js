import { getTareasFromStorage } from "../../common/LocalStorage/storage.js";

let storedTareas = getTareasFromStorage();

let TareaList = storedTareas.length > 0 ? storedTareas : [
    {
        id: Date.now() + 1, nombre: "Comprar alimentos", descripcion: "Ir al mercado por frutas y verduras", 
        relevancia: "Alta", dificultad: "Baja", estado: "Pendiente"
    },
    {
        id: Date.now() + 2, nombre: "Estudiar para el examen", descripcion: "Repasar los módulos de JavaScript", 
        relevancia: "Media", dificultad: "Alta", estado: "En Proceso"
    }
];

export { TareaList };