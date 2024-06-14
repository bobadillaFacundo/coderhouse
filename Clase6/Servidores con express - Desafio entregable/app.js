import express from 'express'
import fs from 'fs'

const app = express()
const port = 8080

// Iniciar el servidor y escuchar en el puerto 8080
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})

app.use(express.urlencoded({ extended: true }))

function getProductsFromFile(path) {
    try {
        const data = fs.readFileSync(path, 'utf8')
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}
const products = getProductsFromFile("./Products.json")

app.get("/products", (req, res) => {
    res.send(products)
})

app.get("/:UserID", (req, res) => {
    const product = products.find(product => product.id === req.params.UserID)
    if (!product) {
        res.status(404).send('ID no encontrado');
    }
    res.send(product)
})

app.get("/:limit", (req, res) => {
        let limit = parseInt(req.query.limit)
        resultado = products.slice(0, limit);
        res.send(resultado)
    }
)