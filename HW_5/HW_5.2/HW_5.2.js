function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Product (name, amount, price) {
	this.name = name,
	this.amount = amount,
	this.price = price,
	this.total = price * amount;
};

function countBasketPrice(basket) {
  let SumPrice = 0;
  for (let prod in basket) {
    SumPrice += basket[prod].total;
  }
  return SumPrice;
}

function createBasket(arr) {
  var $basket = document.getElementById('basket');
  var col = ['name','amount','price','total'];
  var $field;

  for (let i = 0; i < col.length; i++) {
     $field = document.createElement("div");
     $field.textContent = col[i];
     $basket.appendChild($field);
  }

  if (arr.length != 0) {
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < col.length; j++) {
        $field = document.createElement('div');
        $field.textContent = arr[i][col[j]];
        $basket.appendChild($field);
      }
    }
    $field = document.createElement('div');
    $field.classList.add('total');
    $field.textContent = 'В корзине: ' + arr.length + ' товаров на сумму ' + countBasketPrice(arr) + ' рублей';
    $basket.appendChild($field);
  }
  else {
    $field = document.createElement('div');
    $field.classList.add('total');
    $field.textContent = 'Корзина пуста';
    $basket.appendChild($field);
  }
}

var basket = [
	new Product('computer', randomInt(1, 10), randomInt(10000, 50000)),
	new Product('printer', randomInt(1, 10), randomInt(10000, 50000)),
	new Product('scanner', randomInt(1, 10), randomInt(10000, 50000)),
    new Product('scanner', randomInt(1, 10), randomInt(10000, 50000))
];

createBasket(basket)