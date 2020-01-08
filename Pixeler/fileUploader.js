$('#myFile').change(
    function myFunction(){
        var fileDocs = document.getElementById("myFile");
        if ('files' in fileDocs) {
            var file = fileDocs.files[0];
            processUpload(file);
        } 
        else {
            if (fileDocs.value == "") {
                console.log("Select one or more files.");
            } 
        }
    }
);

function processUpload(file){
    $('#savedFile').attr('src',file.name);
    console.log(file.name);
    console.log(file.size);
    
    var reader = new FileReader();
    reader.onload = function(){
        var contents = reader.result;
        var array = contents.split("|");
        console.log(array);
        loadPicture(array);
    };
    reader.readAsText(file);
}

function loadPicture(array){
    resetDrawingArray();
    var i = 0;
    for(var r=0; r<resolution; r++){
        for( var c=0; c<resolution; c++){
            if(array[i] != '0'){
                var color = array[i];
                var currentPixel = $('[r=' + r + '][c=' + c + ']');
                currentDrawing[r][c]=color;
                console.log(currentPixel.length);
                currentPixel.css('background-color',color);
                currentPixel.addClass('pixelSelected');
            }
            i++;
        }
    }
}