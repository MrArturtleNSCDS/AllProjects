$('#toDecimal').click(
    function(){
        var exponent=0;
        var decimal = 0;
        var binaryNumber = $('#userNumber').val();
        for(var c=binaryNumber.length-1; c>=0; c--){
            var currentDigit = parseInt(binaryNumber.charAt(c));
            decimal += Math.pow(2,exponent)*currentDigit;
            exponent++;
        }
        $('#resultBox').text(decimal);
    }
);

$('#toBinary').click(
    function(){
        var binary = "";
        var decimalNumber = parseInt($('#userNumber').val());
        while(decimalNumber>0){
            var remainder = decimalNumber%2;
            binary = remainder + binary;
            decimalNumber = parseInt(decimalNumber/2);
        }  
        $('#resultBox').text(binary);
    }
);

$('#binaryInput').keyup(
    function(){
        $('#decimalInput').removeClass('error');
        var binaryInput = $('#binaryInput').val();
        
        var valid = true;
        var index = 0;
        while(valid && index<binaryInput.length){
            var currentChar = binaryInput.charAt(index);
            if(currentChar != "0" && currentChar != "1")
                valid = false;
            index++;
        }
        
        if(valid){
            var exponent=0;
            var decimal = 0;
            for(var c=binaryInput.length-1; c>=0; c--){
                var currentDigit = parseInt(binaryInput.charAt(c));
                decimal += Math.pow(2,exponent)*currentDigit;
                exponent++;
            }
            $('#decimalInput').val(decimal);
        }
        else{
            $('#decimalInput').val("not a valid binary");
            $('#decimalInput').addClass('error');
        }
    }
);

$('#decimalInput').keyup(
    function(){
        $('#decimalInput').removeClass('error');
        
        var binary = "";
        var decimalNumber = parseInt($('#decimalInput').val());
        while(decimalNumber>0){
            var remainder = decimalNumber%2;
            binary = remainder + binary;
            decimalNumber = parseInt(decimalNumber/2);
        }  
        $('#binaryInput').val(binary);
    }
);