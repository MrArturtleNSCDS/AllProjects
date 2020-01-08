var cssCircle = document.getElementById("cssCircle"),
    attrCircle = document.getElementById("attrCircle"),
    attrRectangle = document.getElementById("attrRectangle"),
    cssRectangle = document.getElementById("cssRectangle"),
    playBtn = document.getElementById("play"),
		tl = new TimelineMax({repeat:1, yoyo:true, repeatDelay:0.5, paused:true}); 

tl.to(cssCircle, 1, {x:120, scale:2})
  .to(cssCircle, 0.5, {strokeWidth:12, stroke:"white"})
  .to(attrCircle, 1, {attr:{cx:500}})
  .to(attrCircle, 1, {attr:{r:50}})
  .to(cssRectangle, 1, {"border-radius":50, stroke:"white"})
  .to(attrRectangle, 1, {attr:{rx:"60"}});

play.onclick = function() {
  tl.restart();
}