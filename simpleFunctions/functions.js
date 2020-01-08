$('#myButton').click(
    function(){
        var userInput = $('#infoBox').val();
        var userInput2 = $('#infoBox2').val();
        $('#result').text("Hello " + userInput + " : " + userInput2 + "! How are you?");
        var color = 
        $('body').css("background-color",color);
    }
);