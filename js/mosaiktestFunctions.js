/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var imageTileID;
var targetTileID;
var tableID;
var achievedTiles = 0;
var wrongTilesP1 = 0;
var rightTilesP1 = 0;
var isSolvedP1;
var timerP1 = 0;
var aktivTimerP1;
var wrongTilesP2 = 0;
var rightTilesP2 = 0;
var isSolvedP2;
var timerP2 = 0;
var aktivTimerP2;
var wrongTilesP3 = 0;
var rightTilesP3 = 0;
var isSolvedP3;
var timerP3 = 0;
var aktivTimerP3;
var wrongTilesP4 = 0;
var rightTilesP4 = 0;
var isSolvedP4;
var timerP4 = 0;
var aktivTimerP4;
var wrongTilesP5 = 0;
var rightTilesP5 = 0;
var isSolvedP5;
var timerP5 = 0;
var aktivTimerP5;
var wrongTilesP6 = 0;
var rightTilesP6 = 0;
var isSolvedP6;
var timerP6 = 0;
var aktivTimerP6;
var wrongTilesP7 = 0;
var rightTilesP7 = 0;
var isSolvedP7;
var timerP7 = 0;
var aktivTimerP7;
var isTileSelected = false;

// to trigger the task timer counter
var aktiv;
var interactionTimer;



function noBack() {

    if (navigator.userAgent.match(/Android/i)) {
        window.scrollTo(0, 1);
    }
}


function selectImageTile(imgTile, splittable) {

    imageTileID = imgTile.id;
    var table = splittable;
    tableID = table.id;
    // checks if selected image tile is not empty
    if ($('#' + imageTileID).children().length !== 0) {
        $('#' + imageTileID).css("border", "4px solid #8c8c8c");
        isTileSelected = true;
        var cells = table.getElementsByTagName('td');
        for (var i = 0; i < cells.length; i++) {
            var id = cells[i].id;
            if (id !== imageTileID) {
                $('#' + id).css("border", "");
            }

        }

        // start counter for task
        countForTask(tableID);

    }
}




// starts general timer for every task to count until next interaction
function countForTask(splittable) {
    if (aktiv !== 0) {
        clearInterval(aktiv);
    }
    interactionTimer = 0;
    switch (splittable) {
        case "splittab1":
            aktiv = setInterval(function() {
                interactionTimer++;
                if (interactionTimer === 46) {
                    clearInterval(aktiv);
                    rightTilesP1 = achievedTiles;
                    isSolvedP1 = "Nein";
                    // store results even if task was skipped
                    jQuery.jStorage.set("WrongClickedTilesP1", wrongTilesP1);
                    jQuery.jStorage.set("RightClickedTilesP1", rightTilesP1);
                    jQuery.jStorage.set("TimeToSolveP1", timerP1);  
                    jQuery.jStorage.set("PuzzleSolvedP1", isSolvedP1);
                    // clear timers
                    clearAllTimers();

                    $.mobile.changePage('#puzzle2', {transition: "slide"});
                }
            }, 1000);

//starting timer for puzzle 1
    if (timerP1 === 0) {
        aktivTimerP1 = setInterval(function() {
            timerP1++;
        }, 1000);
    }

            break;

        case "splittab2":
            aktiv = setInterval(function() {
                interactionTimer++;
                if (interactionTimer === 61) {
                    clearInterval(aktiv);
                    rightTilesP2 = achievedTiles;
                    isSolvedP2 = "Nein";
                    // store results even if task was skipped
                    jQuery.jStorage.set("WrongClickedTilesP2", wrongTilesP2);
                    jQuery.jStorage.set("RightClickedTilesP2", rightTilesP2);
                    jQuery.jStorage.set("TimeToSolveP2", timerP2);
                    jQuery.jStorage.set("PuzzleSolvedP2", isSolvedP2);
                    // clear timers
                    clearAllTimers();

                    $.mobile.changePage('#puzzle3', {transition: "slide"});
                }
            }, 1000);
            
            //starting timer for puzzle 2
    if (timerP2 === 0) {
        aktivTimerP2 = setInterval(function() {
            timerP2++;
        }, 1000);
    }

            break;

        case "splittab3":
            aktiv = setInterval(function() {
                interactionTimer++;
                if (interactionTimer === 91) {
                    clearInterval(aktiv);
                    rightTilesP3 = achievedTiles;
                    isSolvedP3 = "Nein";
                    // store results even if task was skipped
                    jQuery.jStorage.set("WrongClickedTilesP3", wrongTilesP3);
                    jQuery.jStorage.set("RightClickedTilesP3", rightTilesP3);
                    jQuery.jStorage.set("TimeToSolveP3", timerP3);
                    jQuery.jStorage.set("PuzzleSolvedP3", isSolvedP3);
                    // clear timers
                    clearAllTimers();

                    $.mobile.changePage('#puzzle4', {transition: "slide"});
                }
            }, 1000);
            
            //starting timer for puzzle 3
    if (timerP3 === 0) {
        aktivTimerP3 = setInterval(function() {
            timerP3++;
        }, 1000);
    }

            break;

        case "splittab4":
            aktiv = setInterval(function() {
                interactionTimer++;
                if (interactionTimer === 106) {
                    clearInterval(aktiv);
                    rightTilesP4 = achievedTiles;
                    isSolvedP4 = "Nein";
                    // store results even if task was skipped
                    jQuery.jStorage.set("WrongClickedTilesP4", wrongTilesP4);
                    jQuery.jStorage.set("RightClickedTilesP4", rightTilesP4);
                    jQuery.jStorage.set("TimeToSolveP4", timerP4);
                    jQuery.jStorage.set("PuzzleSolvedP4", isSolvedP4);
                    // clear timers
                    clearAllTimers();

                    $.mobile.changePage('#puzzle5', {transition: "slide"});
                }
            }, 1000);
            
            //starting timer for puzzle 4
    
    if (timerP4 === 0) {
        aktivTimerP4 = setInterval(function() {
            timerP4++;
        }, 1000);
    }

            break;

        case "splittab5":
            aktiv = setInterval(function() {
                interactionTimer++;
                if (interactionTimer === 121) {
                    clearInterval(aktiv);
                    rightTilesP5 = achievedTiles;
                    isSolvedP5 = "Nein";
                    // store results even if task was skipped
                    jQuery.jStorage.set("WrongClickedTilesP5", wrongTilesP5);
                    jQuery.jStorage.set("RightClickedTilesP5", rightTilesP5);
                    jQuery.jStorage.set("TimeToSolveP5", timerP5);
                    jQuery.jStorage.set("PuzzleSolvedP5", isSolvedP5);
                    // clear timers
                    clearAllTimers();

                    $.mobile.changePage('#puzzle6', {transition: "slide"});
                }
            }, 1000);
            
            //starting timer for puzzle1
    if (timerP5 === 0) {
        aktivTimerP5 = setInterval(function() {
            timerP5++;
        }, 1000);
    }

            break;

        case "splittab6":
            aktiv = setInterval(function() {
                interactionTimer++;
                if (interactionTimer === 151) {
                    clearInterval(aktiv);
                    rightTilesP6 = achievedTiles;
                    isSolvedP6 = "Nein";
                    // store results even if task was skipped
                    jQuery.jStorage.set("WrongClickedTilesP6", wrongTilesP6);
                    jQuery.jStorage.set("RightClickedTilesP6", rightTilesP6);
                    jQuery.jStorage.set("TimeToSolveP6", timerP6);
                    jQuery.jStorage.set("PuzzleSolvedP6", isSolvedP6);
                    // clear timers
                    clearAllTimers();
                    //deactivate fullscreen
                    cancelFullscreen();
                    // change to end page
                    $.mobile.changePage('#MosaiktestTransit', {transition: "slide"});
//                    $.mobile.changePage('#puzzle7', {transition: "slide"});
                }
            }, 1000);
            
            //starting timer for puzzle1
    if (timerP6 === 0) {
        aktivTimerP6 = setInterval(function() {
            timerP6++;
        }, 1000);
    }

            break;

        case "splittab7":
            aktiv = setInterval(function() {
                interactionTimer++;
                if (interactionTimer === 151) {
                    clearInterval(aktiv);
                    rightTilesP7 = achievedTiles;
                    isSolvedP7 = "Nein";
                    // store results even if task was skipped
                    jQuery.jStorage.set("WrongClickedTilesP7", wrongTilesP7);
                    jQuery.jStorage.set("RightClickedTilesP7", rightTilesP7);
                    jQuery.jStorage.set("TimeToSolveP7", timerP7);
                    jQuery.jStorage.set("PuzzleSolvedP7", isSolvedP7);
                    // clear timers
                    clearAllTimers();
                    //deactivate fullscreen
                    cancelFullscreen();
                    // change to end page
                    $.mobile.changePage('#MosaiktestTransit', {transition: "slide"});
                }
            }, 1000);
            
            //starting timer for puzzle1
    if (timerP7 === 0) {
        aktivTimerP7 = setInterval(function() {
            timerP7++;
        }, 1000);
    }

            break;
    }

}

//hides the sliced tile but keeps the view stable
function hideSelectedTile(tileID, targetCells) {
    var w = $("#" + tileID).find('img').width();
    var h = $("#" + tileID).find('img').height();
    isTileSelected = false;
    fitAlltargetCells(w, h, targetCells);
    $("#" + tileID).find('img').remove();
    $("#" + tileID).width(w);
    $("#" + tileID).height(h);
    $("#" + tileID).css("border", "");
}


//fit tiles to target cells
function fitAlltargetCells(w, h, targetCells) {

    for (var i = 0; i < targetCells.length; i++) {
        var id = targetCells[i].id;
        $('#' + id).width(w);
        $('#' + id).height(h);

    }

}


// clear other tiles
function clearTiles(targetCells, tileID) {
    for (var i = 0; i < targetCells.length; i++) {
        var id = targetCells[i].id;
        if (id !== tileID) {
            $('#' + id).css("border", "");
        }
    }
}


// clear all timers at the end of a task
function clearAllTimers() {
    if (timerP1 !== 0 || timerP2 !== 0 || timerP3 !== 0 || timerP4 !== 0 || timerP5 !== 0 || timerP6 !== 0)
    {
        timerP1 = 0;
        timerP2 = 0;
        timerP3 = 0;
        timerP4 = 0;
        timerP5 = 0;
        timerP6 = 0;
    }
}


function selectTargetTile1(trgTile) {

//    //starting timer for puzzle 1
//    if (timerP1 === 0) {
//        aktivTimerP1 = setInterval(function() {
//            timerP1++;
//        }, 1000);
//    }
    targetTileID = trgTile.id;
    var targetCells = document.getElementsByClassName('cellToFill1');
    switch (targetTileID) {
        case "p1z1x1":
            if (imageTileID === "p1t1x1" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);

                achievedTiles++;
            }
            else if (imageTileID !== "p1t1x1" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP1++;
            }


            break;

        case "p1z1x2":
            if (imageTileID === "p1t1x2" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p1t1x2" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP1++;

            }
            break;
    }
    clearTiles(targetCells, targetTileID);
    if (achievedTiles === 2) {
        rightTilesP1 = achievedTiles;
        isSolvedP1 = "Ja";
        //stopping timer
        clearInterval(aktivTimerP1);
        // store results
        jQuery.jStorage.set("WrongClickedTilesP1", wrongTilesP1);
        jQuery.jStorage.set("RightClickedTilesP1", rightTilesP1);
        jQuery.jStorage.set("TimeToSolveP1", timerP1);
        jQuery.jStorage.set("PuzzleSolvedP1", isSolvedP1);
        // clear timers
        clearAllTimers();

        $.mobile.changePage('#puzzle2', {transition: "slide"});
        achievedTiles = 0;

    }
}




function isEmpty(id) {
    var empty = true;
    var table = document.getElementById(id);
    for (var i = 1; i < table.rows.length; i++) {
        var row = table.rows[i];
        for (var j = 0; j < row.cells.length; j++) {
            var cell = [j];
            if ($(cell).is(':visible'))
                empty = false;
        }
    }

//    $('#'+id+ ' tr').each(function(){
//    $(this).find('td').each(function(){
//        if ($(this).is(':hidden'))
//            bool = true;
//    });
//});
    return empty;
}




function selectTargetTile2(trgTile) {

//    //starting timer for puzzle 2
//    if (timerP2 === 0) {
//        aktivTimerP2 = setInterval(function() {
//            timerP2++;
//        }, 1000);
//    }

    var targetCells = document.getElementsByClassName('cellToFill2');
    targetTileID = trgTile.id;
    switch (targetTileID) {
        case "p2z1x1":
            if (imageTileID === "p2t1x1" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p2t1x1" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP2++;
            }


            break;

        case "p2z1x2":
            if (imageTileID === "p2t1x2" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p2t1x2" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP2++;
            }
            break;

        case "p2z2x1":
            if (imageTileID === "p2t2x1" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p2t2x1" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP2++;
            }
            break;

        case "p2z2x2":
            if (imageTileID === "p2t2x2" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p2t2x2" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP2++;
            }
            break;
    }
    clearTiles(targetCells, targetTileID);
    if (achievedTiles === 4) {
        rightTilesP2 = achievedTiles;
        isSolvedP2 = "Ja";
        //stopping timer
        clearInterval(aktivTimerP2);
        // store results
        jQuery.jStorage.set("WrongClickedTilesP2", wrongTilesP2);
        jQuery.jStorage.set("RightClickedTilesP2", rightTilesP2);
        jQuery.jStorage.set("TimeToSolveP2", timerP2);
        jQuery.jStorage.set("PuzzleSolvedP2", isSolvedP2);
        // clear timers
        clearAllTimers();

        $.mobile.changePage('#puzzle3', {transition: "slide"});
        achievedTiles = 0;
    }
}




function selectTargetTile3(trgTile) {
//    //starting timer for puzzle 3
//    if (timerP3 === 0) {
//        aktivTimerP3 = setInterval(function() {
//            timerP3++;
//        }, 1000);
//    }

    var targetCells = document.getElementsByClassName('cellToFill3');
    targetTileID = trgTile.id;
    switch (targetTileID) {
        case "p3z1x1":
            if (imageTileID === "p3t1x1" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p3t1x1" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP3++;
            }


            break;

        case "p3z1x2":
            if (imageTileID === "p3t1x2" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p3t1x2" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP3++;
            }
            break;

        case "p3z1x3":
            if (imageTileID === "p3t1x3" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p3t1x3" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP3++;
            }
            break;

        case "p3z2x1":
            if (imageTileID === "p3t2x1" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p3t2x1" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP3++;
            }
            break;

        case "p3z2x2":
            if (imageTileID === "p3t2x2" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p3t2x2" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP3++;
            }
            break;

        case "p3z2x3":
            if (imageTileID === "p3t2x3" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p3t2x3" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP3++;
            }
            break;
    }
    clearTiles(targetCells, targetTileID);
    if (achievedTiles === 6) {
        rightTilesP3 = achievedTiles;
        isSolvedP3 = "Ja";
        //stopping timer
        clearInterval(aktivTimerP3);

        // store results
        jQuery.jStorage.set("WrongClickedTilesP3", wrongTilesP3);
        jQuery.jStorage.set("RightClickedTilesP3", rightTilesP3);
        jQuery.jStorage.set("TimeToSolveP3", timerP3);
        jQuery.jStorage.set("PuzzleSolvedP3", isSolvedP3);
        // clear timers
        clearAllTimers();

        $.mobile.changePage('#puzzle4', {transition: "slide"});
        achievedTiles = 0;
    }
}





function selectTargetTile4(trgTile) {
//    //starting timer for puzzle 4
//    
//    if (timerP4 === 0) {
//        aktivTimerP4 = setInterval(function() {
//            timerP4++;
//        }, 1000);
//    }
    
   

    var targetCells = document.getElementsByClassName('cellToFill4');
    targetTileID = trgTile.id;
    try{
    switch (targetTileID) {
        case "p4z1x1":
            if (imageTileID === "p4t1x1" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p4t1x1" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP4++;
            }
            break;

        case "p4z1x2":
            if (imageTileID === "p4t1x2" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p4t1x2" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP4++;
            }
            break;

        case "p4z1x3":
            if (imageTileID === "p4t1x3" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p4t1x3" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP4++;
            }
            break;

        case "p4z2x1":
            if (imageTileID === "p4t2x1" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p4t2x1" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP4++;
            }
            break;

        case "p4z2x2":
            if (imageTileID === "p4t2x2" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p4t2x2" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP4++;
            }
            break;

        case "p4z2x3":
            if (imageTileID === "p4t2x3" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p4t2x3" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP4++;
            }
            break;

        case "p4z3x1":
            if (imageTileID === "p4t3x1" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p4t3x1" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP4++;
            }
            break;

        case "p4z3x2":
            if (imageTileID === "p4t3x2" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p4t3x2" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP4++;
            }
            break;

        case "p4z3x3":
            if (imageTileID === "p4t3x3" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p4t3x3" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP4++;
            }
            break;
    }
    }
    catch (error){
        console.log("Das entsprechende Feld konnte nicht ermittelt werden! "+error);
    }
    
    clearTiles(targetCells, targetTileID);
    if (achievedTiles === 9) {
        rightTilesP4 = achievedTiles;
        isSolvedP4 = "Ja";
        //stopping timer
        clearInterval(aktivTimerP4);
        // store results
        jQuery.jStorage.set("WrongClickedTilesP4", wrongTilesP4);
        jQuery.jStorage.set("RightClickedTilesP4", rightTilesP4);
        jQuery.jStorage.set("TimeToSolveP4", timerP4);
        jQuery.jStorage.set("PuzzleSolvedP4", isSolvedP4);
        // clear timers
        clearAllTimers();

        $.mobile.changePage('#puzzle5', {transition: "slide"});
        achievedTiles = 0;
    }
}



function selectTargetTile5(trgTile) {
//    //starting timer for puzzle1
//    if (timerP5 === 0) {
//        aktivTimerP5 = setInterval(function() {
//            timerP5++;
//        }, 1000);
//    }

    var targetCells = document.getElementsByClassName('cellToFill5');
    targetTileID = trgTile.id;
    switch (targetTileID) {
        case "p5z1x1":
            if (imageTileID === "p5t1x1" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p5t1x1" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP5++;
            }


            break;

        case "p5z1x2":
            if (imageTileID === "p5t1x2" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p5t1x2" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP5++;
            }
            break;

        case "p5z1x3":
            if (imageTileID === "p5t1x3" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p5t1x3" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP5++;
            }
            break;

        case "p5z1x4":
            if (imageTileID === "p5t1x4" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p5t1x4" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP5++;
            }
            break;

        case "p5z2x1":
            if (imageTileID === "p5t2x1" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p5t2x1" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP5++;
            }
            break;

        case "p5z2x2":
            if (imageTileID === "p5t2x2" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p5t2x2" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP5++;
            }
            break;

        case "p5z2x3":
            if (imageTileID === "p5t2x3" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p5t2x3" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP5++;
            }
            break;

        case "p5z2x4":
            if (imageTileID === "p5t2x4" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p5t2x4" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP5++;
            }
            break;

        case "p5z3x1":
            if (imageTileID === "p5t3x1" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p5t3x1" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP5++;
            }
            break;

        case "p5z3x2":
            if (imageTileID === "p5t3x2" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p5t3x2" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP5++;
            }
            break;

        case "p5z3x3":
            if (imageTileID === "p5t3x3" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p5t3x3" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP5++;
            }
            break;

        case "p5z3x4":
            if (imageTileID === "p5t3x4" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p5t3x4" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP5++;
            }
            break;
    }
    clearTiles(targetCells, targetTileID);
    if (achievedTiles === 12) {
        rightTilesP5 = achievedTiles;
        isSolvedP5 = "Ja";
        //stopping timer
        clearInterval(aktivTimerP5);
        // store results
        jQuery.jStorage.set("WrongClickedTilesP5", wrongTilesP5);
        jQuery.jStorage.set("RightClickedTilesP5", rightTilesP5);
        jQuery.jStorage.set("TimeToSolveP5", timerP5);
        jQuery.jStorage.set("PuzzleSolvedP5", isSolvedP5);
        // clear timers
        clearAllTimers();

        $.mobile.changePage('#puzzle6', {transition: "slide"});
        achievedTiles = 0;
    }
}

function selectTargetTile6(trgTile) {
//    //starting timer for puzzle1
//    if (timerP6 === 0) {
//        aktivTimerP6 = setInterval(function() {
//            timerP6++;
//        }, 1000);
//    }

    var targetCells = document.getElementsByClassName('cellToFill6');
    targetTileID = trgTile.id;
    switch (targetTileID) {
        case "p6z1x1":
            if (imageTileID === "p6t1x1" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p6t1x1" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP6++;
            }


            break;

        case "p6z1x2":
            if (imageTileID === "p6t1x2" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p6t1x2" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP6++;
            }
            break;

        case "p6z1x3":
            if (imageTileID === "p6t1x3" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p6t1x3" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP6++;
            }
            break;

        case "p6z1x4":
            if (imageTileID === "p6t1x4" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p6t1x4" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP6++;
            }
            break;

        case "p6z2x1":
            if (imageTileID === "p6t2x1" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p6t2x1" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP6++;
            }
            break;

        case "p6z2x2":
            if (imageTileID === "p6t2x2" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p6t2x2" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP6++;
            }
            break;

        case "p6z2x3":
            if (imageTileID === "p6t2x3" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p6t2x3" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP6++;
            }
            break;

        case "p6z2x4":
            if (imageTileID === "p6t2x4" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p6t2x4" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP6++;
            }
            break;

        case "p6z3x1":
            if (imageTileID === "p6t3x1" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p6t3x1" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP6++;
            }
            break;

        case "p6z3x2":
            if (imageTileID === "p6t3x2" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p6t3x2" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP6++;
            }
            break;

        case "p6z3x3":
            if (imageTileID === "p6t3x3" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p6t3x3" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP6++;
            }
            break;

        case "p6z3x4":
            if (imageTileID === "p6t3x4" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p6t3x4" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP6++;
            }
            break;

        case "p6z4x1":
            if (imageTileID === "p6t4x1" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p6t4x1" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP6++;
            }
            break;

        case "p6z4x2":
            if (imageTileID === "p6t4x2" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p6t4x2" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP6++;
            }
            break;

        case "p6z4x3":
            if (imageTileID === "p6t4x3" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p6t4x3" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP6++;
            }
            break;

        case "p6z4x4":
            if (imageTileID === "p6t4x4" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p6t4x4" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP6++;
            }
            break;
    }
    clearTiles(targetCells, targetTileID);
    if (achievedTiles === 16) {
        rightTilesP6 = achievedTiles;
        isSolvedP6 = "Ja";
        //stopping timer
        clearInterval(aktivTimerP6);
        // store results
        jQuery.jStorage.set("WrongClickedTilesP6", wrongTilesP6);
        jQuery.jStorage.set("RightClickedTilesP6", rightTilesP6);
        jQuery.jStorage.set("TimeToSolveP6", timerP6);
        jQuery.jStorage.set("PuzzleSolvedP6", isSolvedP6);
        // clear timers
        clearAllTimers();
//        $.mobile.changePage('#puzzle7', {transition: "slide"});
//deactivate fullscreen
        cancelFullscreen();
        // change to end page
        $.mobile.changePage('#MosaiktestTransit', {transition: "slide"});
        achievedTiles = 0;
    }
}

function selectTargetTile7(trgTile) {
//    //starting timer for puzzle1
//    if (timerP7 === 0) {
//        aktivTimerP7 = setInterval(function() {
//            timerP7++;
//        }, 1000);
//    }

    var targetCells = document.getElementsByClassName('cellToFill7');
    targetTileID = trgTile.id;
    switch (targetTileID) {
        case "p7z1x1":
            if (imageTileID === "p7t1x1" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p7t1x1" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP7++;
            }
            break;

        case "p7z1x2":
            if (imageTileID === "p7t1x2" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p7t1x2" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP7++;
            }
            break;

        case "p7z1x3":
            if (imageTileID === "p7t1x3" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p7t1x3" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP7++;
            }
            break;

        case "p7z1x4":
            if (imageTileID === "p7t1x4" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p7t1x4" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP7++;
            }
            break;

        case "p7z1x5":
            if (imageTileID === "p7t1x5" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p7t1x5" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP7++;
            }
            break;

        case "p7z2x1":
            if (imageTileID === "p7t2x1" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p7t2x1" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP7++;
            }
            break;

        case "p7z2x2":
            if (imageTileID === "p7t2x2" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p7t2x2" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP7++;
            }
            break;

        case "p7z2x3":
            if (imageTileID === "p7t2x3" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p7t2x3" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP7++;
            }
            break;

        case "p7z2x4":
            if (imageTileID === "p7t2x4" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p7t2x4" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP7++;
            }
            break;

        case "p7z2x5":
            if (imageTileID === "p7t2x5" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p7t2x5" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP7++;
            }
            break;

        case "p7z3x1":
            if (imageTileID === "p7t3x1" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p7t3x1" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP7++;
            }
            break;

        case "p7z3x2":
            if (imageTileID === "p7t3x2" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p7t3x2" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP7++;
            }
            break;

        case "p7z3x3":
            if (imageTileID === "p7t3x3" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p7t3x3" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP7++;
            }
            break;

        case "p7z3x4":
            if (imageTileID === "p7t3x4" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p7t3x4" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP7++;
            }
            break;

        case "p7z3x5":
            if (imageTileID === "p7t3x5" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p7t3x5" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP7++;
            }
            break;

        case "p7z4x1":
            if (imageTileID === "p7t4x1" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p7t4x1" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP7++;
            }
            break;

        case "p7z4x2":
            if (imageTileID === "p7t4x2" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p7t4x2" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP7++;
            }
            break;

        case "p7z4x3":
            if (imageTileID === "p7t4x3" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p7t4x3" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP7++;
            }
            break;

        case "p7z4x4":
            if (imageTileID === "p7t4x4" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p7t4x4" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP7++;
            }
            break;

        case "p7z4x5":
            if (imageTileID === "p7t4x5" && $("#" + targetTileID).children().length === 0) {
                if ($('#' + targetTileID).css("border") !== "1px solid black") {
                    $('#' + targetTileID).css("border", "1px solid black");
                }
                $("#" + imageTileID).children('img').clone().appendTo("#" + targetTileID);
                hideSelectedTile(imageTileID, targetCells);
                achievedTiles++;
            }
            else if (imageTileID !== "p7t4x5" && $("#" + targetTileID).children().length === 0 && isTileSelected === true) {
                $('#' + targetTileID).css("border", "4px solid red");
                wrongTilesP7++;
            }
            break;
    }
    clearTiles(targetCells, targetTileID);
    if (achievedTiles === 20) {
        rightTilesP7 = achievedTiles;
        isSolvedP7 = "Ja";
        //stopping timer
        clearInterval(aktivTimerP7);
        // store results
        jQuery.jStorage.set("WrongClickedTilesP7", wrongTilesP7);
        jQuery.jStorage.set("RightClickedTilesP7", rightTilesP7);
        jQuery.jStorage.set("TimeToSolveP7", timerP7);
        jQuery.jStorage.set("PuzzleSolvedP7", isSolvedP7);
        // clear timers
        clearAllTimers();
        setTimeout(function() {
            //deactivate fullscreen
            cancelFullscreen();
            // change to end page
            $.mobile.changePage('#MosaiktestTransit', {transition: "slide"});
//            window.location = "Zahlensortieren.html";
        }, 500);

        achievedTiles = 0;
    }
}