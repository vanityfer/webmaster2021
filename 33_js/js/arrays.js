
//arrays
let user1 = "Guido";
let user2 = "Marcela";
let user3 = "Juan";

let users = ["Guido","Marcela","Pedro", user3];
//console.log(users[3]);

let persona = ["Juan","Morelo",22,"mail@ail.com",true];

console.log("Hola, soy "+persona[0]+" "+persona[1]+", tengo "+persona[2]+"años. Mi email es "+persona[3]);

//template strings / template literal
//se usa con comilla invertida -> ` (alt+96)

console.log(`Hola, soy ${persona[0]} ${persona[1]}, tengo ${persona[2]} años. Mi email es: ${persona[3]}`)




//objeto.metodo(parametros)
console.error("Aca hay un error esto tambien es un error");

// alert(persona.length)

//recorrer un array
/*for (let i = 0; i < users.length; i++) {
   console.log(users[i]) ;   
}*/

//agregar un indice al final
let user4 = "Ana";
users.push(user4);
users.push('Federico','Ismael');
users.push();

//inserta al principio
users.unshift()

//invierte el orden
users.reverse()

//for of
for (const iterator of users) {
    //console.log(iterator);
    document.querySelector("#personas").innerHTML += `<div class='col'>${iterator}</div>`
}

//borrar ultimo indice
users.pop()
//borrar primer indice
users.shift()




