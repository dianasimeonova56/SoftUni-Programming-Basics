function minNum(input) {
    let n = input[0];
    let min = Number.MAX_SAFE_INTEGER;
    let index = 1;

    while (n !== "Stop") {
        let num = Number(n);
        if(num < min) {
            min = num;
        }
        n = input[index];
        index++;
    }
    console.log(min);
}