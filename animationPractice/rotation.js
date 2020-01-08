/*globals TweenMax */
TweenMax.to(".big",4,{rotation:360,repeat:-1,ease:Linear.easeNone});
TweenMax.to(".medium",2,{rotation:-360,repeat:-1,ease:Linear.easeNone,delay:.2});

TweenMax.to("#anotherOne",2,{rotation:-360,x:160,repeat:-1,yoyo:true,ease:Linear.easeNone,delay:.2});
