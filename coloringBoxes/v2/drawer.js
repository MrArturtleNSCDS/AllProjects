//v2

var clickedColor;

$(".colorBox").click(
    function(){
        clickedColor = $(this).css("background-color");
    }
)

$('.pixel').click(
    function(){
        $(this).css("background-color",clickedColor);
    }
);

TweenMax.to(".colorBox",4,{rotation:360,borderRadius:"45%", repeat:-1,yoyo:true});

