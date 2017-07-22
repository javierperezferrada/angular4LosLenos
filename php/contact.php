<?php 
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$name = $request->name;
$email = $request->email;
$phone = $request->phone;
$message = $request->message;
$formcontent="Nombre: $name \n Teléfono: $phone \n Mensaje: $message";
$recipient = "javierperezferrada@gmail.com";
$subject = "Contacto formulario Los Leños";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>