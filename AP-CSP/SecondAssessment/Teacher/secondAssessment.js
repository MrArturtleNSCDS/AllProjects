/*
 * Problem 1a:
 * 
 * Use the algorithm below to simulate the results of flipping a coin 4 times. Consider
 * the goal of determining whether the simulation resulted in an equal number of heads and tails. 
 * The randomNumber function has been defined for your use.
 * 
 *  Step 1 : Initialize the variables headsCounter and flipCounter to 0.
 *  Step 2 : A variable coinFlip is randomly assigned a value of either 0 or 1.
 *              	If coinFlip has the value 0, the coin flip result is heads, so 
 *                  headsCounter is incremented by 1.
 *  Step 3 : Increment the value of flipCounter by 1.
 *  Step 4 : Repeat steps 2 and 3 until flipCounter equals 4.
 */

var headsCounter = 0;
var flipCounter = 0;

while(flipCounter < 4){
    var coinFlip = randomNumber(0,1);
    console.log(coinFlip);
    if(coinFlip === 0)
        headsCounter++;
    flipCounter++;
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1+max-min)) + min;
}

/*
 * Problem 1b:
 * 
 * Fill in the missing statements so that the write message is displayed depending on the number
 * of heads and tails flipped.
 */

if(headsCounter == 2)
    console.log("Equal Heads and Tails")
else if(headsCounter <2)
    console.log("More Tails");
else
    console.log("More Heads");


/*
 * Problem 2a:
 * 
 * Fix the function below so that the loop returns the occurrences of a given 
 * letter. If the given letter is not found, the function should return -1. 
 * countCharNoCase is case insensitive.
 * 
 */

var message = "Happy Friday! Hope you have a great weekend!"

console.log('z',countCharNoCase('z', message)); //displays -1
console.log('a',countCharNoCase('a', message)); //displays 5
console.log('e',countCharNoCase('e', message)); //displays 6
console.log('h',countCharNoCase('h', message)); //displays 1
console.log('H',countCharNoCase('H', message)); //displays 2

function countCharNoCase(letter, givenString){
    var total = -1;
    
    for(var i=0; i<givenString.length; i++){
        if(givenString.charAt(i)==letter)
            total++
    }
    
    return total;
}


/*
 * Problem 2b:
 * 
 * Change the function so that it is case insensitive
 */


console.log(message);
console.log('z',countCharCase('z', message)); //displays -1
console.log('a',countCharCase('a', message)); //displays 5
console.log('e',countCharCase('e', message)); //displays 6
console.log('h',countCharCase('h', message)); //displays 3
console.log('H',countCharCase('H', message)); //displays 3
console.log("_____________")

function countCharCase(letter, givenString){
    var total = 0;
    
    var letter = letter.toLowerCase();
    var givenString = givenString.toLowerCase();
    
    for(var i=0; i<givenString.length; i++){
        if(givenString.charAt(i)==letter)
            total++
    }
    
    if(total === 0)
        return -1;
    return total;
}

/*
 * Use the following two arrays for problems 3a and 3b.
 */

var superHeroesV1 = ["Iron Man","Captain America","Wonder Woman","Cat Woman","Jessica Jones"];
var heights = [72,68,72,66,76];

/*
 * Problem 3a:
 * 
 * Having the information in two arrays is problematic because we have to access two different 
 * places to get info on one character. Write mergeInfo which takes two source arrays and merges
 * each corresponding spot of array1 and array2, and returns a new array.
 */

var superHeroesV2 = mergeInfo(superHeroesV1, heights);

console.log(superHeroesV2); 
    //displays ["Iron Man 72", "Captain America 68", "Wonder Woman 72", "Cat Woman 66", "Jessica Jones 76"]

function mergeInfo(array1, array2){
    var targetArray = [];
    
    for(var i=0; i<array1.length; i++){
        targetArray.push(array1[i] + " " + array2[i]);
    }
    
    return targetArray;
}

/*
 * Problem 3b:
 * 
 * superHeroesV2 is a slight improvement since now we only need to access one array, but we lose 
 * the ability to get each piece of info separately if needed. Write makeObjectArray which takes 
 * two source arrays and merges each corresponding spot of array1 and array2, and returns a new 
 * array. However, this time instead of creating a new string to push, you are creating an object.
 * The object you are pushing should have the following syntax: 
 * {name:array1[i],height:array2[i]}
 */

var superHeroesV3 = makeObjectArray(superHeroesV1, heights);

console.log(superHeroesV3[1].name,superHeroesV3[1].height); //displays Captain America 68
console.log(superHeroesV3[3].name,superHeroesV3[3].height); //displays Cat Woman 66 

function makeObjectArray(array1, array2){
    var targetArray = [];
    
    for(var i=0; i<array1.length; i++){
        targetArray.push({name:array1[i],height:array2[i]});
    }
    
    return targetArray;
}

/*
 * Problem 4a:
 * 
 * Write the function whichComic, which takes the name of a character an returns "DC Comics","Marvel Comics",
 * or "Don't Know". The function is case sensitive.
 */

var dcHeroes = 
    ['Flash', 'Superman', 'Supergirl', 'Batman', 'Batgirl', 'Green Arrow', 'Black Canary',
    'Wonder Woman', 'Aquaman', 'Catwoman', 'Firestorm', 'Batwoman', 'Green Lantern'];
    
var marvelHeroes = 
    ['Wolverine', 'Spider-Man', 'Thor', 'Iron Man', 'Hulk', 'Captain America',
    'Daredevil', 'Punisher', 'Black Widow', 'Hawkeye', 'Ant-Man', 'Doctor Strange',
    'Black Panther', 'Captain Marvel','Iron Fist', 'Daredevil'];

console.log(whichComic('Flash'));       //displays DC Comics
console.log(whichComic('flash'));       //displays Don't Know
console.log(whichComic('Hulk'));        //displays Marvel Comics
console.log(whichComic('Spy kids'));    //displays Don't Know

function whichComic(hero){
    if(dcHeroes.indexOf(hero)>=0)
        return "DC Comics";
    if(marvelHeroes.indexOf(hero)>=0)
        return "Marvel Comics";
    return "Don't know";
}

/*
 * Problem 4b:
 * 
 * The function as written is case sensitive. What would you change to make it case insensitive? Write the pseudocode below.
 * 
 * 
 */



/*
 * Problem 5a;
 * 
 * Write the function stringVal which takes a string of integers and returns the sum of all the 
 * integers in the string. You can assume every character of the string is a valid integer.
 * 
 */

console.log(stringVal("12345"));    //displays 15
console.log(stringVal("5478902"))   //displays 35

function stringVal(string){
    var sum = 0;
    for(var i=0; i<string.length; i++){
        sum += parseInt(string.charAt(i));
    }
    return sum;
}

/*
 * Problem 5b:
 * 
 * How would you change the function so that it ignored anything that was not an integer. Write the pseudocode below.
 * 
 * 
 */

