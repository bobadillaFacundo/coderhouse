import express from "express"
import engine from "express-handlebars"
import __dirname from "./utils.js"
import { Server } from "socket.io"
import viewsrouter from "./routers/views.router.js"

const app = express()
//'0134.0.253.47',
const httpserver = app.listen(8000, () => console.log("servidor escuchando en el puerto 8080"))
const socketserver = new Server(httpserver)
app.engine("handlebars", engine.engine())
app.set("view engine", "handlebars")
app.set("views", __dirname + "/views")
app.use(express.static(__dirname + "/public"))
app.use("/", viewsrouter)
app.use('/css', express.static('public/css'));

const messages = []

socketserver.on('connection', socket => {

    socket.on('identificarse', us => {
          
        console.log(`Cliente conectado: ${socket.id}`);
      
        socket.emit('message',messages)
        const date = new Date()
        socket.broadcast.emit('mensaje_servidor_broadcast',{
            id: us,
            data: 'Conectado ',
            date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
        })
    })

    socket.on('message', (data,user) => {
        const date = new Date()
        messages.push({
            id: user,
            data,
            date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
        })
        socketserver.emit('mensaje_servidor_todos', messages)
    })

    socketserver.emit('mensaje_servidor_todos', messages)

    socket.on('disconnection', (us)=>{
        console.log(`Cliente desconectado: ${socket.id}`);
        const date = new Date()
        socket.broadcast.emit('mensaje_servidor_broadcast',{
            id: us,
            data: 'Desconecto ',
            date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
        })
    })
})




