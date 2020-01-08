$(".box").click(
    function(){
        var color = $(this).css('background-color');
        console.log(color);
        $('body').css('background-color',color);
    }
);


