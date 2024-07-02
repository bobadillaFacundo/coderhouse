const { Router } = require("express")
const f = require("../filess.js")

const router = Router()
let carts = f.getFromFile("./carts.json")

router.get("/:cid", (req, res) => {
    const cart = carts.find(cart => cart.id === parseInt(req.params.cid))
    if (!cart) {
        return res.status(404).send({ status: "success", error: "id no existe" })
    }
    res.send(cart.products)
})

router.post("/:cid/product/:pid", (req, res) => {
    const cart = carts.find(cart => cart.id === parseInt(req.params.cid)) //controlar si hay cart
    if (!cart) return res.status(404).send({ status: "success", error: "No se encontro id cart" }) //pasa si no existe

    const products = f.getFromFile('./products.json')
    let product = products.find(pro => pro.id === parseInt(req.params.pid))
    if (!product) return res.status(404).send({ status: "success", error: "No product id no existe" })//si no existe

    product = cart.products.find(pro => pro.id === parseInt(req.params.pid))//busca el producto mandado
    if (!product) {
        product = {
            id: req.params.pid,
            quantity: 1
        }
        cart.products.push(product)
        f.saveToFile(carts, "./carts.json")
        return res.send(product)
    }
    product.quantity++
    f.saveToFile(carts, "./carts.json")
    res.send(product)
}



)

router.post("/", (req, res) => {
    let id = Date.now() + 1
    const cart = {
        id,
        products: []
    }
    carts.push(cart)
    f.saveToFile(carts, "./carts.json")
    res.send({ status: "success", message: "Cart add" })
})

module.exports = router