console.info("javascript loaded");
var gameBoard = $("#gameBoard");
var leftOver = $("#leftOver");
var numRows;
var numCols;
var numRowsSelect = $("#numRows");
var numColsSelect = $("#numCols");
var numClicks;
var totalBoxes;
var playerScores;
var playerDisplays = [$("#score0"),$("#score1")];

$("#numCols option:last").prop("selected", true);
init();

function init(){
    numRows = numRowsSelect.val();
    numCols = numColsSelect.val();
    numClicks = 0;
    totalBoxes = 0;
    playerScores = [0,0];
    
    gameBoard.empty();


    var gameBoardWidth = numCols*10 + (numCols-1)*44;
    var gameBoardHeight = numRows*10 + (numRows-1)*44;

    gameBoard.width(gameBoardWidth);
    gameBoard.height(gameBoardHeight);

    for(var r=0; r<numRows*2; r++){
        if(r%2==0){
            for(var c=0; c<numCols; c++){
                gameBoard.append("<div class='dot'></div>");
                if(c<numCols-1){
                    var currRow = r/2;
                    var tValue = currRow<numRows-1?currRow:-1;
                    var bValue = currRow>0?currRow-1:-1;
                    gameBoard.append("<div class='line hLine' t='" + tValue + "' b='" + bValue + "' col='" + c + "'></div>");
                }
            }
        }
        else{
            if(r<(numRows*2)-1){
                var currRow = (r-1)/2;
                for(var c=0; c<numCols; c++){
                    var lValue = c<numCols-1?c:-1;
                    var rValue = c>0?c-1:-1;
                    gameBoard.append("<div class='line vLine' l='" + lValue + "' r='" + rValue + "' row='" + currRow + "'></div>");
                    if(c<numCols-1){
                        gameBoard.append(
                            "<div class='box' row='"+ currRow +"' col='" + c + "'></div>");
                        totalBoxes++;

                    }
                }
            }
        }
    }
    bindClicks();
    updateScore();
}

$('select').change(
    function(){
        init();
    }
);

function bindClicks(){
    $('.line').click(
        function(){
            if(!$(this).hasClass("drawn")){
                var madeSquare = false;
                $(this).addClass('drawn');
                var boxArr = [];
                if($(this).hasClass("hLine")){
                    var colChecking = $(this).attr("col");
                    boxArr.push($(".box[row=" + $(this).attr("b") + "][col=" + colChecking + "]"));
                    boxArr.push($(".box[row=" + $(this).attr("t") + "][col=" + colChecking + "]"));
                }
                else{
                    var rowChecking = $(this).attr("row");
                    boxArr.push($(".box[row=" + rowChecking + "][col=" + $(this).attr("l") + "]"));
                    boxArr.push($(".box[row=" + rowChecking + "][col=" + $(this).attr("r") + "]"));
                }

                console.log(numClicks);

                for(var b=0; b<boxArr.length; b++){
                    var currBox = boxArr[b];
                    var squareString = "NOT FULL SQUARE";
                    if(fullSquare(currBox)){
                        currBox.addClass("p" + numClicks%2);
                        playerScores[numClicks%2]++;
                        madeSquare = true;
                        updateScore();
                        squareString = "FULL SQAURE";
                    }
                    console.log(squareString);

                }
                
                if(!madeSquare){
                    playerDisplays[numClicks%2].removeClass("currTurn");
                    numClicks++;
                    playerDisplays[numClicks%2].addClass("currTurn");
                }
            }
        }
    );
}

function fullSquare(box){
    var currRow = box.attr("row");
    var currCol = box.attr("col");

    var topLine = $(".line[t=" + currRow + "][col=" + currCol + "]").hasClass("drawn");
    var bottomLine = $(".line[b=" + currRow + "][col=" + currCol + "]").hasClass("drawn");
    var leftLine = $(".line[l=" + currCol + "][row=" + currRow + "]").hasClass("drawn");
    var rightLine = $(".line[r=" + currCol + "][row=" + currRow + "]").hasClass("drawn");

    return bottomLine && topLine && leftLine && rightLine;
}

function updateScore(){
    for(var p=0; p<playerScores.length; p++)
        playerDisplays[p].text(playerScores[p]);
    leftOver.text(totalBoxes-playerScores[0]-playerScores[1]);
}