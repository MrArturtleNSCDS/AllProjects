/*eslint-env jquery */

var turn=0;
var spotTokens = [0,0,0,0,0,0,0];
var modal = $('#modalWrapper');
var textWrapper = $('#textWrapper');
var spot;
var chip;
var dropSpots;
var clickable;
var currPlayer;


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
                    "<div class='spot' r='" + r + "' c='" + c + "' p='0'></div>" +
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
    currPlayer = 1;
}

$('.spot').click(
    function(){
        console.log('click');
        if($(this).attr('p')==='0' && clickable){
            clickable = false;
            var colClicked = parseInt($(this).attr('c'),10);
            var nextRow=spotTokens[colClicked];
            spotTokens[colClicked]++;
            
            var nextSpot = $('.chip[r=' + nextRow + '][c=' + colClicked + ']');
            
            var nextClass = 'p' + currPlayer;
            nextSpot.addClass(nextClass);
            
            var fromY = -(80*6)+(80*nextRow);
            var duration = 1.5 - ((1.5/7)*nextRow);
            console.log("duration:" + duration);
            TweenMax.from(
                nextSpot,
                duration,
                {
                    y:fromY,
                    ease:Bounce.easeOut,
                    onComplete:checkWinner,
                    onCompleteParams:[nextSpot]
                }
            );
            $('.spot[r=' + nextRow + '][c=' + colClicked + ']').attr('p',(turn%2)+1);
            dropSpots.removeClass(nextClass);console.log(spotTokens);
        }
    }

);

function checkWinner(spot){
    if(winner(spot)){
        //var winningPlayer = currPlayer;
        var message = "Player " + currPlayer + " wins!!";
        console.log(message);
        showModal(true, message);
    }
    else{
        clickable=true;
        turn++;
        currPlayer = (turn%2)+1;
    }
}

$('.column').hover(
    function(){
        if(clickable)
            $('.dropSpot[c=' + $(this).attr("c") + ']').addClass('p' + currPlayer);
    }, 
    function(){
        dropSpots.removeClass('p' + currPlayer);
    }
);

function winner(currentSpot){
    var r = parseInt(currentSpot.attr('r'),10);
    var c = parseInt(currentSpot.attr('c'),10);
    var currentClass = currentSpot.attr("class");
    console.log(r + "," + c + " | " + currentClass);
    
    var cont=true;
    var currentColumn = c;
    var numSame=1;
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

function longestConsecutive(collection, player, attribute,order){
    var classInRow = collection.filter("[p=" + player + "]");
    var tokenArray = [];
    
    classInRow.each(
        function(){
            tokenArray.push(parseInt($(this).attr(attribute),10));
        }
    );
    
    console.log(attribute,tokenArray);
    
    var longConsecutive = 1;
    var currConsecutive = 1;
    
    for(var i=0; i<tokenArray.length-1; i++){
        var currNum = tokenArray[i];
        var nextNum = tokenArray[i+1];
        if(currNum+order === nextNum)
            currConsecutive++;
        else{
            if(currConsecutive>longConsecutive)
                longConsecutive = currConsecutive;
            currConsecutive = 0;
        }
    }
    
    if(currConsecutive>longConsecutive)
        longConsecutive = currConsecutive;
        
    console.log(attribute,longConsecutive);
    
    return longConsecutive;
}

$('#restart').click(
    function(){
        showModal(false);
        turn=0;
        clickable = true;
        spotTokens = [0,0,0,0,0,0,0];
        chip.removeClass('p1');
        chip.removeClass('p2');
        spot.attr('p',0);
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