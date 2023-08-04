let shoppingCart = {
    Soup: 5,

    egg: 12,

    meat: 2,

    noodles: 3
}

// Get only keys

var Keys = Object.keys (shoppingCart);

console.log(Keys);

// [ 'Soup', 'egg', 'meat', 'noodles' ]


// Get only values

var Values = Object.values (shoppingCart);

console.log(Values);

//[ 5, 12, 2, 3 ]


// Get both Keys & values

console.log (Keys, Values);

//[ 'Soup', 'egg', 'meat', 'noodles' ] [ 5, 12, 2, 3 ]  