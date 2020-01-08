var clickedColor;

$(".button").click(
    function(){
        clickedColor = $(this).css("background-color");
        console.log(clickedColor);
        
    }
);

$(".target").click(
    function(){
        $(this).css("background-color",clickedColor)
    }
); 

