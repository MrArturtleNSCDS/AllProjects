var platform = $('#platform');
var score = 0;
var scoreDisplay = $('#score');
var jumpsDisplay = $('#jumps');
var jumpsLeft = 30;


var holesString = "<div id='holeInnerWrapper'>";
for(var i=0; i<6; i++){
    holesString += 
        "<div id='hole" + i + "' class='hole'>" +
            "<img class='holeTop holePart' src='img/holeTop.png' draggable='false'>" +
            "<div class='holeColor'></div>" +
            "<div id='mole" + i + "' class='mole'>" +
                "<img class='whacImage' src='img/whack.png' draggable='false'>" +
                "<img class='moleImage' src='img/mole.png' draggable='false'>" +
            "</div>" +
            "<img class='holeBottom holePart' src='img/holeBottom.png' draggable='false'>" +
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
    if(numJumps>=0){
        jumpsDisplay.text(numJumps);
        var pickedMole = Math.floor(Math.random()*6);
        TweenMax.to("#mole" + pickedMole,.5,{y:-imgHeight*1.5,repeat:1,yoyo:true,onComplete:jumps,onCompleteParams:[--numJumps]});
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

/*var mouseX = 0, mouseY = 0;
//var $xp = 0, $yp =0;
var mallet = $('#mallet');

$('#playArea').mousemove(function(e){
    mouseX = e.pageX - $(this).offset().left;
    mouseY = e.pageY - $(this).offset().top - 50;
    mallet.css({left:mouseX +'px', top:mouseY +'px'});
    console.log(mouseX,this.offsetLeft,mouseY);
});*/