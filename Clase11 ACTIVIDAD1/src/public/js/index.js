

document.addEventListener('DOMContentLoaded', () => {
    const socket = io()
    let user
    const mensaje = document.getElementById('texto')
    const mensajeInput = document.getElementById('input');
    const respuestaDiv = document.getElementById('enviar')

    Swal.fire({
        title: 'Identificarse',
        input: 'text',
        text: 'Ingresa el usuario para identificarse en el chat',
        inputValidator: (value) => {
            return !value && 'Necesitas escribir un nombre de usuario para conectarse'
        },
        allowOutsideClick: false
    }).then(result => {
        mensaje.value = ''
        user = result.value
        socket.emit('identificarse', user)
      
    })


     
    socket.on('mensaje_servidor_broadcast', (element) => {
        console.log(element)
        mensaje.value += `${element.id}  ${element.data}`
    })

    socket.on('mensaje_servidor_todos', (data) => {
        let result = ''
        data.forEach(element => {
            result += `${element.id} dice: ${element.data} ` + "\n"
        })
        mensaje.value = result
    }
    )

    respuestaDiv.addEventListener('click', () => {
        if (mensajeInput.value) {
            // Enviar mensaje al servidor
            socket.emit('message', mensajeInput.value,user)
            mensajeInput.value = '' // Limpiar el input
        }
    })

})







