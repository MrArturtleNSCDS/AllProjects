var colors = 
    ["005580","0088cc","3a87ad","3e346a","4f4085","6C519D","c09853","b94a48","468847"];
    
var body = $("body");

for(var i=0; i< colors.length; i++){
    var currColor = "#" + colors[i];
    body.append(
        "<div id='color" + i + "' style='background-color:" + currColor + "'>" + 
            currColor + 
        "</div>");
}