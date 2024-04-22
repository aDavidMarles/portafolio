document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencias a los elementos del formulario
    const nombreInput = document.querySelector('input[name="nombre"]');
    const emailInput = document.querySelector('input[name="email"]');
    const asuntoInput = document.querySelector('input[name="asunto"]');
    const mensajeInput = document.querySelector('textarea[name="mensaje"]');
    const botonEnviar = document.querySelector('.formcontato__botao');

    // Deshabilitar el botón de enviar al cargar la página
    botonEnviar.disabled = true;

    // Función para validar el nombre
    function validarNombre() {
        const nombreValor = nombreInput.value.trim();
        if (nombreValor === "") {
            nombreInput.style.backgroundColor = "salmon";
            nombreInput.setCustomValidity("El nombre no puede estar en blanco.");
            return false;
        } else if (nombreValor.length > 50) {
            nombreInput.style.backgroundColor = "salmon";
            nombreInput.setCustomValidity("El nombre debe tener máximo 50 caracteres.");
            return false;
        } else {
            nombreInput.style.backgroundColor = "lightgreen";
            nombreInput.setCustomValidity("");
            return true;
        }
    }

    // Función para validar el email
    function validarEmail() {
        const emailValor = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailValor === "") {
            emailInput.style.backgroundColor = "salmon";
            emailInput.setCustomValidity("El e-mail no puede estar en blanco.");
            return false;
        } else if (!emailRegex.test(emailValor)) {
            emailInput.style.backgroundColor = "salmon";
            emailInput.setCustomValidity("El e-mail debe estar en formato correcto (ej. texto@texto.com).");
            return false;
        } else {
            emailInput.style.backgroundColor = "lightgreen";
            emailInput.setCustomValidity("");
            return true;
        }
    }

    // Función para validar el asunto
    function validarAsunto() {
        const asuntoValor = asuntoInput.value.trim();
        if (asuntoValor === "") {
            asuntoInput.style.backgroundColor = "salmon";
            asuntoInput.setCustomValidity("El asunto no puede estar en blanco.");
            return false;
        } else if (asuntoValor.length > 50) {
            asuntoInput.style.backgroundColor = "salmon";
            asuntoInput.setCustomValidity("El asunto debe tener máximo 50 caracteres.");
            return false;
        } else {
            asuntoInput.style.backgroundColor = "lightgreen";
            asuntoInput.setCustomValidity("");
            return true;
        }
    }

    // Función para validar el mensaje
    function validarMensaje() {
        const mensajeValor = mensajeInput.value.trim();
        if (mensajeValor === "") {
            mensajeInput.style.backgroundColor = "salmon";
            mensajeInput.setCustomValidity("El mensaje no puede estar en blanco.");
            return false;
        } else if (mensajeValor.length > 300) {
            mensajeInput.style.backgroundColor = "salmon";
            mensajeInput.setCustomValidity("El mensaje debe tener máximo 300 caracteres.");
            return false;
        } else {
            mensajeInput.style.backgroundColor = "lightgreen";
            mensajeInput.setCustomValidity("");
            return true;
        }
    }

    // Función para habilitar o deshabilitar el botón de enviar según el estado de los campos
    function habilitarBotonEnviar() {
        const nombreValido = validarNombre();
        const emailValido = validarEmail();
        const asuntoValido = validarAsunto();
        const mensajeValido = validarMensaje();
        
        if (nombreValido && emailValido && asuntoValido && mensajeValido) {
            botonEnviar.disabled = false; // Habilitar el botón de enviar
            
        } else {
            botonEnviar.disabled = true; // Deshabilitar el botón de enviar
        }
    }

    // Manejar eventos de entrada para los campos del formulario
    nombreInput.addEventListener("input", habilitarBotonEnviar);
    emailInput.addEventListener("input", habilitarBotonEnviar);
    asuntoInput.addEventListener("input", habilitarBotonEnviar);
    mensajeInput.addEventListener("input", habilitarBotonEnviar);

    // Manejar evento de clic para enviar el mensaje
    botonEnviar.addEventListener("click", function(event) {
        // Prevenir el comportamiento predeterminado del botón (enviar el formulario)
        event.preventDefault();
        
        // Validar nuevamente los campos antes de enviar el mensaje
        const nombreValido = validarNombre();
        const emailValido = validarEmail();
        const asuntoValido = validarAsunto();
        const mensajeValido = validarMensaje();

        // Enviar el mensaje si todos los campos son válidos
        if (nombreValido && emailValido && asuntoValido && mensajeValido) {
            // Lógica para enviar el mensaje aquí
        } else {
            alert("No se pueden enviar el mensaje. Por favor, revisa los campos.");
        }
    });
});




// document.addEventListener("DOMContentLoaded", function() {
//     // Obtener referencias a los elementos del formulario
//     const nombreInput = document.querySelector('input[name="nombre"]');
//     const emailInput = document.querySelector('input[name="email"]');
//     const asuntoInput = document.querySelector('input[name="asunto"]');
//     const mensajeInput = document.querySelector('textarea[name="mensaje"]');
//     const botonEnviar = document.querySelector('.formcontato__botao');

//     // Función para validar el nombre (se mantiene igual)
//     function validarNombre() {
//         const nombreValor = nombreInput.value.trim();
//         if (nombreValor === "") {
//             nombreInput.style.backgroundColor = "salmon";
//             nombreInput.setCustomValidity("El nombre no puede estar en blanco.");
//             return false;
//         } else if (nombreValor.length > 50) {
//             nombreInput.style.backgroundColor = "salmon";
//             nombreInput.setCustomValidity("El nombre debe tener máximo 50 caracteres.");
//             return false;
//         } else {
//             nombreInput.style.backgroundColor = "lightgreen";
//             nombreInput.setCustomValidity("");
//             return true;
//         }
//     }

//     // Función para validar el email (se mantiene igual)
//     function validarEmail() {
//         const emailValor = emailInput.value.trim();
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+(\.[^\s@]+)*$/;
//         ;
//         if (emailValor === "") {
//             emailInput.style.backgroundColor = "salmon";
//             emailInput.setCustomValidity("El e-mail no puede estar en blanco.");
//             return false;
//         } else if (!emailRegex.test(emailValor)) {
//             emailInput.style.backgroundColor = "salmon";
//             emailInput.setCustomValidity("El e-mail debe estar en formato correcto (ej. texto@texto.com).");
//             return false;
//         } else {
//             emailInput.style.backgroundColor = "lightgreen";
//             emailInput.setCustomValidity("");
//             return true;
//         }
//     }

//     // Función para validar el asunto (se mantiene igual)
//     function validarAsunto() {
//         const asuntoValor = asuntoInput.value.trim();
//         if (asuntoValor === "") {
//             asuntoInput.style.backgroundColor = "salmon";
//             asuntoInput.setCustomValidity("El asunto no puede estar en blanco.");
//             return false;
//         } else if (asuntoValor.length > 50) {
//             asuntoInput.style.backgroundColor = "salmon";
//             asuntoInput.setCustomValidity("El asunto debe tener máximo 50 caracteres.");
//             return false;
//         } else {
//             asuntoInput.style.backgroundColor = "lightgreen";
//             asuntoInput.setCustomValidity("");
//             return true;
//         }
//     }

//     // Función para validar el mensaje
//     function validarMensaje() {
//         const mensajeValor = mensajeInput.value.trim();
//         if (mensajeValor === "") {
//             mensajeInput.style.backgroundColor = "salmon";
//             mensajeInput.setCustomValidity("El mensaje no puede estar en blanco.");
//             return false;
//         } else if (mensajeValor.length > 300) {
//             mensajeInput.style.backgroundColor = "salmon";
//             mensajeInput.setCustomValidity("El mensaje debe tener máximo 300 caracteres.");
//             return false;
//         } else {
//             mensajeInput.style.backgroundColor = "lightgreen";
//             mensajeInput.setCustomValidity("");
//             return true;
//         }
//     }

//     // Event listeners para los campos del formulario (se mantiene igual)
//     nombreInput.addEventListener("input", validarNombre);
//     emailInput.addEventListener("input", validarEmail);
//     asuntoInput.addEventListener("input", validarAsunto);
//     mensajeInput.addEventListener("input", validarMensaje);

    
// });

