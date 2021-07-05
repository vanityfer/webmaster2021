
//constructor o interface

/*function sumar(num1, num2){
    return num1 + num2
}
sumar(20,50)
sumar(58,5888)*/



//Generar una base de datos de autos
// marca, modelo, anio, equipamiento, precio, combustible

//Definicion de la interfaz
function Autos(id,marca,modelo,anio,equip,precio,comb){
    //nombre de la prop = valor que vino por parametro
    this.id = id
    this.marca = marcañ
    this.modelo = modelo
    this.anio = anio
    this.equip = equip
    this.precio = precio
    this.comb = comb
}

let setId = 0
//instancia de la interfaz
let auto1 = new Autos(setId++,"Fiat","600",1974,['calefactor'],1000,"nafta")
let auto2 = new Autos(setId++,"Ford",'Focus',2005,["aire",'abs','direccion asistida'],1800,'turbodiesel')
let auto3 = new Autos(setId++,"Peugeot",'106',1999,["calefactor"],800,'nafta')

const autos = []
autos.push(auto1,auto2,auto3)

//table
//table head

//table body
for (let i = 0; i < autos.length; i++) {
    //tr
    document.querySelector('#usuarios').innerHTML += `<p>${autos[i].marca} ${autos[i].modelo} - U$S ${autos[i].precio} <br> Equipamiento: ${autos[i].equip} </p><hr>`
    //tr
}
//table body
//table

/*for (const nuevoAuto of autos) {
    document.querySelector('#usuarios').innerHTML += `<p>Equipamiento: ${nuevoAuto.equip}</p><hr>`

}

for (const nuevosAutos in autos) {
    document.querySelector('#usuarios').innerHTML += `<p>Equipamiento: ${autos[nuevosAutos].equip}</p><hr>`
}*/

