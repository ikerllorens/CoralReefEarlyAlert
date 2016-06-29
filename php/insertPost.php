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
} else {
    $sql = "SELECT id FROM Usuario WHERE DATE_ADD(tiempo_token,INTERVAL 30 MINUTE) >= NOW() AND tiempo_token <= NOW() AND token='" . $info->token . "'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        // output data of each row
        while ($row = $result->fetch_assoc()) {
            $usuarioID = $row["id"];
            $response = [
                "success" => true
            ];
        }

        $sql = "INSERT INTO Post (Usuario_id, TipCoral_id, Especie_id, Sector_id, SubSector_id, fecha_tiempo) VALUES (" . $usuarioID . "," . $info->coralTypeId . ", " . $info->coralSpeciesId . " , " . $info->sectorId . "," . $info->subsectorId . ",NOW())";
        if ($conn->query($sql) === TRUE) {
            $postid = $conn->insert_id; //Post id   
            $longB = count($info->bleaching);

            for ($i = 0; $i < $longB; $i++) {
                $sql2 = "INSERT INTO Post_has_CatBlanq (Post_id, CatBlanq_id, por) VALUES(" . $postid . "," . $info->bleaching[$i]->id . "," . $info->bleaching[$i]->percentage . ")";
            }
            $longD = count($info->diseases);
            for ($i = 0; $i < $longD; $i++) {
                $sql3 = "INSERT INTO Post_has_Enfermedad (Post_id, Enfermedad_id, por) VALUES(" . $postid . "," . $info->diseases[$i]->id . "," . $info->diseases[$i]->percentage . ")";
            }

            $response = [
                "success" => true,
            ];
        } else {
            $response = [
                "success" => false,
                "reason" => "Insert" . $sql
            ];
        }
    } else {
        $response = [
            "success" => false,
            "reason" => "sesionExp"
        ];
    }
}
echo json_encode($response);
?>

}