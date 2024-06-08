getRandomArbitrary = (min, max) =>{
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }

arrayRandoom= (min,max,cantidad)=>{
    arreglonuevo=[]
    for (let i = 0; i < cantidad; i++) {
    arreglonuevo.push(getRandomArbitrary(min,max))
}  return arreglonuevo}


frecuencia = (arreglo)=>{
    return new Promise((resolve, reject) => {
    nuevoArreglo={}
        
        console.log(arreglo)
    
        
        for (let index = 0; index < arreglo.length; index++) {
            const element = arreglo[index];
            nuevoArreglo[element]=(nuevoArreglo[element]||0)+1
        }
         
        resolve(nuevoArreglo)

    })}



const calculos = async()=>{

        try {
           result = await frecuencia(arrayRandoom(1,15,10))
           console.log(result)
        } catch (error) {
            console.log(error)
        }
    } 

calculos()

