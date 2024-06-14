import express from 'express'
const app = express();
const port = 8080;


// import http from 'http'
// const server = http.createServer((req, res) => {
//   res.end('¡Mi primer hola mundo desde backend!\n');
// })

// server.listen(8080, () => {
//   console.log('Servidor escuchando en el puerto 8080');
// })
// import express from 'express'
// const app = express();
// const port = 8080;

// // Definir la función para el método GET en la ruta '/saludo'
// app.get('/saludo', (req, res) => {
//   res.send('¡Hola a todos, pero ahora desde Express!');
// });

// // Iniciar el servidor y escuchar en el puerto 8080
// app.listen(port, () => {
//   console.log(`Servidor escuchando en http://localhost:${port}`);
// });

// import  path from 'path'
// const app = express();
// const port = 8080;

// app.get('/bienvenida', (req, res) => {
//   res.sendFile(path.join( "index.html",{ root: path.join("./Clase6", '') }))
// });
// app.get('/usuario', (req, res) => {
//     res.send({
//         nombre: "facundo",
//         apellido: "bobadilla",
//         edad: 27,
//         correo: "bobadillaf97@gmail.com"
//     });
//   });
// // Iniciar el servidor y escuchar en el puerto 8080
// app.listen(port, () => {
//   console.log(`Servidor escuchando en http://localhost:${port}`);
// });


// const users = [{
//     id: 1,
//     nombre: "Facundo",
//     apellido: "bobadilla"
// },
// {
//     id: 2,
//     nombre: "Jorge",
//     apellido: "bobadilla"
// },
// {
//     id: 3,
//     nombre: "Pedro",
//     apellido: "bobadilla"
// }]

// // Definir la función para el método GET en la ruta '/saludo'
// app.get('/', (req, res) => {
//     res.send(users);
// });

// app.get('/:userID', (req, res) => {
//     const userId = parseInt(req.params.userID);
//     const result = users.find(Element => Element.id === userId)
//     if (result) {
//         res.send(result)
//     } else {
//         res.send("No existe el ID")
//     }
// })
// // Iniciar el servidor y escuchar en el puerto 8080
// app.listen(port, () => {
//   console.log(`Servidor escuchando en http://localhost:${port}`);
// });

app.use(express.urlencoded({ extended: true }))
const users = [{
    id: 1,
    nombre: "maria",
    apellido: "bobadilla",
    genero: "f"
},
{
    id: 2,
    nombre: "Jorge",
    apellido: "bobadilla",
    genero: "m"
},
{
    id: 3,
    nombre: "Pedro",
    apellido: "bobadilla",
    genero: "m"
}]

app.get("/", (req, res) => {
    let genero = req.query.genero
    if (!genero || (genero !== "m" && genero !== "f"))
        return res.send({users})
    let usuariosFiltrados = users.filter(usuarios=>usuarios.genero===genero)
    res.send({users: usuariosFiltrados})
})
// Iniciar el servidor y escuchar en el puerto 8080
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});