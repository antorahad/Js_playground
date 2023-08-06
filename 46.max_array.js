let height = [157, 134, 188, 400, 20, 500];

function maxInArray (numbers){
    let largest = numbers[0];

    for(let i =0; i < numbers.length; i++){
        let index = i;

        let element = numbers[index];

        if(element > largest){

            largest = element;

        }
    }

    return largest;
}

let tallest = maxInArray(height);

console.log(tallest);



// Find out the min array using a function


let arrays = [10, 50, 100, 9, 2, 42, 88, 69];

function findMinArray(numbers){

    let smallest = numbers[0];

    for(let i = 0; i < numbers.length; i++){
        let arrayIndex = i;

        let arrayElement = numbers[arrayIndex];

        if(arrayElement < smallest){

            smallest = arrayElement;

        }
    }

    return smallest;

}

let output = findMinArray(arrays);

console.log('The smallest number in the array is: ' + ' ' + output);