$('#box1').click(
    function(){
        alert("hello!");
    }
);

$('.color2').click(
    function(){
        var myColor = $(this).css('background-color');
        $('#display').css('background-color', myColor);
    }
)

$('#box4').click(
    function(){
        var myColor = $(this).css('background-color');
        $('#display').css('background-color', myColor);
        var randNum = Math.floor(Math.random()*20)+10;
        $('#display').text(randNum);
    }
);