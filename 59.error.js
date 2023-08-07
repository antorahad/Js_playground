function add(a, b){

    if(typeof a !== 'number' || typeof b !== 'number'){
        return 'please enter a valid number';
    }

    return a + b;
}

let result = add(12, 45);

console.log(result);
