if(a === 0)
    b = a + 10;
else
    b = a + 20;

Which of the following changes will NOT affect the results when the code segment is executed?
Select one:

a. Changing line 2 to b = 10 
b. Changing line 2 to a = b + 10
c. Changing line 4 to b = 20
d. Changing line 4 to a = b + 10


The procedure below is intended to display the index in a list of unique names (nameList) where 
a particular name (targetName) is found. If targetName is not found in nameList, the code should display -1.

function findName (nameList, targetName){
    for(var i=0; i<nameList.length; i++){
        var name = nameList[i];
        if(name == targetName)
            foundIndex = i;
        else
            foundIndex = -1;
    }
    return foundIndex;
}

Which of the following procedure calls can be used to demonstrate that the procedure does NOT Work as intended?
Select one:
a. findName(["Andrea", "Ben"],  "Ben" )
b. findName(["Andrea", "Ben" ], "Diane" )
c. findName(["Andrea", "Ben", "Chris"], "Ben") 
d. findName(["Andrea", "Chris", "Diane"], "Ben")


A programmer wrote the code segment below to display the average of all the elements in a list called numbers. There 
is always at least one number in the list.

var sum = 0;
for(var i=0; i<numbers.length; i++){
    sum = sum + value;
    average = sum/i;
}
console.log(average)

The programmer wants to reduce the number of operations that are performed when the program is run. Which change will
result in a correct program with a reduced number of operations performed?

Select one:
a. Interchanging line 40 and line 41
b. Interchanging line 41 and line 42
c. Interchanging line 42 and line 43
d. lnterchanging line 43 and line 44 

An algorithm will be used to identify the maximum value in a list of one or more integers. Consider the two versions of
the algorithm below.

Algorithm I :  	Set the value of a variable max to -1. Iterate through the list of integer 
                values. If a data value is greater than the value of the variable max, set
                max to the data value.

Algorithm II :	Set the value of a variable max to the first data value. Iterate through the
                remaining values in the list of integers. If a data value is greater than the
                value of the variable max, set max to the data value.

Which of the following statements best describes the behavior of the two algorithms?
Select one:
a. Both algorithms work correctly on all input values.
b. Algorithm I always works correctly, but Algorithm II only works correctly when the maximum value is not the first value
in the list.
c. Algorithm II always works correctly, but Algorithm I only works correctly when the maximum value is greater than or equal to
  -1.
d. Neither algorithm will correctly identify the maximum value when the input contains both positive and negative input
values.


A computer program uses 3 bits to represent integers. When the program adds the decimal (base 10) numbers 5 and 3, the result is 0. Which of the following is the best explanation for the result?
Select one:
a. An overflow error occurred.
b. A round-off error occurred.
c. The result was affected by lossy data compression.
d. The result was approximated by a floating-point representation.


The algorithm below is used to simulate the results of flipping a coin 4 times. Consider the goal of determining whether
the simulation resulted in an equal number of heads and tails. 

   	Step 1  : Initialize the variables heads_counter and f1ip_counter to 0.
   	Step 2 : A variable coin_f1ip is randomly assigned a value of either 0 or 1.
               	If coin_f1ip has the value 0, the coin flip result is heads, so 
                   heads_counter is incremented by 1.
   	Step 3 : Increment the value of f1ip_counter by 1.
   	Step 4 : Repeat steps 2 and 3 until f1ip_counter equals 4.

Following execution of the algorithm, which of the following expressions indicates that the simulation resulted in an 
equal number of heads and tails?
Select one:
a. coin_f1ip = 1
b. flip_counter = 1
c. flip_counter = 2
d. heads_counter = 2


The code fragment below is intended to display "odd" if the positive number num is odd.
if (<MISSING CONDITION>)
	DISPLAY “odd”

Which of the following can be used to replace <MISSING CONDITION> so that the code fragment will work as intended?
Select one:
a. (num MOD 1) = 0
b. (num MOD 1) = 1
c. (num MOD 2 ) = 0
d. (num MOD 2) = 1 

Consider the following numbers.
  	° Binary 1100
  	° Decimal 11
  	° Hexadecimal D
 
Which of the following lists the numbers in order from least to greatest?
Select one:
a. Binary 1100, Decimal 11, Hexadecimal D
b. Decimal 11, Binary 1100, Hexadecimal D 
c. Decimal 11, Hexadecimal D, Binary 1100
d. Hexadecimal D, Decimal 11, Binary 1100



In the program below, the initial value of x is 5 and the initial value of y is 10.

if(x < 0)
	console.log("Foxtrot")
else
	if(x > y)
    	console.log("Hotel")
	else
    	if(y > 0)
        	console.log("November")
    	else
        	console.log("Yankee")

What is displayed as a result of running the program?
Select one:
a. Foxtrot
b. Hotel
c. November 
d. Yankee


