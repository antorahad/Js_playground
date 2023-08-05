let myArray = [1, 3, 4, 8, 7, 49, 12, 11];

function arrayCalc(numbers){

    let oddNumbers = [];

    for(let i = 0; i < numbers.length; i++){
        let index = i;

        let element = numbers[index];

        if(element % 2 == 1){
            oddNumbers.push(element);
        }
    }

    return oddNumbers;
}

function oddArraySum(numbers){
    let sum = 0;
    
    for(let i =0; i < numbers.length; i++){
        let index = i;
        let element = numbers[index];
        if(element % 2 == 1){
            sum = sum + element;
        }
    }

    return sum;
}

let result = arrayCalc(myArray);

let result2 = oddArraySum(myArray);

console.log(result, result2);