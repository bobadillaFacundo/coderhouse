import fs from 'fs'

const products = [{
    id: "1",
    nombre: "manzana",
    cantidad: 5111111111114,
    precioo: 5541
}, {
    id: "2",
    nombre: "manzana",
    cantidad: 54,
    precioo: 5541
},
{
    id: "3",
    nombre: "manzana",
    cantidad: 54,
    precioo: 5541
},
{
    id: "4",
    nombre: "manzana",
    cantidad: 54,
    precioo: 5541
},
{
    id: "5",
    nombre: "manzana",
    cantidad: 54,
    precioo: 5541
},
{
    id: "6",
    nombre: "manzana",
    cantidad: 54,
    precioo: 5541
}, {
    id: "7",
    nombre: "manzana",
    cantidad: 54,
    precioo: 5541
},
{
    id: "8",
    nombre: "manzana",
    cantidad: 54,
    precioo: 5541
},
{
    id: "9",
    nombre: "manzana",
    cantidad: 54,
    precioo: 5541
},
{
    id: "10",
    nombre: "manzana",
    cantidad: 54,
    precioo: 5541
}]

const savePF = ((p,path) =>{
    fs.writeFileSync(path, JSON.stringify(p), 'utf8')
})

savePF(products,"./Products.JSON")
