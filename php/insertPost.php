<?php
include_once 'config.php';
include_once 'token.php';
$data = file_get_contents("php://input");
$info = json_decode($data);

$response=[
    "Observadores" => $Observadores,
    "TipoCorales" => $TipoCorales,
    "Especies" => $Especies
    
];

// Check connection
if ($conn->connect_error) {
    $response = [
    "success" => false,
    "reason" => "Csonnection failed: " . $conn->connect_error
];
} 
else{
    $sql = "INSERT INTO `Post` (`Usuario_id`, `Observador_id`, `TipCoral_id`, `Especie_id`, `Sector_id`, `SubSector_id`, `fecha_tiempo`, `comentarios`) VALUES ('".$info->usuarioid."', '".$info->observadorid."', '".$info->tipocoralid."', '".$info->especieid."', '".$info->sectorid."', '".$info->subsectorid."', NOW(), '".$info->comment."'";
    if ($conn->query($sql) === TRUE) {
         $response = [
        "success" => true,
        ];
    } else {
         $response = [
        "success" => false,
        "reason" => "Connection failed: " . $conn->error
    ];
    }
}
