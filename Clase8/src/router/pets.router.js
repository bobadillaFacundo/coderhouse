import { Router } from "express"


const router = Router()
let pets = ["pedro"]

router.get("/", (req, res) => {
    res.send(pets)
})

router.post("/:pet",(req,res)=>{
    pets.push(req.params.pet)
    res.send({ status: "success", error: "Pet add" })
})

export default router