<?php

include 'config.php';
// Send a JSON Header
header('Content-type: application/json');


$password = $_POST['passwort'];
$testId = $_POST['testId'];





if ($password == "nc2013" && !empty($testId)) {


    $data = mysql_query("SELECT * FROM test.results WHERE user_id=$testId") or die(mysql_error());


     // there is no user with this ID !
    if (mysql_num_rows($data) == 0) {
        echo json_encode("<html><body><div><h1 style='color:white;'>
            Testperson_ID: $testId </br>
          Entweder gibt es keine gespeicherten Ergebnisse
              oder diese ID existiert nicht!            
            </h1> <br><br>
  <center><img src='/screening/img/stop_icon.png'/></center>            
</div></body></html>");
    }
    
    else {
   // when results available
        $row = mysql_fetch_array($data, MYSQL_ASSOC);

        //split depressins' and ADLs questions strings
       
        if (preg_match_all('~(["\'])([^"\']+)\1~', $row['DepressionQuestionAnswerMap'], $depressionArray,PREG_PATTERN_ORDER))

        if (preg_match_all('~(["\'])([^"\']+)\1~', $row['ADLQuestAnswerMap'], $adlsArray,PREG_PATTERN_ORDER)) 
        
            
        // print results as html report on screen
        $results = "<html><body><div> 
            
       <center><h2> <u>Testperson-ID:   " . $row['user_id']. " </u></h2></center> 
         <br> 
         <center><h3> Zeitstempel:   " . $row['Zeitstempel']. " </h3></center> 
         <br>
<h2><u>Paarassoziationstest </u></h2>

<li>Richtige Woerter im 1.Durchlauf:  " .trim($row['RightClickedWords1'],'&amp;quot'). " </li>
<li>Falsche Woerter im 1.Durchlauf:  " .trim($row['WrongClickedWords1'],'&amp;quot')  . " </li>
<li>Richtige Woerter im 2.Durchlauf:  " .trim($row['RightClickedWords2'],'&amp;quot'). " </li>
<li>Falsche Woerter im 2.Durchlauf:  " .trim($row['WrongClickedWords2'],'&amp;quot')  . " </li>
<li>Richtige Woerter im 3.Durchlauf:  " .trim($row['RightClickedWords3'],'&amp;quot'). " </li>
<li>Falsche Woerter im 3.Durchlauf:  " .trim($row['WrongClickedWords3'],'&amp;quot')  . " </li>
<li>Richtige Woerter im verzoegerten Abruf:  " .trim($row['RightClickedWordsDelay'],'&amp;quot'). " </li>
<li>Falsche Woerter im verzoegerten Abruf:  " .trim($row['WrongClickedWordsDelay'],'&amp;quot') . " </li>

<h2><u>Trail Making Test </u></h2>

<h3><u>Test 1 </u></h3>
<li>Richtig-geklickte Felder:  " .trim($row['RightNumFieldsTMT1'],'&amp;quot') . " </li>
<li>Falsch-geklickte Felder:  " .trim($row['WrongNumFieldsTMT1'],'&amp;quot')  . " </li>
<li>Gebrauchte Zeit in s:  " .trim($row['TimeToSolveTMT1'],'&amp;quot')  . " </li>
<li>Klick-Intervalle in s:  " . $row['ClickIntervalsTMT1'] . " </li>
    
<h3><u>Test 2 </u></h3>
<li>Richtig-geklickte Felder:  " .trim($row['RightNumFieldsTMT2'],'&amp;quot')  . " </li>
<li>Falsch-geklickte Felder:  " .trim($row['WrongNumFieldsTMT2'],'&amp;quot')  . " </li>
<li>Gebrauchte Zeit in s:  " .trim($row['TimeToSolveTMT2'],'&amp;quot')  . " </li>
<li>Klick-Intervalle in s:  " . $row['ClickIntervalsTMT2'] . " </li>
    
<h3><u>Test 3 </u></h3>
<li>Richtig-geklickte Felder:  " .trim($row['RightNumFieldsTMT3'],'&amp;quot')  . " </li>
<li>Falsch-geklickte Felder:  " .trim($row['WrongNumFieldsTMT3'],'&amp;quot')  . " </li>
<li>Gebrauchte Zeit in s:  " .trim($row['TimeToSolveTMT3'],'&amp;quot')  . " </li>
<li>Klick-Intervalle in s:  " . $row['ClickIntervalsTMT3'] . " </li>

<h3><u>Test 4 </u></h3>
<li>Richtig-geklickte Felder:  " .trim($row['RightNumFieldsTMT4'],'&amp;quot') . " </li>
<li>Falsch-geklickte Felder:  " . trim($row['WrongNumFieldsTMT4'],'&amp;quot'). " </li>
<li>Gebrauchte Zeit in s:  " .trim( $row['TimeToSolveTMT4'],'&amp;quot'). " </li>
<li>Klick-Intervalle in s:  " . $row['ClickIntervalsTMT4'] . " </li>
    

<h2><u>Mosaiktest </u></h2>

<h3><u>Puzzle 1 </u></h3>
<li>Falsch-geklickte Puzzleteile:  " .trim($row['WrongClickedTilesP1'],'&amp;quot')  . " </li>
<li>Richtig-geklickte Puzzleteile:  " .trim($row['RightClickedTilesP1'],'&amp;quot')  . " </li>
<li>Aufgabe gelöst:  " .$row['PuzzleSolvedP1'] . " </li>
<li>Gebrauchte Zeit in s:  " .trim($row['TimeToSolveP1'],'&amp;quot'). "   </li>

<h3><u>Puzzle 2 </u></h3>
<li>Falsch-geklickte Puzzleteile:  " .trim($row['WrongClickedTilesP2'],'&amp;quot')  . " </li>
<li>Richtig-geklickte Puzzleteile:  " .trim($row['RightClickedTilesP2'],'&amp;quot')  . " </li>
<li>Aufgabe gelöst:  " .$row['PuzzleSolvedP2'] . " </li>
<li>Gebrauchte Zeit in s:  " . trim($row['TimeToSolveP2'],'&amp;quot') . " </li>
     
<h3><u>Puzzle 3 </u></h3>
<li>Falsch-geklickte Puzzleteile:  " .trim($row['WrongClickedTilesP3'],'&amp;quot')  . " </li>
<li>Richtig-geklickte Puzzleteile:  " .trim($row['RightClickedTilesP3'],'&amp;quot')  . " </li>
<li>Aufgabe gelöst:  " .$row['PuzzleSolvedP3'] . " </li>
<li>Gebrauchte Zeit in s:  " .trim($row['TimeToSolveP3'],'&amp;quot')  . " </li>

<h3><u>Puzzle 4 </u></h3>
<li>Falsch-geklickte Puzzleteile:  " .trim($row['WrongClickedTilesP4'],'&amp;quot')  . " </li>
<li>Richtig-geklickte Puzzleteile:  " .trim($row['RightClickedTilesP4'],'&amp;quot')  . " </li>
<li>Aufgabe gelöst:  " .$row['PuzzleSolvedP4'] . " </li>
<li>Gebrauchte Zeit in s:  " .trim($row['TimeToSolveP4'],'&amp;quot')  . " </li>
 
<h3><u>Puzzle 5 </u></h3>
<li>Falsch-geklickte Puzzleteile:  " .trim($row['WrongClickedTilesP5'],'&amp;quot')  . " </li>
<li>Richtig-geklickte Puzzleteile:  " .trim($row['RightClickedTilesP5'],'&amp;quot')  . " </li>
<li>Aufgabe gelöst:  " .$row['PuzzleSolvedP5'] . " </li>
<li>Gebrauchte Zeit in s:  " .trim($row['TimeToSolveP5'],'&amp;quot')  . " </li>
 

<h3><u>Puzzle 6 </u></h3>
<li>Falsch-geklickte Puzzleteile:  " .trim($row['WrongClickedTilesP6'],'&amp;quot')  . " </li>
<li>Richtig-geklickte Puzzleteile:  " .trim($row['RightClickedTilesP6'],'&amp;quot')  . " </li>
<li>Aufgabe gelöst:  " .$row['PuzzleSolvedP6']. " </li>
<li>Gebrauchte Zeit in s:  " .trim($row['TimeToSolveP6'],'&amp;quot')  . " </li>
                  
    
<h2><u>Zahlen sortieren </u></h2>

<h3><u>Teil 1 </u></h3>
<li>Ziel Zahlenreihe:  " . $row['ToAchieveArrayT1'] . " </li>
<li>Geklickte Zahlenreihe:  " . $row['ClickedArrayT1'] . " </li>
<li>Ziel Zahlenreihe wiederholt:  " . $row['ToAchieveArrayT1Rep'] . " </li>
<li>Geklickte Zahlenreihe wiederholt:  " . $row['ClickedArrayT1Rep'] . " </li>
    
<h3><u>Teil 2 </u></h3>
<li>Ziel Zahlenreihe:  " . $row['ToAchieveArrayT2'] . " </li>
<li>Geklickte Zahlenreihe:  " . $row['ClickedArrayT2'] . " </li>
<li>Ziel Zahlenreihe wiederholt:  " . $row['ToAchieveArrayT2Rep'] . " </li>
<li>Geklickte Zahlenreihe wiederholt:  " . $row['ClickedArrayT2Rep'] . " </li>

<h3><u>Teil 3   </u></h3>
<li>Ziel Zahlenreihe:  " . $row['ToAchieveArrayT3'] . " </li>
<li>Geklickte Zahlenreihe:  " . $row['ClickedArrayT3'] . " </li>
<li>Ziel Zahlenreihe wiederholt:  " . $row['ToAchieveArrayT3Rep'] . " </li>
<li>Geklickte Zahlenreihe wiederholt:  " . $row['ClickedArrayT3Rep'] . " </li>

<h3><u>Teil 4 </u></h3>
<li>Ziel Zahlenreihe:  " . $row['ToAchieveArrayT4'] . " </li>
<li>Geklickte Zahlenreihe:  " . $row['ClickedArrayT4'] . " </li>
<li>Ziel Zahlenreihe wiederholt:  " . $row['ToAchieveArrayT4Rep'] . " </li>
<li>Geklickte Zahlenreihe wiederholt:  " . $row['ClickedArrayT4Rep'] . " </li>

<h3><u>Teil 5 </u></h3>
<li>Ziel Zahlenreihe:  " . $row['ToAchieveArrayT5'] . " </li>
<li>Geklickte Zahlenreihe:  " . $row['ClickedArrayT5'] . " </li>
<li>Ziel Zahlenreihe wiederholt:  " . $row['ToAchieveArrayT5Rep'] . " </li>
<li>Geklickte Zahlenreihe wiederholt:  " . $row['ClickedArrayT5Rep'] . " </li>

<h3><u>Teil 6 </u></h3>
<li>Ziel Zahlenreihe:  " . $row['ToAchieveArrayT6'] . " </li>
<li>Geklickte Zahlenreihe:  " . $row['ClickedArrayT6'] . " </li>
<li>Ziel Zahlenreihe wiederholt:  " . $row['ToAchieveArrayT6Rep'] . " </li>
<li>Geklickte Zahlenreihe wiederholt:  " . $row['ClickedArrayT6Rep'] . " </li>

<h3><u>Teil 7 </u></h3>
<li>Ziel Zahlenreihe:  " . $row['ToAchieveArrayT7'] . " </li>
<li>Geklickte Zahlenreihe:  " . $row['ClickedArrayT7'] . " </li>
<li>Ziel Zahlenreihe wiederholt:  " . $row['ToAchieveArrayT7Rep'] . " </li>
<li>Geklickte Zahlenreihe wiederholt:  " . $row['ClickedArrayT7Rep'] . " </li>

<h2><u>Depressionsscreening </u></h2>

<li> " . $depressionArray[0][0] . "=>". $depressionArray[0][1] . " </li> 
<li> " . $depressionArray[0][2] . "=>". $depressionArray[0][3] . " </li>
<li> " . $depressionArray[0][4] . "=>". $depressionArray[0][5] . " </li>
<li> " . $depressionArray[0][6] . "=>". $depressionArray[0][7] . " </li>
<li> " . $depressionArray[0][8] . "=>". $depressionArray[0][9] . " </li>
<li> " . $depressionArray[0][10] . "=>". $depressionArray[0][11] . " </li>
    
<h2><u>ADLs </u></h2>

<li> " . $adlsArray[0][0] . "=>". $adlsArray[0][1] . " </li> 
<li> " . $adlsArray[0][2] . "=>". $adlsArray[0][3] . " </li>
<li> " . $adlsArray[0][4] . "=>". $adlsArray[0][5] . " </li>
<li> " . $adlsArray[0][6] . "=>". $adlsArray[0][7] . " </li>
<li> " . $adlsArray[0][8] . "=>". $adlsArray[0][9] . " </li>
<li> " . $adlsArray[0][10] . "=>". $adlsArray[0][11] . " </li>
<li> " . $adlsArray[0][12] . "=>". $adlsArray[0][13] . " </li> 
<li> " . $adlsArray[0][14] . "=>". $adlsArray[0][15] . " </li>
<li> " . $adlsArray[0][16] . "=>". $adlsArray[0][17] . " </li>
<li> " . $adlsArray[0][18] . "=>". $adlsArray[0][19] . " </li>
<li> " . $adlsArray[0][20] . "=>". $adlsArray[0][21] . " </li>
<li> " . $adlsArray[0][22] . "=>". $adlsArray[0][23] . " </li>
<li> " . $adlsArray[0][24] . "=>". $adlsArray[0][25] . " </li> 
<li> " . $adlsArray[0][26] . "=>". $adlsArray[0][27] . " </li>
<li> " . $adlsArray[0][28] . "=>". $adlsArray[0][29] . " </li>
<li> " . $adlsArray[0][30] . "=>". $adlsArray[0][31] . " </li>
<li> " . $adlsArray[0][32] . "=>". $adlsArray[0][33] . " </li>




</div></body></html>";

        
       
        echo json_encode($results);
    }
    
    
}

else if ($password!="nc2013"){
     echo json_encode("<html><body><div><h1 style='color:white;'>
        Das Passwort ist nicht korrekt!
        </h1> <br><br>
<center><img src='/screening/img/stop_icon.png'/></center>         
</div></body></html>");
}

// when password is wrong
else
    echo json_encode("<html><body><div><h1 style='color:white;'>
        Bitte prüfen Sie Ihre Angaben!
       </h1> <br><br>
<center><img src='/screening/img/stop_icon.png'/></center>        
</div></body></html>");
?>