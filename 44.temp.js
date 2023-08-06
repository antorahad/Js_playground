let first = 5;

let second = 7;

// one way

/*let temp = first;

first = second;

second = temp;

console.log(first, second);*/


// sky way

[ first, second ] = [ second, first ];

console.log(first, second);