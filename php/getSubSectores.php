
<?php

include_once 'config.php';
include_once 'token.php';
$data = file_get_contents("php://input");
$info = json_decode($data);

// Check connection
if ($conn->connect_error) {
    $response = [
        "success" => false,
        "reason" => "Csonnection failed: " . $conn->connect_error
    ];
} else {
    if ($info->id != -1) {
        $sql = "SELECT id, nombre FROM SubSector WHERE Sector_id = " . $info->id . " ORDER BY nombre";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $arreglodatos = array();
            $i = 0;
            // output data of each row
            while ($row = $result->fetch_assoc()) {
                $datos['text'] = $row['nombre'];
                $datos['id'] = $row['id'];
                $arreglodatos[$i] = $datos;
                $i++;
            }
            $response = array("success" => true, "datos" => $arreglodatos);
        } else {
            $response = [
                "success" => false,
                "reason" => "SQL SubSectores:" . $sql
            ];
        }
    } else {
        $sql = "SELECT id, nombre FROM SubSector ORDER BY nombre";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $arreglodatos = array();
            $i = 0;
            // output data of each row
            while ($row = $result->fetch_assoc()) {
                $datos['text'] = $row['nombre'];
                $datos['id'] = $row['id'];
                $arreglodatos[$i] = $datos;
                $i++;
            }
            $response = array("success" => true, "datos" => $arreglodatos);
        } else {
            $response = [
                "success" => false,
                "reason" => "SQL SubSectores:" . $sql
            ];
        }
    }
}
echo json_encode($response, JSON_UNESCAPED_UNICODE);
?>