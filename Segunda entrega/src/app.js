const db = require('mongoose')
const express = require('express')
const engine = require("express-handlebars")
const { Server } = require("socket.io")
const viewsrouter = require("./routers/views.router.js")


const app = express()
const httpserver = app.listen(8080, () => console.log("servidor escuchando en el puerto 8080"))
const socketserver = new Server(httpserver)
app.engine("handlebars", engine.engine())
app.set("view engine", "handlebars")
app.set("views", __dirname + "/views")
app.use(express.static(__dirname + "/public"))
app.use("/api", viewsrouter)
app.use('/css', express.static('public/css'));

socketserver.on('connection', socket => {
  //  db.connect('mongodb://localhost:27017')
})