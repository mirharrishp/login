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

$email = $data["email"] ?? '';
$pass = $data["password"] ?? '';

require '../db.php';

$sql = "SELECT * FROM tbluser WHERE email = '$email' AND password = '$pass'";

$result = mysqli_query($conn, $sql);

if ($result && mysqli_num_rows($result) > 0) {
    $user = mysqli_fetch_assoc($result);
    echo json_encode([
        "status" => true,
        "message" => "Login Successful",
        "user" => [
            "name" => $user["name"] ?? '',
            "email" => $user["email"] ?? '',
            "phone" => $user["phone"] ?? ''
        ]
    ]);
} else {
    echo json_encode([
        "status" => false,
        "message" => "Invalid email or password"
    ]);
}

// $conn->close();
?>
