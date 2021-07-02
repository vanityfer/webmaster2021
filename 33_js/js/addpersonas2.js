//añadir personas a un array

//escuchar el evento
let personas = []

function agregarPersona(nombre) {
    personas.push(nombre)
}

let btn1 = document.getElementById('btnAdd');

btn1.addEventListener('click',function(){
    agregarPersona(document.getElementById('camponuevo').value)
})
for (const listpersonas of personas) {
    document.querySelector('.personas').innerHTML += listpersonas
}
