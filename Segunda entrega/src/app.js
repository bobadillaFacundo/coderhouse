import db from 'mongoose'
import express from 'express'
import engine from "express-handlebars"
import __dirname from "./utils.js"
import { Server } from "socket.io"
import viewsrouter from "./routers/views.router.js"

db.connect('mongodb://localhost:/coderhouse')

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
})