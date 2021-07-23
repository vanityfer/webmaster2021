//importamos express
const express = require('express')
//ejecutar el sistema de routing de express
const router = express.Router()

let data = {
    titulo:"Contacto",
    p:"hola mundo! Chau Munndo!"
}
let year = new Date().getFullYear();

router.get('/',function(request,response){
    // response.send("Esto es el contacto")
    //render('vista a renderizar',{data a enviar a la vista})
    response.render('contacto.hbs',{data,year})
})

//Cargar productos
const tablaProductos = require('../models/tablaProductos')

router.post('/', async (req,res) => {
    //console.log(req.body.nombre)
    //console.log(req.body.email)

    // const user = {
    //     nombre: req.body.nombre,
    //     email: req.body.email
    // }
    const newProd = {
        id:0,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        imagen: req.body.imagen,
        precio: req.body.precio,
        stock: req.body.stock,
        categoria: req.body.categoria,
    }
    console.log(newProd)
    //ojo el orden de los campos -> ver la tabla antes
    //try {
        const cargarProd = await tablaProductos.create({
            id: newProd.id,
            nombre:newProd.nombre,
            descripcion:newProd.descripcion,
            precio:newProd.precio,
            imagen:newProd.imagen,
            stock:newProd.stock,
            categoria:newProd.categoria
        })    
        //console.log(cargarProd)
    
        res.render("contacto.hbs",{data,year,alta:true})
        
    // } catch (error) {
    //     console.log("Error en el alta "+error)
    //     res.render("contacto.hbs",{data,year,alta:false})
    // }
})

module.exports = router;