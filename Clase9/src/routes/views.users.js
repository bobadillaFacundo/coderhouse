import ex from "express"

const router = ex.Router()

let users = [
    { nombre: "facundo1", apellido: "bobadilla", edad: "27", correo: "bobadillaf97@gmail.com", teléfono: "11232432" },
    { nombre: "facundo2", apellido: "bobadilla", edad: "27", correo: "bobadillaf97@gmail.com", teléfono: "11232432" },
    { nombre: "facundo3", apellido: "bobadilla", edad: "27", correo: "bobadillaf97@gmail.com", teléfono: "11232432" },
    { nombre: "facundo4", apellido: "bobadilla", edad: "27", correo: "bobadillaf97@gmail.com", teléfono: "11232432" },
    { nombre: "facundo5", apellido: "bobadilla", edad: "27", correo: "bobadillaf97@gmail.com", teléfono: "11232432" }
]

router.get("/", (req, res) => {
    const use = users[Math.floor(Math.random() * (users.length || 0))]
    res.render("index", { use, style: "index.css" })
})

export default router