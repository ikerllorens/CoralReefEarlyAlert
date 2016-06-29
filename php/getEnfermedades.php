
<?php

include_once 'config.php';
include_once 'token.php';

// Check connection
if ($conn->connect_error) {
    $response = [
        "success" => false,
        "reason" => "Connection failed: " . $conn->connect_error
    ];
} else {

    $sql = "SELECT id, nombre FROM Enfermedad ORDER BY nombre;";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $arreglodatos = array();
        $i = 0;
        // output data of each row
        while ($row = $result->fetch_assoc()) {
            $datos['text'] = $row['nombre'];
            $datos['id']= $row['id'];
            $arreglodatos[$i] = $datos;
            $i++;
        }
        $response = array("success" => true, "datos" => $arreglodatos);
    } else {
        $response = [
            "success" => false,
            "reason" => "SQL Enfermedad:" . $sql
        ];
    }
}
echo json_encode($response,JSON_UNESCAPED_UNICODE);
?>