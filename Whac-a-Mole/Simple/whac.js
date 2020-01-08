var platform = $('#platform');
var score = 0;
var scoreDisplay = $('#score');
var jumpsDisplay = $('#jumps');
var jumpsLeft = 30;


var holesString = "<div id='holeInnerWrapper'>";
for(var i=0; i<6; i++){
    holesString += 
        "<div id='hole" + i + "' class='hole'>" +
            "<div id='mole" + i + "' class='mole'></div>" +
        "</div>";
}

holesString +="</div>";

platform.html(holesString);

var firstImage = $('#mole0');
var imgHeight = 100; //firstImage.height();
console.log(firstImage.length, imgHeight);

jumpsDisplay.text(jumpsLeft);
jumps(jumpsLeft);

function jumps(numJumps){
    $('.mole').slideUp();
    if(numJumps>=0){
        jumpsDisplay.text(numJumps);
        var pickedMole = Math.floor(Math.random()*6);
        //TweenMax.to("#mole" + pickedMole,.5,{y:-imgHeight*1.5,repeat:1,yoyo:true,onComplete:jumps,onCompleteParams:[--numJumps]});
        console.log(pickedMole)
        $('#mole' + pickedMole).slideDown();
        setTimeout(function(){ jumps(--numJumps); }, 600);
    }
}

$('.mole').click(
    function(){
        score++;
        scoreDisplay.text(score);
        console.log($('.whacImage',this).length);
        $('.whacImage',this).show().delay(500).fadeOut(10);
    }
);