class Contador{
    static contadorGlobal=0
    constructor(responsable){
        this.contador=0
        this.responsable=responsable
    }
    getResponsable(){
        return this.responsable
    }
    contar(){
        this.contador++
        Contador.contadorGlobal++
    }
    getCuentaIndividual(){
        return this.contador
    }
    static getCuentaGlobal(){
        return Contador.contadorGlobal
    }
}

let a = new Contador("Pedro")
let b = new Contador("Juan")
let c = new Contador("Maria")

console.log(a.getCuentaIndividual())
console.log(Contador.getCuentaGlobal())
a.contar();
console.log(a.getCuentaIndividual())
console.log(Contador.getCuentaGlobal())
console.log(b.getCuentaIndividual())
console.log(Contador.getCuentaGlobal())
console.log(c.getResponsable())

function mostrarLista(arreglo){
    if (arreglo.length==0) return "No tiene elementos"
    else return `Los elementos del arreglo son: ${arreglo} y tiene ${arreglo.length} elementos`
}

console.log(mostrarLista([]))
console.log(mostrarLista(["Pedro","Maria","Pablo"]))

