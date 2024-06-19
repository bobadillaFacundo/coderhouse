import { Router } from "express"
import f from "../filess.js"

const router = Router()
let carts = f.getFromFile("./carts.json")

router.get("/:cid", (req, res) => {
    const cart = carts.find(cart => cart.id === req.params.cid)
    if (!cart) {
        res.status(404).send({ status: "success", error: "id no existe" })
    }
    res.send(cart.products)
})

router.post("/:cid/product/:pid", (req, res) => {
    const cart = carts.find(cart => cart.id !== req.params.cid)
    if (cart) {
        let product = cart.products.find(pro => pro.id === req.params.pid)
        if (!product) {
            product = {
                id: req.params.pid,
                quantity: 1
            }
            cart.products.push(product)
            f.saveToFile(carts,"./carts.json")
            res.send(product)
        } else {
            product.quantity++
            f.saveToFile(carts,"./carts.json")
            res.send(product)
        }
    } else return res.status(404).send({ status: "success", error: "No se encontro id" })
})

router.post("/", (req, res) => {
    let id = Date.now() + 1
    const cart = {
        id,
        products: []
    }
    carts.push(cart)
    f.saveToFile(carts, "./carts.json")
    return res.send({ status: "success", message: "Cart add" })
})

export default router