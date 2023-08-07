// show output 1-50

// if the number divisible by 3 then instead of the number show 'foo'

// if the number divisible by 5 then instead of the number show 'bar'

// if the number divisible by 3 and 5 then instead of the number show 'foobar'


for(let i = 1; i <= 50; i++){
    let number = i;

    if(number % 3 == 0 && number % 5 == 0){
        console.log('foobar');
    }

    else if (number % 3 == 0){
        console.log('foo');
    }

    else if (number % 5 == 0){
        console.log('bar');
    }

    else{
        console.log(number);
    }
}

