var turn=0;
var spotTokens = [0,0,0,0,0,0,0];
var modal = $('#modalWrapper');
var textWrapper = $('#textWrapper');
var spot;
var chip;
var dropSpots;
var clickable;


var logoWhite = new Image();
logoWhite.onload = notifyComplete;
logoWhite.src = 'images/nscdsLogoWhitePurple.png';

var logoPurple = new Image();
logoPurple.onload = notifyComplete;
logoPurple.src = 'images/nscdsLogoPurpleWhite.png';

var greenBack = new Image();
greenBack.onload = notifyComplete;
greenBack.src = 'images/fancyGreenBack.png';

initBoard();



function notifyComplete(){
    console.log(this.src + ' into the cache.');
}

function initBoard(){
    var boardTop = "";
    var spotString = "";
    var frontString = "";
    clickable = false;
    for(var c=0; c<=6; c++){
        spotString += "<div class='column'>";
        frontString += "<div class='column' c='" + c + "'>";
        boardTop += "<div class='dropSpot' c='" + c + "'></div>";
        for(var r=5; r>=0; r--){
            spotString += "<div class='chip' r='" + r + "' c='" + c + "'></div>";
            frontString += 
                "<div class='boardTile'>" +
                    "<div class='spot' r='" + r + "' c='" + c + "' taken='0'></div>" +
                "</div>";
        }
        spotString += "</div>";
        frontString += "</div>";
    }
    //console.log(boardTop);
    $('#boardTop').html(boardTop);
    $('#board').html(spotString);
    $('#boardFront').html(frontString);
    
    dropSpots = $('.dropSpot');
    spot = $('.spot');
    chip = $('.chip');
    clickable = true;
}

$('.spot').click(
    function(){
        console.log('click');
        if($(this).attr('taken')==='0' && clickable){
            clickable = false;
            var colClicked = parseInt($(this).attr('c'),10);
            var nextRow=spotTokens[colClicked];
            spotTokens[colClicked]++;
            
            var nextSpot = $('.chip[r=' + nextRow + '][c=' + colClicked + ']');
            
            var nextClass = turn++%2===0?'p1':'p2';

            nextSpot.addClass(nextClass);
            
            var fromY = -(80*6)+(80*nextRow);
            var duration = 1.5 - ((1.5/7)*nextRow);
            console.log("duration:" + duration);
            TweenMax.from(
                nextSpot,
                duration,
                {
                    y:fromY,ease:Bounce.easeOut,
                    onComplete:checkWinner,
                    onCompleteParams:[nextSpot]
                }
            );
            $('.spot[r=' + nextRow + '][c=' + colClicked + ']').attr('taken','1');
            dropSpots.removeClass(nextClass);
            //checkWinner(nextSpot);

        }
    }

);

function checkWinner(spot){
    if(winner(spot)){
        var winningPlayer = (turn+1)%2+1;
        var message = "Player " + winningPlayer + " wins!!";
        console.log(message);
        showModal(true, message);
    }
    else{
        clickable=true;
    }
}

$('.column').hover(
    function(){
        var tokenClass = turn%2===0?'p1':'p2';
        $('.dropSpot[c=' + $(this).attr("c") + ']').addClass(tokenClass);
    }, 
    function(){
        var tokenClass = turn%2===0?'p1':'p2';
        dropSpots.removeClass(tokenClass);
    }
);

function winner(currentSpot){
    var r = parseInt(currentSpot.attr('r'),10);
    var c = parseInt(currentSpot.attr('c'),10);
    var currentClass = currentSpot.attr("class");
    console.log(r + "," + c + " | " + currentClass);
    
    var numSame = 1;
    var cont = true;
    var currentColumn = c;
    
    
    //check row going right
    while(cont && ++currentColumn<=6){
        if($('.chip[r=' + r + '][c=' + currentColumn + ']').attr('class')===currentClass)
            numSame++;
        else
            cont=false;
        console.log(cont + " " + currentColumn + " " + numSame);
    }
    
    //if didn't win, check row going left
    if(numSame<4){
        cont = true;
        currentColumn = c;
        
        while(cont && --currentColumn>=0){
            if($('.chip[r=' + r + '][c=' + currentColumn + ']').attr('class')===currentClass)
                numSame++;
            else
                cont=false;
            console.log(cont + " " + currentColumn + " " + numSame);
        }
    }
    
    //if didn't win, check column going down
    if(numSame<4){
        numSame = 1;
        cont = true;
        var currentRow = r;
            
        while(cont && --currentRow>=0){
            if($('.chip[r=' + currentRow + '][c=' + c + ']').attr('class')===currentClass)
                numSame++;
            else
                cont=false;
            console.log(cont + " " + currentRow + " " + numSame);
        }
    }
    
    //if didn't win, check bottom-left to top-right
    if(numSame<4){
        numSame = 1;
        cont = true;
        currentRow = r;
        currentColumn = c;
            
        while(cont && ++currentRow<=5 && ++currentColumn<=6){
            if($('.chip[r=' + currentRow + '][c=' + currentColumn + ']').attr('class')===currentClass)
                numSame++;
            else
                cont=false;
            console.log(cont + " " + currentRow + " " + numSame);
        }
    }

        
    //if did not win, check top-right to bottom-left
    if(numSame<4){
        cont = true;
        currentRow = r;
        currentColumn = c;
            
        while(cont && --currentRow>=0 && --currentColumn>=0){
            if($('.chip[r=' + currentRow + '][c=' + currentColumn + ']').attr('class')===currentClass)
                numSame++;
            else
                cont=false;
            console.log(cont + " " + currentRow + " " + numSame);
        }
    }
    
    //if didn't win, check bottom-right to top-left
    if(numSame<4){
        numSame = 1;
        cont = true;
        currentRow = r;
        currentColumn = c;
            
        while(cont && ++currentRow<=5 && --currentColumn>=0){
            if($('.chip[r=' + currentRow + '][c=' + currentColumn + ']').attr('class')===currentClass)
                numSame++;
            else
                cont=false;
            console.log(cont + " " + currentRow + " " + numSame);
        }
    }
        
    //if did not win, check top-left to bottom-right
    if(numSame<4){
        cont = true;
        currentRow = r;
        currentColumn = c;
            
        while(cont && --currentRow>=0 && ++currentColumn<=6){
            if($('.chip[r=' + currentRow + '][c=' + currentColumn + ']').attr('class')===currentClass)
                numSame++;
            else
                cont=false;
            console.log(cont + " " + currentRow + " " + numSame);
        }
    }
    
    return numSame >= 4;
}

$('#restart').click(
    function(){
        showModal(false);
        turn=0;
        clickable = true;
        spotTokens = [0,0,0,0,0,0,0];
        chip.removeClass('p1');
        chip.removeClass('p2');
        spot.attr('taken',0);
    }
);

function showModal(show, text){
    if(show){
        textWrapper.text(text);
        modal.fadeIn();
    }
    else
        modal.fadeOut();
}