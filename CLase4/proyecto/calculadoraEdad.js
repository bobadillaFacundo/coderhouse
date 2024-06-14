import moment from 'moment'

class CalculadoraEdad{
        constructor(fechaNacimineto){
            this.fechaActual = moment()
            this.fechaNacimineto = []
        }

        validarfecha(fecha){
            if (moment.isValid(fecha)){
                console.log("fecha validad")
            } else console.log("fecha invalidad")
        }

}

const a = new CalculadoraEdad("6/6/1997")
console.log(a.validarfecha("26/6/19972"))
