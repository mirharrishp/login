<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$response = [
    "status" => true,
    "message" => "PHP API Working"
];

echo json_encode($response);

?>