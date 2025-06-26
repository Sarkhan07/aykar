<?php
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"] ?? '');
    $email = htmlspecialchars($_POST["email"] ?? '');
    $message = htmlspecialchars($_POST["message"] ?? '');

    $to = "otomataykar@hotmail.com";
    $subject = "Yeni mesaj (İletişim formu)";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $body = "İsim: $name\nEmail: $email\n\nMesaj:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["ok" => true]);
    } else {
        echo json_encode(["ok" => false, "error" => "Mail gönderilemedi."]);
    }
} else {
    echo json_encode(["ok" => false, "error" => "Geçersiz istek."]);
}
?>
