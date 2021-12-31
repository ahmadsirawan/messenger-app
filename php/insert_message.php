<?php

require_once("db_connect.php");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
if ($dbi) {
   
    $message = $_REQUEST['message'];
    $chatid = $_REQUEST['chatid'];
    $chatwith= $_REQUEST['chatwith'];
   
    $message = htmlentities($message,ENT_QUOTES);
    $q = "INSERT INTO AS_MESSAGES (message, sender, receiver) VALUES (?,?,?)";
    
    $insertedRows = 0;
   
    if ($insertStmt = $dbi->prepare($q)) {
        
        $insertStmt->bind_param("sii", $message, $chatid, $chatwith);
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