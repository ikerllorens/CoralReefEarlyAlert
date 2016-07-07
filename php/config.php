<?php
ini_set("auto_detect_line_endings", true);
ini_set("default_charset", 'utf-8');

$dbname = "Reef";
$servername = "localhost";
$username = "root";
$password = "root";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
$conn->set_charset("utf8");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
?>
