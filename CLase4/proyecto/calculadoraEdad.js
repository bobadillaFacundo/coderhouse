
class CalculadoraEdad{
        constructor(fechaNacimineto){
            const moment = require('moment')
            this.fechaActual = moment()
            this.fechaNacimineto = []
        }

        validarfecha(fecha){
            const moment = require('moment')
            if (moment.isValid(fecha)){
                console.log("fecha validad")
            } else console.log("fecha invalidad")
            
        }




}