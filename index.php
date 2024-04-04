<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
// PHPMailer library is required for SMTP email sending
header("Access-Control-Allow-Origin: *"); // Allow requests from any origin
// header("Access-Control-Allow-Origin: http://yourdomain.com"); // Allow requests from a specific origin
// Other headers you might need
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

echo "server is on";

// Check if it's a preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Return response for preflight request
    header("HTTP/1.1 200 OK");
    exit();
    }

require 'vendor/autoload.php';

$mail = new PHPMailer(true);
// Sanitize form inputs

//if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Check if the form with id "form2" was submitted
    
        try{
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $phone = filter_var($_POST['phone'], FILTER_SANITIZE_NUMBER_INT);
        $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

        echo 'Name: '. $name . '<br> Email: ' . $email . '<br> Phone: ' . $phone . '<br>';
    //Server settings
    $mail->isSMTP();
    //$mail->Host       = 'sh022.hostgator.in';
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    //$mail->Username   = 'Erafoxgroups@gmail.com'; // Your Gmail address
    $mail->Username   = 'enter u r email';
    $mail->Password   = 'enter u r password';
    //$mail->Password   = 'UqH@A462%:fM%8q'; // Your Gmail password
    //for hostgator $mail->SMTPSecure = 'ssl';
    $mail->SMTPSecure = 'tls';
    //for hostgator $mail->Port       =  465;
    $mail->Port       =  587;

    //Recipients
    $mail->setFrom($email, 'Your Name');
    $mail->addAddress('enter u r email', 'Recipient Name');

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'Test Email';
    $mail->Subject = 'New message from your website';
    $mail->Body    = "Name: $name\n, ";
    $mail->Body   .= "Email: $email\n, ";
    $mail->Body   .= "Phone: $phone\n, ";
    $mail->Body   .= "Message: $message";
    $mail->send();
    if($email){
       
       $response = array("success" => true, "message" => "Form data received and processed successfully!");
       http_response_code(200);
// Example: Sending an error response
// $response = array("success" => false, "message" => "Error: Failed to process form data!");
 http_response_code(200);

   echo json_encode($response);
    }else{
        http_response_code(400);
        echo"error";
    }
    
    
} catch (Exception $e) {
    http_response_code(400);
}
  //  }


?>
