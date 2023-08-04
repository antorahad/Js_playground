let mobile = {
    brand: 'Samsung',

    model: 'A30',

    color: 'White',

    ram: 4,

    rom: 64,

    price: 20000
}

// one way to set object value 

mobile.price = 17000;

console.log(mobile);

mobile.color = 'Black';

console.log(mobile);


// another way to set object value

mobile['color'] = 'Gold';

mobile['price'] = '50000';

console.log(mobile);