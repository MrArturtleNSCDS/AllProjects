//Use these arrays in the activities below.

var numArray1 = [1,4,3,2,5,2,6,1,7,6,8,9];
var numArray2 = [4,3,6,2,1,3,4,7,8,3,9,1];
var numArrayOdd = [];
var numArrayEven = [];
var numArrayMult3 = [];
var numArraySum = [];

/*
 * The lines below append the first 3 numbers from numArray1 to firstExample. The
 * number between the [] is called the array index. What do you notice about its
 * starting value?
 */

$('#firstExample').append(numArray1[0]);
$('#firstExample').append(numArray1[1]);
$('#firstExample').append(numArray1[2]);

//Write code below to append the last 3 numbers from numArray1 to firstActivity
$('#firstActivity').append(numArray1[9]);
$('#firstActivity').append(numArray1[10]);
$('#firstActivity').append(numArray1[11]);

/*
 * Write code below to append only the odd index values from numArray1 followed by only
 * the even index values from numArray2. Append all to secondActivity. Your result should
 * look like this 422169461489
 */

$('#secondActivity').append(numArray1[1]);
$('#secondActivity').append(numArray1[3]);
$('#secondActivity').append(numArray1[5]);
$('#secondActivity').append(numArray1[7]);
$('#secondActivity').append(numArray1[9]);
$('#secondActivity').append(numArray1[11]);
$('#secondActivity').append(numArray2[0]);
$('#secondActivity').append(numArray2[2]);
$('#secondActivity').append(numArray2[4]);
$('#secondActivity').append(numArray2[6]);
$('#secondActivity').append(numArray2[8]);
$('#secondActivity').append(numArray2[10]);

/*
 * Write code below to append from numArray1 and numArray2 alternating between the two.
 * Meaning, the first item of numArray1 should be followed by the first item of numArray2,
 * then the second item of numArray2 and so on. Append to thirdActivity. Your result 
 * should look like this 144336225123641778638991
 */

$('#thirdActivity').append(numArray1[0]);
$('#thirdActivity').append(numArray2[0]);
$('#thirdActivity').append(numArray1[1]);
$('#thirdActivity').append(numArray2[1]);
$('#thirdActivity').append(numArray1[2]);
$('#thirdActivity').append(numArray2[2]);
$('#thirdActivity').append(numArray1[3]);
$('#thirdActivity').append(numArray2[3]);
$('#thirdActivity').append(numArray1[4]);
$('#thirdActivity').append(numArray2[4]);
$('#thirdActivity').append(numArray1[5]);
$('#thirdActivity').append(numArray2[5]);
$('#thirdActivity').append(numArray1[6]);
$('#thirdActivity').append(numArray2[6]);
$('#thirdActivity').append(numArray1[7]);
$('#thirdActivity').append(numArray2[7]);
$('#thirdActivity').append(numArray1[8]);
$('#thirdActivity').append(numArray2[8]);
$('#thirdActivity').append(numArray1[9]);
$('#thirdActivity').append(numArray2[9]);
$('#thirdActivity').append(numArray1[10]);
$('#thirdActivity').append(numArray2[10]);
$('#thirdActivity').append(numArray1[11]);
$('#thirdActivity').append(numArray2[11]);

/*
 * Notice how many lines of code you needed to accomplish the last activity. To help
 * write code more efficiently, let's put our for loops to work. The code below appends
 * all the items of numArray1 to fourthExample. Note the starting and ending value of i
 * in relation to the order of the items you are appending.
 */

for(var i=0; i<numArray1.length; i++){
    $('#fourthExample').append(numArray1[i]);
}

//Write code below that appends all items from numArray2 to fourthActivity

for(var i=0; i<numArray2.length; i++){
    $('#fourthActivity').append(numArray2[i]);
}

/*
 * Write code below that appends all items from numArray2 in reverse order. What should 
 * i starting value be? What about it's ending value? BECAREFUL of infinite loops!!!!!
 * Append to fifthActivity.
 */

for(var i=numArray2.length-1; i>=0; i--){
    $('#fifthActivity').append(numArray2[i]);
}

/*
 * Write code below that will append the numbers in the same way as activity 3, but
 * this time using a for loop. As in activity 3, your result should look like this 
 * 144336225123641778638991. Append to sixthActivity
 */

for(var i=0; i<numArray1.length; i++){
    $('#sixthActivity').append(numArray1[i]);
    $('#sixthActivity').append(numArray2[i]);
}

/*
 * The code below pushes odd numbers less than 20 into numArray3, then uses a loop 
 * to append to seventhExample. Note that each number is separated by brackets.
 */

for(var i=1; i<20; i+=2){
    numArrayOdd.push(i);
}

for(var i=0; i<numArrayOdd.length; i++){
    $('#seventhExample').append("[" + numArrayOdd[i] + "]");
}

/*
 * Write code that pushes even numbers less than or equal to 30 into numArray3, then 
 * use a loop to append to seventhActivity. Seperate each number is separated by 
 * parenthesis.
 */

for(var i=2; i<30; i+=2){
    numArrayEven.push(i);
}

for(var i=0; i<numArrayEven.length; i++){
    $('#seventhActivity').append("(" + numArrayEven[i] + ")");
}

/*
 * Write code below that pushes multiples of 3 from 3 to and including 36 into 
 * numArrayMult3. Use a loop to append to eighthActivity and separate each number
 * by parenthesis.
 */

for(var i=3; i<=36; i+=3){
    numArrayMult3.push(i);
}

for(var i=0; i<numArrayMult3.length; i++){
    $('#eighthActivity').append("(" + numArrayMult3[i] + ")");
}


/*
 * Write code below that takes each number from numArray1 and its corresponding
 * number in numArray2 and pushes the sum of the two to numArraySum. Use a loop 
 * to append numArraySum to ninthActivity and separate each number by parenthesis.
 */

for(var i=0; i<=36; i+=3){
    numArrayMult3.push(i);
}

for(var i=0; i<numArrayMult3.length; i++){
    $('#eighthActivity').append("(" + numArrayMult3[i] + ")");
}





