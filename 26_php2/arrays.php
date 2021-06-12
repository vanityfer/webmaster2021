<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP2</title>
</head>
<body>
    
    <div>
        <h2>Arrays</h2>

        <?php

            $provincia1 = "Buenos Aires";
            $provincia2 = "Cordoba";
            $provincia3 = "Santa Fe";
            $provincia4 = "Mendoza";

            echo $provincia1;
            echo $provincia2;

            // Arrays -> matriz de valores, vector, arreglo
            // Agregar mas de 1 valor
            // tienen indices -> numéricos (arranca en 0) o asociativos

            // $provincias = array("Buenos Aires","Cordoba","Santa Fe","Mendoza","San Luis", "La Pampa",);

            //Array Numerico
            $provincias[0] = "Buenos Aires";
            $provincias[] = "Cordoba";
            $provincias[] = "Santa Fe";
            $provincias[] = "Mendoza";
            echo "<p>Hola, vivo en ".$provincias[1]."</p>";
            echo "En la base de datos hay ".count($provincias)." provincias";
        
            echo "<hr>";

            //Array Asociativo
            $monedas['argentina'] = "peso";
            $monedas['brasil'] = "real";
            $monedas["peru"] = "sol";
            $monedas["venezuela"] = "bolivar";
            echo "En Argentina, usamos ".$monedas["argentina"];

            //sorteo
            $numeros = array(25,4,78,23,69,14,58,71,36,9);
            // shuffle($numeros);
            $num_aleatorio = rand(0,count($numeros));
            echo "El ganador es ".$numeros[$num_aleatorio]; 

            echo "<hr>";

            //Datos de persona

            $user = array(12, "Gabriel", "Gomez", 25, true);
            echo "El usuario ".$user[0].", de nombre ".$user[1]." ".$user[2]."de edad ".$user[3].". Mascotas: ".$user[4];

            //concatenacion -> . (union de dos datos de distinta índole)
            echo "Hola "."Mundo";

            //Mostrar los dias de la semana
            $semana = array("Lunes", "Martes", "Miercoles", "jueves", "viernes","sabado", "domingo","osvaldo","quilmes");

            echo "<hr>";

            //Para recorrer un array, podemos usar estructuras repetitivas -> for / while / do while / 

            $cantIndices = count($semana);
            echo "Dias de la semana: <br>";
            
            echo "<ul>";
            for($i=0; $i < $cantIndices; $i++){
                  echo "<li>".$semana[$i]."</li>";
                }
            echo "</ul>";
                
            echo "<select name=''>";
            for($i=0; $i < $cantIndices; $i++){
                  echo "<option>".$semana[$i]."</option>";
            }
            echo "</select>";

            echo "<hr> ";
            
            
            //foreach
            foreach($numeros as $monica){
                echo $monica."<br>";
            }
            
            echo "<hr> ";
            foreach($semana as $finde){
                if($finde == "sabado" or $finde == "domingo" ){
                    echo $finde."<br>";
                }
            }
            
            


        ?>


    </div>



</body>
</html>