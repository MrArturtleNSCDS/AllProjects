var turn=0;
var spotTokens = [0,0,0,0,0,0,0];
var modal = $('#modalWrapper');
var textWrapper = $('#textWrapper');
var spot = $('.spot');

var logoWhite = new Image();
logoWhite.onload = notifyComplete;
logoWhite.src = 'images/nscdsLogoWhitePurple.png';

var logoPurple = new Image();
logoPurple.onload = notifyComplete;
logoPurple.src = 'images/nscdsLogoPurpleWhite.png';

var greenBack = new Image();
greenBack.onload = notifyComplete;
greenBack.src = 'images/fancyGreenBack.png';

function notifyComplete(){
    console.log(this.src + ' into the cache.');
}

$('.spot').click(
    function(){
        console.log('click');
        if($(this).attr('taken')=='0'){
            var colClicked = parseInt($(this).attr('c'),10);
            var nextRow=spotTokens[colClicked];
            spotTokens[colClicked]++;
            
            var nextSpot = $('.spot[r=' + nextRow + '][c=' + colClicked + ']');
            
            if(turn++%2===0)
                nextSpot.addClass('p1');
            else
                nextSpot.addClass('p2');
            nextSpot.attr('taken','1');
            if(winner(nextSpot)){
                var winningPlayer = (turn+1)%2+1;
                var message = "Player " + winningPlayer + " wins!!";
                console.log(message);
                showModal(true, message);
            }

        }
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
        if($('.spot[r=' + r + '][c=' + currentColumn + ']').attr('class')===currentClass)
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
            if($('.spot[r=' + r + '][c=' + currentColumn + ']').attr('class')===currentClass)
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
            if($('.spot[r=' + currentRow + '][c=' + c + ']').attr('class')===currentClass)
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
            if($('.spot[r=' + currentRow + '][c=' + currentColumn + ']').attr('class')===currentClass)
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
            if($('.spot[r=' + currentRow + '][c=' + currentColumn + ']').attr('class')===currentClass)
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
            if($('.spot[r=' + currentRow + '][c=' + currentColumn + ']').attr('class')===currentClass)
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
            if($('.spot[r=' + currentRow + '][c=' + currentColumn + ']').attr('class')===currentClass)
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
        spotTokens = [0,0,0,0,0,0,0];
        spot.removeClass('p1');
        spot.removeClass('p2');
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