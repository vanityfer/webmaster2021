//importar el array
const DatosExternos = require('./modulos/saludo')
const dataUser = require('./modulos/user')

DatosExternos.listSelecciones.push("Chile","Peru","Bolivia","Venezuela","Paraguay","Ecuador")

console.log("Hola "+dataUser.usuario.nombre[0])
console.log("Tengo "+dataUser.usuario.edad)
for (const list of DatosExternos.listSelecciones) {
    console.log(list)
}

console.log(dataUser.usuario.sumar(30,20))