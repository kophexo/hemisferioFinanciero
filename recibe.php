<?php
$nombre = $_GET["nombre"];
$email = $_GET["email"];
$telefono = $_GET["telefono"];
$rubro = $_GET["rubro"];
$textMessage = $_GET["textMessage"];

$headers = "From: Sitio Hemisferio Financiero <no-reply@hemisferiofinanciero.com>";
	$headers .= "\r\nContent-type: text/html; charset=iso-8859-1\r\n";
	$fecha = date("d-M-y");
	$message .= "
		<br>
		$fecha <br>
		Nombre:        $nombre <br><br>
		email:	       $email <br><br>
		telefono:	   $telefono <br><br>
		rubro:	   $rubro <br><br>
		Mensaje:       $textMessage <br>
    ";
	//ini_set("SMTP", "relay-hosting.secureserver.net");

//  ejecutando el script del mail, solo sirve para PHP, y este es el orden:	mail($email, $subject, $message, $headers);
	mail("pmunozalain@gmail.com", "Formulario de Contacto", $message, $headers);


?>
<script>
	window.onload = function(){
		window.location.replace('index.php');
	}
</script>