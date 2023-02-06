function magic(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let counter = 0;
    let isMagicNumm = false;
    for (let i = firstNum; i <= secondNum; i++) {
        for (let j = firstNum; j <= secondNum; j++) {
            counter++;
            if (i +j === magicNum) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNum})`);
                isMagicNumm = true;
                break;
            }
        }
        if (isMagicNumm) {
            break;
        }
    }
    if (isMagicNumm === false) {
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }
}