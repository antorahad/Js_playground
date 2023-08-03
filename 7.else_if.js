//1

var number = 30;

if(number >= 100){
    console.log('chol mama biriyani khai');
}

else if (number >= 30){
    console.log('chol mama halim khai');
}

else {
    console.log('chol mama basai giya vat khai');
}

//2

let examMark = 37;

if (examMark >= 80){
    console.log('A grade');
}

else if(examMark >= 60){
    console.log('B grade');
}

else if (examMark >= 50){
    console.log('C grade');
}

else if (examMark >= 40){
    console.log ('D grade');
}

else {
    console.log('Tmi bajan dabba marso porikhai');
}

// 3

var integer = 101 ;

if (integer % 2 == 0){
    var newNumber = (integer + 1);
    console.log (newNumber);
}

else if (integer % 2 != 0){
    var newNumber2 = (integer - 1);
    console.log (newNumber2);
}

else{
    console.log('No use of else in this code');
}
