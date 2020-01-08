var clickedColor;

$(".colorBox").click(
    function(){
        clickedColor = $(this).css("background-color");
    }
)

$('.bigBox').click(
    function(){
        $(this).css("background-color",clickedColor);
    }
);

TweenMax.to(".colorBox",4,{rotation:360,repeat:-1,yoyo:true});

