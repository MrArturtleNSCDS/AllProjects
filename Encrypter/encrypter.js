function encFancy(message,key,needEnc){
    var letters = "abcdefghijklmnopqrstuvwxyz";
    message = message.toLowerCase();
    var newMessage = "";
    for(var i=0; i<message.length;i++){
        var currLetter = message.charAt(i);
        var index = letters.indexOf(currLetter);
        if(index>=0){
            if(needEnc)
                index = (index+key[i%key.length])%letters.length;
            else
                index = (index + (letters.length-key[i%key.length]))%letters.length;
            currLetter = letters.charAt(index);
        }
        newMessage += currLetter;
    }
    return newMessage;
}

var encrypted = encFancy("hello","turtlesarereallyfast",true);
console.log(encrypted);

var key = [3,2];
var message = "hello how are you? Good?";

var encodedMessage = encFancy(message,key,true);
var decodedMessage = encFancy(encodedMessage,key,false);

console.log(encodedMessage);
console.log(decodedMessage);

 
 /*function encFancy(message,cookie,needEnc){
    var letters = "abcdefghijklmnopqrstuvwxyz";
    //console.log(key.length);
    var len = cookie.length;
    message = message.toLowerCase();
    var newMessage = "";
    for(var i=0; i<message.length;i++){
        var currLetter = message.charAt(i);
        var index = letters.indexOf(currLetter);
        if(index>=0){
            var cookieLetter = cookie.charAt(i%len);
            var key = letters.indexOf(cookieLetter);
            if(needEnc)
                index = (index+key)%letters.length;
            else
                index = (index + (letters.length-key))%letters.length;
            currLetter = letters.charAt(index);
        }
        newMessage += currLetter;
    }
    return newMessage;
}
var key = [3,2,5];
//var cookie = "baxvhuwhaxkbmaubvxqaloqswmhaad";
//var cookie = ""
var message = "North Shore Country Day School"

var encodedMessage = encFancy(message,cookie,true);
var decodedMessage = encFancy(encodedMessage,cookie,false);

console.log(encodedMessage);
console.log(decodedMessage);*/


 


