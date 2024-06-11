const fs = require('fs');

class ProductManager {

    #id

    constructor(path) {
        this.#id = 0;
        this.path = path
    }

    getProducts() {
        const productos = this.getProductsFromFile()
        return productos;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        // this.#id=Math.random();
        this.#id++;
        let producto = {
            id: this.#id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        const productos = this.getProductsFromFile()
        // const result = this.validarId(this.#id)
        // if (!result) {
        //     productos.push(producto)
        //     this.saveProductsToFile(productos)
        //     return "Exito"
        // } else return "codigo ya existe"
        productos.push(producto)
        this.saveProductsToFile(productos)

    }

    getProductById(id) {
        const p = this.validarId(id)

        if (!p)
            return `ERROR, no se encuentra ID`
        else
            return p;
    }

    validarId(id) {
        const productos = this.getProductsFromFile()
        const result = productos.find((producto) => producto.id === id)
        return result
    }

    deleteProduct(id) {
        const p = this.validarId(id)
        if (!p) {
            return `ERROR, no se encuentra ID ${id}`
        }
        else {
            const arr = this.getProductsFromFile();
            const products = arr.filter((product) => product.id !== id)
            this.saveProductsToFile(products)
            return "Exito";
        }
    }

    getProductsFromFile() {
        try {
            const data = fs.readFileSync(this.path, 'utf8')
            return JSON.parse(data)
        } catch (error) {
            // Si el archivo no existe o está vacío, devuelve un arreglo vacío
            return []
        }
    }

    saveProductsToFile(product) {
        fs.writeFileSync(this.path, JSON.stringify(product), 'utf8')
    }

}



const a = new ProductManager("./Clase5")
a.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
a.addProduct("producto prueba2", "Este es un producto prueba2", 200, "Sin imagen", "abc123", 25);
console.log("Productos:")
console.log(a.getProducts())
a.deleteProduct(1)
console.log("Productos:")
console.log(a.getProducts())
