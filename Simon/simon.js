var totalColors = 4;
var currentNumColor;
var colorPattern;
var clickedPattern;
var numClicks;
var message = $('#message');
var scoreBox = $('#score');
var start = $('#start');
var score;
var active = false;
var clickSound = new Audio();
clickSound.src = 'sounds/switch.mp3';

start.click(
    function(){
        init();
        active = true;
        $(this).fadeOut();
        message.fadeIn();
    }
);

function init(){
    currentNumColor = 0;
    colorPattern = [];
    score = 0;
    scoreBox.text(score);
    pickNextColor();
}

function pickNextColor(){
    currentNumColor++;
    var currentColor = Math.ceil(Math.floor((Math.random() * 400) + 1)/100);
    colorPattern.push(currentColor);
    numClicks = 0;
    console.log(colorPattern);
    lightUpPattern(0);
    clickedPattern = [];
    message.removeClass('on');
    message.text("GO");
}

function lightUpPattern(currentBox){
    var activeBox = $('[box=' + colorPattern[currentBox] + ']');
    turnLightOn(activeBox);
    currentBox++;
    console.log(currentBox + "**" + currentNumColor);
    if(currentBox<currentNumColor){
        //console.log("currentBox:" + currentBox + " currentNumColor:" + currentNumColor);
        setTimeout(
            function(){
                lightUpPattern(currentBox);
            },
            800
        );
    }
    else{
        console.log("adding on");
        message.addClass('on');
    }
}

function turnLightOn(box){
    console.log('changing color');
    box.addClass('selected');
    clickSound.currentTime = 0;
    clickSound.play();
    setTimeout(
        function(){
            box.removeClass('selected')
            //console.log('changed back');
        },
        400);
}

function isArrayEqual(arr1,arr2){
    var isEqual = true;
    var i = 0;
    while(isEqual && i<arr1.length){
        isEqual = arr1[i] == arr2[i];
        i++;
    }
    return isEqual;
}

$('.box').click(
    function(){
        if(active){
            numClicks++;
            clickedPattern.push(parseInt($(this).attr('box')));
            
            var clickedBox = $(this);
            turnLightOn(clickedBox);
            console.log(clickedPattern + "||" + numClicks + "||" + currentNumColor);
            if(numClicks===currentNumColor){
                if(isArrayEqual(clickedPattern,colorPattern)){
                    score += numClicks;
                    scoreBox.text(score);
                    setTimeout(
                        function(){
                            pickNextColor();
                        },
                        1500
                    );
                }
                else{
                    console.log("Game Over");
                    message.text("Game Over");
                    active = false;
                    start.fadeIn();
                }
            }
        }

    }
);