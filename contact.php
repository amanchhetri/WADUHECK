<?php
  require("PHPMailer.php");
  require("SMTP.php");

  $name = $_POST["txtName"];
  $mail = $_POST["txtEmail"];
  $phone = $_POST["txtPhone"];
  $msg = $_POST["txtMsg"];

  $myfile = fopen("contact.txt", "a") or die("Unable to open file!");
  $txt = "User Name : $name
  User E-mail : $mail
  User Phone Number: $phone
  User Message : $msg \n
  ";
  fwrite($myfile, $txt);
  require("basic.php");

  $mail = new PHPMailer\PHPMailer\PHPMailer();

    $mail->isSMTP(true); // telling the class to use SMTP
    $mail->SMTPOptions = array(
    'ssl' => array(
    'verify_peer' => false,
    'verify_peer_name' => false,
    'allow_self_signed' => true
    )
    );
    $mail->SMTPSecure = 'tls';
    $mail->Host = 'tls://smtp.gmail.com';
    $mail->Port = 587;
    $mail->SMTPAuth = true;
    $mail->Username = "amanproject99@gmail.com"; // SMTP username
    $mail->Password = "kuchbhirakhde"; // SMTP password
    // TCP port to connect to
    // $mail->SMTPDebug = 1;
    $mail->setFrom('amanproject99@gmail.com');
    $mail->AddAddress("gattiflab@gmail.com");
    $mail->Subject = "FEEDBACK: $name";
    $mail->Body = $txt;
    $mail->WordWrap = 70;
    $mail->Send();



?>
