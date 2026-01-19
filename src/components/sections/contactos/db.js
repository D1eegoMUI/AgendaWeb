import { getContactsFromStorage } from "../../common/LocalStorage/storage.js";

let storedContacts = getContactsFromStorage();

let ContactList = storedContacts.length > 0 ? storedContacts : [
    {alias: "Juanito", nombre: "Juan Perez", telefono: "123456789", correo: "juan@correo.com"},
    {alias: "Mari", nombre: "Maria Lopez", telefono: "987654321", correo: "maria@correo.com"},
    {alias: "Carlos", nombre: "Carlos Rodriguez", telefono: "555555555", correo: "carlos@correo.com"}
];
export {ContactList};