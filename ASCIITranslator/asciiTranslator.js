var messageBox = $("#message");
var byteBox = $("#bytes");

$('[userInput]').keyup(
    function(){
        var userInput = $(this).val();
        var id = $(this).attr("id");
        if(id == "bytes"){
            if(areValidBits(userInput)){
                $(this).attr('isValid','1');
                $(this).removeClass('error');
                messageBox.val(convertToMessage(userInput));
            }
            else{
                $(this).attr('isValid','0');
                $(this).addClass('error');
                messageBox.val("");
            }
        }
        else{
            byteBox.val(convertToBytes(userInput));
        }
    }
);

function convertToBytes(message){
    var allBytes = "";
    for(var i=0; i<message.length; i++){
        var currentAscii = message.charCodeAt(i);
        allBytes += normalize(toBinary(currentAscii))        
    }
    return allBytes;
}

function convertToMessage(bitString){
    var bitArray = getBitArray(bitString);
    var messageString = "";
    for(var i=0; i<bitArray.length; i++){
        var asciiCode = toDecimal(bitArray[i]);
        messageString += String.fromCharCode(asciiCode);
    }
    return messageString
}

function getBitArray(bitString){
    var truncBits = bitString.substring(1,bitString.length-1);
    return truncBits.split("][");
}

function areValidBits(allBits){
    var bitArray = getBitArray(allBits);
    var i = 0;
    while(i<bitArray.length){
        console.log(i,bitArray[i]);
        if(!isValidBit(bitArray[i]))
            return false;
        i++;
    }
    return true;
}

function isValidBit(bitInput){
    console.log(bitInput);
    var isLenValid = bitInput.length==8;
    return isLenValid && isValidBinary(bitInput); //GREAT AP QUESTION  vs isValidBinary(bitsClean) && isLenValid
}

function isValidBinary(binaryInput){
    console.log(binaryInput);
    var valid = true;
    var index = 0;
    while(valid && index<binaryInput.length){
        var currentChar = binaryInput.charAt(index);
        if(currentChar != "0" && currentChar != "1")
            valid = false;
        index++;
    }
    console.log(valid);
    return valid;
}

function normalize(binaryNumber){
    var diffInSize = 8 - binaryNumber.length;        // Find difference in length

    for(var i=0; i<diffInSize;i++)                              // Pad second using diffInSize
        binaryNumber =  "0" + binaryNumber;
        
    return binaryNumber;
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