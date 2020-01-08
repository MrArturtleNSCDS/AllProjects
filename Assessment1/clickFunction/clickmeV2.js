$(".block").click(
    function(){
        var color = $(this).css("background-color");
        var border = $(this).css("border");
        var content = $(this).text();
        $("#longBar").css('background-color',color);
        $("#longBar").css('border',border);
        $("#longBar").text(content);
    }
);