function santa(input) {
let days = Number(input[0]);
let roomType = input[1];
let grade = input[2];

let nights = days - 1;
let price = 0;

switch (roomType) {
    case "room for one person":
        price = nights * 18;
        break;
    case "apartment":
        price = nights * 25;
        if (days < 10) {
            price -= price *0.3;
        } else if (days < 15) {
            price -= price * 0.35;
        } else {
            price -= price *0.5;
        }
        break;
    case "president apartment":
        price = nights * 35;

        if (days < 10) {
            price -= price *0.1;
        } else if (days < 15) {
            price -= price * 0.15;
        } else {
            price -= price *0.2;
        }
        break;
}

if (grade === "positive") {
    price += price *0.25;
    console.log(`${price.toFixed(2)}`)
} else if (grade === "negative") {
    price -= price * 0.1;
    console.log(`${price.toFixed(2)}`)
}
} santa  (["14",
"apartment",
"positive"])
