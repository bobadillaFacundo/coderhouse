class ProductManager{
    

    constructor(){
        this.productos=[];
        this.id=0;
    }
    getProducts(){
        return this.productos;
    }
    addProduct(title,description,price,thumbnail,code,stock){
        this.id++;
        let producto = {
            id: this.id,
            title: title,
            description: description,
            price:price,
            thumbnail:thumbnail,
            code:code,
            stock:stock
        }
        this.productos.push(producto);
    }
    
    getProduct(){
        return this.productos[this.productos.length-1];
    }

    getProductById(id){
        let p = this.productos.find(product => product.id === id)
        
        if (!p)
            return `ERROR, no se encuentra ID`
        else return p;
    }
}

const a = new ProductManager()
console.log(a.getProducts())
a.addProduct("producto prueba","Este es un producto prueba",200,"Sin imagen","abc123",25);
console.log(a.getProducts())
a.addProduct("producto prueba 2","Este es un producto prueba",2003434,"Sin imagen","abc12345",2533);
console.log(a.getProducts())
console.log(a.getProduct())
console.log(a.getProductById(2))
console.log(a.getProductById(1))
console.log(a.getProductById(12112))


const ar = ["pedro","maria"]
console.log(ar)
const id = "id"
const result = Object.entries(ar)
console.log(result)
const result2 = Object.keys(result)
console.log(result2)
const result3 = result.flat()
console.log(result3)




