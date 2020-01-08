$(".bigThing").click(
    function(){console.log("hi");
        var color = $(this).css("background-color");
        $('#display').css("background-color",color);
        $('#display').text(color);
    }
);