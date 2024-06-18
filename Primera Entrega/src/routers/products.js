import { Router } from "express"
import f from "../file.js"

const router = Router()
let products = f.getProductsFromFile("./src/products.json")

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
        return res.status(404).send({ status: "success", error: "Campos vacios" })
    let id = Date.now();
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
    f.saveProductsToFile(products, "./products.json")
    return res.send({ status: "success", message: "Product create" })
}))

router.put("/:pid", (req, res) => {
    const user = req.body

})

router.delete("/:pid", (req, res) => {
    products = products.filter(product => product.id !== req.palabra.pid)
    f.saveProductsToFile(products, "./products.json")
    return res.send({ status: "success", message: "Product delete" })
})


export default router