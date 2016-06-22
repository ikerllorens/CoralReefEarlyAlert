
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
} 
else{
    
    $sql = "SELECT id, nombre FROM SubSector WHERE Sector_id = '.$data->SectorId .'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
    // output data of each row
        while($row = $result->fetch_assoc()) { 
            $response = [
                "id" => $row["id"], 
                "nombre" => $row["nombre"] 
             ];
        }
    }
    else {
        $response = [
        "success" => false,
        "reason" => "SQL SubSector:".$sql
    ];
    }
}
echo json_encode($response); 
?>

