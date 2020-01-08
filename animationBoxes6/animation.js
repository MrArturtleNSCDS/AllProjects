TweenMax.to(".big",4,{rotation:360,repeat:-1});
TweenMax.to(".small",4,{rotation:-360,repeat:-1});
TweenMax.to("#smallBox",2,{rotation:-360,repeat:-1});
TweenMax.to("#bigBox",4,{rotation:360,repeat:-1});

$(".colorBox").click(
    function(){
        var clickedColor = $(this).css("background-color");
        if($(this).hasClass("big"))
            $("#bigBox").css("background-color", clickedColor);
        else
            $("#smallBox").css("background-color", clickedColor);
    }
);