const { MongoClient } = require('mongodb');
const express = require('express')
const engine = require("express-handlebars")
const { Server } = require("socket.io")
const viewsrouter = require("./routers/viewsrouter.js")
const __dirname = require("./utils.js")

const app = express()
const httpserver = app.listen(8080, () => console.log("servidor escuchando en el puerto 8080"))
const socketserver = new Server(httpserver)
app.engine("handlebars", engine.engine())
app.set("view engine", "handlebars")
app.set("views", __dirname + "/views")
app.use(express.static(__dirname + "/public"))
app.use("/", viewsrouter)
app.use('/css', express.static('public/css'));

// URL de conexión a tu base de datos MongoDB
const url = 'mongodb://localhost:27017';  // Cambia según la configuración de tu MongoDB

// Nombre de la base de datos que quieres usar
const dbName = 'coderhouse';

// Crear un cliente de MongoDB
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

const messages = []

socketserver.on('connection', socket => {

    socket.on('identificarse', us => {
          
        console.log(`Cliente conectado: ${socket.id}`);
      
        socket.emit('message',messages)
        const date = new Date()
        socket.broadcast.emit('mensaje_servidor_broadcast',{
            id: us,
            data: 'Conectado ',
            date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
        })
    })

    socket.on('message', (data,user) => {
        const date = new Date()
        messages.push({
            id: user,
            data,
            date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
        })
        socketserver.emit('mensaje_servidor_todos', messages)
    })

    socketserver.emit('mensaje_servidor_todos', messages)

    socket.on('disconnection', (us)=>{
        console.log(`Cliente desconectado: ${socket.id}`);
        const date = new Date()
        socket.broadcast.emit('mensaje_servidor_broadcast',{
            id: us,
            data: 'Desconecto ',
            date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
        })
    })
})



// Función para conectar a la base de datos y ejecutar operaciones
async function main(message) {
  try {
    // Conectar al servidor MongoDB
    await client.connect();
    console.log('Conectado correctamente al servidor de MongoDB');

    // Seleccionar una base de datos
    const db = client.db(dbName);

    // Operaciones con la base de datos
    // Ejemplo: Insertar un documento en una colección
    const collection = db.collection('mensajes');
    await collection.insertOne(message);

  } catch (error) {
    console.error('Error al conectar o interactuar con la base de datos:', error);
  } finally {
    // Cerrar la conexión
    await client.close();
    console.log('Conexión cerrada correctamente');
  }
}

// Llamar a la función principal
main().catch(console.error);