document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario');
    const nombreInput = document.getElementById('nombre');
    const correoInput = document.getElementById('correo');
    const mensajeInput = document.getElementById('mensaje');
    const enviarBtn = document.getElementById('enviar');
    
    const nombreError = document.getElementById('nombreError');
    const correoError = document.getElementById('correoError');
    const mensajeError = document.getElementById('mensajeError');

    // Función para validar el nombre
    const validarNombre = () => {
        const nombre = nombreInput.value.trim();
        if (nombre === '') {
            nombreError.textContent = 'El nombre no debe estar vacío';
            return false;
        } else if (nombre.length > 50) {
            nombreError.textContent = 'El nombre no debe superar los 50 caracteres';
            return false;
        } else {
            nombreError.textContent = '';
            return true;
        }
    };

    // Función para validar el correo
    const validarCorreo = () => {
        const correo = correoInput.value.trim();
        const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Validación básica de formato de correo
        if (correo === '') {
            correoError.textContent = 'El correo no debe estar vacío';
            return false;
        } else if (!correoRegex.test(correo)) {
            correoError.textContent = 'El formato del correo es incorrecto';
            return false;
        } else {
            correoError.textContent = '';
            return true;
        }
    };

    // Función para validar el mensaje
    const validarMensaje = () => {
        const mensaje = mensajeInput.value.trim();
        if (mensaje === '') {
            mensajeError.textContent = 'El mensaje no debe estar vacío';
            return false;
        } else if (mensaje.length > 300) {
            mensajeError.textContent = 'El mensaje no debe superar los 300 caracteres';
            return false;
        } else {
            mensajeError.textContent = '';
            return true;
        }
    };

    // Función para habilitar el botón enviar si todo es válido
    const habilitarBotonEnviar = () => {
        if (validarNombre() && validarCorreo() && validarMensaje()) {
            enviarBtn.disabled = false;
        } else {
            enviarBtn.disabled = true;
        }
    };

    // Escuchar los cambios en los campos y validar en tiempo real
    nombreInput.addEventListener('input', habilitarBotonEnviar);
    correoInput.addEventListener('input', habilitarBotonEnviar);
    mensajeInput.addEventListener('input', habilitarBotonEnviar);

    // Validar el formulario al intentar enviarlo
    formulario.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar el envío si hay errores

        const nombreValido = validarNombre();
        const correoValido = validarCorreo();
        const mensajeValido = validarMensaje();

        if (nombreValido && correoValido && mensajeValido) {
            alert('Formulario enviado con éxito');
            formulario.reset(); // Limpiar el formulario después de enviarlo
            habilitarBotonEnviar(); // Deshabilitar el botón después de enviar
        }
    });
});
