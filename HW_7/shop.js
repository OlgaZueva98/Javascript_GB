var basket = {};

$('document').ready(function(){
    viewGoods(goods);
})

//function randomInt(min, max) {
//	return Math.floor(Math.random() * (max - min + 1)) + min;
//}

function Product (name, price, imageSrc) {
	this.name = name,
	this.price = price,
    this.image = imageSrc;
};

function countBasketPrice(basket) {
  let SumPrice = 0;
  for (let prod in basket) {
    SumPrice += basket[prod].total;
  }
  return SumPrice;
}

var goods = [
	new Product('computer',  300, 'images/computer.png'),
	new Product('printer', 200,  'images/printer.png'),
	new Product('scanner', 190, 'images/scanner.png')
];

function viewGoods(goods) {
	var out = '';
	for (var prod in goods) {
		out += '<div class="single-goods">';
		out += '<h3>' + goods[prod]['name'] + '</h3>';
		out += '<p>' + goods[prod]['price'] + '$</p>';
		out += '<img src="' + goods[prod]['image'] + '" width="130" height="111" alt="product">';
		out += '<button class="add-to-basket" goods-art="' + prod + '">Buy</button>';
		out += '</div>';
  }
	$('#goods').html(out);
	$('button.add-to-basket').on('click', addToBasket);
}

function addToBasket() {
    var articul = $(this).attr('goods-art');
    if (basket[articul]!=undefined) {
        basket[articul]++;
    }
    else {
        basket[articul] = 1;
    }

    localStorage.setItem('basket', JSON.stringify(basket) );
    viewBasket();
}

function checkBasket(){
    if ( localStorage.getItem('basket') != null) {
        basket = JSON.parse (localStorage.getItem('basket'));
    }
}

function viewBasket(){
    var out = '';
	var SumPrice = 0;
    for (var prod in basket){
		SumPrice += goods[prod]['price'] * basket[prod];
        out += goods[prod]['name'] + ' --- ' + goods[prod]['price'] + '$  |  ' + basket[prod] + '<br>';
	}

	out += 'Total: ' + SumPrice + '$';
	
    $('#basket').html(out);
}







