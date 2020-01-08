/*eslint-env jquery, jquery*/

var xImage = new Image();
xImage.onload = notifyComplete;
xImage.src = 'images/x.png';

var oImage = new Image();
oImage.onload = notifyComplete;
oImage.src = 'images/o.png';

function notifyComplete(){
    console.log(this.src + ' into the cache.');
}

var turn=0;
var modal = $('#modal');
var textWrapper = $('#textWrapper');

$('.marker').click(
    function(){
        console.log('click');
        var parentSpot = $(this).closest('.spot');
        if(parentSpot.attr('avail') === '1'){
            turn++;
            if(turn%2===1)
                $(this).addClass('x');
            else
                $(this).addClass('o');
            TweenMax.from(this,.5,{opacity:0,scale:0,rotation:360,ease:Bounce.easeOut});
            parentSpot.attr('avail','0');
            if(checkWin(this)){
                var winningPlayer = (turn+1)%2+1;
                textWrapper.text("Player " + winningPlayer + " wins!");
                modal.fadeIn();
            }

        }
    }
);

function checkWin(spotClicked){
    var parentSpot = $(spotClicked).closest('.spot');
    
    var r = parseInt(parentSpot.attr("r"),10);
    var c = parseInt(parentSpot.attr("c"),10);
    
    var clickedMarker = 
        $(spotClicked).hasClass("x")?"x":"o";
    var allInRow = $("[r=" + r + "]");
    var won = true;

    allInRow.each(
        function(){
            if(!$('.marker',this).hasClass(clickedMarker))
                won = false;                
        }
    );
    
    if(!won){
        won = true;
        $("[c=" + c + "]").each(
            function(){
                if(!$('.marker',this).hasClass(clickedMarker))
                    won = false;  
            }
        );
    }
    
    if(!won && (r+c)%2===0){
        won = true;
        
        var index=0;
        while(won && index++<2){
            var currentSpot = $('[r=' + index + '][c=' + index + ']');
            if(!$('.marker',currentSpot).hasClass(clickedMarker))
                won = false;  
        }
        
        if(!won){
            
            won = true;
            var currentR = 0;
            var currentC = 2;
            
            while(won && currentR<=2){
                var currentSpot = $('[r=' + currentR++ + '][c=' + currentC-- + ']');
                if(!$('.marker',currentSpot).hasClass(clickedMarker))
                    won = false;  
            }
        }
    }
    
    return won;
}