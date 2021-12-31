<?php
//First load the DB connection
require_once("db_connect.php");
//This will show errors in the browser if there are some
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
       
        $insertStmt->bind_param("sss", $name, $alias, $pass);
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