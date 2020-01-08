var problems = 
    [
        [3,1,6,true],
        [2,2,2,true],
        [5,2,4,false],
        [103,99,900,true],
        [56,70,80,false],
        [5,7,4,false]
    ];

$('input').keyup(
    function(){
        var n = parseInt($('#n').val());
        var low = parseInt($('#low').val());
        var high = parseInt($('#high').val());
        $('#result').text(between(n,low,high));
    }
);

var problemString = "<table><tr><td>Expected</td><td>Run</td>";

for(var i=0; i<problems.length; i++){
    var n = problems[i][0];
    var low = problems[i][1];
    var high = problems[i][2];
    var expected = problems[i][3];
    var result = between(n,low,high);
    var bColor = expected==result?'correct':'incorrect';
    problemString += 
        "<tr>" +
            "<td>between(" + n + ", " + low + ", " + high + ") &rarr; " + expected + "</td>"+
            "<td class='" + bColor + "'>" + result + "</td>" +
        "</tr>";
}

problemString += "<table>";
$('body').append(problemString);

function between(n,low,high){
    return low<=n && n<=high;
}