class TicketManager{
    #precioBaseDeGanancia
    constructor(){
        this.eventos=Array()
        this.#precioBaseDeGanancia=0
        this.id=0
    }

    getEventos(){
        return this.eventos
    }

    agregarEvento(nombre,lugar,precio,cantidad){
        this.id++
        cantidad+=cantidad+50
        precio += precio*0.15
        let fecha = new Date()
        let participantes = Array()
        let evento={
            id: this.id,
            nombre,
            lugar,
            precio,
            cantidad,
            fecha: `${fecha.getDay()}/${fecha.getMonth()}/${fecha.getFullYear()}`,
            participantes}
        this.eventos.push(evento)
    }

    agregarUsuario(idEvento,idUsuario){        
        let event = this.eventos.find((evento)=>evento.id===idEvento)
        
        if(!event){
            return `No existe el idEvento: ${idEvento}`
        }else
        {
            if (!(event.participantes.includes(idUsuario)))
            {
                event.participantes.push(idUsuario)
                return "Exito"

            }else return `el iUsuario: ${idUsuario} ya esta registrado`
        }
        }

        ponerEventoEnGira(idEvento,nuevaLocalidad,nuevaFecha){
        let event = this.eventos.find((evento)=>evento.id===idEvento)
        
        if(!event){
            return `No existe el idEvento: ${idEvento}`
        }
        let fecha=new Date(nuevaFecha)
        this.id++
        this.eventos.push(this.id,event[1],nuevaLocalidad,event[3],event[4],`${fecha.getDay()}/${fecha.getMonth()}/${fecha.getFullYear()}`,event[6])

        return "Exito"
    }
}


    


let tm = new TicketManager(1000)
console.log(tm.getEventos())
tm.agregarEvento("boda","Formosa",10000,1000)
tm.agregarEvento("15","Formosa",35343,2000)
tm.agregarEvento("bautismo","Formosa",876532,3000)
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


