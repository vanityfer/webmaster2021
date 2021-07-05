// console.log(document.all[7])
        // document.all[7].style.display="none";

        //el metodo style aplica las prop CSS en version camelCase
        document.querySelector(".textos h1").style.textAlign="center"

        document.querySelector(".textos h1").style.color="peru"

        // let maradona = document.getElementById('contenedor');
        // console.log(caja1)
        // console.log(contenedor)
        /*contenedor.innerHTML = "Esto esta generado por JS";*/

        let caja = document.getElementsByClassName('caja1')
        // console.log(caja.length)

        for (let i = 0; i < caja.length; i++) {
            caja[i].innerHTML = "Ahora es por clase"            
        }
  
        let divs = document.getElementsByTagName('div')
        console.log(divs.length)
        for (let i = 0; i < divs.length; i++) {
            divs[i].style.border="solid";
            
        }

        let names = document.getElementsByName("2daCaja")
        console.log(names.length)