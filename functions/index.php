<?php

include 'config.php';
// Send a JSON Header
header('Content-type: application/json');



if (!empty($_GET)) {

    // get the results from database
    if ($_GET['user_id']) {
        $stmt = $pdo->prepare('SELECT value FROM results WHERE user_id= :user_id LIMIT 1');
        $stmt->bindParam(':user_id', $_GET['user_id'], PDO::PARAM_INT);
        $stmt->execute();

        if ($stmt->rowCount() == 1) {
            $result = $handle->fetch(PDO::FETCH_OBJ);

            $output['success'] = true;
            $output['value'] = $result->value;
        } else {
            $output['success'] = false;
        }
    } else {
        $output['success'] = false;
    }



    // save the results to database
} else
if (!empty($_POST)) {

//	print_r($_POST);
//        exit;


    if (!empty($_POST['user_id'])) {

             // create timestamp
        $timestamp = date("Y-m-d H:i:s");
        

        $stmt = $pdo->prepare('INSERT INTO results (user_id,
                 RightClickedWords1,WrongClickedWords1,RightClickedWords2,WrongClickedWords2,RightClickedWords3,WrongClickedWords3,RightClickedWordsDelay,WrongClickedWordsDelay,
                 RightNumFieldsTMT1,WrongNumFieldsTMT1,TimeToSolveTMT1,ClickIntervalsTMT1,
                 RightNumFieldsTMT2,WrongNumFieldsTMT2,TimeToSolveTMT2,ClickIntervalsTMT2,
                 RightNumFieldsTMT3,WrongNumFieldsTMT3,TimeToSolveTMT3,ClickIntervalsTMT3,                 
                 RightNumFieldsTMT4,WrongNumFieldsTMT4,TimeToSolveTMT4,ClickIntervalsTMT4,
                 WrongClickedTilesP1,RightClickedTilesP1,PuzzleSolvedP1,TimeToSolveP1,
                 WrongClickedTilesP2,RightClickedTilesP2,PuzzleSolvedP2,TimeToSolveP2,
                 WrongClickedTilesP3,RightClickedTilesP3,PuzzleSolvedP3,TimeToSolveP3,
                 WrongClickedTilesP4,RightClickedTilesP4,PuzzleSolvedP4,TimeToSolveP4,
                 WrongClickedTilesP5,RightClickedTilesP5,PuzzleSolvedP5,TimeToSolveP5,
                 WrongClickedTilesP6,RightClickedTilesP6,PuzzleSolvedP6,TimeToSolveP6,
                 WrongClickedTilesP7,RightClickedTilesP7,PuzzleSolvedP7,TimeToSolveP7,
                 ToAchieveArrayT1,ClickedArrayT1,ToAchieveArrayT1Rep,ClickedArrayT1Rep,
                 ToAchieveArrayT2,ClickedArrayT2,ToAchieveArrayT2Rep,ClickedArrayT2Rep,
                 ToAchieveArrayT3,ClickedArrayT3,ToAchieveArrayT3Rep,ClickedArrayT3Rep,
                 ToAchieveArrayT4,ClickedArrayT4,ToAchieveArrayT4Rep,ClickedArrayT4Rep,
                 ToAchieveArrayT5,ClickedArrayT5,ToAchieveArrayT5Rep,ClickedArrayT5Rep,
                 ToAchieveArrayT6,ClickedArrayT6,ToAchieveArrayT6Rep,ClickedArrayT6Rep,
                 ToAchieveArrayT7,ClickedArrayT7,ToAchieveArrayT7Rep,ClickedArrayT7Rep,
                 DepressionQuestionAnswerMap,ADLQuestAnswerMap,Zeitstempel) 
                    


                 VALUES(:user_id,
                 :RightClickedWords1,:WrongClickedWords1,:RightClickedWords2,:WrongClickedWords2,:RightClickedWords3,:WrongClickedWords3,:RightClickedWordsDelay,:WrongClickedWordsDelay,
                 :RightNumFieldsTMT1,:WrongNumFieldsTMT1,:TimeToSolveTMT1,:ClickIntervalsTMT1,
                 :RightNumFieldsTMT2,:WrongNumFieldsTMT2,:TimeToSolveTMT2,:ClickIntervalsTMT2,
                 :RightNumFieldsTMT3,:WrongNumFieldsTMT3,:TimeToSolveTMT3,:ClickIntervalsTMT3,
                 :RightNumFieldsTMT4,:WrongNumFieldsTMT4,:TimeToSolveTMT4,:ClickIntervalsTMT4,
                 :WrongClickedTilesP1,:RightClickedTilesP1,:PuzzleSolvedP1,:TimeToSolveP1,
                 :WrongClickedTilesP2,:RightClickedTilesP2,:PuzzleSolvedP2,:TimeToSolveP2,
                 :WrongClickedTilesP3,:RightClickedTilesP3,:PuzzleSolvedP3,:TimeToSolveP3,
                 :WrongClickedTilesP4,:RightClickedTilesP4,:PuzzleSolvedP4,:TimeToSolveP4,
                 :WrongClickedTilesP5,:RightClickedTilesP5,:PuzzleSolvedP5,:TimeToSolveP5,
                 :WrongClickedTilesP6,:RightClickedTilesP6,:PuzzleSolvedP6,:TimeToSolveP6,
                 :WrongClickedTilesP7,:RightClickedTilesP7,:PuzzleSolvedP7,:TimeToSolveP7,
                 :ToAchieveArrayT1,:ClickedArrayT1,:ToAchieveArrayT1Rep,:ClickedArrayT1Rep,
                 :ToAchieveArrayT2,:ClickedArrayT2,:ToAchieveArrayT2Rep,:ClickedArrayT2Rep,
                 :ToAchieveArrayT3,:ClickedArrayT3,:ToAchieveArrayT3Rep,:ClickedArrayT3Rep,
                 :ToAchieveArrayT4,:ClickedArrayT4,:ToAchieveArrayT4Rep,:ClickedArrayT4Rep,
                 :ToAchieveArrayT5,:ClickedArrayT5,:ToAchieveArrayT5Rep,:ClickedArrayT5Rep,
                 :ToAchieveArrayT6,:ClickedArrayT6,:ToAchieveArrayT6Rep,:ClickedArrayT6Rep,
                 :ToAchieveArrayT7,:ClickedArrayT7,:ToAchieveArrayT7Rep,:ClickedArrayT7Rep,
                 :DepressionQuestionAnswerMap,:ADLQuestAnswerMap,:Zeitstempel)');

        $stmt->bindParam(':user_id', $_POST['user_id'], PDO::PARAM_INT);
        
        $stmt->bindParam(':RightClickedWords1', json_encode($_POST['RightClickedWords1']), PDO::PARAM_STR);
        $stmt->bindParam(':WrongClickedWords1', json_encode($_POST['WrongClickedWords1']), PDO::PARAM_STR);
        $stmt->bindParam(':RightClickedWords2', json_encode($_POST['RightClickedWords2']), PDO::PARAM_STR);
        $stmt->bindParam(':WrongClickedWords2', json_encode($_POST['WrongClickedWords2']), PDO::PARAM_STR);
        $stmt->bindParam(':RightClickedWords3', json_encode($_POST['RightClickedWords3']), PDO::PARAM_STR);
        $stmt->bindParam(':WrongClickedWords3', json_encode($_POST['WrongClickedWords3']), PDO::PARAM_STR);
        $stmt->bindParam(':RightClickedWordsDelay', json_encode($_POST['RightClickedWordsDelay']), PDO::PARAM_STR);
        $stmt->bindParam(':WrongClickedWordsDelay', json_encode($_POST['WrongClickedWordsDelay']), PDO::PARAM_STR);
        $stmt->bindParam(':RightNumFieldsTMT1', json_encode($_POST['RightNumFieldsTMT1']), PDO::PARAM_STR);
        $stmt->bindParam(':WrongNumFieldsTMT1', json_encode($_POST['WrongNumFieldsTMT1']), PDO::PARAM_STR);
        $stmt->bindParam(':TimeToSolveTMT1', json_encode($_POST['TimeToSolveTMT1']), PDO::PARAM_STR);
        $stmt->bindParam(':ClickIntervalsTMT1', json_encode($_POST['ClickIntervalsTMT1']), PDO::PARAM_STR);
        $stmt->bindParam(':RightNumFieldsTMT2', json_encode($_POST['RightNumFieldsTMT2']), PDO::PARAM_STR);
        $stmt->bindParam(':WrongNumFieldsTMT2', json_encode($_POST['WrongNumFieldsTMT2']), PDO::PARAM_STR);
        $stmt->bindParam(':TimeToSolveTMT2', json_encode($_POST['TimeToSolveTMT2']), PDO::PARAM_STR);
        $stmt->bindParam(':ClickIntervalsTMT2', json_encode($_POST['ClickIntervalsTMT2']), PDO::PARAM_STR);
        $stmt->bindParam(':RightNumFieldsTMT3', json_encode($_POST['RightNumFieldsTMT3']), PDO::PARAM_STR);
        $stmt->bindParam(':WrongNumFieldsTMT3', json_encode($_POST['WrongNumFieldsTMT3']), PDO::PARAM_STR);
        $stmt->bindParam(':TimeToSolveTMT3', json_encode($_POST['TimeToSolveTMT3']), PDO::PARAM_STR);
        $stmt->bindParam(':ClickIntervalsTMT3', json_encode($_POST['ClickIntervalsTMT3']), PDO::PARAM_STR);
        $stmt->bindParam(':RightNumFieldsTMT4', json_encode($_POST['RightNumFieldsTMT4']), PDO::PARAM_STR);
        $stmt->bindParam(':WrongNumFieldsTMT4', json_encode($_POST['WrongNumFieldsTMT4']), PDO::PARAM_STR);
        $stmt->bindParam(':TimeToSolveTMT4', json_encode($_POST['TimeToSolveTMT4']), PDO::PARAM_STR);
        $stmt->bindParam(':ClickIntervalsTMT4', json_encode($_POST['ClickIntervalsTMT4']), PDO::PARAM_STR);
        $stmt->bindParam(':WrongClickedTilesP1', json_encode($_POST['WrongClickedTilesP1']), PDO::PARAM_STR);
        $stmt->bindParam(':RightClickedTilesP1', json_encode($_POST['RightClickedTilesP1']), PDO::PARAM_STR);
        $stmt->bindParam(':PuzzleSolvedP1', $_POST['PuzzleSolvedP1'], PDO::PARAM_STR);
        $stmt->bindParam(':TimeToSolveP1', json_encode($_POST['TimeToSolveP1']), PDO::PARAM_STR);
        $stmt->bindParam(':WrongClickedTilesP2', json_encode($_POST['WrongClickedTilesP2']), PDO::PARAM_STR);
        $stmt->bindParam(':RightClickedTilesP2', json_encode($_POST['RightClickedTilesP2']), PDO::PARAM_STR);
        $stmt->bindParam(':PuzzleSolvedP2', $_POST['PuzzleSolvedP2'], PDO::PARAM_STR);
        $stmt->bindParam(':TimeToSolveP2', json_encode($_POST['TimeToSolveP2']), PDO::PARAM_STR);
        $stmt->bindParam(':WrongClickedTilesP3', json_encode($_POST['WrongClickedTilesP3']), PDO::PARAM_STR);
        $stmt->bindParam(':RightClickedTilesP3', json_encode($_POST['RightClickedTilesP3']), PDO::PARAM_STR);
        $stmt->bindParam(':PuzzleSolvedP3', $_POST['PuzzleSolvedP3'], PDO::PARAM_STR);
        $stmt->bindParam(':TimeToSolveP3', json_encode($_POST['TimeToSolveP3']), PDO::PARAM_STR);
        $stmt->bindParam(':WrongClickedTilesP4', json_encode($_POST['WrongClickedTilesP4']), PDO::PARAM_STR);
        $stmt->bindParam(':RightClickedTilesP4', json_encode($_POST['RightClickedTilesP4']), PDO::PARAM_STR);
        $stmt->bindParam(':PuzzleSolvedP4', $_POST['PuzzleSolvedP4'], PDO::PARAM_STR);
        $stmt->bindParam(':TimeToSolveP4', json_encode($_POST['TimeToSolveP4']), PDO::PARAM_STR);
        $stmt->bindParam(':WrongClickedTilesP5', json_encode($_POST['WrongClickedTilesP5']), PDO::PARAM_STR);
        $stmt->bindParam(':RightClickedTilesP5', json_encode($_POST['RightClickedTilesP5']), PDO::PARAM_STR);
        $stmt->bindParam(':PuzzleSolvedP5', $_POST['PuzzleSolvedP5'], PDO::PARAM_STR);
        $stmt->bindParam(':TimeToSolveP5', json_encode($_POST['TimeToSolveP5']), PDO::PARAM_STR);
        $stmt->bindParam(':WrongClickedTilesP6', json_encode($_POST['WrongClickedTilesP6']), PDO::PARAM_STR);
        $stmt->bindParam(':RightClickedTilesP6', json_encode($_POST['RightClickedTilesP6']), PDO::PARAM_STR);
        $stmt->bindParam(':PuzzleSolvedP6', $_POST['PuzzleSolvedP6'], PDO::PARAM_STR);
        $stmt->bindParam(':TimeToSolveP6', json_encode($_POST['TimeToSolveP6']), PDO::PARAM_STR);
        $stmt->bindParam(':WrongClickedTilesP7', json_encode($_POST['WrongClickedTilesP7']), PDO::PARAM_STR);
        $stmt->bindParam(':RightClickedTilesP7', json_encode($_POST['RightClickedTilesP7']), PDO::PARAM_STR);
        $stmt->bindParam(':PuzzleSolvedP7', $_POST['PuzzleSolvedP7'], PDO::PARAM_STR);
        $stmt->bindParam(':TimeToSolveP7', json_encode($_POST['TimeToSolveP7']), PDO::PARAM_STR);
        $stmt->bindParam(':ToAchieveArrayT1', json_encode($_POST['ToAchieveArrayT1']), PDO::PARAM_STR);
        $stmt->bindParam(':ClickedArrayT1', json_encode($_POST['ClickedArrayT1']), PDO::PARAM_STR);
        $stmt->bindParam(':ToAchieveArrayT1Rep', json_encode($_POST['ToAchieveArrayT1Rep']), PDO::PARAM_STR);
        $stmt->bindParam(':ClickedArrayT1Rep', json_encode($_POST['ClickedArrayT1Rep']), PDO::PARAM_STR);
        $stmt->bindParam(':ToAchieveArrayT2', json_encode($_POST['ToAchieveArrayT2']), PDO::PARAM_STR);
        $stmt->bindParam(':ClickedArrayT2', json_encode($_POST['ClickedArrayT2']), PDO::PARAM_STR);
        $stmt->bindParam(':ToAchieveArrayT2Rep', json_encode($_POST['ToAchieveArrayT2Rep']), PDO::PARAM_STR);
        $stmt->bindParam(':ClickedArrayT2Rep', json_encode($_POST['ClickedArrayT2Rep']), PDO::PARAM_STR);
        $stmt->bindParam(':ToAchieveArrayT3', json_encode($_POST['ToAchieveArrayT3']), PDO::PARAM_STR);
        $stmt->bindParam(':ClickedArrayT3', json_encode($_POST['ClickedArrayT3']), PDO::PARAM_STR);
        $stmt->bindParam(':ToAchieveArrayT3Rep', json_encode($_POST['ToAchieveArrayT3Rep']), PDO::PARAM_STR);
        $stmt->bindParam(':ClickedArrayT3Rep', json_encode($_POST['ClickedArrayT3Rep']), PDO::PARAM_STR);
        $stmt->bindParam(':ToAchieveArrayT4', json_encode($_POST['ToAchieveArrayT4']), PDO::PARAM_STR);
        $stmt->bindParam(':ClickedArrayT4', json_encode($_POST['ClickedArrayT4']), PDO::PARAM_STR);
        $stmt->bindParam(':ToAchieveArrayT4Rep', json_encode($_POST['ToAchieveArrayT4Rep']), PDO::PARAM_STR);
        $stmt->bindParam(':ClickedArrayT4Rep', json_encode($_POST['ClickedArrayT4Rep']), PDO::PARAM_STR);
        $stmt->bindParam(':ToAchieveArrayT5', json_encode($_POST['ToAchieveArrayT5']), PDO::PARAM_STR);
        $stmt->bindParam(':ClickedArrayT5', json_encode($_POST['ClickedArrayT5']), PDO::PARAM_STR);
        $stmt->bindParam(':ToAchieveArrayT5Rep', json_encode($_POST['ToAchieveArrayT5Rep']), PDO::PARAM_STR);
        $stmt->bindParam(':ClickedArrayT5Rep', json_encode($_POST['ClickedArrayT5Rep']), PDO::PARAM_STR);
        $stmt->bindParam(':ToAchieveArrayT6', json_encode($_POST['ToAchieveArrayT6']), PDO::PARAM_STR);
        $stmt->bindParam(':ClickedArrayT6', json_encode($_POST['ClickedArrayT6']), PDO::PARAM_STR);
        $stmt->bindParam(':ToAchieveArrayT6Rep', json_encode($_POST['ToAchieveArrayT6Rep']), PDO::PARAM_STR);
        $stmt->bindParam(':ClickedArrayT6Rep', json_encode($_POST['ClickedArrayT6Rep']), PDO::PARAM_STR);
        $stmt->bindParam(':ToAchieveArrayT7', json_encode($_POST['ToAchieveArrayT7']), PDO::PARAM_STR);
        $stmt->bindParam(':ClickedArrayT7', json_encode($_POST['ClickedArrayT7']), PDO::PARAM_STR);
        $stmt->bindParam(':ToAchieveArrayT7Rep', json_encode($_POST['ToAchieveArrayT7Rep']), PDO::PARAM_STR);
        $stmt->bindParam(':ClickedArrayT7Rep', json_encode($_POST['ClickedArrayT7Rep']), PDO::PARAM_STR);
        $stmt->bindParam(':DepressionQuestionAnswerMap', json_encode($_POST['DepressionQuestionAnswerMap']), PDO::PARAM_STR);
        $stmt->bindParam(':ADLQuestAnswerMap', json_encode($_POST['ADLQuestAnswerMap']), PDO::PARAM_STR);
        $stmt->bindParam(':Zeitstempel', json_encode($timestamp), PDO::PARAM_STR);

        $stmt->execute();



        if ($stmt->rowCount() == 1) {
            $output['success'] = true;
        } else {
            $output['success'] = false;
        }
    } else {
        $output['success'] = false;
    }
} else {
    $output['success'] = false;
}
echo json_encode($output);
?>