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
            echo "Ups! Postoji problem sa Vašim formularom(verovatno niste dobro uneli Vašu email adresu). Molimo Vas da pokušate ponovo.<br>There is a problem with your form (probably not valid email address). Please try again.";
            exit;
        }

        $recipient = "nbursa@gmail.com";

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

        if (mail($recipient, $subject, $content, $email_headers)) {
            http_response_code(200);
            echo "Hvala! Vaša poruka je uspešno prosleđena. / Thank you! Your message has been successfully sent.";
        } else {
            http_response_code(500);
            echo "Greška...slanje poruke neuspešno. / Error ... message sending failed.";
        }

    } else {
        http_response_code(403);
        echo "Postoji problem sa Vašim formularom, molim probajte ponovo. / There is a problem with your form, please try again.";
    }

?>
