let shopingCart = [
    {name: 'shoe', price: 1200, quantity: 5},
    {name: 'shirt', price: 2500, quantity: 3},
    {name: 'sunglass', price: 950, quantity: 10},
    {name: ' watch', price: 10000, quantity: 5},
]

function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){

        let product = products[i];

        let productTotal = product.price * product.quantity;

        sum = sum + productTotal;
    }

    return sum;
}

let allOverCost = totalCost(shopingCart);

console.log(allOverCost);