<?php 
//First load the DB connection
require_once("db_connect.php");
//This will show errors in the browser if there are some
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
if ($dbi) {
    // SQL query
    $q = "SELECT id,sender,message FROM AS_MESSAGES WHERE  receiver = ? AND sender = ?
        UNION 
        SELECT id,sender,message FROM AS_MESSAGES WHERE sender = ? AND receiver = ?
        ORDER BY id";
    // Array to translate to json
    $rArray = array();
    if ($stmt = $dbi->prepare($q)) {
        //Prepare input
        $chatid = $_POST['chatid'];
        $chatwith = $_POST['chatwith'];
        $stmt->bind_param("iiii",$chatid,$chatwith,$chatid,$chatwith);

        //Prepare output
        $stmt->execute();
        $stmt->store_result();
        $stmt->bind_result($rId,$rSender,$rMessage);
        //Collect results
        while($stmt->fetch()) {
            $rArray[] = [
                "id"=>$rId,
                "sender"=>$rSender,
                "message"=>$rMessage
            ];
        }
        
        //Encode JSON
        echo json_encode($rArray);
        
        $stmt->close();        
    }
    else {
        echo "no execute statement";
    }
}
//Inform user if error
else {
        echo "Connection Error: " . mysqli_connect_error();
}
//Close connection
mysqli_close($dbi);
    
?>