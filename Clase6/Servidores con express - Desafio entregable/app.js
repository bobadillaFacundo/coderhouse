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
    if (req.query.limit){
        let l = parseInt(req.query.limit)
        let resultado = products.slice(0, l);
        return res.send(resultado)        
    }
    res.send(products)
})

app.get("/:UserID", (req, res) => {
    const product = products.find(product => product.id === req.params.UserID)
    if (!product) {
        res.status(404).send('ID no encontrado');
    }
    res.send(product)
})

