// Write a function findOddSum() that will take the array [5,7,8,10,45,30] as the input parameter and will return the sum of the odd number 

let givenNumbers = [5, 7, 8, 10, 45, 30];

function findOddSum (numbers){
    let sum = 0;

    for(let i = 0; i < numbers.length; i++){
        let index = i;

        let element = numbers[index];

       if(element % 2 == 1){
            sum = sum + element;
       }
    }

    let oddSum = sum;

    return oddSum;
}

let resut =  findOddSum(givenNumbers);

console.log(resut); 


//
let givenArray = [10, 25, 15, 40, 22, 66, 100, 301];

function findEvenSum(numbers){
    let sum = 0;

    for(let i = 0; i < numbers.length; i++){
        let arrayIndex = i;
        
        let arraElement = numbers[arrayIndex];

        if (arraElement % 2 == 0){
            sum = sum + arraElement;
        }
    }

    let result = sum;

    return result;
}

let evenSum = findEvenSum(givenArray);

console.log(evenSum);