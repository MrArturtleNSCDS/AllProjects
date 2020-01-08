/*

Challenge 1:

Given a sequence determine if it's an arithmetic progression or not.

Example

For sequence = [1, 4, 7], the output should be
isArithmeticProgression(sequence) = true;

For sequence = [2, 4, 7], the output should be
isArithmeticProgression(sequence) = false.

Input/Output

-[input] array.integer sequence
    -Array of integers representing the sequence.

-Guaranteed constraints:
    -3 ≤ sequence.length ≤ 10,
    -10 ≤ sequence[i] ≤ 10.

-[output] boolean
    -true if sequence is an arithmetic progression, false otherwise.
    
-test cases
    Input: [1, 4, 7]
    Expected Output: true

    Input: [2, 4, 7]
    Expected Output: false
    
    Input: [1, 3, 1]
    Expected Output: false
    
    Input: [-7, -5, -3, -1]
    Expected Output: true
    
    Input: [-10, -5, 0]
    Expected Output: true
    
    Input: [-10, -5, 0, 10]
    Expected Output: false
    
    Input: [-10, -5, 10]
    Expected Output: false
    
    Input: [-10, 0, 10]
    Expected Output: true
    
    Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    Expected Output: true
    
    Input: [7, 5, 3, 1]
    Expected Output: true

*/

function isArithmeticProgression(sequence) {
    var i=0;
    var diff = sequence[i+1] - sequence[i];
    while(i<sequence.length-1){
        var curr = sequence[i];
        var next = sequence[i+1];
        if((next-curr)!==diff)
            return false
        i++;
    }
    return true;
}

/*

Challenge 2:

Given the string, check if it is a palindrome.

Example

For inputString = "aabaa", the output should be
checkPalindrome(inputString) = true;

For inputString = "abac", the output should be
checkPalindrome(inputString) = false;

For inputString = "a", the output should be
checkPalindrome(inputString) = true.


Input/Output

-[input] string inputString
    -A non-empty string consisting of lowercase characters.

-Guaranteed constraints:
    -1 ≤ inputString.length ≤ 105.

-[output] boolean
    -true if inputString is a palindrome, false otherwise.
    
-test cases:
    Input: "aabaa"
    Expected Output: true

    Input: inputString: "abac"
    Expected Output: false
    
    Input: "a"
    Expected Output: true
    
    Input: "az"
    Expected Output: false
    
    Input: "abacaba"
    Expected Output: true
    
    Input: "aaabaaaa"
    Expected Output: false
    
    Input: "zzzazzazz"
    Expected Output: false
    
    Input: "hlbeeykoqqqqokyeeblh"
    Expected Output: true
    
    Input: "hlbeeykoqqqokyeeblh"
    Expected Output: true
 
*/

function checkPalindrome(inputString) {
    var halfString = Math.ceil(inputString.length/2);
    var offset = inputString.length%2===1?-1:0;
    var leftside = inputString.substring(0,halfString);
    var rightside = inputString.substring(halfString+offset);
    
    rightside = rightside.split("");
    rightside = rightside.reverse();
    rightside = rightside.join("");
    
    return leftside == rightside;
}

/*
 
Challenge 3:
 
Given an array of integers, find the pair of adjacent elements that has the largest 
product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.

-Input/Output
    - An array of integers containing at least two elements.

-Guaranteed constraints:
    - 2 ≤ inputArray.length ≤ 10,
    - -1000 ≤ inputArray[i] ≤ 1000.

-[output] integer
    -The largest product of adjacent elements.
    
-test cases
    Input: [3, 6, -2, -5, 7, 3]
    Expected Output: 21
    
    Input: [-1, -2]
    Expected Output: 2
    
    Input: [5, 1, 2, 3, 1, 4]
    Expected Output: 6
    
    Input: [1, 2, 3, 0]
    Expected Output: 6
    
    Input: [9, 5, 10, 2, 24, -1, -48]
    Expected Output: 50
    
    Input: [5, 6, -4, 2, 3, 2, -23]
    Expected Output: 30
    
    Input: [4, 1, 2, 3, 1, 5]
    Expected Output: 6
    
    Input: [-23, 4, -3, 8, -12]
    Expected Output: -12
    
    Input: [1, 0, 1, 0, 1000]
    Expected Output: 0
 
 */

function adjacentElementsProduct(inputArray) {
    var highestProduct = 0;
    var currentProduct = 0;
    
    for(var i=0; i<inputArray.length-1;i++){
        currentProduct = inputArray[i]*inputArray[i+1];
        if(currentProduct>highestProduct || i===0)
            highestProduct = currentProduct;
    }
    return highestProduct;
}

/*

Challenge 4:

Below we will define an n-interesting polygon. Your task is to find the area of a polygon
for a given n.

A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon
is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to 
its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons below.
        
                           *
                  *       ***
          *      ***     *****
     *   ***    *****   *******
          *      ***     *****
                  *       ***
                           *
    n=1  n=2     n=3      n=4



Example

For n = 2, the output should be
shapeArea(n) = 5;

For n = 3, the output should be
shapeArea(n) = 13.

-Input/Output
    - integer n

-Guaranteed constraints:
    -1 ≤ n < 104.

-[output] 
    - integer: The area of the n-interesting polygon.
    
-test cases
    Input: n: 2
    Expected Output: 5
    
    Input: n: 3
    Expected Output: 13
    
    Input:
    n: 1 
    Expected Output: 1
    
    Input: n: 5
    Expected Output: 41
    
    Input: n: 7000
    Expected Output: 97986001
    
    Input: n: 8000
    Expected Output: 127984001
    
    Input: n: 9999
    Expected Output: 199940005
    
    Input: n: 9998
    Expected Output: 199900013
    
    Input: n: 8999
    Expected Output: 161946005
    
    Input: n: 100
    Expected Output: 19801
 */

function shapeArea(n) {
    if(n===1)
        return 1;
    var middleLength = n*2-1;
    var restArea = 0;
    for(var r = middleLength-2; r>0; r-=2)
        restArea += r;
    
    return restArea*2 + middleLength; 
}

/*
Challenge 5
 
Write a function that returns the number of missing values in a sequence.

Example

For array = [6, 2, 3, 8], the output should be
makeArrayConsecutive2(array) = 3.

array needs is missing 4, 5 and 7.

-Input/Output
    - An array of distinct non-negative integers.

-Guaranteed constraints:
    - 1 ≤ array.length ≤ 10,
    - 0 ≤ array[i] ≤ 20.

-[output] integer
    -The minimal number of values that need to be added to existing values
    such that it contains every integer from an interval [L, R] (for some L, R) 
    and no other values.

-test cases    
    Input: [6, 2, 3, 8]
    Expected Output: 3
    
    Input: [0, 3]
    Expected Output: 2
    
    Input: [5, 4, 6]
    Expected Output: 0
    
    Input: [6, 3]
    Expected Output: 2
    
    Input: [1]
    Expected Output: 0
    
    Input: [8, 1, 0, 4, 7]
    Expected Output: 4
    
    Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    Expected Output: 0
 
 */


function makeArrayConsecutive2(array){
    array.sort(function(a, b){return a - b});
    var length = array.length;

    
    var missing = 0;
    
    for(var s=0; s<array.length-1; s++){
        missing += array[s+1]-array[s]-1;
    }
    
    return missing;
}

/*
Challenge 6 
 */

function almostIncreasingSequence(seq) {
    var outOfOrder=0;
    var i=1;
    while(outOfOrder<2 && i<seq.length){
        if(seq[i]<=seq[i-1]) {
            outOfOrder++;
            if(i>1&&seq[i]<=seq[i-2]&&seq[i+1]<=seq[i-1]) 
                outOfOrder++;
        }
        i++;
    }
    return outOfOrder<2;
}