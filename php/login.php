<?php 

require_once("db_connect.php");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
if ($dbi) {
   
    $q = "SELECT id,username FROM AS_USERS WHERE real_name = ? AND password = ?";
    
    $rArray = array();
    if ($stmt = $dbi->prepare($q)) {
       
        $real_name = $_POST['real_name'];
        $password = $_POST['password'];
        $stmt->bind_param("ss",$real_name,$password);
       
        $stmt->execute();
        $stmt->store_result();
        $stmt->bind_result($rId,$rUsername);
       
        while($stmt->fetch()) {
            $rArray[] = [
                "id"=>$rId,
                "username"=>$rUsername
            ];
        }
        
        
        echo json_encode($rArray);
        
        $stmt->close();        
    }
    else {
        echo "no execute statement";
    }
}

else {
        echo "Connection Error: " . mysqli_connect_error();
}

mysqli_close($dbi);
    
?>
