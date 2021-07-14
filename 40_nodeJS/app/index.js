// importa el modulo de ExpressJS
const express = require('express')

const app = express()
//Puerto de conexion
const port = 3001

let data = {
    nombre: "Martin",
    lugar: "Buenos Aires",
    anio: 2021
}

//Middelware
app.get('/user1', function(req, res) {
    //req -> request
    //res -> response
  res.send(`<h1>Saludos</h1><p>Hola, soy <strong>${data.nombre}</strong>, de <em>${data.lugar}</em>.`)
})

app.get('/', function(req,res){
    res.send("<h1>Inicio</h1><a href='/inicio'>Ver Saludo</a>")
})

//arrow function
// const dato = () => {}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})