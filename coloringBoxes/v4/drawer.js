//v4

var numRows = 24;
var numColumns = 36;
var pixelSize = 20;

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

$(".colorBox").click(
    function(){
        clickedColor = $(this).css("background-color");
        palette.css("background-color",clickedColor);
        grid.css("background-color",clickedColor);
    }
)

$('.pixel').click(
    function(){
        $(this).css("background-color",clickedColor);
    }
);

TweenMax.to(".colorBox",4,{rotation:360,borderRadius:"45%", repeat:-1,ease: Elastic.easeOut.config(1, 0.3)});
TweenMax.to(".colorBox",2,{borderRadius:"45%", repeat:-1,yoyo:true});

