<?php

include_once 'config.php';
include_once 'token.php';

// Check connection
if ($conn->connect_error) {
    $response = [
        "success" => false,
        "reason" => "Csonnection failed: " . $conn->connect_error
    ];
} else {

    $sql = "SELECT nombre FROM Observador";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $arreglodatos = array();
        $i = 0;
        // output data of each row
        while ($row = $result->fetch_assoc()) {
            $datos = array_map('utf8_encode', $row);
            $arreglodatos[$i] = $datos;
            $i++;
        }
        $response = array("succes" => true, "datos" => $arreglodatos);
    } else {
        $response = [
            "success" => false,
            "reason" => "SQL Observadores:" . $sql
        ];
    }
}
echo json_encode($response);
?>
