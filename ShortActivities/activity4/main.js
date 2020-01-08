$('#sequence').keyup(
    function(){
        var userInput = $(this).val();
        var message;
        if(isZigzag(userInput))
            message = "Sequence is a zigzag."
        else
            message = "Sequence is not a zigzag."
            
        $('#result').text(message);
    }
);

/*
 * Write a function that takes a string of positive integers including zero. The function 
 * returns true if the string is a zigzag. A zigzag is true when both neighboring 
 * numbers of n are either greater than or less than n. A sequence less than three numbers
 * is not a zigzag. You can assume the string is properly formatted.
 */

function isZigzag(sequence){
    if(sequence.length<3)
        return false;
    var isSequence = true;
    var i=1;
    while(i<sequence.length-1 && isSequence){
        var currentNum = parseInt(sequence.charAt(i));
        var prevNum = parseInt(sequence.charAt(i-1));
        var nextNum = parseInt(sequence.charAt(i+1));
        isSequence = prevNum<currentNum && currentNum>nextNum || 
            prevNum>currentNum && currentNum<nextNum;
        i++;
    }
    return isSequence;
}