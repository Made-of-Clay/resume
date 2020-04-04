<?php
error_reporting(-1);
$cleanedPost = [];
function failMessage($message) {
    header("HTTP/1.0 400 Bad Request");
    die(json_encode("ERROR: $message"));
}

$json = file_get_contents('php://input'); // Takes raw data from the request
$data = json_decode($json); // Converts it into a PHP object

try {
    foreach (['name','email','message'] as $v) {
        if (!property_exists($data, $v)) {
            failMessage("$v was not passed");
        }
        $isEmail = $v == 'email';
        $filter = $isEmail ? FILTER_SANITIZE_EMAIL : FILTER_SANITIZE_STRING;
        $value = filter_var($data->$v, $filter);
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
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode('Message sent');
    } else {
        throw new \Exception('Message not sent; mail failed');
    }
} catch (\Exception $thrown) {
    failMessage($thrown->getMessage());
}