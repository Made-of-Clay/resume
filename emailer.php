<?php
error_reporting(-1);
$cleanedPost = [];
function failMessage($message) {
    header("HTTP/1.0 400 Bad Request");
    die("ERROR: $message");
}

try {
    foreach (['name','email','message'] as $v) {
        if (!isset($_POST[$v])) {
            failMessage("$v was not passed");
        }
        $isEmail = $v == 'email';
        $filter = $isEmail ? FILTER_SANITIZE_EMAIL : FILTER_SANITIZE_STRING;
        $value = filter_var($_POST[$v], $filter);
        if ($isEmail && filter_var($value, FILTER_VALIDATE_EMAIL) === false) {
            failMessage("Email ($value) was not valid");
        }
        $cleanedPost[$v] = $value;
    }
    $secrets = json_decode(file_get_contents(realpath(__DIR__ . '/../../adamleis/secrets.json')));
    $to      = $secrets->myEmail;
    $subject = "'{$cleanedPost['name']}' sent a message from AdamLeis.com";
    $message = $cleanedPost['message'];
    $headers = implode("\r\n", [
        "From: {$cleanedPost['email']}",
        "Reply-To: {$cleanedPost['email']}"
    ]);
    mail($to, $subject, $message, $headers);
} catch (\Exception $thrown) {
    failMessage($thrown->getMessage());
}