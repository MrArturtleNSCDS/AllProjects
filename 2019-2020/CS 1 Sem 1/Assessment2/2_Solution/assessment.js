$(".bigThing").click(
    function(){
        var color = $(this).css("background-color");
        $('#display').css('background-color',color);
        $('#display').text(color);
    }
);