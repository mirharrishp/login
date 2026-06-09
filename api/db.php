
<?php
$host = 'localhost';
$database = 'project';
$user = 'root';
$password = 'root';
$port = '8889';

$conn = new mysqli($host, $user, $password, $database, $port);

if($conn->connect_error){
   die('Connection failed');
}

?>