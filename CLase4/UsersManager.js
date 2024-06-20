const crypto = require('crypto')

class UserManager {

    static Usuarios = []

    constructor() { }

    
    crearUsuario(Nombre, Apellido, NombreDeUsuario, password) {
        const psw =  crypto.createHash("sha256").update(password).digest("hex")
        const usuario = [Nombre, Apellido, NombreDeUsuario, psw]
        UserManager.Usuarios.push(usuario)
    }

    mostrarUsuarios() {
        return UserManager.Usuarios
    }

    validarUsuarios(User, Password) {
        


    }
}

u = new UserManager()
u.crearUsuario("pepe", "alfonso", "pepe2024", '12345')
console.log(u.mostrarUsuarios())