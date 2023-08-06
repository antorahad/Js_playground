function reverseString(text){

    let reversed = '';

    for(let i = text.length-1; i >= 0; i--){
        let element = text[i];

       reversed = reversed + element;

        
    }

   return reversed;
}

let myString = 'I am a bad boy';

let output = reverseString(myString);

console.log(output);