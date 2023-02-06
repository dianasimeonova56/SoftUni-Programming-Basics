function newHouse(input) {
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);
    let discount = 0;
    let price = 0;

    switch (flowerType) {
        case "Roses":
            price = flowerCount * 5;
            if (flowerCount > 80) {
                discount = price * 0.1;
                price = price - discount;
            }
        break;
        case "Dahlias":
            price = flowerCount * 3.8;
            if (flowerCount > 90) {
                discount = price * 0.15;
                price = price - discount;
            }
        break;
        case "Tulips":
            price = flowerCount * 2.8;
            if (flowerCount > 80) {
                discount = price * 0.15;
                price = price - discount;
            }
        break;
        case "Narcissus":
            price = flowerCount * 3;
            if (flowerCount < 120) {
                discount = price * 0.15;
                price = price + discount;
            }
        break;
        case "Gladiolus":
            price = flowerCount * 2.5;
            if (flowerCount < 80) {
                discount = price * 0.20;
                price = price + discount;
            }
        break;
    }
    if (budget >= price) {
        let moneyLeft = (budget - price).toFixed(2);
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${moneyLeft} leva left.`)
    } else {
        let neededMoney = (price - budget).toFixed(2);
        console.log(`Not enough money, you need ${neededMoney} leva more.`)
    }
    
}
newHouse(["Tulips",

"88",

"260"]);