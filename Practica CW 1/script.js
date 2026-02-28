const inputNombre = document.getElementById('nombreUsuario');
const botonSaludar = document.getElementById('btnSaludar')

botonSaludar.addEventListener('click', () => {
    const nombre = inputNombre.value.trim();
    

    if (nombre.trim() !== ''){
        mensaje.textContent = `Hola ${nombre} Bienvenido al ejercicio DOM 1`;

        inputNombre.value = '';

    }else{
        mensajeSalud0.textContent = "Coloque en un nombre correcto!"
        inputNombre.value = '';
    }

})

const formulario = document.getElementById('formSuscripcion');
const inputCorreo = document.getElementById('correoUsuario');
const mensajeExito = document.getElementById('mensajeEnvio');

formulario.addEventListener('submit', (event) => {

    event.preventDefault();

    const correo = inputCorreo.value 
    mensajeExito.textContent = `Gracias por suscribirte con el correo: ${correo}`;

    formulario.reset();
})