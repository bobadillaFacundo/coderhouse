import { log } from 'console'
import express from 'express'
import fs from 'fs'

const app = express()
const port = 8080

// Iniciar el servidor y escuchar en el puerto 8080
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

function getUsersFromFile(path) {
    try {
        const data = fs.readFileSync(path, 'utf8')
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}
const savePF = ((p, path) => {
    fs.writeFileSync(path, JSON.stringify(p), 'utf8')
})
// let users = getUsersFromFile("./User.json")


// app.post("/createuser", ((req, res) => {
//     const user = {
//         id: req.query.id,
//         first_name: req.query.first_name,
//         last_name: req.query.last_name,
//         age: req.query.age
//     }
//     users.push(user)
//     res.send({ status: "success", error: "User create" })
//     savePF(users, "./User.json")
// }))

// app.get("/users", ((req, res) => {
//     res.send(users)
// }))

// app.delete("/user/:id", (req, res) => {
//     const len = users.length
//     const num = req.params.id
//     users = users.filter(user => user.id != num)
//     if (users.length === len) {
//         return res.status(404).send({ status: "error", error: "User not found" })
//     }
//     res.send({ status: "succ""ess", error: "User deletd" })
//     savePF(users,"./User.json")
// })

let frase = getUsersFromFile("./frase.json")

app.get("/api/frase", (req, res) => {
    res.send(frase[0].frase)
})

app.get("/api/frase/:pos", (req, res) => {
    const frasearray = frase[0].frase.split(" ")
    res.send(frasearray[req.params.pos])
})

app.post("/api/palabras", (req, res) => {

    let frasearray = frase[0].frase.split(" ")
    frasearray = frasearray.concat(req.query.palabra)
    const length = frasearray.length
    frasearray = frasearray.join(' ')
    const palabra = [{
        frase: frasearray
    }]
    savePF(palabra, "./frase.json")
    const result = {
        palabra: req.query.palabra,
        pos: length
    }
    res.send(result)
})

app.put('/api/palabras/:pos', (req, res) => {

})

app.delete("/api/palabras/:pos", (req, res) => {
    let frasearray = frase[0].frase.split(" ")
    let result = []
    const num = parseInt(req.params.pos) - 1
    for (let index = 0; index < frasearray.length; index++) {
        if (index !== num)
            result.push(frasearray[index])
    }
    result = result.join(" ")
    const palabra = [{
        frase: result
    }]
    savePF(palabra, "./frase.json")
    console.log(palabra)
    res.send(result)
})