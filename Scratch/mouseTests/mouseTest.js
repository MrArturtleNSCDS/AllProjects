var bodyX = $('#body .xCoord');
var bodyY = $('#body .yCoord');

var elementX = $('#element .xCoord');
var elementY = $('#element .yCoord');

var bar = $('#bar');

$('.testBox').mousemove(
    function(event){
        var currOffsetX = event.offsetX;
        var currOffsetY = event.offsetY;    
        
        elementX.text(currOffsetX);
        elementY.text(currOffsetY);
        
        if(currOffsetX < 0 || currOffsetY < 0){
            console.log(currOffsetX,currOffsetY);
        }
        //console.log("matrix(0, 0, 0, 0, " + currOffsetX + ", " + currOffsetY + ")");
        bar.css("transform","matrix(1, 0, 0, 1, " + (currOffsetX - 50) + ", " + (currOffsetY - 40) + ")");
    }
);

$(document).mousemove(
    function(event){
        bodyX.text(event.pageX);
        bodyY.text(event.pageY);
    }
);