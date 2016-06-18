<?php
include_once './config.php';

$data = file_get_contents("php://input");
//$data = '  {"token":"wjN7XTQD8p4wx76TLvL3kfJnGw2SYzBJjKUcWL3ocWWeTIj0EjWNyEDyJpi35igjbIGN4ic3nBDnoCdtxLOzBgYNObNhwMjIOVZ"} ';
$jsonData = json_decode($data);
$tokenid = $jsonData->token;

$sql = "SELECT id, nombre, Perfil_id FROM Usuario WHERE DATE_ADD(tiempo_token,INTERVAL 30 MINUTE) >= NOW() AND tiempo_token <= NOW() AND token='" . $tokenid . "'";
//$sql = "SELECT id, nombre, Perfil_id FROM Usuario WHERE DATE_ADD(tiempo_token,INTERVAL 30 MINUTE) >= NOW() AND tiempo_token < NOW() AND token=\"" . $tokenid . "\"";
if ($result = $conn->query($sql))
{
    $h = ":)";
} else {
    $h = ":(";
}


if ($result->num_rows > 0) { //Hay un error
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
    "reason" => "sesionExp " . $h
];
}

echo json_encode($response); 

?>
