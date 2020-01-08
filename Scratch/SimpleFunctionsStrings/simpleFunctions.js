greeting("Bono",57,true);
greeting("Turtle",39,false);
sum(3,7);
pythagorean(3,5);
isFactor(4,7);
isFactor(4,8);
factors(8);
factors(24);

function greeting(greetingName,age,birthdatePast){
    var today = new Date();
    var currentYear = today.getFullYear();
    var yearBorn = currentYear-age;
    
    if(!birthdatePast)
        yearBorn--;
    
    console.log("Hello " + greetingName + ", I know you are " + age +
        " and was born " + yearBorn + ".");
}

function sum(a,b){
    var result = a+b;
    console.log("The sum of " + a + " and " + b + " is " + result + ".");
}

function pythagorean(a,b){
    var result = a*a + b*b;
    var c = Math.sqrt(result);
    console.log("The hypotenuse of " + a + " and " + b + " is " + c);
}

function isFactor(a,b){
    if(b%a===0)
        console.log(a + " is a factor of " + b);
    else
        console.log(a + " is not a factor of " + b);
}

function factors(num){
    var numString = "";
    for(var i=1; i<=num; i++){
        if(num%i===0)
            numString += i + ", ";
    }
    console.log(numString);
}

