var resolution = 16;

var currentDrawing = new Array(resolution);

for(var i=0;i<resolution;i++)
    currentDrawing[i] = new Array(resolution);

function resetDrawingArray(){
    for(var r=0; r<currentDrawing.length; r++){
        for(var c=0; c<currentDrawing[r].length; c++){
            currentDrawing[r][c]='0';
        }
    }
}

/*
 * This is the function that saves the file. Make sure the selector
 * matches your button
 */

$('#save').click(
    function(){
        var arrayString = convertToString(currentDrawing);
        var drawing = new Blob(
            [arrayString],
            {type:'text/plain;charset=utf-8'}
        );
        saveAs(drawing,"Untitled");
    }
);

function convertToString(array){
    var stringArray = "";
    for(var r=0; r<array.length; r++){
        stringArray += array[r].join('|') + '|';
    }
    stringArray = stringArray.substring(0,stringArray.length-1);
    console.log(stringArray);
    return stringArray;
}