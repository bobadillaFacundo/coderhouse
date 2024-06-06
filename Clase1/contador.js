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

