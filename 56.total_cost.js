let shopingCart = [
    {name: 'shoe', price: 1200},
    {name: 'shirt', price: 2500},
    {name: 'sunglass', price: 950},
    {name: ' watch', price: 10000},
]

function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){

        let product = products[i];

        sum = sum + product.price;
    }

    return sum;
}

let allOverCost = totalCost(shopingCart);

console.log(allOverCost);