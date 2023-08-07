/*


1. chair --> 3 cft;

2.table --> 10cft

3.bed --> 50cft


*/

function woody(chairQuantity, tableQuantity, bedQuantity){
    let perChairWood = 3;

    let perTableWood = 10;

    let perBedWood = 50;

    let chairWood = chairQuantity * perChairWood;

    let tableWood = tableQuantity * perTableWood;

    let bedWood = bedQuantity * perBedWood;

    let totalWood = chairWood + tableWood + bedWood;

    return totalWood;
}



let totalWood = woody(2, 2, 5);

console.log(totalWood);