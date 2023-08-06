let sttr = 'hello everyen! how are you? fine shanku. hello everyen! how are you? fine shanku. hello everyen! how are you? fine shanku.';

//let parts = sttr.split(' ');

let parts = sttr.split('.');

//let parts = sttr.split('');

console.log(parts);


console.log(sttr.length);

//string slice

console.log(sttr.slice(0, 40));

// substring 

console.log(sttr.substring(0, 40));

// trim

let sttr2 = 'oh yeah daddy  ';

console.log(sttr2.trim());

let sttr3 = [
    'Ashik', 'Fashik', 'Ishik', 'Koushik'
  ];

let newSttr = sttr3.join('! ');

console.log(newSttr);