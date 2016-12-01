<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
spl_autoload_register(function($class_name) {
    require_once $class_name.".php";
});


/*$host = "localhost";
$user = "admin";
$pass = "admin";
$database = "skillgo_fake";

$linkID = mysqli_connect($host, $user, $pass) or die("Could not connect to host.");
mysqli_select_db($linkID, $database) or die("Could not find database.");

$query = mysqli_query($linkID,"SELECT id ,HR, BR, HRV, CoreTemp, sec FROM stat WHERE sec <= 10 ");
$rows = array();
while($row = mysqli_fetch_assoc($query)){
    $rows[] = $row;
}
print json_encode($rows);*/

define("DB_HOST", "localhost");
define("DB_USERNAME", "admin");
define("DB_PASSWORD","admin");
define("DB_NAME", "skillgo_fake");


$mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

if(!$mysqli){
    die("Connection failed: " . $mysqli->error);
}

$query = sprintf("SELECT id ,HR, BR, HRV, CoreTemp, sec FROM stat WHERE sec <= 10 ");

$result = $mysqli->query($query);

$data = array();
foreach ($result as $row){
    $data[] = $row;
}

$result->close();

$mysqli->close();

header('Content-Type: application/json');
print json_encode($data);