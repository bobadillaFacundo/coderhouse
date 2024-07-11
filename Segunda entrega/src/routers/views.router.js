const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
    res.render("index")
})
router.get("/realtimeproducts", (req, res) => {
    res.render("realTimeProducts")
})

router.post("/realtimeproducts", (req, res) => {
    res.render("realTimeProducts")
})



module.exports = router
