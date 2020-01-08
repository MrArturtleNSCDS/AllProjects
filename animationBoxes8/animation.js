TweenMax.to("#bigBox",4,{rotation:360,repeat:-1,yoyo:true});
TweenMax.to("#smallBox",2,
    {x:10,y:10,height:"400px",width:"20px",rotation:-360,
    border:"4px solid olive",scale:.5,repeat:-1,yoyo:true});
//TweenMax.to("#buttonWrapper",2,{rotation:360,repeat:-1});
TweenMax.to(".inside",2,{rotation:-360,repeat:-1});
TweenMax.to(".outside",2,{rotation:360,repeat:-1});

var clickColor;
$(".colorButton").click(
    function(){
        //get the color of the box that was clicked
        clickColor = $(this).css("background-color");
        console.log(clickColor);
        
        if($(this).hasClass("outside"))
            $("#bigBox").css("background-color",clickColor);
        else
            $("#smallBox").css("background-color",clickColor);
    }
);