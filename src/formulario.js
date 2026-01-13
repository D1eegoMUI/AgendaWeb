document.getElementById('form-contacto').addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // 1. Capturamos los valores
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const imagen = document.getElementById('imagen').value || "Perfil.svg";

    // 2. Creamos el objeto contacto
    const nuevoContacto = { img: imagen, nombre: nombre, tel: telefono };

    // 3. Guardamos en LocalStorage
    // Primero obtenemos lo que ya existe o un array vacío
    let listaActual = JSON.parse(localStorage.getItem('misContactos')) || [];
    listaActual.push(nuevoContacto);
    
    // Guardamos de nuevo la lista actualizada
    localStorage.setItem('misContactos', JSON.stringify(listaActual));

    // 4. Redirigimos a la página principal
    window.location.href = "app.html";
});