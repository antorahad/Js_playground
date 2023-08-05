function multiplicationOfNumbers(number){
    let result = 1;
    for(let i = number; i >= 1; i--){
        result = result * i;
    }

    return result;
}

let multi = multiplicationOfNumbers(9);

console.log(multi);