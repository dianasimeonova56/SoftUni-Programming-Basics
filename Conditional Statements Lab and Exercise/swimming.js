function swimming(input) {
    let seconds = Number(input[0]);
    let metres = Number(input[1]);
    let oneMeter = Number(input[2]);

    let requiredDistance = metres * oneMeter;
    let fifteen = Math.floor((metres/15)) * 12.5;

    let totalTime = (requiredDistance + fifteen).toFixed(2);
    
    if (totalTime >= seconds) {
        let needed = (totalTime - seconds).toFixed(2);
        console.log(`No, he failed! He was ${needed} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${totalTime} seconds.`);
    }
} swimming(["55555.67",

"3017",

"5.03"]);