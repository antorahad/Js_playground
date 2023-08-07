let phones = [
    {brandName: 'Samsung', camera: 20, color: 'white', storage: '64gb', price: 25000},
    {brandName: 'Oppo', camera: 80, color: 'white', storage: '120gb', price: 75000},
    {brandName: 'Mi', camera: 12, color: 'silver', storage: '64gb', price: 20000},
    {brandName: 'Real Me', camera: 50, color: 'black', storage: '128gb', price: 19500},
];

function cheapestPhone(phones){

    let cheapest = phones[0];

    for(let i = 0; i < phones.length; i++){
        let mobile = phones[i];

        if(mobile.price < cheapest.price){
            cheapest = mobile;
        }
    }

    return cheapest;
}

let mySelection = cheapestPhone(phones);

console.log(mySelection);