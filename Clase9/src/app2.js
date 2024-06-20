import express from "express"
import engine from "express-handlebars"
import __dirname from "./utils.js"
import users from "./routes/views.register.js"

const app = express()
const port = 8080
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine("handlebars", engine.engine())
app.set("view engine", "handlebars")
app.set("views", __dirname + "/views")

app.use(express.static(__dirname + "/public"))
app.use("/api", users)


// Iniciar el servidor y escuchar en el puerto 8080
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})