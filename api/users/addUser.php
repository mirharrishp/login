<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true);

$name = $data["name"] ?? '';
$email = $data["email"] ?? '';
$phone = $data["phone"] ?? '';
$pass = $data["password"] ?? '';

require '../db.php';

$sql = "INSERT INTO tbluser (name, email, phone, password)
        VALUES ('$name', '$email', '$phone', '$pass')";

$result=mysqli_query($conn,$sql);

if (($result)) {
    echo json_encode([
        "status" => true,
        "message" => "Inserted Successfully"
    ]);
} else {
    echo json_encode([
        "status" => false,
        "message" => "Insert Failed"
    ]);
}

// $conn->close();

?>