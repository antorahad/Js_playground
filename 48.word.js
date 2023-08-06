const myString =  'Hello Everyone';

function reversedWords(sttr){
    const words = sttr.split(' ');

    const result = [];
    for(let i = words.length - 1; i >= 0; i--){
        const element = words[i];
        result.push(element);
    }

    const reversed = result.join(' ');
    return reversed;
}

let output = reversedWords(myString);

console.log(output);