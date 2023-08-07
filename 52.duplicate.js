let names = ['abul', 'babul', 'kabul', 'hubul', 'abul', 'babul', 'tribul'];


function removeDuplicate(array){

    let unique = [];

    for(let i =0; i < array.length; i++){
        let element = array[i];

        if(unique.includes(element) === false){
            unique.push(element);
        }
    }

    return unique;
}

let result = removeDuplicate(names);

console.log(result);