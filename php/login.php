<?php
$data = $_POST['data'];

$loginData = json_decode($data);
//$loginData->username;

$response = [
    "success" => true,
    "userType" => 1,
    "name" => "estupido",
    "reason" => "no te importa"
];

echo json_encode($response); 
?>

