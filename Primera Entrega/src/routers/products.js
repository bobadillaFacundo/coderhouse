import { Router } from "express"
import f from "../filess.js"

const router = Router()
let products = f.getFromFile("./products.json")

router.get("/", (req, res) => {
    if (req.query.limit) {
        let l = parseInt(req.query.limit)
        if (l > (products.length + 1))
            return res.status(404).send({ status: "success", error: "numero mayor a la cantidad de productos" })

        let resultado = products.slice(0, l);
        return res.send(resultado)
    }
    res.send(products)
})

router.get("/:pid", (req, res) => {
    const product = products.find(product => product.id === req.params.pid)
    if (!product) {
        res.status(404).send({ status: "success", error: "id no existe" })
    }
    res.send(product)
})

router.post("/", ((req, res) => {
    const user = req.body
    if (!user.title || !user.description || !user.code || !user.stock || !user.category || !user.price)
        return res.status(400).send({ status: "success", error: "Campos vacios" })
    let id = Date.now()
    const product = {
        id,
        title: user.title,
        description: user.description,
        code: user.code,
        price: user.price,
        status: true,
        stock: user.stock,
        category: user.category,
        thumbnails: user.thumbnails || []
    }
    products.push(product)
    console.log(products);
    f.saveToFile(products, "./products.json")
    return res.send({ status: "success", message: "Product create" })
}))

router.put("/:pid", (req, res) => {
    const user = req.body
    console.log(req.params.pid);
    const pid = parseInt(req.params.pid)
    const productIndex = products.findIndex(prod => prod.id === pid);

    if (productIndex === -1) {
        return res.status(404).send({ status: "success", error: "No se encontro id" })
    }

    products[productIndex].title = user.title || products[productIndex].title
    products[productIndex].description = user.description || products[productIndex].description
    products[productIndex].code = user.code || products[productIndex].code
    products[productIndex].price = user.price || products[productIndex].price
    products[productIndex].stock = user.stock || products[productIndex].stock
    products[productIndex].category = user.category || products[productIndex].category
    products[productIndex].thumbnails = user.thumbnails || products[productIndex].thumbnails;
    f.saveToFile(products, "./products.json")
    return res.send({ status: "success", message: "Product update" })

})

router.delete("/:pid", (req, res) => {
    const len = products.length
    products = products.filter(product => product.id !== req.palabra.pid)
    if (len === products.length)
        return res.status(404).send({ status: "success", error: "No se encontro id" })
    f.saveToFile(products, "./products.json")
    return res.send({ status: "success", message: "Product delete" })
})

export default router