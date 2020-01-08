/*eslint-env jquery, jquery*/

var xImage = new Image();
xImage.onload = notifyComplete;
xImage.src = 'images/x.png';

var oImage = new Image();
oImage.onload = notifyComplete;
oImage.src = 'images/o.png';

var greenBack = new Image();
greenBack.onload = notifyComplete;
greenBack.src = 'images/fancyGreenBack.png';

function notifyComplete(){
    console.log(this.src + ' into the cache.');
}

var turn=0;
var modal = $('#modalWrapper');
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
                showModal(true, "Player " + winningPlayer + " wins!!");
            }
            else if(turn===9){
                showModal(true,"DRAW");
            }
        }
    }
);

function checkWin(spotClicked){
    var parentSpot = $(spotClicked).closest('.spot');
    
    var r = parseInt(parentSpot.attr("r"),10);
    var c = parseInt(parentSpot.attr("c"),10);
    
    var clickedMarker = $(spotClicked).hasClass("x")?"x":"o";
    
    var allInRow = $("[r=" + r + "]");
    var won = allInRow.find('.' + clickedMarker).length == 3?true:false;
    
    if(!won){
        var allInCol = $("[c=" + c + "]");
        won = allInCol.find('.' + clickedMarker).length == 3?true:false;
    }
    
    if(!won){
        var allInDiag = $("[d1]");
        won = allInDiag.find('.' + clickedMarker).length == 3?true:false;
    }
    
    if(!won){
        var allInDiag = $("[d2]");
        won = allInDiag.find('.' + clickedMarker).length == 3?true:false;
    }
    
    return won;
}

$('#restart').click(
    function(){
        TweenMax.staggerTo('[avail=0] .marker',.5,{opacity:0,scale:0,rotation:360,ease:Bounce.easeOut},.1,resetSpots);
        showModal(false);
        turn=0;
    }
);

function resetSpots(){
    $('.x').removeClass('x');
    $('.o').removeClass('o');
    TweenMax.to('.marker',0,{opacity:1,scale:1});
    $('[avail=0]').attr('avail','1');
}

function showModal(show, text){
    if(show){
        textWrapper.text(text);
        modal.fadeIn();
    }
    else
        modal.fadeOut();
}