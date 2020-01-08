var clicks = 0;
var newColor;

$('.spot').click(
    function(){
        var currentColor = $(this).css('background-color');
        console.log(currentColor);
        if(currentColor=='rgb(255, 255, 255)'){
            clicks++;
            
            
            
            if(clicks%2===1)
                newColor = "#f90";
            else
                newColor = '#800';
                
            $(this).css('background-color', newColor);
            newColor = $(this).css('background-color');
    
            var r = $(this).attr('r');
            var c = $(this).attr('c');
            
            var allRow = $('[r=' + r + ']');

            var inARow = 0;            
            allRow.each(
                function(){
                    var thisColor = $(this).css('background-color');
                          
                    console.log(newColor + " " + thisColor);
                    if(newColor == thisColor)
                        inARow++;
                        
                    console.log(inARow);
                    if(inARow==3)
                        console.log('win');
                }
            );
            
            
        }
        else
            alert("NOPE");

    }
);
























/*var allRow = $('[r=' + r + ']');
            
            var sameColor = 0;
            var newColor = $(this).css('background-color');
            allRow.each(
                function(){
                    var currentColor = $(this).css('background-color');
                    if(currentColor==newColor)
                        sameColor++;
                }
            );
            
            console.log(allRow.length);
            console.log(sameColor);
            
            if(allRow.length === sameColor)
                console.log('WINNER!!!');*/