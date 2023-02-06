function maxNum(input) {
    let n = input[0];
    let max = Number.MIN_SAFE_INTEGER;
    let index = 1;

    while (n !== "Stop") {
        let num = Number(n);
        if(num > max) {
            max = num;
        }
        n = input[index];
        index++;
    }
    console.log(max);
}