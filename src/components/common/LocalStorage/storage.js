// claves para cada lista
const CONTACTOS_KEY = 'agenda_contactos';
const TAREAS_KEY = 'agenda_tareas';

function saveContactsToStorage(contactos) {
    localStorage.setItem(CONTACTOS_KEY, JSON.stringify(contactos));
}

function getContactsFromStorage(){
    return JSON.parse(localStorage.getItem(CONTACTOS_KEY)) || [];
}

function saveTareasToStorage(tareas) {
    localStorage.setItem(TAREAS_KEY, JSON.stringify(tareas));
}

function getTareasFromStorage(){
    return JSON.parse(localStorage.getItem(TAREAS_KEY)) || [];
}

export {CONTACTOS_KEY, TAREAS_KEY, saveContactsToStorage, getContactsFromStorage, saveTareasToStorage, getTareasFromStorage};