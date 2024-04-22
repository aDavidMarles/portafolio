<?php
$nombre = $_POST["nombre"];
$correo = $_POST["email"];
$motivo = $_POST["asunto"];
$mensaje1 = $_POST["mensaje"];

$destinatario = "admspersonal@gmail.com";
$asunto = $motivo
$mensaje = "Nombre: $nombre\n$correo\nMensaje: $mensaje1;

mail($destinatario, $asunto, $mensaje);

echo " <p>Su mensaje se envió con éxito</p>"

?>