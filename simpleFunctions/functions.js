$('#myButton').click(
    function(){
        var userName = $('#infoBox').val();
        $('#result1').text('Hello ' + userName);
        $('#result2').text('Now go ' + userName);
    }
);