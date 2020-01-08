$('#toDecimal').click(
    function(){
        var decimal = toDecimal($('#userNumber').val());
        $('#resultBox').text(decimal);
    }
);

$('#toBinary').click(
    function(){
        var binary = toBinary(parseInt($('#userNumber').val()));    
        $('#resultBox').text(binary);
    }
);

$('#binaryInput').keyup(
    function(){
        $('#decimalInput').removeClass('error');
        var binaryInput = $('#binaryInput').val();
        
        if(isValidBinary(binaryInput)){
            var decimal = toDecimal(binaryInput);
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
        var decimal = toBinary($('#decimalInput').val());
        $('#binaryInput').val(decimal);
    }
);

function toDecimal(binaryNumber){
    var exponent=0;
    var decimal = 0;
    for(var c=binaryNumber.length-1; c>=0; c--){
        var currentDigit = parseInt(binaryNumber.charAt(c));
        decimal += Math.pow(2,exponent)*currentDigit;
        exponent++;
    }
    return decimal;
}

function toBinary(decimalNumber){
    var binary = "";
    while(decimalNumber>0){
        var remainder = decimalNumber%2;
        binary = remainder + binary;
        decimalNumber = parseInt(decimalNumber/2);
    }
    return binary;
}

function isValidBinary(binaryInput){
    var valid = true;
    var index = 0;
    while(valid && index<binaryInput.length){
        var currentChar = binaryInput.charAt(index);
        if(currentChar != "0" && currentChar != "1")
            valid = false;
        index++;
    }
    return valid;
}