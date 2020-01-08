/*eslint-env jquery, jquery*/

var imageArray = 
    ['catSm.png','dogSm.png','cubsSm.png','soxSm.png','x.png','o.png','fancyGreenBack.png','nscdsLogoTr.png'];
var preloadArray = [];

var options = 
    [{o:'o',x:'x'},
    {o:'cat',x:'dog'},
    {o:'cubs',x:'sox'}];

preloadImages();


function preloadImages(){
    for(var i=0; i<imageArray.length; i++){
        var currImage = new Image();
        currImage.onload = notifyComplete;
        currImage.src = 'images/' + imageArray[i];
        preloadArray.push(currImage);
    }
}

function notifyComplete(){
    console.log(this.src + ' into the cache.');
}

var modal = $('#modalWrapper');
var textWrapper = $('#textWrapper');

var player1Turn=true;
var turn=0;
var gameOver = false;
//var computerFirst = true;
var winningPlayer;
var choice = 0;

var playerClass = options[0].o;
var computerClass = options[0].x;

console.log(playerClass,computerClass);

//computerAI();

$('.marker').click(
    function(){
        console.log('click');
        var parentSpot = $(this).closest('.spot');
        if(parentSpot.attr('player') === '0' && player1Turn){
            $(this).addClass(playerClass);
            processTurn(this,parentSpot);
            player1Turn=false;
            setTimeout(function(){computerAI()},1000);
        }
    }
);

function computerAI(){
    if(!gameOver){
        var availSpots = $('[player=0]');
        var randomSpot = Math.floor(Math.random()*availSpots.length);
        var computerParentSpot = availSpots.eq(randomSpot);
        
        if(turn==0){
            computerParentSpot = $('[r=0][c=0]');
        }
        
        if(turn==2){
            var middle = $('[r=1][c=1][player=0]');
            if(middle.length>0){
                if($('[r=0][c=1][player=1]').length == 1 ||
                        $('[r=0][c=2][player=1]').length == 1 ||
                        $('[r=1][c=2][player=1]').length == 1 ||
                        $('[r=2][c=2][player=1]').length == 1){
                    computerParentSpot = $('[r=2][c=0]');
                    console.log("(2,0)");
                }
                else{
                    computerParentSpot = $('[r=0][c=2]');
                    console.log("(0,2)");
                }

            }
            else{
                computerParentSpot = $('[r=2][c=2]');
            }
        }
        
        if(turn==4){
            if($('[r=2][c=2][player=0]').length == 1)
                computerParentSpot = $('[r=2][c=2]');
            else if($('[r=1][c=1][player=0]').length == 1)
                computerParentSpot = findCornerSpot();
        }
        
        if(turn==1){
            var middle = $('[r=1][c=1][player=0]');
            if(middle.length>0){
                computerParentSpot=middle;
                console.log("middleSpot available!");
            }
            else{
                computerParentSpot = findCornerSpot();
                console.log("middleSpot not available!");
            }
        }
        
        if(turn==3){
            var middleX = $('[r=1][c=1]').find('.'+playerClass).length;
            if(middleX>0)
                computerParentSpot = findCornerSpot();
            else if($('[d1][player=0],[d2][player=0]').length == 3){
                availSpots = $('[player=0]').not('[d1]').not('[d2]');
                availSpots.each(
                    function(){
                        var currentSpot = $(this);
                        if(hasEmptyRowColumn(currentSpot))
                            computerParentSpot = currentSpot;
                    }
                );
            }
            else{
                if($('[r=0][c=1][player=1]').length + $('[r=1][c=0][player=1]').length == 2)
                    computerParentSpot = $('[r=0][c=0]');
                else if($('[r=0][c=1][player=1]').length + $('[r=1][c=2][player=1]').length == 2)
                    computerParentSpot = $('[r=0][c=2]');
                else if($('[r=1][c=0][player=1]').length + $('[r=2][c=1][player=1]').length == 2)
                    computerParentSpot = $('[r=2][c=0]');
                else if($('[r=2][c=1][player=1]').length + $('[r=1][c=2][player=1]').length == 2)
                    computerParentSpot = $('[r=2][c=2]');
                else{
                    availSpots = $('[player=0]').not('[d1]').not('[d2]');
                    console.log("turn 2 available spots:" + availSpots.length);
                    randomSpot = Math.floor(Math.random()*availSpots.length);
                    computerParentSpot = availSpots.eq(randomSpot);
                }

            }

        }
        
        var findBlock = playPiece('.'+computerClass);
        
        if(findBlock.length > 0)
            computerParentSpot = findBlock;
        else{
            findBlock = playPiece('.'+playerClass);
        
            if(findBlock.length > 0)
                computerParentSpot = findBlock;
        }
        
        var computerSpot = $('.marker',computerParentSpot);

        //computerSpot.addClass('o');
        computerSpot.addClass(computerClass);
        processTurn(computerSpot,computerParentSpot);
        player1Turn=true;
    }
}

function hasEmptyRowColumn(spot){
    var r = spot.attr('r');
    var c = spot.attr('c');
    
    var emptyInRow = $('[r=' + r + '][player=0]').length;
    var emptyInCol = $('[c=' + c + '][player=0]').length;
    
    return emptyInRow == 3 || emptyInCol == 3;
}

function findCornerSpot(){
    var availSpots = $('[d1][player=0],[d2][player=0]');
    console.log(availSpots.length);
    var randomSpot = Math.floor(Math.random()*availSpots.length);
    return availSpots.eq(randomSpot);
}

function playPiece(piece){
    var currGroupIndex = 0;
    var hasOpenSpot = false;
    var spotToBlock = false;
    
    while(currGroupIndex<3 && !hasOpenSpot){
        var currColumn = $('[c=' + currGroupIndex + ']');
        var openSpot = playSpot(currColumn,piece);
        if(openSpot.length>0){
            spotToBlock = openSpot;
            hasOpenSpot = true;
        }
        currGroupIndex++;
    }
    
    currGroupIndex = 0;
    
    while(currGroupIndex<3 && !hasOpenSpot){
        var currRow = $('[r=' + currGroupIndex + ']');
        openSpot = playSpot(currRow,piece);
        if(openSpot.length>0){
            spotToBlock = openSpot;
            hasOpenSpot = true;
        }
        currGroupIndex++;
    }
    
    var diagDirection = 1;
    
    while(diagDirection <=2 && !hasOpenSpot){
        var currDiag = $('[d' + diagDirection + ']');
        openSpot = playSpot(currDiag,piece);
        if(openSpot.length>0){
            spotToBlock = openSpot;
            hasOpenSpot = true;
        }
        diagDirection++;
    }
    return spotToBlock;
}

function playSpot(groupElements,piece){
    var numPieces = 0;
    
    numPieces = groupElements.find(piece).length;

    if(numPieces == 2){
        console.log("2 pieces found in current group");
        var openSpot = groupElements.filter('[player=0]');
        console.log(openSpot.length);
        return openSpot;
    }
    return false;
}

function processTurn(spotClicked,parentSpot){
    turn++;
    TweenMax.from(spotClicked,.5,{opacity:0,scale:0,rotation:360,ease:Bounce.easeOut});
    
    var playerPlayed = player1Turn?1:2;
    
    parentSpot.attr('player',playerPlayed);
    if(checkWin(spotClicked)){
        winningPlayer = player1Turn?"Player 1":"Computer";
        showModal(true, winningPlayer + " wins!!");
        gameOver = true;
    }
    else if(turn===9){
        showModal(true,"DRAW");
        winningPlayer = 0;
        gameOver = true;
    }
}

function checkWin(spotClicked){
    var parentSpot = $(spotClicked).closest('.spot');
    var playerPlayed = $(parentSpot).attr('player');
    
    var r = parseInt(parentSpot.attr("r"),10);
    var c = parseInt(parentSpot.attr("c"),10);
    
    var checkRow = $("[r=" + r + "][player=" + playerPlayed + "]");
    if(checkRow.length == 3)
        return true;
    
    checkRow = $("[c=" + c + "][player=" + playerPlayed + "]");
    if(checkRow.length == 3)
        return true;
    
    checkRow = $("[d1][player=" + playerPlayed + "]");
    if(checkRow.length == 3)
        return true;
    
    checkRow = $("[d2][player=" + playerPlayed + "]");
    if(checkRow.length == 3)
        return true;
    
    return false;
}

$('#restart').click(
    function(){
        TweenMax.staggerTo('.spot .marker',.5,{opacity:0,scale:0,rotation:360,ease:Bounce.easeOut},.1,resetSpots);
        showModal(false);
        turn = 0;
        gameOver = false;
    }
);

function resetSpots(){
    $('.marker').removeClass(playerClass + ' ' + computerClass);
    TweenMax.to('.marker',0,{opacity:1,scale:1});
    $('.spot').attr('player','0');
    setTimeout(function(){chooseFirstPlayer()},1);
}

function chooseFirstPlayer(){
    console.log("choosing first player");
    if(winningPlayer==0){
        if(!player1Turn){
            computerAI();
        }
        else
            player1Turn = true;
    }
    
    if(winningPlayer=="Player 1"){
        player1Turn = true;
    }
    if(winningPlayer=="Computer"){
        player1Turn = false;
        computerAI();
    }
}

function showModal(show, text){
    if(show){
        textWrapper.text(text);
        modal.fadeIn();
    }
    else
        modal.fadeOut();
}

$('#themes').change(
    function(){
        choice = parseInt($(this).children("option:selected").val());
        console.log(choice);
        
        var prevPlayerClass = playerClass;
        var prevComputerClass = computerClass;
        
        playerClass = options[choice].o;
        computerClass = options[choice].x;
        
        console.log(playerClass,computerClass);
        
        $("."+prevPlayerClass).addClass(playerClass);
        $("."+prevComputerClass).addClass(computerClass);
        
        $("."+prevPlayerClass).removeClass(prevPlayerClass);
        $("."+prevComputerClass).removeClass(prevComputerClass);
        
        
    }
);