// Write a function findOddSum() that will take the array [5,7,8,10,45,30] as the input parameter and will return the sum of the odd number 

let givenNumbers = [5, 7, 8, 10, 45, 30];

function findOddSum (numbers){
    let sum = 0;

    for(let i = 0; i < givenNumbers.length; i++){
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