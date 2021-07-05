//leer formularios
let input1 = document.getElementById('campo1').value
console.log(input1)

//Comparar contraseñas
let btn1 = document.querySelector('#btn1')
//addEventListener -> escucha el evento del objeto seleccionado. (evento,funcion anonima a ejecutar -> callback)
btn1.addEventListener("click",
    function(){
        let pass1 = document.getElementById('campo1').value
        let pass2 = document.getElementById('campo2').value
        let resp = document.querySelector('#respuesta')

        // or -> || (doble pipe)
        // and -> &&
        if(pass1 !="" && pass2 != ""){

            if(pass1 === pass2){
                resp.innerHTML="Las claves coinciden"
                pass1.style.background="green"
                pass2.style.background="green"
            }else{
                resp.innerHTML="las claves no son iguales. :("
                pass1.style.background="red"
                pass2.style.background="red"
            }
        }else{
            resp.innerHTML="alguno de los datos esta vacío..."
        }
    }//cierra function()

)