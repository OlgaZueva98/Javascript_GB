var basket = {}; 

function Product (name, price, imageSrc) {
	this.name = name,
	this.price = price,
    this.image = imageSrc;
};

var goods = [
	new Product('computer',  300, 'images/computer.png'),
	new Product('printer', 200,  'images/printer.png'),
	new Product('scanner', 190, 'images/scanner.png')
];

function viewbasket() {
	var out = '';
	var SumPrice = 0;
	for (var key in basket) {
		SumPrice += goods[key].price * basket[key];
		
		out += '<button class="delete" data-art="'+key+'" >x</button>';
		out += '<img src="'+goods[key].image+'" width="48">';
		out += goods[key].name;
		out += '<button class="minus" data-art="'+key+'">-</button>';
		out += basket[key];
		out += '<button class="plus" data-art="'+key+'">+</button>';
		out += basket[key]*goods[key].price;
		out +='<br><br><br><br>';
	}
	
	out += 'Total: ' + SumPrice + '$';
	
	$('#my-basket').html(out);
	$('.plus').on('click', plusGoods);
	$('.minus').on('click', minusGoods);
	$('.delete').on('click', deleteGoods);
};

function plusGoods(){
	var articul = $(this).attr('data-art');
	basket[articul]++;
	savebasketToLS(); 
	viewbasket();
}

function minusGoods(){
	var articul = $(this).attr('data-art');
	if (basket[articul]>1) {
		basket[articul]--;
	}
	else {
		delete basket[articul];
	}
	savebasketToLS();
	viewbasket();
}

function deleteGoods(){
	var articul = $(this).attr('data-art');
	delete basket[articul];
	savebasketToLS();
	viewbasket();
}

function checkbasket() {
	out = '';
	
    if (localStorage.getItem('basket') != null) {
        basket = JSON.parse(localStorage.getItem('basket'));
    }
	else {
		out += 'Корзина пуста.';
		$('#my-basket').html(out);
	}
}

function savebasketToLS(){
    localStorage.setItem('basket', JSON.stringify(basket) );
}

checkbasket();

viewbasket();
