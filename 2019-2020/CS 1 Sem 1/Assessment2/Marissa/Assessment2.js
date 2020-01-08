$(".bigThing").click(
    function(){
        var color = $(this).css("background-color");
        console.log(color);
        $('#display').css("background-color",color);
        $('#display').text(color);
    }
);