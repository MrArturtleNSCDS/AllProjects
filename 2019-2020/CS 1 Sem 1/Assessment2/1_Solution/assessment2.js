$('.bigThing').click(
    function(){
        console.log("hello");
        var color = $(this).css('background-color');
        //var content = $(this).text('')
        //$('.bigThing').slideDown();
        $('#display').css('background-color',color);
        $('#display').text(color);
        //$(this).slideUp();
    }
);