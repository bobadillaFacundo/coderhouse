const socket = io()
console.log(socket.data) 

socket.emit('message',"Hola mundo")

socket.on('evento_para_todos',(data)=>{
    console.log('esucho el mensaje del servidor ',data)
})

