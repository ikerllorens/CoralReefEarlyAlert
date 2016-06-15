<?php
include_once 'config.php';
include_once 'token.php';
//$data = $_POST['data'];
$data = file_get_contents("php://input");
$loginData = json_decode($data);

//$loginData->username;

// Entrada de datos a mano
/*
$loginData = array(
    "username" => "alanesp92@hotmail.com",
    "password" => "centroakumal"
    );
*/

/* Plantilla para Json
$response = [
    "success" => true,
    "userType" => 1,
    "name" => "estupido",
    "reason" => "no te importa"
];
*/

// Remove all illegal characters from email
$email = filter_var($loginData->username, FILTER_SANITIZE_EMAIL);

// Validate e-mail
if (!filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    $mail=$email;
} 
else {
     $response = [
    "success" => false,
    "reason" => "Maldito Impostor"
];
}

$sql = "SELECT id, nombre, mail, pass, Perfil_id FROM Usuario WHERE mail='" . $mail . "' AND pass='" .$loginData->password . "'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) { 
        
    $token=getToken(99);
    $usuarioID = $row["id"];
    $response = [
    "success" => true,
    "userType" => $row["Perfil_id"],
    "name" => $row["nombre"],
    "token" => $token      
    ];
    
    $sql2 = "UPDATE `Usuario` SET `token`='". $token ."', `tiempo_token`= NOW() WHERE `id`='".$usuarioID."'";
    $conn->query($sql2);
    }
} 

else {
    $response = [
    "success" => false,
    "reason" => "Usuario y/o contraseña inválido"
];
}

echo json_encode($response); 
?>

