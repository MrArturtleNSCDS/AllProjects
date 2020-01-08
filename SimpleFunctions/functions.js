/*eslint-env jquery */
$('#myButton').click(
    function(){
        factorial($('#lowNum').val());
    }
);

function factorial(num){
    var number = parseInt(num,10);
    for(var i=number-1; i>0; l--){
      number = number + i;
    }
      
    $('#result').text(number);
}


function factor(num){
    var number = parseInt(num,10);
    //if number is a factor of 100
        //display factor
    //else
        //display not factor
}