import { Router } from "express"

const router = Router()
let carts = []

router.get("/", (req, res) => {
    if (req.query.limit) {
        let l = parseInt(req.query.limit)
        let resultado = carts.slice(0, l);
        return res.send(resultado)
    }
    res.send(carts)
})

router.get("/:pid", (req, res) => {
    const cart = carts.find(cart => cart.id === req.params.pid)
    if (!cart) {
        res.status(404).send('ID no encontrado');
    }
    res.send(cart)
})

export default router