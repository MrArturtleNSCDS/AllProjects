function reverse(message){
    var reverseString = "";
    for(var i=message.length-1; i>=0; i--){
        reverseString += message.chartAt(i);
    }
    return reverseString;
}