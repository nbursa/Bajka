<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = strip_tags(trim($_POST["name"]));
                $name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["mail"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["poruka"]);
        $novosti = implode(', ', $_POST['novosti']);

        if ( empty($novosti) ) {
          http_response_code(400);
          echo "Molim čekirajte poje da potvrdite ispravnost formulara";
          exit;
        }
        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo "Ups! Postoji problem sa Vašim formularom. Molimo Vas da pokušate ponovo.";
            exit;
        }

        $recipient = "info@smrdljivabajka.com, nbursa@gmail.com";

        $subject = "Imate novu poruku sa sajta www.smrdljivabajka.com od $name - $email";

        $email_headers = 'Content-type: text/html; charset=UTF-8';

        $variables = array();
        $variables['name'] = "$name";
        $variables['mejl'] = "$email";
        $variables['message'] = "$message";

        $content = file_get_contents('mail.html');

        foreach($variables as $key => $value)
        {
            $content = str_replace('{{ '.$key.' }}', $value, $content);
        }

        if (mail($recipient, $subject, $email_content, $email_headers)) {
            http_response_code(200);
            echo "Hvala! Vaša poruka je uspešno prosleđena.";
        } else {
            http_response_code(500);
            echo "Ups! Nešto je krenulo naopako...nismo uspeli poslati Vašu poruku.";
        }

    } else {
        http_response_code(403);
        echo "Postoji problem sa Vašim podneskom, molimo Vas da probate ponovo.";
    }

?>
