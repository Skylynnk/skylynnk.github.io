<?php
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $name = $_POST["name"];
    $message = $_POST["message"];

    $to = "skylynnk29@gmail.com";
    $subject ="New form Submission";
    $messageBody = "Name: $name\nMessage: \n$message";

    mail($to, $subject, $messageBody); 

   

    $success = mail($to, $subject, $messageBody);

    if($success){
        echo "Thank you your message has been sent.";}
        else{
            echo "Oops something went wrong. Message not send. Please email Skylynnk29@gmail.com";}
        } else{header("Location: index.html"); 
    exit();}
?>