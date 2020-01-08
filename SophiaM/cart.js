var total = 0;

$('#choose').click(
    function(){
        var randNum = Math.floor(Math.random()*10);
        console.log(randNum);
        var chosenElement = $('[item=' + randNum + ']');
        $('.selected').removeClass('selected');
        $(chosenElement).addClass('selected');
        var item = $('.itemName',chosenElement).text();
        var price = $('.itemPrice',chosenElement).text();
        var className = $(chosenElement).attr('class').split(' ')[0];

        var itemString =
            "<div class='" + className + " item'>" +
                "<div class='itemName'>" + item + "</div>" + 
                "<div class='itemPrice'>" + price + "</div>" +
            "</div>";
        $('#cart').append(itemString);
        
        price = parseFloat(price);
        total += price;
        
        total += price;
        total = total.toFixed(2);
        
        $('#total').text(total);
    }
);