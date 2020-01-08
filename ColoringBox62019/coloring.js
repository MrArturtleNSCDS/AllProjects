var color;

$(".color").click(
    function(){
        color = $(this).css("background-color");
    }
);

$(".target").click(
    function(){
        $(this).css("background-color",color);
    }
);

