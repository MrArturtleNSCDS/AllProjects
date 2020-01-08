var clickedColor;

$(".colorBox").click(
    function(){
        clickedColor = $(this).css("background-color");
    }
)

$('#bigBox').click(
    function(){
        $(this).css("background-color",clickedColor);
    }
);

$('#littleBox').click(
    function(){
        $(this).css("background-color",clickedColor);
    }
);

TweenMax.to("#bigBox",4,{rotation:360,repeat:-1,yoyo:true});
TweenMax.to("#littleBox",2,{left:50,scale:.5,rotation:-360,repeat:-1,yoyo:true});
TweenMax.to(".colorBox",4,{rotation:360,repeat:-1,yoyo:true});

