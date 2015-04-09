<?php
include 'config.php';
// Send a JSON Header
header('Content-type: application/json');



$password = $_POST['userPassword'];
$testId = $_POST['userID'];


 if (!empty($_POST)) {

	// check if ID exists already
     $data = mysql_query("SELECT * FROM test.results WHERE user_id=$testId") or die(mysql_error());
     // ID already exists
if (mysql_num_rows($data) > 0) {
    
        $output['success'] = false;
        
    }
    
    // when ID is new
    else {
	// user id and password are not null
	if(!empty($testId) && !empty($password)) {
	
            // correct password
          if ($password=="Screening"){
              $output['success'] = true;
          } 
          else
              $output['success'] = false;
		

	} 
        // when password or username is empty
        else if (empty($testId) || empty($password)){
		$output['success'] = false;
	}
        
        // when both password and username are empty
        else if (empty($testId) && empty($password)){
            $output['success'] = false;
        }
               
 } 
 
 
} 

else {
	$output['success'] = false;
}


echo json_encode($output);

?>