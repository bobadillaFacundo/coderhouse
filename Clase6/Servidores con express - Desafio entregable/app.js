import express from 'express'
import fs from 'fs'
const app = express()
const port = 8080

// Iniciar el servidor y escuchar en el puerto 8080
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})

app.use(express.urlencoded({ extended: true }))

const products = [{
    id: 1,
    nombre: "manzana",
    cantidad: 54,
    precioo: 5541
}, {
    id: 2,
    nombre: "manzana",
    cantidad: 54,
    precioo: 5541
},
{
    id: 3,
    nombre: "manzana",
    cantidad: 54,
    precioo: 5541
},
{
    id: 4,
    nombre: "manzana",
    cantidad: 54,
    precioo: 5541
},
{
    id: 5,
    nombre: "manzana",
    cantidad: 54,
    precioo: 5541
},
{
    id: 6,
    nombre: "manzana",
    cantidad: 54,
    precioo: 5541
}, {
    id: 7,
    nombre: "manzana",
    cantidad: 54,
    precioo: 5541
},
{
    id: 8,
    nombre: "manzana",
    cantidad: 54,
    precioo: 5541
},
{
    id: 9,
    nombre: "manzana",
    cantidad: 54,
    precioo: 5541
},
{
    id: 10,
    nombre: "manzana",
    cantidad: 54,
    precioo: 5541
}]

app.get("/products", (req, res) => {
    res.send("Productos: ", products)
})

app.get("/productos/limit", (req, res) => {



    
})

app.get("/:UserID", (req, res) => {
    const product = products.find(product => product.id === req.params.UserID)
if (!product){
    return res.send("ID no existe")
}
res.send("Usuario:",product)

})