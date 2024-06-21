import ex from "express"

const router = ex.Router()

router.get("/", (req, res) => {
    res.render("register")
})

router.post("/", (req, res) => {
    const user = req.body
    console.log(user)
})

export default router