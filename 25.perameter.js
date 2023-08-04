function mul( a, b){
    var multiplication = (a * b);

    console.log(multiplication);
}


mul(10, 10);

mul(10, 20);


function magicCalc (a, b){
    var sum = a + b;

    if(sum % 2 == 0){
        console.log(sum + ' ' + 'is an even number');       
    }
    else{
        console.log(sum + ' ' + 'is an odd number');       
    }
}


magicCalc(15, 72);
