let productos = Array()
productos.push(
    {
    manzana:3,
    peras:2,
    carne:1,
    jugos:5,
    dulces:2
},
{
    manzana:1,
    sandia:1,
    huevos:2,
    jugos:1,
    panes:4
})


function tiposProducto(productos){
    
    productos.forEach(element => {
        result = Object.keys(element) 
        console.log(result)
    });
}

console.log(tiposProducto(productos))

function cantidadProducto(productos){
    
    productos.forEach(element => {
        result = Object.values(element) 
        console.log(result)
    });
}

console.log(cantidadProducto(productos))
