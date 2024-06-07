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
        let producto = [this.id,title,description,price,thumbnail,code,stock];
        this.productos.push(producto);
    }
    getProduct(){
        return this.productos[this.productos.length-1];
    }
    getProductById(id){
        let p 
        for (let i = 0; i < this.productos.length; i++) {
            const element = this.productos[i];
            if (element[0]==id){
                p=element
                break;
            }
        }
        
        if (p==null)
            return `ERROR, no se encuentra ID`
        else return p;
    }
}

let a = new ProductManager();


console.log(a.getProducts());
a.addProduct("producto prueba","Este es un producto prueba",200,"Sin imagen","abc123",25);
console.log(a.getProducts());
a.addProduct("producto prueba 2","Este es un producto prueba",2003434,"Sin imagen","abc12345",2533);
console.log(a.getProducts());
console.log(a.getProduct());
console.log(a.getProductById(2));
console.log(a.getProductById(1));
console.log(a.getProductById(12112));