
// + * - / -> operadores aritmeticos
// = > < => =< == === != -> operadores de comparacion

var num1 = prompt('Ingrese el 1er numero')
var num2 = prompt('Ingrese el 2do numero')
var suma = num1 + num2
console.log(suma)

//comparar datos

const mayoriaEdad = 18
let edadUser = 20

if(edadUser >= mayoriaEdad ){ //NaN -> Not a number
    //console.log("Mayor de edad")
    //document.write("Mayor de edad")
    document.querySelector('.respuesta span').innerHTML = "<h2>El usuario es mayor de edad</h2>";
    //innerText -> solo texto plano, sin formato HTML
}else{
    console.log("Menor de edad")
}

if(edadUser === 2){
    console.log("El usuario tiene "+edadUser+" años")
}else{
    console.log("Los datos no coindicen")
}

//true / false
let login = true
if(!login){// ! -> negacion
    console.log("Usuario admitido")
}else{
    console.log("usuario no registrado")
}