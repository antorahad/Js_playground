function feetConveter(inches){
    let result = inches / 12;

    return result;
}

var output = feetConveter(60);

console.log(output, 'feet');


function kmConveter(miles){
    let result2 = miles *  1.60934;

    return result2;
}


var output = kmConveter(5);

console.log(output, 'kilometer');


function tkConveter(dollar){
    let currency =  dollar * 108.18;

    return currency;
}

var output = tkConveter(37);

console.log(output, 'Tk');