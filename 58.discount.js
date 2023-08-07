/*
if ticket number is less than 100, per ticket price: 100;

if ticket number is more than 100 but less than 200 than first 100 tickets will be 100 taka rest ticket will be 90 tk

if you purchase more than 200 tickets

first 100 ---> 100 tkk
101-200 ---> 90tk

200+ ---> 70tk;
*/


function ticketPrice(ticketQuantity){
    let first100Rate = 100;

    let second100Rate = 90;

    let restTicketRate = 70;

    if (ticketQuantity <= 100){
        let price = ticketQuantity * first100Rate;

        return price;
    }

  else if (ticketQuantity <= 200){
        let first100Price = 100 * first100Rate;

        let restTicketQuantity = ticketQuantity - 100;

        let restTicketPrice = restTicketQuantity * second100Rate;

        let totalPrice = first100Price + restTicketPrice;

        return totalPrice;
    }

    else{
        let first100Price = 100 * first100Rate;

        let second100price = 100 * second100Rate;

        let restTicketQuantity = ticketQuantity - 200;

        let restTicketPrice = restTicketQuantity * restTicketRate;

        let totalCost = first100Price + second100price + restTicketPrice;

        return totalCost;
    }
}

let price = ticketPrice(150);

console.log(price);
