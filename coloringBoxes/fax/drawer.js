//Fax

var numRows = 16;
var numColumns = 17;
var pixelSize = 25;
var mode = 0;
var currentPuzzleIndex = 0;

var grid = $("#gridWrapper");
var content = $("#gridContent");
var toggleWrapper = $('#toggleWrapper');
var author = $('#author');
var puzzleNum = $('#puzzleNumber');
var userInputBox;
var readOnly = false;

grid.width(numColumns * pixelSize);

init();

function init(){
    var allBoxesString = "";
    for(var r=0; r<numRows; r++){
        allBoxesString += "<tr>";
        for(var c=0; c<numColumns; c++){
            allBoxesString += 
                "<td><div class='pixel' style='width:" + pixelSize + 
                "px; height:" + pixelSize + "px;'></div></td>";
        }
        allBoxesString += "<td><input class='userInput' type='text' row='" + r + "'></td>";
        allBoxesString += "</tr>";
    }
    
    content.append(allBoxesString);
    userInputBox = $('.userInput');
}


$('[name=mode]').change(
    function(){
        mode = parseInt($(this).val());
        clear();
        if(mode === 1){
            readOnly = true;
            //var authorName=loadPuzzle();
            //puzzleNum.text(currentPuzzleIndex+1);
            //author.text(authorName);
            displayPuzzle();
            toggleWrapper.fadeIn();
        }
        else{
            readOnly = false;
            toggleWrapper.fadeOut("slow",function(){author.text("");});
        }
        userInputBox.prop('readonly', readOnly);
    }
);

$(".arrowButton").click(
    function(){
        var direction = parseInt($(this).attr("direction"));
        currentPuzzleIndex += direction;
        if(currentPuzzleIndex>=puzzles.length)
            currentPuzzleIndex = 0;
        if(currentPuzzleIndex<0)
            currentPuzzleIndex = puzzles.length-1;
        clear();
        displayPuzzle();
    }
);

function clear(){
    $(".pixel").removeClass("on");
    $('.userInput').val("");
    $('.userInput').removeClass("correct");
}

function displayPuzzle(){
    var authorName=loadPuzzle();
    author.text(authorName);
    puzzleNum.text(currentPuzzleIndex+1 + ": ");
    toggleWrapper.fadeIn();
}

function loadPuzzle(){
    var currentPuzzle = puzzles[currentPuzzleIndex];
    //console.log(currentPuzzle);
    
    for(var p=0; p<currentPuzzle.puzzle.length; p++){
        $('[row=' + p + ']').val(currentPuzzle.puzzle[p]);
    }
    return currentPuzzle.name;
}

$('.userInput').keyup(
    function(){
        if(!readOnly){
            var userInput = $(this).val();
            var inputArray = userInput.split(",");
            if(inputArray.reduce(getSum)<=numColumns){
                var thisRow = $(this).closest("tr");
                var boxes = $('.pixel',thisRow);
                boxes.removeClass("on");
                var currentColor = 0;
                var currentPixel = 0;
                for(var b=0; b<inputArray.length; b++){
                    for(var c=0; c<inputArray[b]; c++){
                        if(currentColor%2==1)
                            $(boxes.get(currentPixel)).addClass("on");
                        currentPixel++;
                    }
                    currentColor++;
                }
            }
        }
    }
);

function getSum(total, num) {
  return parseInt(total) + parseInt(num);
}

$('.pixel').click(
    function(){
        $(this).toggleClass("on");
        var thisRow = $(this).closest("tr");
        var boxes = $('.pixel',thisRow);
        var count = 0;
        var previousColor = 0;
        var currentColor = 0;
        var colorIndex = 0;
        var numArray = [];
        boxes.each(
            function(){
                currentColor = $(this).hasClass("on")?1:0;
                //console.log(previousColor,currentColor);
                if(currentColor === previousColor){
                    count++;
                }
                else{
                    //console.log(count);
                    numArray.push(count);
                    colorIndex++;
                    count=1;
                    previousColor = colorIndex%2;
                }
            }
        );
        if(currentColor===1)
            numArray.push(count);
        //console.log(numArray);
        var thisRowInput = $(".userInput",thisRow);
        if(!readOnly)
            thisRowInput.val(numArray);
        else{
            if(numArray.toString()===thisRowInput.val())
                thisRowInput.addClass("correct");
            else
                thisRowInput.removeClass("correct");
        }
    }
);

$('#export').click(
    function(){
        var allInputs = $('.userInput');
        var puzzleOutput = [];
        allInputs.each(
            function(){
                var currentLine = "[" + $(this).val() + "]";
                puzzleOutput.push(currentLine);
            }
        );
        console.log(puzzleOutput.toString());
    }
);

function toInt(array){
    for(var i=0; i<array.length; i++){
        array[i]=parseInt(array[i]);
    }
    return array;
}



