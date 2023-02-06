function maidenParty(input) {
let price = Number(input[0]);
let loveLetters = Number(input[1]);
let roses = Number(input[2]);
let keychains = Number(input[3]);
let caricatures = Number(input[4]);
let surprises = Number(input[5]);

let firstSum = (loveLetters * 0.6) + (roses * 7.2) + (keychains * 3.6) + (caricatures * 18.2) + (surprises * 22);
let articlesSum = loveLetters + roses + keychains + caricatures + surprises;

if (articlesSum >= 25) {
    firstSum -= firstSum * 0.35;
}

let hostingFee = firstSum * 0.1;

let win = firstSum - hostingFee;

if (win >= price) {
    let moneyLeft = win - price;
    console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
} else {
    let moneyNeeded = price - win;
    console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
}

} maidenParty (["40.8", "20", "25", "30", "50", "10"])