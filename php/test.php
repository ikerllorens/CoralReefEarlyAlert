
<?php

header("Access-Control-Allow-Origin: *");

include_once 'config.php';
include_once 'token.php';
$data = file_get_contents("php://input");
$info = json_decode($data);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(array('status' => false));
    exit;
}


if (isset($_FILES['file'])) {
    $originalName = $_FILES['file']['name'];

    $idstr = strstr($originalName, '_', true);
    mkdir('../uploads/' . $idstr);
    $path = '../uploads/' . $idstr . '/';

    $ext = '.' . pathinfo($originalName, PATHINFO_EXTENSION);
    $generatedName = md5($_FILES['file']['tmp_name']) . $ext;
    $filePath = $path . $generatedName;

    if (!is_writable($path)) {
        echo json_encode(array(
            'status' => false,
            'msg' => 'Destination directory not writable.'
        ));
        exit;
    }

    if (move_uploaded_file($_FILES['file']['tmp_name'], $filePath)) {
        
        /*echo json_encode(array(
            'status' => true,
            'originalName' => $originalName,
            'generatedName' => $generatedName,
            'idstr' => $idstr,    
        ));*/
        if ($conn->connect_error) {
            $response = [
            "success" => false,
            "reason" => "Connection failed: " . $conn->connect_error
            ];
        } else {
            $sql = "INSERT INTO `Foto` (`Post_id`, `ruta`) VALUES (".$idstr.",'".$filePath."')";
            if ($conn->query($sql) === TRUE){
                $response = [
                    "success" => true,
                    ];    
            } else {
                    $response = [
                        "success" => false,
                        "reason" => "SQL: " . $sql 
                    ];
            }   
        }       
         echo json_encode($response);
    }
} else {
    echo json_encode(
            array('status' => false, 'msg' => 'No file uploaded.')
    );
    exit;
}