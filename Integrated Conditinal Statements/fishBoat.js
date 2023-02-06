function fishBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let persons = input[2];
    
    let price = 0;

    switch (season) {
        case "Spring":
            price = 3000;
        break;
        case "Summer":
        case "Autumn":
            price = 4200;
        break;
        case "Winter":
            price = 2600;
        break;
    } 

    if (persons <= 6) {
        price = price * 0.90;
    } else if (persons <= 11) {
        price = price * 0.85;
    } else if (persons > 12) {
        price = price * 0.75;
    }
    
    if (persons % 2 === 0 && season !== "Autumn") {

        price = price * 0.95;;
    }

    if (budget >= price) {
        let moneyLeft = (budget - price).toFixed(2);
        console.log(`Yes! You have ${moneyLeft} leva left.`)
    } else {
        let neededMoney = (price - budget).toFixed(2);
        console.log(`Not enough money! You need ${neededMoney} leva.`);
    }
}
fishBoat(["3600",

"Autumn",

"6"])