<?php

$data = file_get_contents("php://input");
$tokenid = json_decode($data);

$sql = "SELECT id, nombre, Perfil_id FROM Usuario WHERE DATE_ADD(tiempo_token,INTERVAL 30 MINUTE) >= NOW() AND tiempo_token < NOW() AND token='" . $tokenid . "'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) { 
        $response = [
            "success" => true,
            "usuarioID" => $row["id"],
            "userType" => $row["Perfil_id"],
            "name" => $row["nombre"]        
             ];
    }
 }
else {
    $response = [
    "success" => false,
    "reason" => "sesionExp"
];
}

echo json_encode($response); 

?>
