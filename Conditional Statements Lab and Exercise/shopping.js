function shopping(input) {
    let budget = Number(input[0]);
    let videocard = Number(input[1]);
    let cpu = Number(input[2]);
    let ram = Number(input[3]);

    let videocardSum = videocard * 250;
    let cpuSum = cpu *(videocardSum * 0.35);
    let ramSum = ram * (videocardSum * 0.1);

    let totalSum = videocardSum + cpuSum + ramSum;

    if (videocard > cpu) {
        totalSum = totalSum -(totalSum * 0.15);
    }

    if (budget >= totalSum) {
        let moneyLeft = (budget - totalSum).toFixed(2);
        console.log(`You have ${moneyLeft} leva left!`);
    } else {
        let moneyNeeded = (totalSum - budget).toFixed(2);
        console.log(`Not enough money! You need ${moneyNeeded} leva more!`);
    }
} shopping(["920.45",

"3",

"1",

"1"])