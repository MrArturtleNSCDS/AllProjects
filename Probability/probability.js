function makeBasket(offPercentage,defPercentage){
    var finalProb = (offPercentage+defPercentage)/2;
    var random = randomNum();
        
    return random<finalProb;
}

function randomNum(){
    return Math.floor((Math.random() * 100) + 1);
}
