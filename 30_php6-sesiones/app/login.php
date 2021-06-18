<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <?php $title = "UTN 2021" ?>
    
    <title><?php echo $title ?></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

</head>
<body>

    <?php
        include('header.php');
    ?>
    
    <div class="container ">
        
    <div class="form w-75">
        <?php
        
        //array POST
        $nombreUser = $_REQUEST['nombre_user'];
        $claveUser = $_REQUEST['clave_user'];

        // conexion MYSQL
        include "conexion.php";

        //consulta3: si el usuario y el password coinciden, no hay login, sale a Registro. Sino, creamos las sesiones

        $query3 = mysqli_query($conexion, "SELECT id, nombre, email FROM usuarios WHERE nombre_user='$nombreUser' and clave_user='$claveUser'");

        $verif = mysqli_num_rows($query3);

        if($verif == 0){
            // echo "<p>Para ingresar debes ser usuario registrado.</p>";
            // echo "<a href='formRegistro.php' class='btn btn-primary'>Rgistrarse</a>";
            
            echo "<p>Hay datos que no concidedn con algun usuario ya registrado</p>";
            echo "<a href='formLogin.php' class='btn btn-primary'>Volver</a>";
        }else{

            // sesiones
            session_start();

            $_SESSION['nombre_user'] = $nombreUser;
            // $_SESSION['clave_user'] = $claveUser;
            //procesar la consulta -> fetch -> array con los valores de la fila
            $user = mysqli_fetch_array($query3);

            $_SESSION['id'] = $user['id'];
            // $_SESSION['nombre'] = $user['nombre'];
            // $_SESSION['email'] = $user['email'];

            // version aburrida
            // echo "<h2>Hola ".$_SESSION['nombre_user']."</h2><hr>";
            // echo "<a href='mostrarusuarios.php'>Ingresar</a>";

            // version rápida
            header('location:mostrarusuarios.php');


        }



        
        
        
        ?>
    </div>
</div>

<?php include "footer.php"; ?>

</body>
</html>