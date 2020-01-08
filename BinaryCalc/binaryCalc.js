$('input').keyup(
    function(){
        var binary = $(this).val();
        if(isValidBinary(binary)){
            $(this).attr('isValid','1');
            $(this).removeClass('error');
        }
        else{
            $(this).attr('isValid','0');
            $(this).addClass('error');
            $('#resultBinary').text("");
        }
        addBinaries();
        displayDecimals();
    }
);

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

function addBinaries(){
    if($('#firstBinary').attr('isValid') == '1' && $('#secondBinary').attr('isValid') == '1'){
        var firstBinary = $('#firstBinary').val();
        var secondBinary = $('#secondBinary').val();
        binaryAdder(firstBinary, secondBinary);
    }
}

function binaryAdder(first,second){
    var normalizedNums = normalize(first,second);
    
    first = normalizedNums[0];
    second = normalizedNums[1];
    
    var index=first.length-1;                           // Start from the right
    var result="";
    var carry=false;
    
    while(index>=0){
        var firstBinaryChar=first.charAt(index);
        var secondBinaryChar=second.charAt(index);
        
        if(firstBinaryChar=="0" && secondBinaryChar=="0"){
            if(!carry)
                result = "0" + result;
            else
                result = "1" + result;
            carry = false;
        }
        else if(firstBinaryChar=="0"&&secondBinaryChar=="1" ||
                    firstBinaryChar=="1"&&secondBinaryChar=="0"){
            if(!carry){
                result = "1" + result;
                carry=false;
            }
            else{
                result = "0" + result;
                carry=true;
            }
        }
        else{
            if(!carry)
                result = "0" + result;
            else
                result = "1" + result;
            carry=true;
        }
        index--;
    }
    
    if(carry)
        result = "1" + result;

    $('#resultBinary').text(result);
}

function normalize(firstNum, secondNum){
    if(firstNum.length<secondNum.length){                       // Make sure first is longer than second
        var temp = firstNum;
        firstNum = secondNum;
        secondNum = temp;
    }
    
    var diffInSize = firstNum.length - secondNum.length;        // Find difference in length

    for(var i=0; i<diffInSize;i++)                              // Pad second using diffInSize
        secondNum =  "0" + secondNum;
        
    return [firstNum,secondNum];
}

function displayDecimals(){
    var firstBinary = $('#firstBinary').val();
    var secondBinary = $('#secondBinary').val();
    var resultBinary = $('#resultBinary').text();
    
    $('#firstDecimal').text(toDecimal(firstBinary));
    $('#secondDecimal').text(toDecimal(secondBinary));
    $('#resultDecimal').text(toDecimal(resultBinary));
}

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