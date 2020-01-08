var board = $('#board');
var turn = 0;
var fromR = -1;
var fromC = -1;
var legalMoves = []

initBoard();

function initBoard(){
    var spotString = "";
    var spotIndex = 0;
    for(var r=0; r<8; r++){
        for(var c=0; c<8; c++){
            var darkSpot = "";
            var hasToken = "0";
            var checkerString = "";
            
            if((r+c)%2===0){
                darkSpot = " darkSpot ";
                if(r<=2){
                    checkerString = "<div class='checker darkChecker'></div>";
                    hasToken = "1";
                }
                else if(r>=5){
                    checkerString = "<div class='checker lightChecker'></div>";
                    hasToken = "1";
                }
            }
         
            spotString += 
                "<div class='spot" + darkSpot + "' r='" + r + "' c='" + c + "' hasToken='" + hasToken + "'>" +
                    checkerString +
                "</div>";
        }
    }
    board.html(spotString);
}

$('.darkSpot').click(
    function(){
        //var r = $(this).attr('r');
        //var c = $(this).attr('c');
        var hasToken = parseInt($(this).attr('hasToken'),10);
        
        if(hasToken){
            fromR = parseInt($(this).attr('r'),10);
            fromC = parseInt($(this).attr('c'),10);
            
            var currentChecker = $('.checker',this);
            
            if(turn%2===0){
                if(currentChecker.hasClass('darkChecker')){
                    console.log(fromR + "," + fromC + " dark turn");
                    $('.darkChecker').removeClass('darkCheckerSelected');
                    currentChecker.addClass('darkCheckerSelected');
                }
            }
            else{
                if(currentChecker.hasClass('lightChecker')){
                    console.log(fromR + "," + fromC + " light turn");
                    $('.lightChecker').removeClass('lightCheckerSelected');
                    currentChecker.addClass('lightCheckerSelected');
                }
            }
        }
        else{
            console.log("no token");
            var toR = parseInt($(this).attr('r'),10);
            var toC = parseInt($(this).attr('c'),10);
            var legalMove = false;
            if(turn%2===0)
                legalMove = toR-1 === fromR && toC-1===fromC || toR-1 === fromR && toC+1===fromC;
            else
                legalMove = toR+1 === fromR && toC-1===fromC || toR+1 === fromR && toC+1===fromC;
            if(legalMove){
                console.log("legal Move");
                var spotToMoveTo = $('.darkSpot[r=' + toR + '][c=' + toC + ']');
                var spotToMoveFrom = $('.darkSpot[r=' + fromR + '][c=' + fromC + ']');
                var tokenToMove = $('.checker',spotToMoveFrom);
                
                if(turn%2===0)
                    tokenToMove.removeClass('darkCheckerSelected');
                else
                    tokenToMove.removeClass('lightCheckerSelected');
                
                spotToMoveTo.append(tokenToMove);
                spotToMoveTo.attr('hasToken',1);
                spotToMoveFrom.attr('hasToken',0);
                
                turn++;
            }
        }

    }
)