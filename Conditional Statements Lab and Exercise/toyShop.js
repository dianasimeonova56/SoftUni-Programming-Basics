function toyShop(input) {
    let excursion = Number(input[0]);
    let puzzle = Number(input[1]);
    let dolls = Number(input[2]);
    let teddys = Number(input[3]);
    let minions = Number(input[4]);
    let trains = Number(input[5]);

    let discount = 0;

    let sum = puzzle * 2.6 + dolls * 3 + teddys * 4.1 + minions * 8.2 + trains * 2;
    let count = puzzle + dolls + teddys + minions + trains;
    if (count >= 50) {
        discount = sum * 0.25;
    }

    let totalSum = sum - discount;

    let rent = totalSum * 0.1;

    let profit = totalSum - rent;

    if (profit >= excursion) {
        let moneyLeft = (profit - excursion).toFixed(2);
        console.log(`Yes! ${moneyLeft} lv left.`);
    } else {
        let moneyLeft = (excursion - profit).toFixed(2);
        console.log(`Not enough money! ${moneyLeft} lv needed.`);
    }
}
toyShop(["40.8",

"20",

"25",

"30",

"50",

"10"])