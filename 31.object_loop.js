var friendAge = {
    Karim: 20,
    jamy: 23,
    lamiya: 18,
    Ashik: 24,
    Jakir: 22
}

// object property
const Keys = Object.keys(friendAge);

console.log(Keys);

//object value
const Key2 = Object.values(friendAge);

console.log(Key2);

//How to find property and value using for loop of an object
for(var i=0; i < Keys.length; i++){
    var propertyName = Keys[i];

    var propertyValue = friendAge[propertyName];

    console.log(propertyName, propertyValue);
}

// Alternative way to find value and keys form a boject using for in loop

for(var propertyName in friendAge){
    var objectValue = friendAge[propertyName];
    console.log(propertyName, objectValue);
}
