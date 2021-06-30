//añadir personas a un array

let personas = []

function agregarPersona(nombre) {
    personas.push(nombre)
}
agregarPersona("Federico")
agregarPersona("Guido")
agregarPersona("Maria")
agregarPersona("Fernanda")
agregarPersona("Alejandro")

for (const listpersonas of personas) {
    console.log(listpersonas)
}