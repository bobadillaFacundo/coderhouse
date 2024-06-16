import fs from 'fs'

const users = [{
    id: "1",
    first_name: "carlos",
    last_name: "perez",
    age: 55
}, {
    id: "2",
    first_name: "pedro",
    last_name: "gonzales",
    age: 21
}, {
    id: "3",
    first_name: "juan",
    last_name: "cabrera",
    age: 35
}]

const savePF = ((p, path) => {
    fs.writeFileSync(path, JSON.stringify(p), 'utf8')
})

savePF(users, "./User.JSON")
