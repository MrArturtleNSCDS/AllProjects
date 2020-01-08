var content = 
    [
        {front:"mesa",back:"table"},
        {front:"silla",back:"chair"},
        {front:"cuchara",back:"spoon"},
        {front:"tenedor",back:"fork"}
    ];
    
var currentCard=0;


const FRONT = 0;
const BACK = 1;

var onFlip = FRONT;

showCard();


$("[function=flip]").click(
    function(){
        var card = document.querySelector('.card');
        card.classList.toggle('is-flipped');
    }
);

$("[function=next]").click(
    function(){
        currentCard++;
        if(currentCard>=content.length)
            currentCard=0;
        showCard();
    }
);

$("[function=prev]").click(
    function(){
        currentCard--;
        if(currentCard<0)
            currentCard=content.length-1;
        showCard();
    }
);

function showCard(){
    var card = content[currentCard];
    var firstSide;
    var secondSide;
    
    if(onFlip == FRONT){
        $('.card').removeClass('is-flipped');
        firstSide = '.cardFront';
        secondSide = '.cardBack';
    }
    else{
        $('.card').addClass('is-flipped');
        firstSide = '.cardBack';
        secondSide = '.cardFront';
    }

        
    $(firstSide).text(card.front);
        
    setTimeout(
        function(){
            $(secondSide).text(card.back);
        },
        500
    );
    
}