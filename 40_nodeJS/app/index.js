// importa el modulo de ExpressJS
const express = require('express')

const app = express()
//Puerto de conexion
const port = 3000

let data = [{
    nombre: "Martin",
    lugar: "Buenos Aires",
    anio: 2021,
    avatar: "martin.jpg"
},{
    nombre: "Jose",
    lugar: "Mar del plata",
    anio: 2021,
    avatar: "jose.jpg"
},{
    nombre: "maria",
    lugar: "Salta",
    anio: 2021,
    avatar: "maria.jpg" 
}]

//Uso de archivos publicos
app.use(express.static('assets'))

//Middelware
app.get('/user1', function(req, res) {
    //req -> request
    //res -> response
    let users = `<h1>Usuarios</h1>`
    for (let i = 0; i < data.length; i++) {
        users += `<div><img style='max-width:225px' src='img/${data[i].avatar}'>
        <p>Hola, soy <strong>${data[i].nombre}</strong>, de <em>${data[i].lugar}</em>.</p>`
    }
    users += `<div><a href='/'>volver</a></div></div>`
    res.send(users)
})

app.get('/contacto', (req,res) => {
    res.send(`<h1>Seccion Contacto</h1>
    <form method='post'>
        <input name='data1' placeholder='nombre'><input type='submit'>
    </form>  
    `)
})


app.get('/', function(req,res){
    res.send("<h1>Inicio</h1><a href='/user1'>Ver Usuarios</a> <br> <a href='/contacto'>Contacto</a>")
})

//arrow function
// const dato = () => {}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})