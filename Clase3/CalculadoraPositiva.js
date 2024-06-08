const sumar=(num1,num2)=>{
    return new Promise((resolve,reject)=>{
        if ((num1==0)||(num2==0)){
            reject("Operación innecesaria")
        }else{
            if(num1+num2<0) {reject( "La calculadora sólo debe devolver valores positivos")
            }else resolve(num1+num2)
        }
    })
}

const restar=(num1,num2)=>{
    return new Promise((resolve,reject)=>{
        if ((num1==0)||(num2==0)){
            reject("Operación inválida")
        }else{
            if(num1-num2<0) {reject("La calculadora sólo puede devolver valores positivos")
            }else resolve(num1-num2)
        }
    })
}

const multiplicar=(num1,num2)=>{
    return new Promise((resolve,reject)=>{
        if ((num1<0)||(num2<0)){
            reject("Operación inválida")
        }else{
            if(num1*num2<0) {reject("La calculadora sólo puede devolver valores positivos")
            }else resolve(num1*num2)
        }
    })
}

const division=(num1,num2)=>{
    return new Promise((resolve,reject)=>{
        if ((num2==0)){
            reject("Operación inválida")
        }else{
            if(num1/num2<0) {reject("La calculadora sólo puede devolver valores positivos")
            }else resolve(num1/num2)
        }
    })
}

const calculos = async()=>{

    try {
       result = await sumar(0,15)
       console.log(result)
    } catch (error) {
        console.log(error)
    }


}

calculos()

