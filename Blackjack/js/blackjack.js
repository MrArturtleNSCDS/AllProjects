var deck;
var suits=["C","D","H","S"];
var turn;
var numPlayers;
var currentPlayer;
var playerPoints;
var backOfCard;
var dealtCards;
var allCardWrappers;
var winnerWrapper;
var message;
var startButton;
var gameButtons;
var firstGame;

init();

function init(){
    console.log("init()");
    numPlayers = 2;
    backOfCard = new Image();
    backOfCard.src = 'cardPNG/back.png';
    initDeck();
    allCardWrappers = $('.cardsWrapper');
    winnerWrapper = $('#winnerWrapper');
    message = $('#message');
    startButton = $('#startButton');
    gameButtons = $('#gameButtons');
    first = true;
    
    
    $('[startGame]').click(
        function(){
            start();        
        }
    );
    
    $('#hitButton').click(
        function(){
            if(playerPoints[currentPlayer]<21){
                dealCard(currentPlayer);
                updatePlayerPoints(currentPlayer);
                console.log(playerPoints[currentPlayer]);
                if(playerPoints[currentPlayer]>21)
                    dealerTurn();
            }
        }
    );
    
    $('#stayButton').click(
        function(){
            dealerTurn();
        }
    );
}

function dealerTurn(){
    currentPlayer++;
    dealerDeal();
}

function initDeck(){
    playerPoints = [];
    deck = [];
    
    for(var p=0; p<numPlayers; p++){
        playerPoints[p]=0;
    }
    
    for(var c=0; c<52; c++){
        var suitIndex=Math.floor(c/13);
        var rank=(c%13)+1;
        
        var cardRank;
        var cardValue;
        
        switch(rank){
            case 1: 
                cardRank = 'A';
                cardValue = 11;
                break;
            case 11: 
                cardRank = 'J';
                cardValue = 10;
                break;
            case 12: 
                cardRank = 'Q';
                cardValue = 10;
                break;
            case 13:
                cardRank = 'K';
                cardValue = 10;
                break;
            default : 
                cardRank = rank;
                cardValue = rank;
        }
        
        var chosenSuit = suits[suitIndex];
        var cardSuitRank= chosenSuit+cardRank;
        
        var currentCardImage = new Image();
        currentCardImage.src = 'cardPNG/' + cardSuitRank +'.png';
        
        var currentCard = {suit:chosenSuit,rank:cardRank,image:currentCardImage.src, value:cardValue};
        deck[c] = currentCard;
    }
    //console.log(deck);
}

function start(){
    console.log('start()');
    turn = 0;
    currentPlayer = 0;
    allCardWrappers.html('');
    updateAllPlayersPoints();
    shuffleDeck();
    dealCards();
    if(first){
        startButton.fadeOut(200);
        gameButtons.delay(300).fadeIn();
        first = false;
    }
    else
        winnerWrapper.fadeOut();
    //updateAllPlayersPoints();
    console.log("player points: dealer:" + playerPoints[numPlayers-1] + " player0:" + playerPoints['0']);
}

function shuffleDeck(){
    console.log('shuffleDeck()');
    var totalCards = deck.length;
    for(var s=0; s<2; s++){
    	for(var c=0; c<totalCards; c++){
            var j= Math.floor(Math.random()*totalCards);
            var tempCard = deck[j];
            deck[j]=deck[c];
            deck[c]=tempCard;
        }
    }
}

function dealCards(){
    console.log('dealCards()');
    //var firstCard = true;
    dealtCards = 0;
    for(var c=0; c<2; c++){
        for(var p=0; p<numPlayers; p++){
            dealCard(p);
            if(p!==numPlayers-1)
                updatePlayerPoints(p);
        }
    }
}

function dealCard(player){
    var currentCard=deck[turn];
 
    var currentPlayer = player===numPlayers-1?'#dealer':'#player' + player;
    
    //console.log(currentPlayer, player,turn)
    
    var backImage = player===1&&turn===1?backOfCard.src:currentCard.image;
    
    $('.cardsWrapper', currentPlayer).append(
        '<img class="card" src="' + backImage + '" cardid="' + turn + '" />');
    var dealtCard = $('[cardid=' + turn + ']');
    dealtCard.data('value',currentCard.value);
    dealtCard.data('image',currentCard.image);
    //TweenMax.from(dealtCard,1,{x:530,rotation:360,delay:turn,ease:SlowMo.easeInOut});
    turn++;
}

function dealerDeal(){
    updatePlayerPoints('d');
    var firstCard = $('[cardid=1]');
    var cardsDealt = 0;
    
    firstCard.attr('src',firstCard.data('image'));
    while(playerPoints[numPlayers-1]<17){
        dealCard(numPlayers-1);
        updatePlayerPoints('d');
        cardsDealt++;
    }
    console.log(cardsDealt);
    winner();
}

function updateAllPlayersPoints(){
    for(var p=0; p<numPlayers-1; p++){
        updatePlayerPoints(p);    
    }
    updatePlayerPoints('d');
}

function updatePlayerPoints(player){
    console.log("updating player points");
    var allPlayerCards = $('.card','[player=' + player + ']');
    var sum = 0;
    var numAs = 0;
    allPlayerCards.each(
        function(){
            var currentValue = $(this).data('value');
            console.log($(this).data('image'));
            if (currentValue === 11)
                numAs++;
            sum+=currentValue;
        }
    );
    
    while(sum>21 && numAs>0){
        numAs--;
        sum-=10;
    } 
    var index = player==='d'?numPlayers-1:parseInt(player);
    playerPoints[index] = sum;
    $('.playerPoints','[player=' + player + ']').text(sum);
}

function winner(){
    var winningPlayer = 0;
    while(playerPoints[winningPlayer]>21)
        winningPlayer++;
        
    for(var p=winningPlayer; p<numPlayers-1; p++){
        if(playerPoints[p+1] > playerPoints[winningPlayer] && playerPoints[p+1] <=21)
            winningPlayer=p+1;
    }
    var winningString = winningPlayer===numPlayers-1?"DEALER ":"Player ";
    console.log(winningString + " wins!!");
    message.text(winningString + "wins!!");
    winnerWrapper.fadeIn();
}