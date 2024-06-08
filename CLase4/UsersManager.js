
class UserManager{

    static Usuarios = []

    constructor(){}

    encriptar(password){
        const crypto = require('crypto')
        const algoritmo = "aes128"
        const key = crypto.randomBytes(16)
        const iv = crypto.randomBytes(16)
        const cipher = crypto.createCipheriv(algoritmo,key,iv)
        const passwordEncripted = Buffer.concat([cipher.update(password),cipher.final()])
        return {
            iv: iv.toString("hex"),
            encipted: passwordEncripted.toString("hex")
        }
    }
    crearUsuario(Nombre,Apellido,NombreDeUsuario,password){
        const psw = this.encriptar(password).encipted
        const usuario = [Nombre,Apellido,NombreDeUsuario,psw]
        UserManager.Usuarios.push(usuario)
    }

    mostrarUsuarios(){
        return UserManager.Usuarios
    }

    validarUsuarios(User,Password){



    }
}

u = new UserManager()
u.crearUsuario("pepe","alfonso","pepe2024",'12345')
console.log(u.mostrarUsuarios())