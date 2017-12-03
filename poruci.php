<?php

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["first_name"]));
                $name = str_replace(array("\r","\n"),array(" "," "),$name);

        $l_name = strip_tags(trim($_POST["last_name"]));
                $l_name = str_replace(array("\r","\n"),array(" "," "),$l_name);

        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

        $phone = filter_var(trim($_POST["telephone"]), FILTER_SANITIZE_NUMBER_INT);

        $company = strip_tags(trim($_POST["company"]));
                $company = str_replace(array("\r","\n"),array(" "," "),$company);

        $address = strip_tags(trim($_POST["address"]));
                $address = str_replace(array("\r","\n"),array(" "," "),$address);

        $city = strip_tags(trim($_POST["city"]));
                $city = str_replace(array("\r","\n"),array(" "," "),$city);

        $zip = filter_var(trim($_POST["zip"]), FILTER_SANITIZE_NUMBER_INT);

        $message = trim($_POST["poruka"]);

        $size = $_POST["cart_item_size"];

        $item_name = $_POST["cart_item_name"];

        // $total = $_POST["cart_item_total"];

        $quantity = $_POST["cart_item_quantity"];

        $tax = $_POST["cart_item_tax"];

        $shipping = $_POST["cart_item_shipping"];

        $grandtotal = $_POST["cart_item_grandtotal"];

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($l_name) OR empty($city) OR empty($phone) OR empty($address) OR empty($zip) OR empty($item_name) OR empty($quantity) OR empty($tax) OR empty($shipping) OR empty($grandtotal) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Ups! Postoji problem sa Vašim formularom. Molimo Vas da pregledate formular i pokušate ponovo.";
            exit;
        }

        // Set the recipient email address.
        //  Update this to your desired email address.
        $recipient = "shop@smrdljivabajka.com, nenad.bursac@sbb.rs";

        // Set the email subject.
        $subject = "Nova porudzbina sa smrdljivabajka.com od $name, $l_name";

        // Build the email content.

        // $email_content = "Ime: $name\n";
        // $email_content .= "Prezime: $l_name\n";
        // $email_content .= "Mail: $email\n";
        // $email_content .= "Telefon: $phone\n";
        // $email_content .= "Kompanija: $company\n";
        // $email_content .= "Adresa: $address\n";
        // $email_content .= "Grad: $city\n";
        // $email_content .= "Poš. br: $zip\n\n";
        // $email_content .= "Napomena: $message\n\n";
        // // $email_content .= "Info: $info\n\n";
        // $email_content .= "Naziv proizvoda: $item_name\n";
        // $email_content .= "Količina: $quantity\n";
        // // $email_content .= "Veličina: $size\n";
        // $email_content .= "PDV: $tax\n";
        // $email_content .= "Dostava: $shipping\n";
        // // $email_content .= "Total: $total\n";
        // $email_content .= "Grand total: $grandtotal\n";
        // // $email_content->CharSet = "UTF-8";
        $email_content = "<html><body style='background-color:#212121;color:#fafafa;font-family:Helvetica, Arial, sans-serif;text-align:center;'>";
        $email_content .= "<table>";
        $email_content .= "<tr>Nova porudžbina sa <strong>www.smrdljivabajka.com</strong> od:</tr>";
        $email_content .= "<tr><td><strong>Ime:</strong></td><td> $name </td></tr>";
        $email_content .= "<tr><td><strong>Prezime:</strong></td><td> $l_name </td></tr>";
        $email_content .= "<tr><td><strong>Mejl:</strong></td><td> $email </td></tr>";
        $email_content .= "<tr><td><strong>Telefon:</strong></td><td> $phone </td></tr>";
        $email_content .= "<tr><td><strong>Kompanija:</strong></td><td> $company </td></tr>";
        $email_content .= "<tr><td><strong>Adresa:</strong></td><td> $address </td></tr>";
        $email_content .= "<tr><td><strong>Grad:</strong></td><td> $city </td></tr>";
        $email_content .= "<tr><td><strong>Poš. br:</strong></td><td> $zip </td></tr>";
        $email_content .= "<tr><td><strong>Napomena:</strong></td><td> $message </td></tr>";
        $email_content .= "<tr><td><strong>Naziv proizvoda:</strong></td><td> $item_name </td></tr>";
        $email_content .= "<tr><td><strong>Količina:</strong></td><td> $quantity </td></tr>";
        $email_content .= "<tr><td><strong>Veličina:</strong></td><td> $size </td></tr>";
        $email_content .= "<tr><td><strong>PDV:</strong></td><td> $tax </td></tr>";
        $email_content .= "<tr><td><strong>Dostava:</strong></td><td> $shipping </td></tr>";
        $email_content .= "<tr><td><strong>Grand total:</strong></td><td> $grandtotal </td></tr>";
        $email_content .= "</table>";
        $email_content .= "<body><html>";

        // Build the email headers.
        $email_headers = "Od: $name <$email>" . "\r\n" .
           'Content-type: text/html; charset=UTF-8;' . "\r\n";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Hvala! Vaša porudžbina je uspešno prosleđena i biće poslata u roku od tri radna dana, obavestićemo Vas o slanju. Možete nas kontaktirati putem kontakt formulara ili na broj 064 244 1663 .";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Ups! Nešto je krenulo naopako...nismo uspeli poslati Vašu poruku.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "Postoji problem sa Vašim podneskom, molimo Vas da probate ponovo.";
    }

?>
