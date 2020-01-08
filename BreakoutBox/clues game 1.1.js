
//Blue 3 Digit 

var i= 2;

while(i<=8){
    if(i%2===1)
        console.log(i);
    i++;
}



//white word lock

var list1 = ['3','B','2','X','9','L','8','3','U','R','W','D','6','P'];
var list2 = ['0','1','6','B','T','U','L','0','E','B','5','R','Z','M'];
var list3 = [];

for(var a=0; a<list1.length; a++){
    if(list2.indexOf(list1[a])>=0)
        list3.push(list1[a]);
}
console.log(list3);


//iGotTech

var number = 0;
var combination = "";

for(var b=3;b<9;b++)
    number++;
    
combination += number;
number = 0;
    
for(var c=12;c<32;c+=4)
    number++;
    
combination += number;
number = 0;
    
for(var d=100;d<900;d+=100)
    number++;
    
combination += number;
number = 0;
    
for(var e=50;e<70;e+=7)
    number++;
    
combination += number;
    
console.log(combination);