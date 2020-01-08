$(".block").click(
    function(){
        var color = $(this).css("background-color");
        var border = $(this).css("border");
        var borderRadius = $(this).css("border-radius");
        var content = $(this).text();
        $("#longBar").css("background-color",color);
        $("#longBar").css("border",border);
        $("#longBar").css("border-radius",borderRadius);
        $("#longBar").text(content);
    }
);