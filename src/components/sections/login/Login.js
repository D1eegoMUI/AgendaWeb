let User = "admin";
let Password = "1234";

let login = function () {

    let login = document.createElement("section");
    login.classList.add("login-container");

    let h3 = document.createElement("h3");
    h3.innerHTML = "Login";

    let user = document.createElement("input");
    user.type = "text";
    user.placeholder = "Usuario"

    let password = document.createElement("input");
    password.type = "password"
    password.placeholder = "Password"

    let button = document.createElement("button");
    button.innerHTML = "Iniciar Sesion";
    
    //credenciales de prueba
    let notaCredenciales = document.createElement("div");
    notaCredenciales.classList.add("login-note");
    notaCredenciales.innerHTML = `
        <p><strong>Acceso de prueba:</strong></p>
        <p>Usuario: admin | Password: 1234</p>
    `;

    button.addEventListener("click", () => {
        if (user.value === User && password.value === Password) {
            alert("¡Bienvenido al sistema!");
            window.location.href = "src/app.html";
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });

    login.appendChild(h3);
    login.appendChild(user);
    login.appendChild(password);
    login.appendChild(button);
    login.appendChild(notaCredenciales);

    return login;
}

export { login };