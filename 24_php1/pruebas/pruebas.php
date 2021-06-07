<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP1</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
</head>
<body>
    <main class="container">

        <div>
            <!-- primer script PHP -->
            <?php

// Escribir una variable en la pantalla
// definimos la variable
$saludo1 = "Ya nos vamos al recreo";
// la mostramos en pantalla, por medio del echo
echo $saludo1;

echo "<hr>";

//redefinicion de la variable
$saludo1 = "Aca la variable ya cambio";
            echo $saludo1;
            
            echo "<hr>";
            
            // constantes
            define("MiNombre","Guido");
            // define("MiNombre","Maria");
            $MiNombre = "Maria";
            echo MiNombre;
            echo $MiNombre;
            define ("mayoriaEdad", 18)

            ?>
    </div>
    <hr>
    <div class="datos">
        
        <div>
            <?php
            $titulo2 = "<h2>Tipos de dato</h2>";
            echo $titulo2;
            
            echo "<hr>";
            
            $string = "Cadena de caracteres";
            $numerica = 20;
            $boolean = true;//false
            $resultado = $numerica;
            // echo var_dump($numerica);
            $vacio = null;
            // echo $boolean;
            
            $num1 = 52;
            $num2 = 40;
            $suma = $num1 + $num2;
            // echo $suma; 
            
echo "<hr>";

            echo "<h3> Aplicando algoritmo -></h2>";
            
            //Algoritmo cancha de futbol - gaseosa
            //inicio
            $billetera = 1500;
            echo "<span class='alert-success'>Tengo en mi billetera: $".$billetera."</span>";
            //gastos
            $cancha = 800;
            $gaseosa = 100;
            
            //me encontre $100 en la calle
            // $billetera = $billetera + 100;
            // $billetera += 100;
            
            
            //1er gasto
            $compra1 = $billetera - $cancha;
            $billetera = $compra1 ;
            echo "<span class='alert-danger'><br> Costo de cancha: -$".$cancha."</span>";
            echo "<span class='alert-success'><br> <i>Saldo: $".$billetera."</i></span>";

            //le presto plata a alguien
            $billetera -= 200;
            
            //2do gasto
            $compra2 = $billetera - $gaseosa;
            $billetera = $compra2;
            echo "<br> <span class='alert-danger'>Costo gaseosa: -$".$gaseosa."</span>";
            echo "<br> <span class='alert-success'><i>Saldo: $".$billetera."</i></span>";
            
            ?>
        </div>
        
        <hr>
        
        <div class="condicionales">
            <?php
                $edadPermitida = 18;
                $edadPersona = 5;

                if($edadPersona>=$edadPermitida) {
                    //condicion verdadera
                    echo "Puede ingresar porque tiene ".$edadPersona." años";
                }else{
                    //condicion falsa
                    echo "No puede ingresar :(";
                }
                
            ?>

        </div>
        
    </div>

</main>
    
    
</body>
</html>