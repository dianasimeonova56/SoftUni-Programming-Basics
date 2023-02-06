function godzilla(input) {
    let budget = Number(input[0]);
    let stunts = Number(input[1]);
    let outfits = Number(input[2]);

    let decorSum = budget * 0.1;
    let outfitsSum = stunts * outfits;

    let discount = 0;

    if (stunts > 150) {
        discount = outfitsSum * 0.1;
        outfitsSum = outfitsSum - discount;
    }
     
    let totalSum = (decorSum + outfitsSum);
   
    if (totalSum > budget) {
        console.log("Not enough money!");
        let moneyNeeded = (totalSum - budget).toFixed(2);
        console.log(`Wingard needs ${moneyNeeded} leva more.`);
    } else {
        console.log("Action!");
        let moneyLeft = (budget - totalSum).toFixed(2);
        console.log(`Wingard starts filming with ${moneyLeft} leva left.`);
    }
}
godzilla(["15437.62",

"186",

"57.99"]);