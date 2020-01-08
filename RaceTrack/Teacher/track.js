var currImage;

init();

$('button').click(
    function(){
        startRace();
    }
);


$('select').change(
    function(){
        var color = $(this).val();
        var car = $(this).attr("car");
        console.log(color + " " + car);
        $('#' + car).css("background-image","url(images/" + color + "Racer.png)");
    }
)

function init(){
    for(var r=0; r<9; r++)
        for(var c=0; c<4; c++){
            var color = (r+c)%2===0?' black': ' white';
            $('#finishLine').append("<div class='checker " + color + "'></div>");
        }
    preloadImages();
}

function preloadImages(){
    var imageArray = ['blue','green','orange','purple','red'];
    for(var i=0; i<imageArray.length; i++){
        currImage = new Image();
        currImage.src = 'images/' + imageArray[i] + 'Racer.png';
        
        console.log("currImage:" + currImage.src);
    }
}

function startRace(){
    startCar1();
    startCar2();
}

function startCar1(){
    TweenMax.to("#car1",3,{x:530,ease:SlowMo.easeInOut});
    TweenMax.to("#car1",1.5,{rotation:-90,delay:1.5,ease:SlowMo.easeInOut});
    
    TweenMax.to("#car1",3,{y:-280,delay:1.8, ease:Sine.easeInOut});
    TweenMax.to("#car1",1.5,{rotation:-180,delay:3.5,ease:SlowMo.easeInOut});
    
    TweenMax.to("#car1",3.5,{x:-110,delay:3.8, ease:Sine.easeInOut});
    TweenMax.to("#car1",1.5,{rotation:-270,delay:5.5,ease:SlowMo.easeInOut});
    
    TweenMax.to("#car1",3,{y:40 ,delay:6.5, ease:Sine.easeInOut});
    TweenMax.to("#car1",1.5,{rotation:-360,delay:8,ease:SlowMo.easeInOut});
    
    TweenMax.to("#car1",2.6,{x:250, delay:9, ease:Sine.easeInOut});
    TweenMax.to("#car1",0,{rotation:0, delay:10});
}

function startCar2(){
    TweenMax.to("#car2",3.5,{x:550,ease:SlowMo.easeInOut});
    TweenMax.to("#car2",2,{rotation:-90,delay:2,ease:SlowMo.easeInOut});
    
    TweenMax.to("#car2",3.5,{y:-290,delay:2, ease:Sine.easeInOut});
    TweenMax.to("#car2",1.5,{rotation:-180,delay:4.4,ease:SlowMo.easeInOut});
    
    TweenMax.to("#car2",3.5,{x:-80,delay:4.5, ease:Sine.easeInOut});
    TweenMax.to("#car2",1.5,{rotation:-270,delay:7.3,ease:SlowMo.easeInOut});
    
    TweenMax.to("#car2",3,{y:-40 ,delay:7.3, ease:Sine.easeInOut});
    TweenMax.to("#car2",1.5,{rotation:-360,delay:8.5,ease:SlowMo.easeInOut});
    
    TweenMax.to("#car2",2,{x:250, delay:9.3, ease:Sine.easeInOut});
    TweenMax.to("#car2",0,{rotation:0, delay:10});
}