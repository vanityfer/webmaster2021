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
        <h2>Registro de usuarios</h2>
        <hr>
    <div class="form w-75">
        <form action="registroUser.php" method="POST">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" name="nombre" required>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" required>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Nombre de Usuario</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ingrese su usuario" name="nombre_user" required>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="máximo 12 caracteres" maxlength="12" name="clave_user" required>
            </div>

            <input class="btn btn-outline-warning" type="submit" value="Registrarse">
        </form>
    </div>
</div>

<?php include "footer.php"; ?>

</body>
</html>