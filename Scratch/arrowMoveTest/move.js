var ball = $('#ball');
var distance = 2;
var dX = 0;
var dY = 0;
var ballLeft = 0;
var ballTop = 0;
var arenaWidth = $('#arena').width();
var arenaHeight = $('#arena').height();
var ballDiameter = ball.width();

moveBall();


function moveBall(){
    ballLeft = ball.css('left');
    ballLeft = parseInt(ballLeft.substring(0, ballLeft.length-2));
    ballTop = ball.css('top');
    ballTop = parseInt(ballTop.substring(0, ballTop.length-2));
    checkBounds();
    ball.css('left', ball.position().left + (dX*distance));
    ball.css('top', ball.position().top + (dY*distance));
    $('#position').text(ballLeft);
    requestAnimationFrame(moveBall);
}

function checkBounds(){
    if(ballLeft<0 && dX<0 || ballLeft+ballDiameter>=arenaWidth && dX>0)
        dX=0;
    if(ballTop<0 && dY<0 || ballTop+ballDiameter>=arenaHeight && dY>0)
        dY=0;
}

$(document).keydown(function(e) {
    switch (e.which) {
        case 37:
            dX=-1;
            dY=0;
            //ball.css('left', ball.position().left - distance);
            break;
        case 38:
            dY=-1;
            dX=0;
            //ball.css('top', ball.position().top - distance);
            break;
        case 39:
            dX=+1;
            dY=0;
            //ball.css('left', ball.position().left + distance);
            break;
        case 40:
            dY=+1;
            dX=0;
            //ball.css('top', ball.position().top + distance);
            break;
    }
});

$(document).keyup(function(e) {
    switch (e.which) {
    case 37:
        dX=0;
        //ball.css('left', ball.position().left - distance);
        break;
    case 38:
        dY=0;
        //ball.css('top', ball.position().top - distance);
        break;
    case 39:
        dX=0;
        //ball.css('left', ball.position().left + distance);
        break;
    case 40:
        dY=0;
        //ball.css('top', ball.position().top + distance);
        break;
    }
});