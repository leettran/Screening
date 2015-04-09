/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

//var image = new Image();
//image.onload = cutImageUp;
//image.src = 'img/ei.png';


function cutImageUp(image, colNum, RowNum) {
    var imgW = image.width;
    var imgH = image.height;
    var imagePieces = [];
    for (var x = 0; x < colNum; ++x) {
        for (var y = 0; y < RowNum; ++y) {
            var canvas = document.createElement('canvas');
            canvas.width = imgW / colNum;
            canvas.height = imgH / RowNum;
            var context = canvas.getContext('2d');
            context.drawImage(image, x * imgW / colNum, y * imgH / RowNum, imgW / colNum, imgH / RowNum, 0, 0, canvas.width, canvas.height);
            imagePieces.push(canvas.toDataURL());
        }
    }

    return imagePieces;
}

function displayImageTiles(displaySpace, imageTiles) {
    var tiles = imageTiles.length;
    var tileImg;
    switch (tiles) {
        case 2:
            for (var i = 0; i < 2; i++) {
                var imgRow = document.createElement('div');
                imgRow.className = "divRow";
                tileImg = document.createElement('img');
                tileImg.src = imageTiles[i];
                tileImg.className = "divCell";
                imgRow.appendChild(tileImg);
                displaySpace.appendChild(imgRow);
               
            }
            
            break;

        case 4:
            for (var i = 0; i < 2; i++) {
                var imgRow = document.createElement('div');
                imgRow.className = "divRow";
                for (var j = 0; j < 2; j++) {
                    var imgCol = document.createElement('div');
                    imgCol.className = "divCell";
                    var tileImg = document.createElement('img');
                    if (i === 0) {
                        tileImg.src = imageTiles[j];
                    }
                    if (i === 1) {
                        tileImg.src = imageTiles[j + 2];
                    }
                   
                    imgCol.appendChild(tileImg);
                    imgRow.appendChild(imgCol);
                }
                displaySpace.appendChild(imgRow);
            }


            break;

        case 6:
            for (var i = 0; i < 2; i++) {
                var imgRow = document.createElement('div');
                imgRow.className = "divRow";
                for (var j = 0; j < 3; j++) {
                    var imgCol = document.createElement('div');
                    imgCol.className = "divCell";
                    var tileImg = document.createElement('img');
                    if (i === 0 && j === 0) {
                        tileImg.src = imageTiles[0];
                    }
                    if (i === 0 && j === 1) {
                        tileImg.src = imageTiles[1];
                    }
                    if (i === 0 && j === 2) {
                        tileImg.src = imageTiles[2];
                    }
                    if (i === 1 && j === 0) {
                        tileImg.src = imageTiles[3];
                    }
                    if (i === 1 && j === 1) {
                        tileImg.src = imageTiles[4];
                    }
                    if (i === 1 && j === 2) {
                        tileImg.src = imageTiles[5];
                    }
                     
                    imgCol.appendChild(tileImg);
                    imgRow.appendChild(imgCol);
                }
                displaySpace.appendChild(imgRow);
            }


            break;

        case 9:
            for (var i = 0; i < 3; i++) {
                var imgRow = document.createElement('div');
                imgRow.className = "divRow";
                for (var j = 0; j < 3; j++) {
                    var imgCol = document.createElement('div');
                    imgCol.className = "divCell";
                    var tileImg = document.createElement('img');
                    if (i === 0 && j === 0) {
                        tileImg.src = imageTiles[0];
                    }
                    if (i === 0 && j === 1) {
                        tileImg.src = imageTiles[1];
                    }
                    if (i === 0 && j === 2) {
                        tileImg.src = imageTiles[2];
                    }
                    if (i === 1 && j === 0) {
                        tileImg.src = imageTiles[3];
                    }
                    if (i === 1 && j === 1) {
                        tileImg.src = imageTiles[4];
                    }
                    if (i === 1 && j === 2) {
                        tileImg.src = imageTiles[5];
                    }
                    if (i === 2 && j === 0) {
                        tileImg.src = imageTiles[6];
                    }
                    if (i === 2 && j === 1) {
                        tileImg.src = imageTiles[7];
                    }
                    if (i === 2 && j === 2) {
                        tileImg.src = imageTiles[8];
                    }
                    
                    imgCol.appendChild(tileImg);
                    imgRow.appendChild(imgCol);
                }
                displaySpace.appendChild(imgRow);
            }


            break;

        case 12:
            for (var i = 0; i < 3; i++) {
                var imgRow = document.createElement('div');
                imgRow.className = "divRow";
                for (var j = 0; j < 4; j++) {
                    var imgCol = document.createElement('div');
                    imgCol.className = "divCell";
                    var tileImg = document.createElement('img');
                    if (i === 0 && j === 0) {
                        tileImg.src = imageTiles[0];
                    }
                    if (i === 0 && j === 1) {
                        tileImg.src = imageTiles[1];
                    }
                    if (i === 0 && j === 2) {
                        tileImg.src = imageTiles[2];
                    }
                    if (i === 0 && j === 3) {
                        tileImg.src = imageTiles[3];
                    }
                    if (i === 1 && j === 0) {
                        tileImg.src = imageTiles[4];
                    }
                    if (i === 1 && j === 1) {
                        tileImg.src = imageTiles[5];
                    }
                    if (i === 1 && j === 2) {
                        tileImg.src = imageTiles[6];
                    }
                    if (i === 1 && j === 3) {
                        tileImg.src = imageTiles[7];
                    }
                    if (i === 2 && j === 0) {
                        tileImg.src = imageTiles[8];
                    }
                    if (i === 2 && j === 1) {
                        tileImg.src = imageTiles[9];
                    }
                    if (i === 2 && j === 2) {
                        tileImg.src = imageTiles[10];
                    }
                    if (i === 2 && j === 3) {
                        tileImg.src = imageTiles[11];
                    }
                    
                    imgCol.appendChild(tileImg);
                    imgRow.appendChild(imgCol);
                }
                displaySpace.appendChild(imgRow);
            }
            break;

        case 16:
            for (var i = 0; i < 4; i++) {
                var imgRow = document.createElement('div');
                imgRow.className = "divRow";
                for (var j = 0; j < 4; j++) {
                    var imgCol = document.createElement('div');
                    imgCol.className = "divCell";
                    var tileImg = document.createElement('img');
                    if (i === 0 && j === 0) {
                        tileImg.src = imageTiles[0];
                    }
                    if (i === 0 && j === 1) {
                        tileImg.src = imageTiles[1];
                    }
                    if (i === 0 && j === 2) {
                        tileImg.src = imageTiles[2];
                    }
                    if (i === 0 && j === 3) {
                        tileImg.src = imageTiles[3];
                    }
                    if (i === 1 && j === 0) {
                        tileImg.src = imageTiles[4];
                    }
                    if (i === 1 && j === 1) {
                        tileImg.src = imageTiles[5];
                    }
                    if (i === 1 && j === 2) {
                        tileImg.src = imageTiles[6];
                    }
                    if (i === 1 && j === 3) {
                        tileImg.src = imageTiles[7];
                    }
                    if (i === 2 && j === 0) {
                        tileImg.src = imageTiles[8];
                    }
                    if (i === 2 && j === 1) {
                        tileImg.src = imageTiles[9];
                    }
                    if (i === 2 && j === 2) {
                        tileImg.src = imageTiles[10];
                    }
                    if (i === 2 && j === 3) {
                        tileImg.src = imageTiles[11];
                    }
                    if (i === 3 && j === 0) {
                        tileImg.src = imageTiles[12];
                    }
                    if (i === 3 && j === 1) {
                        tileImg.src = imageTiles[13];
                    }
                    if (i === 3 && j === 2) {
                        tileImg.src = imageTiles[14];
                    }
                    if (i === 3 && j === 3) {
                        tileImg.src = imageTiles[15];
                    }
                    
                    imgCol.appendChild(tileImg);
                    imgRow.appendChild(imgCol);
                }
                displaySpace.appendChild(imgRow);
            }

            break;

        case 20:
            for (var i = 0; i < 4; i++) {
                var imgRow = document.createElement('div');
                imgRow.className = "divRow";
                for (var j = 0; j < 5; j++) {
                    var imgCol = document.createElement('div');
                    imgCol.className = "divCell";
                    var tileImg = document.createElement('img');
                    if (i === 0 && j === 0) {
                        tileImg.src = imageTiles[0];
                    }
                    if (i === 0 && j === 1) {
                        tileImg.src = imageTiles[1];
                    }
                    if (i === 0 && j === 2) {
                        tileImg.src = imageTiles[2];
                    }
                    if (i === 0 && j === 3) {
                        tileImg.src = imageTiles[3];
                    }
                    if (i === 0 && j === 4) {
                        tileImg.src = imageTiles[4];
                    }
                    if (i === 1 && j === 0) {
                        tileImg.src = imageTiles[5];
                    }
                    if (i === 1 && j === 1) {
                        tileImg.src = imageTiles[6];
                    }
                    if (i === 1 && j === 2) {
                        tileImg.src = imageTiles[7];
                    }
                    if (i === 1 && j === 3) {
                        tileImg.src = imageTiles[8];
                    }
                    if (i === 1 && j === 4) {
                        tileImg.src = imageTiles[9];
                    }
                    if (i === 2 && j === 0) {
                        tileImg.src = imageTiles[10];
                    }
                    if (i === 2 && j === 1) {
                        tileImg.src = imageTiles[11];
                    }
                    if (i === 2 && j === 2) {
                        tileImg.src = imageTiles[12];
                    }
                    if (i === 2 && j === 3) {
                        tileImg.src = imageTiles[13];
                    }
                    if (i === 2 && j === 4) {
                        tileImg.src = imageTiles[14];
                    }
                    if (i === 3 && j === 0) {
                        tileImg.src = imageTiles[15];
                    }
                    if (i === 3 && j === 1) {
                        tileImg.src = imageTiles[16];
                    }
                    if (i === 3 && j === 2) {
                        tileImg.src = imageTiles[17];
                    }
                    if (i === 3 && j === 3) {
                        tileImg.src = imageTiles[18];
                    }
                    if (i === 3 && j === 4) {
                        tileImg.src = imageTiles[19];
                    }
                   
                    imgCol.appendChild(tileImg);
                    imgRow.appendChild(imgCol);

                }
                displaySpace.appendChild(imgRow);

            }


            break;
    }
}









