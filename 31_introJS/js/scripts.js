
// comentario linea simple
/*
comentario
multilinea
*/

var saludo = "Hola Mundo!";
console.log(saludo) ;

var saludo = "chau mundo!";
console.log(saludo) ;

//ES6 -> nuevas variables
//let 
//const

let nombre = "Guido";
nombre = "Maria";
console.log(nombre);

const pais = "argentina";
// no se puede pisar constantes->let pais = "uruguay"
console.log(pais);

//objeto document
// console.log(document)
document.write(pais);

//en JS, se concatena con +
//Saludo
saludo = "<h2>" + saludo + ", mi nombre es " + nombre + " y soy de " + pais + "</h2>";
document.write(saludo);

//tipos de datos
let string = "cadena de caracteres";
let numeric = 10
let decimal = 50.36
let boolean = true

//indexOf(variable)
console.log(typeof(string))
//console.log(numeric)