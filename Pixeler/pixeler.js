var clickedColor = "white";
var eraser = true;

var pixelString = "";
for(var r=0; r<resolution; r++){
    for(var c=0; c<resolution; c++){
        pixelString += "<div class='pixel' r='" + r + "' c='" + c + "'></div>";
    }
}

$('#pixelWrapper').html(pixelString);

var availColorString = "";
for(var c=0; c<16; c++){
    availColorString += "<div class='availColor' color='" + (c+1) + "'></div>";
}

$('#availColorWrapper').html(availColorString);
    
resetDrawingArray();

$('.pixel').click(
    function(){
        if(!eraser){
            $(this).css('background-color',clickedColor);
            //$(this).addClass('pixelSelected');
            var r=$(this).attr('r');
            var c=$(this).attr('c');
            //console.log(r + "," + c);
            currentDrawing[r][c] = clickedColor;
        }
        else
            $(this).removeAttr('style').removeClass('pixelSelected');
    }
);

$('.availColor').click(
    function(){
        clickedColor = $(this).css('background-color');
        $('.availColor').removeClass('selected');
        $(this).addClass('selected');
        eraser=false;
    }
);

$('#clear').click(
    function(){
        resetDrawingArray();
        $('.pixel').removeAttr('style').removeClass('pixelSelected');
    }
);

$('#erase').click(
    function(){
        eraser=true;
        $('.availColor').removeClass('selected');
    }
);

