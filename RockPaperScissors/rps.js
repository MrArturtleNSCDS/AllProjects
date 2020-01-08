var userChoice;
var cpuChoice;
var robot = $('#cpu');
var modalWrapper = $('#modalWrapper');
var modal = $('#modal');
var choicesWrapper = $('#choicesWrapper');
var winner = ["It's a tie!","I win!!", "You win!!"];
var choices = $('[choice]');
var clickable = true;

preloadImages();

choices.click(
    function(){
        if(clickable){
            userChoice = parseInt($(this).attr("choice"));
            choices.addClass("faded");
            setTimeout(function(){cpuTurn();},500);
            clickable = false;
        }
    }
);

function cpuTurn(){
    cpuChoice = Math.floor(Math.random()*3);
    console.log(cpuChoice);
    robot.css('background-image','url(images/robotArm' + cpuChoice + '.png)');
    setTimeout(function(){displayWinner();},500);
}

function displayWinner(){
    var winnerMessage = winner[checkWinner()];
    modal.text(winnerMessage);
    modalWrapper.fadeIn();
    setTimeout(
        function(){
            robot.css('background-image','url(images/robotArm_.png)');
            modalWrapper.fadeOut();
            choices.removeClass("faded");
            clickable=true;
        },
        2000
    );
}

function checkWinner(){
    if(userChoice===cpuChoice)
        return 0;
    if((userChoice+1)%3 === cpuChoice)
        return 1;
    return 2;
}

function preloadImages(){
    var imageArray = ['_','0','1','2'];
    for(var i=0; i<imageArray.length; i++){
        currImage = new Image();
        currImage.src = 'images/robotArm' + imageArray[i] + '.png';
        console.log("currImage:" + currImage.src);
        $('#preloader').append("<img src='" + currImage.src + "'>");
    }
    //$('#preloader').remove();
}
