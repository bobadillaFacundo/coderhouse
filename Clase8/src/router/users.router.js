import { Router } from "express"

const router = Router()
let users = []

router.get("/", (req, res) => {
    res.send(users)
})

router.post("/:user",(req,res)=>{
    users.push(req.params.user)
    res.send({ status: "success", error: "User add" })
})

export default router