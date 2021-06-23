
//Cuadro de Dialogo -> funciones para interacturar con el usuario -> modo Testeo
// devuelven false al navegador, cuando estan en ejecucion. Despues, devuelven true

//alert()

//alert("Esto es un alert de JS")

const mayoriaEdad = 18
let edadUser = 20
if(edadUser === 2){
    console.log("El usuario tiene "+edadUser+" años")
}else{
    console.log("Los datos no coindicen")
}

//prompt()
// si aceptamos, devuelve string, sino null
var preguntar1 = prompt('Cual es tu nombre?')
document.querySelector(".respuesta").innerHTML = "Hola "+ preguntar1

//confirm()
//si aceptamos, devuelve true, sino false
let salir = confirm('Estas seguro de eliminar el resultado?')
    if(salir){
        // console.log("saliste")
        window.location="http://www.google.com"
    }
    /*else{
        // console.log("te quedaste")

    }*/
