init();

function init(){
    for(var r=0; r<10; r++)
        for(var c=0; c<4; c++){
            var color = (r+c)%2===0?' black': ' white';
            $('#finishLine').append("<div class='checker " + color + "'></div>");
        }
    startRace();
}


var winAudio = new Audio();
winAudio.src = 'music.mp3';

var backMusic = new Audio();
backMusic.src = 'HaydnCelloConcerto.mp3';
backMusic.play();


function startRace(){    
    TweenMax.to("#car1",2,{x:520, rotation:-20, ease:Sine.easeOut});
    TweenMax.to("#car1",1.5,{x:500, rotation:-90, y:-320,delay:1.7, ease:Sine.easeOut});
    TweenMax.to("#car1",2,{x:-50, y:-300, rotation:-195, delay:3, ease:Sine.easeOut});
    TweenMax.to("#car1",1.5,{x:-100, rotation:-270, y:-300, delay:4.3, ease:Sine.easeOut});
    TweenMax.to("#car1",1.5,{x:-100, rotation:-360, y:0, delay:5.0, ease:Sine.easeOut});
    TweenMax.to("#car1",1.5,{x:500, y:0, delay:6.3, ease:Sine.easeOut,onComplete:playMusic});
   
    /*TweenMax.to("#car2",1.5,{x:520, rotation:-20, ease:Sine.easeOut});
    TweenMax.to("#car2",1.5,{x:500, rotation:-90, y:-320,delay:2, ease:Sine.easeOut});
    TweenMax.to("#car2",2,{x:-50, rotation:-195, y:-300,delay:3.3, ease:Sine.easeOut});
    TweenMax.to("#car2",1.5,{x:-100, rotation:-270, y:-300, delay:4.6, ease:Sine.easeOut});
    TweenMax.to("#car2",1.5,{x:-100, rotation:-360, y:0, delay:5.3, ease:Sine.easeOut});
    TweenMax.to("#car2",1.5,{x:500, y:0, delay:6.6, ease:Sine.easeOut});
   
    TweenMax.to("#car3",2,{x:520, rotation:-200, ease:Sine.easeOut});
    TweenMax.to("#car3",1.5,{x:500, rotation:-290, y:-320,delay:2.8, ease:Sine.easeOut, rotate:90, repeat:0,});
    TweenMax.to("#car3",2,{x:-50, rotation:-350, y:-300,delay:3.6, ease:Sine.easeOut, rotate:90, repeat:0,});
    TweenMax.to("#car3",1.5,{x:-100, rotation:-440, y:-300, delay:4.9, ease:Sine.easeOut, rotate:90, repeat:0,});
    TweenMax.to("#car3",1.5,{x:-100, rotation:-540, y:0, delay:5.7, ease:Sine.easeOut, rotate:90, repeat:0,});
    TweenMax.to("#car3",1.5,{x:500, y:0, delay:6.9, ease:Sine.easeOut, rotate:90, repeat:0, onComplete:playMusic});*/
}

function playMusic(){
    backMusic.pause();
    winAudio.play();
}