import { Router } from "express"
import f from "../file.js"

const router = Router()
let carts = f.getProductsFromFile("./carts.json")

router.get("/", (req, res) => {
    res.send(carts)
})

router.get("/:cid",(req,res)=>{
    const cart = carts.find(cart => cart.id === req.params.cid)
    res.send(cart.products)
})


router.post("/:cid/product/:pid",(req,res)=>{
    const cart = carts.find(cart => cart.id === req.params.cid)
    const product = cart.products.find(product => product.id === req.params.cid)

    
})

export default router