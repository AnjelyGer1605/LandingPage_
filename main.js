// Mostrar/ocultar el menú hamburguesa
const btnHamburguesa = document.getElementById("btnHamburguesa");
const menu = document.getElementById("menu");

btnHamburguesa.addEventListener("click", () => {
  menu.classList.toggle("mostrar");
});

// Validación del formulario de contacto
document
  .getElementById("formularioContacto")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const errorNombre = document.getElementById("errorNombre");
    const errorEmail = document.getElementById("errorEmail");
    const errorMensaje = document.getElementById("errorMensaje");

    // Limpiar errores
    errorNombre.style.display = "none";
    errorEmail.style.display = "none";
    errorMensaje.style.display = "none";

    let hayError = false;

    if (!nombre) {
      errorNombre.textContent = "Por favor, ingresa tu nombre.";
      errorNombre.style.display = "block";
      hayError = true;
    }

    if (!email) {
      errorEmail.textContent = "Por favor, ingresa tu correo electrónico.";
      errorEmail.style.display = "block";
      hayError = true;
    } else if (!validateEmail(email)) {
      errorEmail.textContent = "Correo electrónico no válido.";
      errorEmail.style.display = "block";
      hayError = true;
    }

    if (!mensaje) {
      errorMensaje.textContent = "Por favor, escribe un mensaje.";
      errorMensaje.style.display = "block";
      hayError = true;
    }

    if (hayError) return;

    // Mostrar el pop-up de éxito
    document.getElementById("mensajeEnviado").style.display = "flex";
    this.reset();
  });

// Validación del correo
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

//FORMULARIO REGISTRO
document
  .getElementById("formularioRegistro")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("registroNombre").value.trim();
    const email = document.getElementById("registroEmail").value.trim();
    const password = document.getElementById("registroPassword").value.trim();
    const confirmar = document.getElementById("registroConfirmar").value.trim();

    const errorNombre = document.getElementById("errorRegistroNombre");
    const errorEmail = document.getElementById("errorRegistroEmail");
    const errorPassword = document.getElementById("errorRegistroPassword");
    const errorConfirmar = document.getElementById("errorRegistroConfirmar");

    // Limpiar errores
    errorNombre.style.display = "none";
    errorEmail.style.display = "none";
    errorPassword.style.display = "none";
    errorConfirmar.style.display = "none";

    let hayError = false;

    if (!nombre) {
      errorNombre.textContent = "Por favor, ingresa tu nombre.";
      errorNombre.style.display = "block";
      hayError = true;
    }

    if (!email) {
      errorEmail.textContent = "Por favor, ingresa tu correo electrónico.";
      errorEmail.style.display = "block";
      hayError = true;
    } else if (!validateEmail(email)) {
      errorEmail.textContent = "Correo electrónico no válido.";
      errorEmail.style.display = "block";
      hayError = true;
    }

    if (!password) {
      errorPassword.textContent = "Ingresa una contraseña.";
      errorPassword.style.display = "block";
      hayError = true;
    }

    if (!confirmar) {
      errorConfirmar.textContent = "Confirma tu contraseña.";
      errorConfirmar.style.display = "block";
      hayError = true;
    } else if (password !== confirmar) {
      errorConfirmar.textContent = "Las contraseñas no coinciden.";
      errorConfirmar.style.display = "block";
      hayError = true;
    }

    if (hayError) return;

    document.getElementById("registroExito").style.display = "flex";
    this.reset();
    cerrarRegistro();
  });
function cerrarPopupRegistro() {
  document.getElementById("registroExito").style.display = "none";
  cerrarRegistro();
}

function Aceptar() {
  document.getElementById("mensajeEnviado").style.display = "none";
}

let contador = 0;
const contadorCarrito = document.getElementById("contador-carrito");
const botonesComprar = document.querySelectorAll(".oferta button");

botonesComprar.forEach((boton) => {
  boton.addEventListener("click", () => {
    contador++;
    contadorCarrito.textContent = contador;
  });
});
function mostrarRegistro() {
  document.getElementById("Registro").classList.remove("oculto");
}

function cerrarRegistro() {
  document.getElementById("Registro").classList.add("oculto");
}
