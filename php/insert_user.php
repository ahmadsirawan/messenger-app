<?php

require_once("db_connect.php");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
if ($dbi) {
   
    $real_name = $_REQUEST['real_name'];
    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];
    $q = "INSERT INTO AS_USERS (real_name, username, password) VALUES (?,?,?)";
   
    $insertedRows = 0;
   
    if ($insertStmt = $dbi->prepare($q)) {
       
        $insertStmt->bind_param("sss", $real_name, $username, $password);
        $insertStmt->execute();
        $insertedRows += $insertStmt->affected_rows;
    } else {
        echo "Error";
    }
    
    $insertStmt->close();
    $dbi->close();
}

echo "OK: $insertedRows item added";
?>