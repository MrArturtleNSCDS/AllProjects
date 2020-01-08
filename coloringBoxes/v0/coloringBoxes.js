$("#color1").click(
    function(){
        var color = $(this).css("background-color");
        $("body").css("background-color",color)
    }
);