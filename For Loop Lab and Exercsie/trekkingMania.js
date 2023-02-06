function trekkingMania(input) {
    let groupsNum = Number(input[0]);

    let musalaCount = 0;
    let monblanCount = 0;
    let kilimanjaroCount = 0;
    let k2Count = 0;
    let everestCount = 0;

    for (i = 1; i < input.length; i++) {
        let people = Number(input[i]);

        if (people <= 5){
            musalaCount+= people;
        } else if (people <= 12) {
            monblanCount+= people;
        } else if (people <= 25) {
            kilimanjaroCount+= people;
        } else if (people <= 40) {
            k2Count+= people;
        } else {
            everestCount+= people;
        }

    }


    
    console.log(`${(musalaCount / (musalaCount + monblanCount + kilimanjaroCount + k2Count + everestCount)*100).toFixed(2)}%`);
    console.log(`${(monblanCount / (musalaCount + monblanCount + kilimanjaroCount + k2Count + everestCount)*100).toFixed(2)}%`);
    console.log(`${(kilimanjaroCount / (musalaCount + monblanCount + kilimanjaroCount + k2Count + everestCount)*100).toFixed(2)}%`);
    console.log(`${(k2Count / (musalaCount + monblanCount + kilimanjaroCount + k2Count + everestCount)*100).toFixed(2)}%`);
    console.log(`${(everestCount / (musalaCount + monblanCount + kilimanjaroCount + k2Count + everestCount)*100).toFixed(2)}%`);
    
} trekkingMania(["5",

"25",

"41",

"31",

"250",

"6"])