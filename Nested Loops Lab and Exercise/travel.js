function travel(input) {
    let index = 0;
    let destination = input[index];
    index++;
    let neededSum = Number(input[index]);
    index++;
    let sum = 0;
    let isEnd = false;

    while (destination !== "End") {
        while (neededSum > sum) {
            let savedMoney = input[index];
            if (savedMoney !== "End") {
                savedMoney = Number(input[index]);
            } else {
                isEnd = true;
                break;
            }
            index++;
            sum += savedMoney;
        }
        if (isEnd) {
            break;
        }
        console.log(`Going to ${destination}!`);
        
        destination = input[index];
        index++;
        neededSum = Number(input[index]);
        index++;
        sum = 0;
    }
}