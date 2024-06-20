import users from "./router/users.router.js"
import pets from "./router/pets.router.js"
import express from "express"

const app = express()
const port = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/users', users); // Monta el router de usuarios en /api/users
app.use('/api/pets', pets)

// Iniciar el servidor y escuchar en el puerto 8080
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})