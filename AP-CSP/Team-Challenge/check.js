//test cases
const challenge1 = [
    {input:[1, 4, 7],expected:true},
    {input:[2, 4, 7],expected:false},
    {input:[1, 3, 1], expected:false},
    {input:[-7, -5, -3, -1], expected:true},
    {input:[-10, -5, 0], expected:true},
    {input:[-10, -5, 0, 10], expected:false},
    {input:[-10, -5, 10], expected:false},
    {input:[-10, 0, 10], expected:true},
    {input:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], expected:true},
    {input:[7, 5, 3, 1], expected:true}
];

console.log("challenge 1")

for(var i=0; i<challenge1.length; i++){
    var input = challenge1[i].input;
    var result = isArithmeticProgression(challenge1[i].input);
    var expected = challenge1[i].expected;
    if(result==expected)
        console.log("Good");
    else
        console.log("input:",input," result:",result," expected:",expected);
}

//test cases:
const challenge2 = [
    {input:"aabaa", expected:true},
    {input:"abac", expected:false},
    {input:"a", expected:true},
    {input:"az", expected:false},
    {input:"abacaba", expected:true},
    {input:"aaabaaaa", expected:false},
    {input:"zzzazzazz", expected:false},
    {input:"hlbeeykoqqqqokyeeblh", expected:true},
    {input:"hlbeeykoqqqokyeeblh", expected:true}
];

console.log("challenge 2");

for(var i=0; i<challenge2.length; i++){
    var input = challenge2[i].input;
    var result = checkPalindrome(challenge2[i].input);
    var expected = challenge2[i].expected;
    if(result==expected)
        console.log("Good");
    else
        console.log("input:",input," result:",result," expected:",expected);
}


//test cases
const challenge3 = [
    {input:[3, 6, -2, -5, 7, 3], expected:21},
    {input:[-1, -2], expected:2},
    {input:[5, 1, 2, 3, 1, 4], expected:6},
    {input:[1, 2, 3, 0], expected:6},
    {input:[9, 5, 10, 2, 24, -1, -48], expected:50},
    {input:[5, 6, -4, 2, 3, 2, -23], expected:30},
    {input:[4, 1, 2, 3, 1, 5], expected:6},
    {input:[-23, 4, -3, 8, -12], expected:-12},
    {input:[1, 0, 1, 0, 1000], expected:0}
];

console.log("challenge 3")

for(var i=0; i<challenge3.length; i++){
    var input = challenge3[i].input;
    var result = adjacentElementsProduct(challenge3[i].input);
    var expected = challenge3[i].expected;
    if(result==expected)
        console.log("Good");
    else
        console.log("input:",input," result:",result," expected:",expected);
}


//test cases
const challenge4 = [
    {input:2, expected:5},
    {input:3, expected:13},
    {input:1, expected:1},
    {input:5, expected:41},
    {input:7000, expected:97986001},
    {input:8000, expected:127984001},
    {input:9999, expected:199940005},
    {input:9998, expected:199900013},
    {input:8999, expected:161946005},
    {input:100, expected:19801}
];

console.log("challenge 4")

for(var i=0; i<challenge4.length; i++){
    var input = challenge4[i].input;
    var result = shapeArea(challenge4[i].input);
    var expected = challenge4[i].expected;
    if(result==expected)
        console.log("Good");
    else
        console.log("input:",input," result:",result," expected:",expected);
}

//test cases
const challenge5 = [
    {input:[6, 2, 3, 8], expected:3},  
    {input:[0, 3], expected:2},
    {input:[5, 4, 6], expected:0},
    {input:[6, 3], expected:2},
    {input:[1], expected:0},
    {input:[8, 1, 0, 4, 7], expected:4},
    {input:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], expected:0}
];
 

console.log("challenge 5")

for(var i=0; i<challenge5.length; i++){
    var input = challenge5[i].input;
    var result = makeArrayConsecutive2(challenge5[i].input);
    var expected = challenge5[i].expected;
    if(result==expected)
        console.log("Good");
    else
        console.log("input:",input," result:",result," expected:",expected);
}

//test cases
const challenge6 = [
    {input:[1, 3, 2, 1],expected:false},
    {input:[1, 3, 2], expected:true},
    {input:[1, 2, 1, 2], expected:false},
    {input:[3, 6, 5, 8, 10, 20, 15], expected:false},
    {input:[1, 1, 2, 3, 4, 4], expected:false},
    {input:[1, 4, 10, 4, 2], expected:false},
    {input:[10, 1, 2, 3, 4, 5], expected:true},
    {input:[1, 1, 1, 2, 3], expected:false},
    {input:[0, -2, 5, 6], expected:true},
    {input:[1, 2, 3, 4, 5, 3, 5, 6], expected:false},
    {input:[40, 50, 60, 10, 20, 30], expected:false},
    {input:[1, 1], expected:true},
    {input:[1, 2, 5, 3, 5], expected:true},
    {input:[1, 2, 5, 5, 5], expected:false},
    {input:[10, 1, 2, 3, 4, 5, 6, 1], expected:false},
    {input:[1, 2, 3, 4, 3, 6], expected:true},
    {input:[1, 2, 3, 4, 99, 5, 6], expected:true},
    {input:[123, -17, -5, 1, 2, 3, 12, 43, 45], expected:true},
    {input:[3, 5, 67, 98, 3], expected:true}
];

console.log("challenge 6");

for(var i=0; i<challenge6.length; i++){
    var input = challenge6[i].input;
    var result = almostIncreasingSequence(challenge6[i].input);
    var expected = challenge6[i].expected;
    if(result==expected)
        console.log("Good");
    else
        console.log("input:",input," result:",result," expected:",expected);
}
