var board = $('#board');
var turn = 0;
var checkToMove;


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
                    checkerString = "<div class='checker darkChecker' direction='1' player='0'></div>";
                }
                else if(r>=5){
                    checkerString = "<div class='checker lightChecker' direction='-1' player='1'></div>";
                }
            }
         
            spotString += 
                "<div class='spot" + darkSpot + "' r='" + r + "' c='" + c + "'>" +
                    checkerString +
                "</div>";
        }
    }
    board.html(spotString);
}

$('.checker').click(
    function(){
        var playerClicked = parseInt($(this).attr('player'));
        $(checkToMove).removeClass('checkerSelected' + $(checkToMove).attr('player'));
        $('.nextSpot').removeClass('nextSpot');
        if(playerClicked === turn%2){
            var nextMoves = findLegalMoves(this);
    
            var nextRight = nextMoves.right;
            var nextLeft = nextMoves.left;
            
            $('[diagonal]').removeAttr('diagonal');
            
            $('.nextSpot').removeClass('nextSpot');
            nextRight.addClass('nextSpot');
            nextRight.attr('diagonal',1);
            nextLeft.addClass('nextSpot');
            nextLeft.attr('diagonal',-1);
        }
    }
);

$('.darkSpot').click(
    function(){
        if($(this).hasClass('nextSpot')){
            $('.nextSpot').removeClass('nextSpot');
            $(this).append(checkToMove);
            var currentPlayer = $(checkToMove).attr('player');
            $(checkToMove).removeClass('checkerSelected' + currentPlayer);
            
            var diagonal = $(this).attr('diagonal');

            var victim = $('[victim=' + diagonal + ']');
            console.log(victim.length);
            if(victim.length>0){
                $('[victimsFor=' + currentPlayer + ']').append(victim);
                findLegalMoves(checkToMove);
            }
            else{
                turn++;
            }

            $('[victim]').removeAttr('victim');
        }
    }
);

function findLegalMoves(checker){
    checkToMove = checker;
    $(checkToMove).addClass('checkerSelected' + $(checker).attr('player'));
    
    var nextLeft = traverseDiagonal(checker,-1);
    var nextRight = traverseDiagonal(checker,1);
    
    return {
        left: nextLeft,
        right: nextRight
    };
}

function traverseDiagonal(checker, diagonal){
    var fromR = parseInt($(checker).closest('.darkSpot').attr('r'),10);
    var fromC = parseInt($(checker).closest('.darkSpot').attr('c'),10);
    var direction = parseInt($(checker).attr('direction'),10);
    
    var nextRow = fromR + direction;
    var nextColumn = fromC + diagonal;
    
    var nextDiagonal = $('[r=' + nextRow + '][c=' + nextColumn + ']');
    //var victimSpot = $('[r=-1][c=-1]');
    
    var nextDiagonalChild = nextDiagonal.children();
    if(nextDiagonalChild.length !== 0){
        var childDirection = parseInt(nextDiagonalChild.attr('direction'),10);
        if(childDirection === direction){
            nextDiagonal = $('[r=-1][c=-1]');
        }
        else{
            var victimSpot = nextDiagonal;
            var victim = $('.checker', victimSpot);
            victim.attr('victim',diagonal);
            nextRow+=direction;
            nextColumn = nextColumn + diagonal;
            nextDiagonal = $('[r=' + nextRow + '][c=' + nextColumn + ']');
            if(nextDiagonal.children().length!==0)
                nextDiagonal = $('[r=-1][c=-1]');
        }
    }
    
    return nextDiagonal;
}