
document.addEventListener('DOMContentLoaded', () => {
    const socket = io()
    
    const mensajeInput = document.getElementById('input');
    const respuestaDiv = document.getElementById('enviar');

    respuestaDiv.addEventListener('click', () => {
        const mensaje = mensajeInput.value
        if (mensaje) {
            // Enviar mensaje al servidor
            socket.emit('message', mensaje)
            mensajeInput.value = '' // Limpiar el input
        }
    }
)})

