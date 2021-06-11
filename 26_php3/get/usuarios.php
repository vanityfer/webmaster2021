<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recibir por GET</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
</head>
<body>

    <div class="container">
        <div class="row">
        <div class="col-6">
            <img class="img-fluid" src="img/<?php echo $_GET['imagen']; ?>" alt="">
        </div>
        <div class="col-6">
            <ul>
            <li>Nombre: <?php  echo $_GET['nombre']; ?> </li>
            <li>Apellido: <?php echo $_GET['apellido']; ?> </li>
            <li>
            Email:  
                <a href="mailto:<?php echo $_GET['email']; ?> "><?php echo $_GET['email']; ?></a>
                </li>
            </ul>
        </div>
    </div>

    <?php
        // Metodo GET -> variable global, de entorno, de sistema
        // $_GET['dato']
        // echo count($_GET);

        // $_GET = array('nombre' => dato1, ...)

    echo "<hr>";
    
    
        foreach($_GET as $datos){
            echo $datos;
        }
    


    ?>
</body>
</html>



