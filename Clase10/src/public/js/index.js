const socket = io()

socket.on('connect', () => {
    console.log('Conectado al servidor')
    socket.emit('message',"Hola mundo")
    socket.on('enviar_string', data => {
        console.log('Mensaje recibido desde el servidor:', data)
    })
})