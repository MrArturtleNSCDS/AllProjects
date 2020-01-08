var clicks = 0;
var newColor;

$('.spot').click(
    function(){
        var clickable = $(this).attr('clickable');
        if(clickable == '1'){
            clicks++;
            var turn;
            if(clicks%2===1){
                turn = 'o';
                $('.o',this).slideDown();
            }
            else{
                turn = 'x';
                $('.x',this).fadeIn();
            }


            $(this).attr('clickable','0');
            
            var r = $(this).attr('r');
            var c = $(this).attr('c');
            
            var allInRow = $('[r=' + r + ']');
            
            var inRow = 0;
            allInRow.each(
                function(){
                    var currClass = $(this).find('[style]').attr('class');
                    if(currClass == turn)
                        inRow++;
                }
            );
            if(inRow<3){
                var allInRow = $('[c=' + c + ']');
            
                var inRow = 0;
                allInRow.each(
                    function(){
                        var currClass = $(this).find('[style]').attr('class');
                        if(currClass == turn)
                            inRow++;
                    }
                );
            }
            if(inRow<3){
                var allInCol = $('[c=' + c + ']');
            
                var inRow = 0;
                allInCol.each(
                    function(){
                        var currClass = $(this).find('[style]').attr('class');
                        if(currClass == turn)
                            inRow++;
                    }
                );
            }
            if(inRow<3){
                var allInDiag = $('[d1]');
            
                var inRow = 0;
                allInDiag.each(
                    function(){
                        var currClass = $(this).find('[style]').attr('class');
                        if(currClass == turn)
                            inRow++;
                    }
                );
            }
            if(inRow<3){
                var allInDiag = $('[d2]');
            
                var inRow = 0;
                allInDiag.each(
                    function(){
                        var currClass = $(this).find('[style]').attr('class');
                        if(currClass == turn)
                            inRow++;
                    }
                );
            }
            if(inRow==3){
                $('#winner').text(turn + ' wins');
            }
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