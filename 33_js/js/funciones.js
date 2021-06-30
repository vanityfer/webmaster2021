
/*
function nombreFuncion(parametros) {
    instrucciones o scope o bloque de ejecucion
}

*/


// let nombre = prompt("Cual es tu nombre?")
//Definir la funcion

function saludar() {
    alert(`Hola ${nombre}`)
}

//ejecucion
// saludar()


//Ambitos de las variables

//variables de ambito global -> acceso global al documento

// let num1 = 55265165465
// let num2 = 55265165465


function sumar(){
    //variables de ambito local
    let num1 = 10
    let num2 = 25
    let sumando = num1 + num2
}


//Valores devueltos
//return valor
function sumar(){
    //variables de ambito local
    let num1 = 10
    let num2 = 25
    return num1 + num2
}
console.log(sumar())






