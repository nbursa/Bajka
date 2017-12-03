<?php

    $errorMSG = "";
    if (empty($_POST["name"])) {
        $errorMSG = "Unesite Vaše ime ";
    } else {
        $name =  strip_tags(trim($_POST["name"]));
        $name = str_replace(array("\r","\n"),array(" "," "),$name);
    }
    if (empty($_POST["email"])) {
        $errorMSG .= "Unesite Vaš Email ";
    } else {
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    }
    if (empty($_POST["message"])) {
        $errorMSG .= "Unesite Vašu poruku ";
    } else {
        $message = trim($_POST["message"]);
    }

    $EmailTo = "nbursa@gmail.com";

    $Subject = "Imate novu poruku sa sajta www.businesslawserbia.com od $name - $email";

    $headers = 'Content-type: text/html; charset=UTF-8';

    $variables = array();
    $variables['name'] = "$name";
    $variables['mejl'] = "$email";
    $variables['message'] = "$message";

    $Body = file_get_contents('mail.html');

    foreach($variables as $key => $value)
    {
        $Body = str_replace('{{ '.$key.' }}', $value, $Body);
    }

    $success = mail($EmailTo, $Subject, $Body, $headers);

if ($success && $errorMSG == ""){
   echo "success";
} else {
    if($errorMSG == ""){
        echo "Greška :(";
    } else {
        echo $errorMSG;
    }
}

?>
