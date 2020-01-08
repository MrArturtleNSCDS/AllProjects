/*eslint-env jquery */
$('#myButton').click(
    function(){
        var x = $('#lowNum').val();
        var numX = parseInt(x);
        
        if(numX % 2==0)
            $('#result').text("even");
        else
            $('#result').text("odd");
    }
);