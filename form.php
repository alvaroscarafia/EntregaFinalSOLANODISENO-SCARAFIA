<?php

$nombre = $_POST['full-name'];
$email = $_POST['email'];
$numero = $_POST['number'];
$mensaje = $_POST['consulta'];


$mensaje = "Este mensaje fue enviado por " . $nombre . ",/r/n";
$mensaje .= "Su email es : " . $email . ",/r/n";
$mensaje .= "Numero de Telefono" . $numero . ",/r/n";
$mensaje .= "Mensaje:" . $_POST['mensaje'] . ",/r/n" ;
$mensaje .= "Enviado el " . date('d/m/Y'. time());

$destinatario = 'alvaro_s.d@hotmail.com';
$asunto = 'Este mail fue enviado desde la web SOLANO DISEÑO';



mail($destinatario, $asunto, utf8_decode($nombre, $email, $mensaje), $header);

header('Location:exito.html');





?>