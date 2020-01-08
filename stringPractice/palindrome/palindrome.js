function palindrome1(message){
    console.time('palindrome1');
    message = cleanString(message.toLowerCase());
    var middle = Math.ceil(message.length/2)-1;
    var b = 0;
    var e = message.length-1;
    
    var palindrome = true;
    while(b<=middle && e>=middle && palindrome){
        palindrome = message.charAt(b)==message.charAt(e);
        b++;
        e--;
    }
    console.timeEnd('palindrome1');
    return palindrome;
}

function palindrome2(message){
    console.time('palindrome2');
    message = cleanString(message.toLowerCase());
    var reverseMessage = message.split("").reverse().join("");
    console.timeEnd('palindrome2');
    return reverseMessage === message;
}

function cleanString(message){
    message = message.toLowerCase();
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var cleanMessage = "";
    for(var i=0; i<message.length; i++){
        if(letters.indexOf(message.charAt(i))>=0)
            cleanMessage += message.charAt(i);
    }
    return cleanMessage;
}

var testStrings = 
    [
        "Hannah",
        "Madam In Eden, I'm Adam",
        "Dennis, Nell, Edna, Leon, Nedra, Anita, Rolf, Nora, Alice, Carol, Leo, Jane, Reed, Dena, Dale, Basil, Rae, Penny, Lana, Dave, Denny, Lena, Ida, Bernadette, Ben, Ray, Lila, Nina, Jo, Ira, Mara, Sara, Mario, Jan, Ina, Lily, Arne, Bette, Dan, Reba, Diane, Lynn, Ed, Eva, Dana, Lynne, Pearl, Isabel, Ada, Ned, Dee, Rena, Joel, Lora, Cecil, Aaron, Flora, Tina, Arden, Noel, and Ellen sinned.",
        "Doc, Note: I Dissent. A Fast Never Prevents A Fatness. I Diet On Cod."
    ];

for(var i=0; i<testStrings.length; i++){
    var currentPalindrome = testStrings[i];
    console.log(currentPalindrome);
    console.log(palindrome1(currentPalindrome));
    console.log(palindrome2(currentPalindrome));
}