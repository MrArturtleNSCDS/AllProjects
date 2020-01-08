$('.box').click(
    function(){
        var color = $(this).css("background-color");
        $(this).css("opacity",.5);
        console.log(color);
        $('.box').slideDown();
        //$('body').css("background-color",color);
        $(this).slideUp();
    }
);
