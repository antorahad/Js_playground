let givenArray = [10, 3, 7, 8, 15, 12, 9];

function arrayCalc(numbers){
    for(let i = 0; i < numbers.length; i++){
        let arrayIndex = i;
        let arrayElement = numbers[arrayIndex];
        console.log(arrayIndex, arrayElement);
    }
}

arrayCalc(givenArray);