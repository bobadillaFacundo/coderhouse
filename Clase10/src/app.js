import express from "express"
import engine from "express-handlebars"
import __dirname from "./utils.js"
import viewsrouter from "./routers/views.router.js"
import {Server, Socket} from "socket.io"

const app = express()
const httpserver = app.listen(8080,()=>console.log("servidor escuchando en el puerto 8080"))
const socketserver = new Server(httpserver)
app.engine("handlebars", engine.engine())
app.set("view engine", "handlebars")
app.set("views", __dirname + "/views")
app.use(express.static(__dirname + "/public"))
app.use("/api",viewsrouter)

const messages = []

socketserver.on('connection',socket=>{
    console.log("Nuevo cliente conectado")
    socket.on('message',(data=>{
        messages.push({
            socketserver,
            data
        })
        const result = data.split("")
        result.forEach(element => {
            console.log(element)
        })
    }))
    socketserver.emit('evento_para_todos',"Hola mundo")

    socket.disconnect()
})

