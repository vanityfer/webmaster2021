      // Datos de una persona
      let nombre = "Guido";
      let apellido = "Varela";
      let anionac = 1981;
      let lenguajes = ["html","js","php","actionscript"];

      let persona1 = [nombre, apellido, anionac, lenguajes]

      // Datos personales en formato Objeto literal

      /*function saludar(){
          alert(`Hola, soy ${this.nombre} `)
        }*/

      //objeto
      let user1 = {
        //propiedad : valor,
        nombre: "Guido",
        apellido: "Varela",
        anioNac: 1981,
        lang: ["html","js","php","actionscript"],
        vacunacionCovid: false,
        saludo: function(){
          alert(`Hola, soy ${this.nombre} `)
        },
      }
      let user2 = {
        nombre: "Marcela",
        apellido: "Martinez",
        anionac: 1996,
        lang: [],
        vacunacionCovid:true,
        saludo: function(){
          alert(`Hola, soy ${this.nombre} `)
        },
      }

      let numId = 1
      //array de objetos
      let users = [
        {
        //propiedad : valor,
        id:numId++,
        nombre: "Guido",
        apellido: "Varela",
        anioNac: 1981,
        lang: ["html","js","php","actionscript"],
        vacunacionCovid: false,
        saludo: function(){
          alert(`Hola, soy ${this.nombre} `)},
        // lugar: "CABA"
        },
        {
        id:numId++,
        nombre: "Marcela",
        apellido: "Martinez",
        anionac: 1996,
        lang: [],
        vacunacionCovid:true,
        saludo: function(){
          alert(`Hola, soy ${this.nombre} `)
          }
        },
        {
          id:numId++,
          nombre: "Federico",
          apellido: "Alvarez",
          anioNac: 1976,
          lang: ['ux','ui','full stack'],
          vacunacionCovid: false,
          saludo: function(){
          alert(`Hola, soy ${this.nombre} `)
          }
        }
      ]


      // console.log(user1.saludo())
/*
      document.querySelector('#usuarios').innerHTML = `Mi nombre es ${user1.nombre} ${user1.apellido}, naci en ${user1.anioNac}. Manejo ${user1.lang.length} lenguajes`*/
      // user1.saludo()

      let nuevoUser = {
        id:numId++,
        nombre: "Guillermo",
        apellido: "Gallegos",
        anioNac: 1982,
        lang: ['ux','ui','full stack','wordpress','copy/paste'],
        vacunacionCovid: true,
        saludo: function(){
        alert(`Hola, soy ${this.nombre} `)
        }
      }

      users.push(nuevoUser)


      //Recorrer un array de objetos
      for (let i = 0; i < users.length; i++) {
        document.querySelector('#usuarios').innerHTML += `<p>${users[i].id} <br> Mi nombre es ${users[i].nombre} ${users[i].apellido}, naci en ${users[i].anioNac}. Manejo ${users[i].lang.length} lenguajes. Vive en: ${users[i].lugar}</p>`
        
      }

      console.log(users[3].nombre)