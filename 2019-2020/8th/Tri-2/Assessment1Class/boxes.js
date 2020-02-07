$("#box1").click(
    function(){
        alert("Hello");
    }
);

$(".color2").click(
    function(){
        var blah = $(this).css("background-color");
        $('#result').css("background-color",blah);
    }
);

$("#box4").click(
    function(){
        var fooh = $(this).css("background-color");
        $('#result').css("background-color",fooh);
        $('#result').text("Good Bye");
    }
);