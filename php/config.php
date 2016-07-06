<?php
ini_set("auto_detect_line_endings", true);

$dbname = "triumpha_Reef";
$servername = "localhost";
$username = "triumpha_cea";
$password = "CentroAkumal041";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
?>
