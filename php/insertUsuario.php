<?php
include_once 'config.php';
include_once 'token.php';
$data = file_get_contents("php://input");
$info = json_decode($data);

// Check connection
if ($conn->connect_error) {
    $response = [
    "success" => false,
    "reason" => "Connection failed: " . $conn->connect_error
];
} 

else{
$sql = "INSERT INTO Usuario (fecha, nombre, apellido, mail, pass, Perfil_id) VALUES (NOW(), '".$info->name."','".$info->surname."', '".$info->username."' , '".$info->password."',".$info->userType.")";
if ($conn->query($sql) === TRUE) {
     $response = [
    "success" => true,
    ];
} else {
     $response = [
    "success" => false,
    "reason" => "Connection failed: " . $conn->error . " SQL: " . $sql . " info: " . $data
];
}
}
echo json_encode($response); 
?>
