<?php
include_once 'config.php';
$data = $_POST['data'];

//$loginData = json_decode($data);
//$loginData->username;

// Entrada de datos a mano
$loginData = array(
    "username" => "alanesp92@hotmail.com",
    "password" => "centroakumal"
    );


/* Plantilla para Json
$response = [
    "success" => true,
    "userType" => 1,
    "name" => "estupido",
    "reason" => "no te importa"
];
*/

$sql = "SELECT nombre, mail, pass, Perfil_id FROM Usuario WHERE mail='" . $loginData["username"] . "' AND pass='" .$loginData["password"] . "'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) { 
    $response = [
    "success" => true,
    "userType" => $row["Perfil_id"],
    "name" => $row["nombre"]
    ];
       
    }
} else {
    $response = [
    "success" => false,
    "reason" => "Usuario y/o contraseña inválido"
];
}

echo json_encode($response); 
?>

