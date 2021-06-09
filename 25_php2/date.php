<?php

    echo "<h1> Fechas </h1>"; 

    //mostrar la fecha de hoy
    ini_set('date.timezone', 'America/Argentina/Cordoba');

    // date_timezone_set("America/Argentina");

    $dia = date("d");
    $mes = date("m");
    $anio = date("Y");

    $fecha = $dia."/".$mes."/".$anio;

    echo "Hoy es ".$fecha;
    echo "<hr>";
    echo "Hora: ".date("H:i:s");
    
    echo "<hr>";
    // $localtime = localtime();
    // foreach ($localtime as $key) {
    //     echo $key;
    // }
    

?>

