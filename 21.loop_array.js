let numbers = [10, 20, 30, 40, 50, 60];

for(let i = 0; i < numbers.length; i++){
    let number = numbers[i];
    console.log(number);
}



let fruits = ['Apple', 'Banana', 'Graps', 'Orange', 'Licchi'];

for(let x = 0; x < fruits.length; x++){
    let fruit = fruits[x];
    console.log(fruit);
}




var phones = ['Apple', 'Mi', 'Samsung', 'Nokia', 'Oppo', 'Real Me'];

var a = 0;

while(a < phones.length){
    var phone = phones[a];
    a++;
    console.log(phone);
}


var bookPrice = [100, 140, 160, 250, 260, 300];

for (var b = 0; b < bookPrice.length; b++){

    var price = bookPrice[b];

    if (price < 250){
        continue;
    }

    console.log(price);
}


var bookPrice2 = [100, 140, 160, 250, 260, 300];

for (var c = 0; c < bookPrice2.length; c++){

    var price2 = bookPrice2[c];

    if (price2 > 250){
        break;
    }

    console.log(price2);
}