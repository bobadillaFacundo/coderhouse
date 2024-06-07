class TicketManager{

    constructor(precioBaseDeGanancia){
        this.eventos=Array()
        this.precioBaseDeGanancia=precioBaseDeGanancia
        this.id=0
    }

    getEventos(){
        return this.eventos
    }

    agregarEvento(nombre,lugar,precio){
        this.id++
        let p = ((precio*0,15)/100)+this.precioBaseDeGanancia
        let fecha = new Date()
        let participantes = Array()
        let evento=[this.id,nombre,lugar,p,50,`${fecha.getDay()}/${fecha.getMonth()}/${fecha.getFullYear()}`,participantes]
        this.eventos.push(evento)
    }

    agregarUsuario(idEvento,idUsuario){        
        let r=  `No existe el idEvento: ${idEvento} o el iUsuario: ${idUsuario} ya esta registrado`
        let b = false
        let event
        for (let i = 0; i < this.eventos.length; i++) {
            event=this.eventos[i]
            if (event[0] == idEvento){
                b=true
                break;
            } 
        }   if(b){
                let f= true
                for (let i = 0; i < event[6].length; i++) {
                    const element = event[6][i];
                    if (element==idUsuario)
                        f=false
                        break;
                }
                if (f){
                event[6].push(idUsuario)
                r = "Exito"}
        }

         return r
    }

        ponerEventoEnGira(idEvento,nuevaLocalidad,nuevaFecha){
        let r=  `No existe el idEvento: ${idEvento}`
        let b = false
        let event
        for (let i = 0; i < this.eventos.length; i++) {
            event=this.eventos[i]
            if (event[0] == idEvento){
                b=true
                break;
            } 
        }   if(b){
                let fecha=new Date(nuevaFecha)
                this.id++
                this.eventos.push(this.id,event[1],nuevaLocalidad,event[3],event[4],`${fecha.getDay()}/${fecha.getMonth()}/${fecha.getFullYear()}`,event[6])
                r = "Exito"
        }
         return r

    }
}


let tm = new TicketManager(1000)
console.log(tm.getEventos())
tm.agregarEvento("boda","Formosa",10000)
tm.agregarEvento("15","Formosa",35343)
tm.agregarEvento("bautismo","Formosa",876532)
console.log(tm.getEventos())
console.log(tm.agregarUsuario(3,2))
console.log(tm.getEventos())
console.log(tm.agregarUsuario(3,2))
console.log(tm.getEventos())
console.log(tm.ponerEventoEnGira(2,"Lujan","07/09/2024"))
console.log(tm.agregarUsuario(1,2))
console.log(tm.getEventos())
console.log(tm.agregarUsuario(2,3))
console.log(tm.agregarUsuario(1,2))
console.log(tm.agregarUsuario(3,1))
console.log(tm.getEventos())


