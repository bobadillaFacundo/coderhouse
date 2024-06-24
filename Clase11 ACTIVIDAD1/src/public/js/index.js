
document.addEventListener('DOMContentLoaded', () => {
    const socket = io()
    let user


  
    Swal.fire({
        title: 'Identificarse',
        input: 'text',
        toast:true,
        text: 'Ingresa el usuario para identificarse en el chat',
        inputValidador: (value) => {
            return !value && 'Necesitas escribir un nombre de usuario para conectarse'
        },
        allowOutsideClick: false
    }).then(result => {
        user = result.value
        socket.emit('identificarse', user)

        socket.on('entrada', () => {
            const mensajeInput = document.getElementById('texto')
            mensajeInput.value =  `se conecto ${user} `
        })

        socket.on('mensaje_servidor_todos', (data) => {
            const mensajeInput = document.getElementById('texto')
            let result = ''
            data.forEach(element => {
                result += `${element.id} dice: ${element.data} ` + "\n"
            })
            mensajeInput.value = result
        }
        )

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
        )
    })



})

