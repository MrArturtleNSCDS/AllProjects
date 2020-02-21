console.info("javascript loaded");
var gameBoard = $("#gameBoard");

for(var r=0; r<20; r++){
    if(r%2==0)
        for(var c=0; c<10; c++){
            gameBoard.append("<div class='dot'></div>");
            if(c<9)
                gameBoard.append("<div class='line hLine' t='" + (r/2) + "'></div>");
        }
    else
        if(r<19)
            for(var c=0; c<10; c++){
                gameBoard.append("<div class='line vLine'></div>");
                if(c<9)
                    gameBoard.append("<div class='box' r='"+ ((r-1)/2) +"' c='" + c + "'></div>");
            }
}

$('.line').click(
    function(){
        $(this).addClass('drawn');
    }
);