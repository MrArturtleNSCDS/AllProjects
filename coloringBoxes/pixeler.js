var numRows = 16;
var numColumns = 17;
var pixelSize = 20;
var draw = false;

/*
 * Do not change lines below
 */
var grid = $("#grid");
var palette = $("#colorPalette");
var clickedColor = "#000";

grid.width(numColumns * pixelSize);
grid.height(numRows * pixelSize);
palette.width(numColumns * pixelSize);

var allBoxesString = "";

for(var r=0; r<numRows; r++){
    for(var c=0; c<numColumns; c++){
        allBoxesString += "<div class='pixel' style='width:" + pixelSize + "px; height:" + pixelSize + "px;'></div>"
    }
}

$('#grid').append(allBoxesString);

/*
 * Do not change lines above
 */

/*
 * Put your code below
 */

$(document).keypress(
    function(e){
        console.log(e.which);
        if(e.which==32){
            draw = !draw;
            if(draw)
                $('#pen').css('bottom', 0);
            else
                $('#pen').css('bottom', 30);
        }

        console.log(draw);
    }
);

$('.colorBox').click(
    function(){
        clickedColor = $(this).css("background-color");
        $('#pickedColor').css("background-color",clickedColor);
    }
);

/*$('.pixel').click(
    function(){
        $(this).css("background-color",clickedColor);

    }
);*/

$('.pixel').mouseover(
    function(){
        if(draw){
            $(this).css("background-color",clickedColor);
        }
    }
);