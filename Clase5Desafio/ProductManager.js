import fs from "fs"

class ProductManager {

    #id

    constructor(path) {
        this.#id = Date.now()
        this.path = path
    }

    getProducts() {
        return this.getProductsFromFile()
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const product = {
            id: this.#id++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        const products = this.getProductsFromFile()
        products.push(product)
        this.saveProductsToFile(products)

    }

    getProductById(id) {
        const p = this.validateId(id)

        if (!p)
            return `ERROR, no se encuentra ID`

        return p;
    }

    validateId(id) {
        const products = this.getProductsFromFile()
        return products.find((product) => product.id === id)
    }

    deleteProduct(id) {
        const p = this.validateId(id)
        if (!p)
            return `ERROR, no se encuentra ID ${id}`

        const arr = this.getProductsFromFile();
        const products = arr.filter((product) => product.id !== id)
        this.saveProductsToFile(products)

    }

    getProductsFromFile() {
        try {
            const data = fs.readFileSync(this.path, 'utf8')
            return JSON.parse(data)
        } catch (error) {
            return []
        }
    }

    saveProductsToFile(product) {
        fs.writeFileSync(this.path, JSON.stringify(product), 'utf8')
    }

    updateProduct(product) {
        const arr = this.getProductsFromFile()
        const result2 = arr.find(produ => produ.id === product.id)
        if (!result2)
            return `ERROR, no se encuentra ID ${product.id}`
        result2.title = product.title
        result2.description = product.description
        result2.price = product.price
        result2.thumbnail = product.thumbnail
        result2.code = product.code
        result2.stock = product.stock
        this.saveProductsToFile(arr)
    }

    unlinkFileProduct() {
        fs.unlink(this.path, (error) => {
            if (error) {
                console.error('Error al eliminar el archivo:', error)
                return;
            }
            console.log('El archivo ha sido eliminado satisfactoriamente.')
        })
    }
}



const a = new ProductManager("./Products.json")
a.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
a.addProduct("producto prueba2", "Este es un producto prueba2", 200, "Sin imagen", "abc123", 25);
a.addProduct("producto prueba3", "Este es un producto prueba3", 200, "Sin imagen", "abc123", 25);
console.log("Productos agregados:")
console.log(a.getProducts())
a.deleteProduct(2)
console.log("Productos despues de eliminar el 2:")
console.log(a.getProducts())
a.updateProduct({ id: 1718762318131, title: "cambio2c", description: "cambio", price: 32423, thumbnail: "cambio", code: "abcd12345", stock: 21121 })
console.log("Productos despues de actualizar el 1:")
console.log(a.getProducts())
//a.unlinkFileProduct()